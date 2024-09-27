import React from 'react'

interface IconsMenuPros {
    url: string;
    alt: string;
    span?: string;
    name: string
}

const IconsMenu: React.FC<IconsMenuPros> = ({ url, alt, span, name }) => {
    
    return (
        <div className={span}>
            <img
                src={url}
                className="w-24 p-2 hover:bg-slate-800 cursor-pointer rounded-full dark:hover:bg-gray-200"
                alt={alt}
            />
            <p className='text-white font-medium  flex justify-center items-center'>
                {name}
            </p>
        </div>
    )
}

export default IconsMenu