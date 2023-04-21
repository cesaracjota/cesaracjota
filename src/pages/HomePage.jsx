import React from 'react';
import Home from '../components/home/Home';
import Index from '../components/layout/Index';

const HomePage = () => {
    return (
        <>
            <Index componente={<Home />} />
        </>
    )
}

export default HomePage