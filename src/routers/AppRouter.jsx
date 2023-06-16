import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ProjectPage from '../pages/ProjectPage';
import BlogPage from '../pages/BlogPage';
import NotFoundPage from '../pages/NotFoundPage';
import PrivateRoutes from './PrivateRoutes';
import PublicRoute from './PublicRoute';
import UsuarioPage from '../admin/pages/UsuarioPage';
import CalendarioPage from '../admin/pages/CalendarioPage';
import ArchivosPage from '../admin/pages/ArchivosPage';
import ConfiguracionPage from '../admin/pages/ConfiguracionPage';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import AdminPage from '../admin/pages/AdminPage';
import LoginPage from '../pages/auth/Login';
import CertificadoPage from '../admin/pages/CertificadoPage';
import './index.css';
import MensajePage from '../admin/pages/MensajePage';
import TechSkillsPage from '../admin/pages/TechSkillsPage';

export const AppRouter = () => {

    return (
        <>
            <Routes>
                <Route element={<PrivateRoutes />} >
                    <Route path="/admin/dashboard" element={<AdminPage />} />
                    <Route path="/admin/usuarios" element={<UsuarioPage />} />
                    <Route path="/admin/calendario" element={<CalendarioPage />} />
                    <Route path="/admin/configuracion" element={<ConfiguracionPage />} />
                    <Route path="/admin/archivos" element={<ArchivosPage />} />
                    <Route path="/admin/certificados" element={<CertificadoPage />} />
                    <Route path="/admin/mensajes" element={<MensajePage />} />
                    <Route path="/admin/techskills" element={<TechSkillsPage />} />
                </Route>
                <Route element={<PublicRoute />}>
                    <Route path="/auth/login" element={<LoginPage />} />
                </Route>
                <Route path="/" element={<HomePage />} />
                <Route path="/projects" element={<ProjectPage />} />
                <Route path="/blogs" element={<BlogPage />} />
                <Route path="/about-me" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </>
    );
}