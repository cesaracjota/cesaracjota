import React from 'react';
import Home from '../components/Home/Home';
import Index from '../components/Layout/Index';

const HomePage = () => {
    return (
        <Index componente={<Home />} />
    )
}

export default HomePage