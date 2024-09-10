import Chat from "./Chat"
import Boton from "./Boton"
import Mapa from "./Mapa"
import React, { useEffect, useState } from "react"
import Notification from "./Notification"


const Card:React.FC = () => {
    const [selected, setSelected] = useState('')
    const [text, setText ] = useState('')
    const [notification, setNotification ] = useState(false)
 
    const handleSelected = (text: string) => {
        if (text.length > 0) {
            setSelected(text);
            handleMenu(text); // Use the new text value
            setNotification(false);
        }
    };

    useEffect(() => {
        handleSelected(text);
    }, [text]);

    const handleMenu = (menu:string ) => {
        console.log(menu)
        switch (menu) {
            case "map":
                setSelected(menu)
            break
            case "video":
                setSelected(menu)
            break
            case "microphone":
                setSelected(menu)
            break
            case "chat":
                setSelected(menu)
                break
            case "settings":
                setSelected(menu)
                break
            default:
                setText('Opción no valida por favor ingresa una ')
                setNotification(true)
                setTimeout(()=>{
                    setNotification(false )
                },5000)
            break
        }

    }
    return (
        <>
            <div className=" w-5/6">
                
               {notification && <Notification text={text}></Notification>}
                <Boton handleSelected={handleSelected} />
                {
                    selected == "map" ?
                    <Mapa/>:
                    selected == "chat"?
                    <Chat/> :
                    !selected &&
                    <Notification text="No existe la vista"/>
                   

                }


            </div>

        </>
    )
}

export default Card