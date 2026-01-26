import React from 'react';
import { Plus, Wifi } from 'lucide-react';
import Card from '../ui/Card';
import styles from './MyCards.module.css';

const MyCards = () => {
    return (
        <Card>
            <div className={styles.header}>
                <div className={styles.titleWrapper}>
                    <div className={styles.iconWrapper}>
                        <div className={styles.cardIconBox}></div>
                    </div>
                    <span className={styles.title}>My Cards</span>
                </div>
                <button className={styles.addBtn}>+ Add new</button>
            </div>

            <div className={styles.cardsScroll}>
                {/* Black Card */}
                <div className={styles.creditCard}>
                    <div className={styles.cardTop}>
                        <div className={styles.statusChip}>
                            <Wifi size={12} />
                            <span>Active</span>
                        </div>
                        <div className={styles.mastercardLogo}>
                            <div className={styles.c1}></div>
                            <div className={styles.c2}></div>
                        </div>
                    </div>

                    <div className={styles.cardFooter}>
                        <div className={styles.number}>
                            <span className={styles.label}>Card Number</span>
                            <div className={styles.val}>**** **** 6782</div>
                        </div>
                        <div className={styles.exp}>
                            <span className={styles.label}>EXP</span>
                            <div className={styles.val}>09/29</div>
                        </div>
                        <div className={styles.cvv}>
                            <span className={styles.label}>CVV</span>
                            <div className={styles.val}>611</div>
                        </div>
                    </div>
                </div>

                {/* Orange Card (Partially visible) */}
                <div className={`${styles.creditCard} ${styles.orangeCard}`}>
                    <div className={styles.cardTop}>
                        <div className={styles.statusChip}>
                            <Wifi size={12} />
                            <span>Active</span>
                        </div>
                    </div>

                    <div className={styles.cardFooter}>
                        <div className={styles.number}>
                            <span className={styles.label}>Card Number</span>
                            <div className={styles.val}>**** **** 4356</div>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default MyCards;
