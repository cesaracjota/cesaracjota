import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ProjectPage from '../pages/ProjectPage';
import './index.css';
import LoadingBar from 'react-top-loading-bar';
import { Loading } from '../components/configuration/Loading';
import BlogPage from '../pages/BlogPage';

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
        }, 800);

        const start = performance.now();

        const updateProgress = () => {
            if (isCancelled) {
                return;
            }

            const elapsed = performance.now() - start;

            const progress = elapsed / 800;

            if (progress > 1) {
                setProgress(progress);
                setLoading(false);
            } else {
                setProgress(progress * 100);
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
                    <div className="loader">
                        <Loading />
                    </div>
                </div>
            )}
            {
                !loading && (
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/projects" element={<ProjectPage />} />
                        <Route path="/blogs" element={<BlogPage />} />
                    </Routes>
                )
            }
        </>

    );
}