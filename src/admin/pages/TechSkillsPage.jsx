import React from 'react';
import Layout from '../components/layout/Layout';
import TechSkills from '../components/techskills/TechSkills';

const TechSkillsPage = () => {
    return (
        <Layout children={<TechSkills />} />
    )
}

export default TechSkillsPage