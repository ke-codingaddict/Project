import React from 'react';
import { MoreVertical } from 'lucide-react';
import Card from '../ui/Card';
import styles from './WalletsCard.module.css';

const WalletsCard = () => {
    const wallets = [
        { currency: 'USD', balance: '$22,678.00', limit: '$10k a month', status: 'Active', flag: 'us' },
        { currency: 'EUR', balance: '€18,345.00', limit: '€8k a month', status: 'Active', flag: 'eu' },
        { currency: 'GBP', balance: '£15,000.00', limit: '£7.5k a month', status: 'Inactive', flag: 'gb' },
    ];

    return (
        <Card>
            <div className={styles.header}>
                <h3 className={styles.title}>Wallets <span className={styles.subtitle}>| Total 6 wallets</span></h3>
            </div>

            <div className={styles.walletList}>
                {wallets.map((wallet, index) => (
                    <div key={index} className={styles.walletItem}>
                        <div className={styles.walletHeader}>
                            <div className={styles.flagWrapper}>
                                <img src={`https://flagcdn.com/w40/${wallet.flag}.png`} alt={wallet.currency} className={styles.flag} />
                                <span className={styles.currency}>{wallet.currency}</span>
                            </div>
                            <MoreVertical size={16} className={styles.moreIcon} />
                        </div>
                        <div className={styles.balance}>{wallet.balance}</div>
                        <div className={styles.limit}>Limit is {wallet.limit}</div>
                        <div className={`${styles.status} ${wallet.status === 'Inactive' ? styles.inactive : styles.active}`}>
                            {wallet.status}
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    );
};

export default WalletsCard;
