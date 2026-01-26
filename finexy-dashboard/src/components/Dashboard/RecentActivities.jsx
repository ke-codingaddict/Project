import React from 'react';
import { Search, Filter, MoreHorizontal, ShoppingCart, Home, Plane, Package, Command } from 'lucide-react';
import Card from '../ui/Card';
import styles from './RecentActivities.module.css';

const RecentActivities = () => {
    const activities = [
        { id: 'INV_000076', name: 'Mobile App Purchase', icon: Command, price: '$25,500', status: 'Completed', date: '17 Apr, 2026 03:45 PM', color: '#2196F3' },
        { id: 'INV_000075', name: 'Hotel Booking', icon: Home, price: '$32,750', status: 'Pending', date: '15 Apr, 2026 11:30 AM', color: '#3F51B5' },
        { id: 'INV_000074', name: 'Flight Ticket Booking', icon: Plane, price: '$40,200', status: 'Completed', date: '15 Apr, 2026 12:00 PM', color: '#03A9F4' },
        { id: 'INV_000073', name: 'Grocery Purchase', icon: ShoppingCart, price: '$50,200', status: 'In Progress', date: '14 Apr, 2026 09:15 PM', color: '#FF9800' },
        { id: 'INV_000073', name: 'Software License', icon: Package, price: '$15,900', status: 'Completed', date: '10 Apr, 2026 06:00 AM', color: '#F44336' },
    ];

    return (
        <Card className={styles.container}>
            <div className={styles.header}>
                <h3 className={styles.title}>Recent Activities</h3>
                <div className={styles.controls}>
                    <div className={styles.searchBox}>
                        <Search size={16} className={styles.searchIcon} />
                        <input type="text" placeholder="Search" className={styles.searchInput} />
                    </div>
                    <button className={styles.filterBtn}>
                        <span>Filter</span>
                        <Filter size={16} />
                    </button>
                </div>
            </div>

            <table className={styles.table}>
                <thead>
                    <tr>
                        <th style={{ width: 30 }}><input type="checkbox" /></th>
                        <th>Order ID</th>
                        <th>Activity</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Date</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {activities.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <tr key={idx}>
                                <td><input type="checkbox" checked={idx === 3} readOnly /></td>
                                <td className={styles.orderId}>{item.id}</td>
                                <td>
                                    <div className={styles.activityCell}>
                                        <div className={styles.iconBox} style={{ color: item.color }}>
                                            <Icon size={16} />
                                        </div>
                                        <span>{item.name}</span>
                                    </div>
                                </td>
                                <td className={styles.price}>{item.price}</td>
                                <td>
                                    <div className={styles.statusIndicator}>
                                        <div
                                            className={styles.dot}
                                            style={{ background: item.status === 'Completed' ? '#4CAF50' : item.status === 'Pending' ? '#F44336' : '#FFC107' }}
                                        ></div>
                                        <span style={{
                                            color: item.status === 'Completed' ? '#4CAF50' : item.status === 'Pending' ? '#F44336' : '#FFC107',
                                            fontWeight: 600
                                        }}>{item.status}</span>
                                    </div>
                                </td>
                                <td className={styles.date}>{item.date}</td>
                                <td><MoreHorizontal size={16} className={styles.moreIcon} /></td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </Card>
    );
};

export default RecentActivities;
