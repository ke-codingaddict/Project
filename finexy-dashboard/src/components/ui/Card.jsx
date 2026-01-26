import React from 'react';
import styles from './Card.module.css';

const Card = ({ children, className = '', noPadding = false }) => {
    return (
        <div className={`${styles.card} ${noPadding ? styles.noPadding : ''} ${className}`}>
            {children}
        </div>
    );
};

export default Card;
