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
            {!notification &&
                <Notification type={"succes"} text={"Bienvenido "} />
            }
            <Card />
        </>
    )
}


export default Home