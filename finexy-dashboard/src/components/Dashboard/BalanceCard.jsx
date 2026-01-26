import React from 'react';
import { ArrowUpRight, ArrowDownLeft, ChevronDown } from 'lucide-react';
import Card from '../ui/Card';
import styles from './BalanceCard.module.css';

const BalanceCard = () => {
    return (
        <Card>
            <div className={styles.header}>
                <span className={styles.label}>Total Balance</span>
                <div className={styles.currencySelector}>
                    <img src="https://flagcdn.com/w20/us.png" alt="US" className={styles.flag} />
                    <span>USD</span>
                    <ChevronDown size={14} />
                </div>
            </div>

            <div className={styles.amount}>$689,372.00</div>

            <div className={styles.trend}>
                <span className={styles.trendIcon}>↑</span>
                <span className={styles.trendValue}>5%</span>
                <span className={styles.trendLabel}>than last month</span>
            </div>

            <div className={styles.actions}>
                <button className={`${styles.btn} ${styles.btnDark}`}>
                    <ArrowUpRight size={18} />
                    <span>Transfer</span>
                </button>
                <button className={`${styles.btn} ${styles.btnLight}`}>
                    <ArrowDownLeft size={18} />
                    <span>Request</span>
                </button>
            </div>
        </Card>
    );
};

export default BalanceCard;
