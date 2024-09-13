import { useEffect, useState } from "react";
import {
  FaRegComment
} from 'react-icons/fa';
interface NotificationProps {
  text: string;
  type: string;
}
const Notification: React.FC<NotificationProps> = ({ text, type }) => {
  const [icon, setIcon] = useState(type || '')
  const [color, setColor] = useState(type || '')

  const handleColor = (type: string) => {
    switch (type) {
      case 'error':
        setColor("red")
        break;
      case 'info':
        setColor('blue')
        break;
      case 'warn':
        setColor('yellow')
        break;
      case 'succes':
        setColor('green')
        break;
      default:
        console.log(`Sorry, we are out of ${type}.`);
    }
  }

  useEffect(() => {
    handleColor(type)
  }, [type])


  return (

    <div id="notification"  className={`flex items-center w-full max-w-xs p-4 text-white-500 rounded-lg shadow bg-${color}-600 `} role="alert">
      <div className={`inline-flex items-center justify-center flex-shrink-0 w-8 h-8 bg-${color}-600 bg-blue-100 rounded-lg dark:bg-${color}-800 dark:text-${color}-200 text-md`}>
      </div>
      <div className="ms-3 text-sm   text-white font-bold">{text}</div>
    
    </div>


  )
}


export default Notification


