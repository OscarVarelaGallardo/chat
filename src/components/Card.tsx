import Chat from "./Chat"
import AnyReactComponent from "./AnyReactComponent"
const Card = () => {
    return (
        <>
            <a href="#" className="block max-w-md p-8 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <AnyReactComponent />
                <Chat  />
            </a>
        </>
    )
}

export default Card