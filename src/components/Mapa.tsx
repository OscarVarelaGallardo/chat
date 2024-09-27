import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import Marcador from './Marcador';

const Mapa: React.FC = () => {
    const [myUbication, setMyUbication] = useState<{ lat: number, lng: number } | null>(null);

    const handleGetMyUbication = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            setMyUbication({ lat: latitude, lng: longitude });
        });
    };

    useEffect(() => {
        if (myUbication) {
            console.log(myUbication);
        }
    }, [myUbication]);

  
    return (
        <>
            <div className='w-full h-auto'>
                <h1 className="text-2xl font-semibold text-green-600 dark:text-white">Ubicación</h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">Selecciona la ubicación de tu evento</p>

                <input
                    type="text"
                    placeholder="Buscar ubicación"
                    className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2"                />
                <button
                    className="bg-green-600 text-white rounded-lg p-2.5 my-2 text-sm w-full dark:bg-green-700"
                    onClick={handleGetMyUbication}
                >
                    Usar mi ubicación
                </button>

                <div style={{ height: '400px', width: '100%' }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: import.meta.env.VITE_GOOGLE_MAPS_API_KEY }}
                        defaultCenter={{ lat: 0, lng: 0 }}
                        defaultZoom={15}
                        center={myUbication || { lat: 0, lng: 0 }}
                    >
                     {/*    {
                           myUbication && <Marcador lat={myUbication.lat} lng={myUbication.lng} />
                        } */}
                    </GoogleMapReact>
                </div>
            </div>
        </>
    );
};

export default Mapa;