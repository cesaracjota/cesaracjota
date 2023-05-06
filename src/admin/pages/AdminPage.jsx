import React from 'react';
import Layout from '../components/layout/Layout';
import ContenidoAdmin from '../components/dashboard/Dashboard';

const AdminPage = () => {

    return (
        <Layout children={<ContenidoAdmin />}/>
    )
}

export default AdminPage;