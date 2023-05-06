import React from 'react';
import Inicio from '../components/Inicio/Inicio';
import Layout from '../components/Index/Layout';

const HomePage = () => {
    return (
        <Layout componente={<Inicio />} />
    )
}

export default HomePage