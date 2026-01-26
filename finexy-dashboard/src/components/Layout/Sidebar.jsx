import React from 'react';
import { LayoutGrid, Calendar, Mail, FileText, Users, Layers, Settings, HelpCircle, LogOut } from 'lucide-react';
import styles from './Sidebar.module.css';

const Sidebar = () => {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.logo}>
                <div className={styles.logoIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="white" />
                        <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                {/* Logo text is hidden in collapsed view or just icon */}
            </div>

            <nav className={styles.nav}>
                <a href="#" className={`${styles.navItem} ${styles.active}`}>
                    <LayoutGrid size={22} />
                </a>
                <a href="#" className={styles.navItem}>
                    <Calendar size={22} />
                </a>
                <a href="#" className={styles.navItem}>
                    <Mail size={22} />
                </a>
                <a href="#" className={styles.navItem}>
                    <FileText size={22} />
                </a>
                <a href="#" className={styles.navItem}>
                    <Users size={22} />
                </a>
                <a href="#" className={styles.navItem}>
                    <Layers size={22} />
                </a>
                <a href="#" className={styles.navItem}>
                    <Settings size={22} />
                </a>
            </nav>

            <div className={styles.footer}>
                <button className={styles.navItem}>
                    <HelpCircle size={22} />
                </button>
                <button className={styles.navItem}>
                    <LogOut size={22} />
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
