import React from 'react';
import { ShoppingBag, Lock, Coins, User } from 'lucide-react';
import Card from '../ui/Card';
import styles from './StatsGrid.module.css';

const StatCard = ({ title, amount, trend, trendValue, icon: Icon, variant = 'white' }) => {
    return (
        <div className={`${styles.statCard} ${styles[variant]}`}>
            <div className={styles.topRow}>
                <span className={styles.title}>{title}</span>
                <div className={styles.iconCircle}>
                    <Icon size={16} />
                </div>
            </div>
            <div className={styles.amount}>{amount}</div>
            <div className={styles.trendRow}>
                <span className={styles.trendArrow}>{trend === 'up' ? '↑' : '↓'}</span>
                <span className={styles.trendValue}>{trendValue}</span>
                <span className={styles.period}>This month</span>
            </div>
        </div>
    );
};

const StatsGrid = () => {
    return (
        <div className={styles.grid}>
            <StatCard
                title="Total Earnings"
                amount="$950"
                trend="up"
                trendValue="7%"
                icon={ShoppingBag}
                variant="orange"
            />
            <StatCard
                title="Total Spending"
                amount="$700"
                trend="down"
                trendValue="5%"
                icon={Lock}
            />
            <StatCard
                title="Total Income"
                amount="$1,050"
                trend="up"
                trendValue="8%"
                icon={Coins}
            />
            <StatCard
                title="Total Revenue"
                amount="$850"
                trend="up"
                trendValue="4%"
                icon={User}
            />
        </div>
    );
};

export default StatsGrid;
