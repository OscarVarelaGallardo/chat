import { useNavigate, Link } from 'react-router-dom';
import React, { useState } from 'react';
import { login } from '../apis/login'
import Notification from '../components/Notification';
import img from '../img/videoChat.png'


interface LoginProps {
    email: string;
    password: string;

}

const Login: React.FC<LoginProps> = () => {
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [error, setError] = useState(false)
    const [text, setText] = useState('')
    const [type, setType] = useState('')
    const navigate = useNavigate();


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (password.length == 0 || email.length == 0) {
            setError(true)
            setText('No se pueden enviar valores vacios')
            setType('info')
            setTimeout(() => {
                setError(false)
                setText('')
            }, 2000)
            return
        }

        if (password.length > 0 || email.length > 0) {
            const response = await login({ email, password });
            console.log(response)
            if (response.error) {
                console.error('Error:', response.error);
                setError(true)
                setText("Usuario no registrado")
                setType('error')
                setTimeout(() => {
                    setError(false)
                    setText('')
                }, 2000)
            } else {
                navigate('/home')
            }
        }

    }

    return (
        <div className='flex flex-col'>  
            <div className='flex items-center h-auto  justify-center'>
            <img src={img} className='h-64 w-64'/>
            </div>
            <form className="w-2/4 mx-auto py-8" onSubmit={handleSubmit} >
                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tu correo electronico</label>
                    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="correo@correo.com"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tu contraseña</label>
                    <input type="password" id="password"
                        placeholder='********'
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >Inciar sesión</button>
                <div className="flex space-x-8  mt-10 justify-evenly   text-white">

                    <Link to={'Olvide'} className='text-sm'>Olvide mi contraseña</Link>
                    <Link to={'Registrarme'} className='text-sm'>Registrarme </Link>
                </div>
            </form>

            {error && <Notification text={text} type={type} ></Notification>}

        </div>
    )
}

export default Login