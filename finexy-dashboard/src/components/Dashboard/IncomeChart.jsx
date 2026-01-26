import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import Card from '../ui/Card';
import styles from './IncomeChart.module.css';
import { useTheme } from '../../context/ThemeContext';

const data = [
    { name: 'Jan', profit: 20000, loss: 12000 },
    { name: 'Feb', profit: 35000, loss: 15000 },
    { name: 'Mar', profit: 25000, loss: 18000 },
    { name: 'Apr', profit: 42000, loss: 20000 },
    { name: 'May', profit: 30000, loss: 10000 },
    { name: 'Jun', profit: 50000, loss: 30000 },
    { name: 'Jul', profit: 35000, loss: 15000 },
    { name: 'Aug', profit: 25000, loss: 8000 },
];

const IncomeChart = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    const profitColor = isDark ? '#ffffff' : '#1a1a1a';
    const axisColor = isDark ? '#a0a0a0' : '#888888';
    const tooltipStyle = {
        backgroundColor: isDark ? '#1e1e1e' : '#ffffff',
        borderColor: isDark ? '#333333' : '#f0f0f0',
        color: isDark ? '#ffffff' : '#1a1a1a',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
    };

    return (
        <Card className={styles.chartCard}>
            <div className={styles.header}>
                <div>
                    <h3 className={styles.title}>Total Income</h3>
                    <p className={styles.subtitle}>View your income in a certain period of time</p>
                </div>
            </div>

            <div className={styles.chartContainer}>
                <ResponsiveContainer width="100%" height={260}>
                    <BarChart data={data} barGap={8}>
                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 12, fill: axisColor }}
                            dy={10}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 12, fill: axisColor }}
                            tickFormatter={(value) => `${value / 1000}k`}
                        />
                        <Tooltip
                            contentStyle={tooltipStyle}
                            itemStyle={{ color: isDark ? '#e0e0e0' : '#1a1a1a' }}
                            cursor={{ fill: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)' }}
                        />
                        <Legend
                            verticalAlign="top"
                            height={36}
                            align="right"
                            iconType="circle"
                            formatter={(value) => <span style={{ color: isDark ? '#ccc' : '#666' }}>{value}</span>}
                        />
                        <Bar
                            dataKey="profit"
                            fill={profitColor}
                            radius={[4, 4, 4, 4]}
                            barSize={12}
                            name="Profit"
                        />
                        <Bar
                            dataKey="loss"
                            fill="#FF5722"
                            radius={[4, 4, 4, 4]}
                            barSize={12}
                            name="Loss"
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </Card>
    );
};

export default IncomeChart;
