import React from 'react';
import Index from '../components/Layout/Index';
import Inicio from '../components/Inicio/Inicio';

const HomePage = () => {
    return (
        <Index componente={<Inicio />} />
    )
}

export default HomePage