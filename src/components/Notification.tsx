interface NotificationProps {
  text: string;
}
const Notification:React.FC<NotificationProps>  = ({text} ) => {

  
  return (
    <div className="flex w-full h-auto bg-indigo-600 p-4 my-4 rounded-md">
        <p className="text-white">
            {text}
        </p>


    </div>
  )
}


export default Notification