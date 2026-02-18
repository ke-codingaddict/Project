import React from 'react';

export const Button = ({ children, variant = 'primary', className = '', ...props }) => {
    return (
        <button className={`btn btn-${variant} ${className}`} {...props}>
            {children}
        </button>
    );
};

export const Input = ({ className = '', ...props }) => {
    return (
        <input className={`input ${className}`} {...props} />
    );
};

export const Card = ({ children, className = '', ...props }) => {
    return (
        <div className={`card ${className}`} {...props}>
            {children}
        </div>
    );
};
