import React from 'react';
import Card from '../ui/Card';
import styles from './SpendingLimitCard.module.css';

const SpendingLimitCard = () => {
    return (
        <Card>
            <h3 className={styles.title}>Monthly Spending Limit</h3>

            <div className={styles.progressContainer}>
                <div className={styles.progressBar}>
                    <div className={styles.progressFill} style={{ width: '25%' }}></div>
                </div>
            </div>

            <div className={styles.labels}>
                <span className={styles.current}>$1,400.00 <span className={styles.muted}>spent out of</span></span>
                <span className={styles.limit}>$5,500.00</span>
            </div>
        </Card>
    );
};

export default SpendingLimitCard;
