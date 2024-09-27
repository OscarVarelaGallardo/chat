import IconsMenu from "../components/IconsMenu"
import { icons } from "../helpers/index"
const MainView = () => {
  return (

    <div className="grid grid-cols-3 w-full gap-24 border p-6 rounded-lg justify-items-center items-center">
      {icons.map((icon) => {
        const { alt, url, span, name } = icon
        return <IconsMenu key={alt} url={url} alt={alt} span={span} name={name} />
      })}
    </div>


  )
}

export default MainView