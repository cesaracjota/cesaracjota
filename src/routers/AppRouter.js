import React from 'react';

import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/home/HomePage';

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
        </Routes>
    );
}