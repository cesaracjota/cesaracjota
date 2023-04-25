import React from 'react'
import Layout from '../components/layout/Layout';
import Usuarios from '../components/usuarios/Usuarios';

const UsuarioPage = () => {
    return (
        <Layout children={<Usuarios />} />
    )
}

export default UsuarioPage