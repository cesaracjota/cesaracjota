import React from 'react'
import Layout from '../components/layout/Layout'
import Archivos from '../components/archivos/Archivos'

const ArchivosPage = () => {
  return (
    <Layout children={<Archivos />} />
  )
}

export default ArchivosPage