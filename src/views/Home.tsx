import { useState } from "react"
import Card from "../components/Card"
import Notification from "../components/Notification"

const Home = () => {
    const [notification, setNotification] = useState(false )
    setTimeout(() => {
        setNotification(true)
    }, 5000)
    return (
        <>
            
            <Card />
           
        </>
    )
}


export default Home