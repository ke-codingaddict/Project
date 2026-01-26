import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import Card from '../ui/Card';
import styles from './IncomeChart.module.css';

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
                            tick={{ fontSize: 12, fill: '#aaa' }}
                            dy={10}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 12, fill: '#aaa' }}
                            tickFormatter={(value) => `${value / 1000}k`}
                        />
                        <Tooltip />
                        <Legend
                            verticalAlign="top"
                            height={36}
                            align="right"
                            iconType="circle"
                        />
                        <Bar
                            dataKey="profit"
                            fill="#1a1a1a"
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
