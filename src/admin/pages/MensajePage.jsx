import React from 'react'
import Layout from '../components/layout/Layout'
import Mensajes from '../components/mensajes/Mensajes'

const MensajePage = () => {
  return (
    <Layout children={<Mensajes />} />
  )
}

export default MensajePage