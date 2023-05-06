import React from 'react'
import Layout from '../components/layout/Layout'
import Certificados from '../components/certificados/Certificados'

const CertificadoPage = () => {
    return (
        <Layout children={<Certificados />} />
    )
}

export default CertificadoPage