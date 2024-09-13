// Marcador.tsx
import React from 'react';




const Marcador: React.FC = () => {

    return (
        <div style={{
            color: 'red',
            background: 'white',
            borderRadius: '50%',
            padding: '10px',
            display: 'inline-flex',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            transform: 'translate(-50%, -50%)'
        }}>
            📍 
        </div>
    );
};

export default Marcador;