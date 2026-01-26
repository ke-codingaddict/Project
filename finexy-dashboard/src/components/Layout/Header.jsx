import React from 'react';
import { Search, Bell, Info } from 'lucide-react';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.brand}>
                <div className={styles.logoText}>Finexy</div>
            </div>

            <nav className={styles.pills}>
                <button className={`${styles.pill} ${styles.active}`}>Overview</button>
                <button className={styles.pill}>Activity</button>
                <button className={styles.pill}>Manage</button>
                <button className={styles.pill}>Program</button>
                <button className={styles.pill}>Account</button>
                <button className={styles.pill}>Reports</button>
            </nav>

            <div className={styles.actions}>
                <div className={styles.search}>
                    <Search size={20} />
                </div>
                <div className={styles.iconBtn}>
                    <Bell size={20} />
                </div>
                <div className={styles.iconBtn}>
                    <Info size={20} />
                </div>
                <div className={styles.profile}>
                    <img src="https://i.pravatar.cc/100?img=11" alt="Profile" className={styles.avatar} />
                    <div className={styles.profileInfo}>
                        <div className={styles.name}>Sajibur Rahman</div>
                        <div className={styles.email}>sajibur.rahman@gm...</div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
