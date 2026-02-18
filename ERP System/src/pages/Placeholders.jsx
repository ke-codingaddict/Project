import React from 'react';
import { Card, Button } from '../components/ui/Core';

export const Dashboard = () => {
    return (
        <div className="flex flex-col gap-6 animate-fade-in">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="h2 text-primary" style={{ color: 'var(--text-primary)' }}>Dashboard</h1>
                    <p className="text-muted">Welcome back, here's what's happening today.</p>
                </div>
                <Button>Generate Report</Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
                <Card>
                    <h3 className="h5 text-muted">Total Projects</h3>
                    <div className="h1">12</div>
                </Card>
                <Card>
                    <h3 className="h5 text-muted">Active Tasks</h3>
                    <div className="h1">34</div>
                </Card>
                <Card>
                    <h3 className="h5 text-muted">Pending Invoices</h3>
                    <div className="h1">8</div>
                </Card>
            </div>
        </div>
    );
};

export const UsersList = () => {
    return (
        <div className="animate-fade-in">
            <h1 className="h2 mb-4">Users & Roles</h1>
            <Card>
                <p className="text-muted">User management table will go here.</p>
            </Card>
        </div>
    );
};

export const ProjectsList = () => {
    return (
        <div className="animate-fade-in">
            <h1 className="h2 mb-4">Projects</h1>
            <Card>
                <p className="text-muted">Project management list will go here.</p>
            </Card>
        </div>
    );
};
