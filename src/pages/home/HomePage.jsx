import React from 'react';
import Index from '../../components/layouts/Index';
import Home from '../../components/ui/Home';

const HomePage = () => {
  return (
    <Index component={<Home />} />
  )
}

export default HomePage;