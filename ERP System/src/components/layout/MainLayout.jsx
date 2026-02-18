import React from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';

export const MainLayout = () => {
    return (
        <div className="flex w-full h-screen overflow-hidden bg-background" style={{ backgroundColor: 'var(--background)' }}>
            <Sidebar />
            <main className="flex-1 overflow-y-auto p-8 relative">
                <Outlet />
            </main>
        </div>
    );
};
