import React from 'react'
import { Divider } from '@chakra-ui/react'
import Blog from '../Blog/Blog'
import Contenido from './Contenido'

const Inicio = () => {
    return (
        <>
            <Contenido />
            <Divider />
            <Blog />
        </>
    )
}

export default Inicio