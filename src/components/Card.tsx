import Chat from "./Chat"
import Layouta from "./Layout"
import Mapa from "./Mapa"
import VideoChat from "./VideoChat"
import React, { useEffect, useState } from "react"
import Notification from "./Notification"
import MainView from "../views/MainView"



const Card: React.FC = () => {
    const [selected, setSelected] = useState('')
    const [text, setText] = useState('')
    const [notification, setNotification] = useState(false)

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

    const handleMenu = (menu: string) => {
        switch (menu) {
            case "home":
                setSelected(menu)
                break
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
                setTimeout(() => {
                    setNotification(false)
                }, 5000)
                break
        }

    }
    return (
        <>
            <div className=" w-6/6">

                {notification && <Notification type="info" text={text}></Notification>}
                <Layouta handleSelected={handleSelected} />

                {

                    selected == "home" ?
                        <MainView/>:
                        selected == "map" ?
                            <Mapa /> :
                            selected=="video"?
                                <VideoChat/>:
                            selected == "chat" ?
                                <Chat /> :
                                selected == "MainView" ?
                                    < MainView /> :
                                    !selected && <MainView />

                }


            </div>

        </>
    )
}

export default Card