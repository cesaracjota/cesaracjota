import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ProjectPage from '../pages/ProjectPage';
import './index.css';
import LoadingBar from 'react-top-loading-bar';
// import { Loading } from '../components/configuration/Loading';
import BlogPage from '../pages/BlogPage';
import NotFoundPage from '../pages/NotFoundPage';
import PrivateRoutes from './PrivateRoutes';
import PublicRoute from './PublicRoute';
import AdminPage from '../pages/admin/pages/DashboardPage';
import LoginPage from '../pages/auth/Login';
import UsuarioPage from '../pages/admin/pages/UsuarioPage';
import CalendarioPage from '../pages/admin/pages/CalendarioPage';
import ArchivosPage from '../pages/admin/pages/ArchivosPage';
import ConfiguracionPage from '../pages/admin/pages/ConfiguracionPage';

export const AppRouter = () => {

    const [loading, setLoading] = useState(false);
    const location = useLocation();
    const [progress, setProgress] = useState(0);
    const barColor = "#645CAA";

    useEffect(() => {

        setLoading(true);
        let isCancelled = false;

        const timeoutId = setTimeout(() => {
            setLoading(false);
        }, 1000);

        const start = performance.now();

        const updateProgress = () => {
            if (isCancelled) {
                return;
            }

            const elapsed = performance.now() - start;

            const progress = elapsed / 1000;

            if (progress > 1) {
                setProgress(progress);
                setLoading(false);
            } else {
                setProgress(progress * 900);
            }
        };

        const progressIntervalId = setInterval(updateProgress, 100);

        return () => {
            isCancelled = true;
            clearTimeout(timeoutId);
            clearInterval(progressIntervalId);
            setLoading(false);
            setProgress(0);
        };

    }, [location.pathname]);

    return (
        <>
            {loading && (
                <div className="loader-container">
                    <LoadingBar
                        color={barColor}
                        progress={progress}
                        height={5}
                        onLoaderFinished={() => setProgress(0)}
                    />
                    {/* <div className="loader">
                        <Loading />
                    </div> */}
                </div>
            )}
            {/* {
                !loading && (
                )
            } */}
            <Routes>
                <Route element={<PrivateRoutes />} >
                    <Route path="/admin/dashboard" element={<AdminPage />} />
                    <Route path="/admin/usuarios" element={<UsuarioPage />} />
                    <Route path="/admin/calendario" element={<CalendarioPage />} />
                    <Route path="/admin/configuracion" element={<ConfiguracionPage />} />
                    <Route path="/admin/archivos" element={<ArchivosPage />} />
                </Route>
                <Route element={<PublicRoute />}>
                    <Route path="/auth/login" element={<LoginPage />} />
                </Route>
                <Route path="/" element={<HomePage />} />
                <Route path="/projects" element={<ProjectPage />} />
                <Route path="/blogs" element={<BlogPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </>
    );
}