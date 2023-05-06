import React from 'react'
import Layout from '../components/layout/Layout'
import Calendario from '../components/calendario/Calendario'

const CalendarioPage = () => {
  return (
    <Layout children={<Calendario />} />
  )
}

export default CalendarioPage