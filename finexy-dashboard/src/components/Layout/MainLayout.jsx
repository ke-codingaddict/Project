import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import styles from './MainLayout.module.css';

const MainLayout = ({ children }) => {
    return (
        <div className={styles.container || 'fallback-container'}>
            <div className={styles.mainWrapper}>
                <Header />
                <div className={styles.contentArea}>
                    <Sidebar />
                    <main className={styles.main}>
                        {children}
                    </main>
                </div>
            </div>
        </div>
    );
};

export default MainLayout;
