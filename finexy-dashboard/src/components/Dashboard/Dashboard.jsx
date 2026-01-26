import React from 'react';
import BalanceCard from './BalanceCard';
import WalletsCard from './WalletsCard';
import SpendingLimitCard from './SpendingLimitCard';
import MyCards from './MyCards';
import StatsGrid from './StatsGrid';
import IncomeChart from './IncomeChart';
import RecentActivities from './RecentActivities';
import styles from './Dashboard.module.css';

const Dashboard = () => {
    return (
        <div className={styles.dashboard}>
            <div className={styles.welcomeSection}>
                <div>
                    <h1 className={styles.greeting}>Good morning, Sajibur</h1>
                    <p className={styles.subtitle}>Stay on top of your tasks, monitor progress, and track status.</p>
                </div>
            </div>

            <div className={styles.layout}>
                {/* Left Column Stack */}
                <div className={styles.leftColumn}>
                    <BalanceCard />
                    <WalletsCard />
                    <SpendingLimitCard />
                    <MyCards />
                </div>

                {/* Right Main Area */}
                <div className={styles.rightArea}>
                    <div className={styles.topStatsRow}>
                        <div className={styles.statsWrapper}>
                            <StatsGrid />
                        </div>
                        <div className={styles.chartWrapper}>
                            <IncomeChart />
                        </div>
                    </div>

                    <div className={styles.activitiesWrapper}>
                        <RecentActivities />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
