
import GoogleMapReact from 'google-map-react';
import Boton from './Boton';

import { useEffect, useState } from 'react';
interface AnyReactComponentProps {
    text: string;
    lat: number;
    lng: number;
}

const AnyReactComponent: React.FC<AnyReactComponentProps> = ({ text }) => <div>{text}</div>;

export default function SimpleMap() {
    const [myUbication, setMyUbication] = useState<any>(null);
    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627
        },
        zoom: 11
    };

    useEffect(() => {

        navigator.geolocation.getCurrentPosition((position) => {
            setMyUbication({
                lat: position.coords.latitude,
                lng: position.coords.longitude
            });
        });

    }, []);
    const handleUbication = (e: any) => {
        console.log(e.target.value);



    }

    return (
        <>
            <div style={{ height: '50vh', width: '100%', marginBottom: '110px' }}>
                <h1 className="text-2xl font-semibold text-gray-900 dark:text-white ">Ubicación</h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">Selecciona la ubicación de tu evento</p>

                <input type="text" placeholder="Buscar ubicación" className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2"
                    onChange={handleUbication}
                />

                <GoogleMapReact
                    bootstrapURLKeys={{ key: "" }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                >
                    <AnyReactComponent
                        lat={myUbication?.lat}
                        lng={myUbication?.lng}
                        text="My Marker"
                    />
                </GoogleMapReact>
            </div>
            <Boton />
        </>

    );
}