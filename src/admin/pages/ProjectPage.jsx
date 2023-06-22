import React from 'react';
import Layout from '../components/layout/Layout';
import { Projects } from '../components/projects/Projects';

const ProjectAdminPage = () => {
    return (
        <Layout children={<Projects />} />
    )
}

export default ProjectAdminPage