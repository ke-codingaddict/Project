import React from 'react';
import { Card, Button, Input } from '../components/ui/Core';

export const Login = () => {
    return (
        <div className="h-screen w-full flex items-center justify-center bg-background" style={{ backgroundColor: 'var(--background)' }}>
            <Card className="w-full max-w-md p-8">
                <div className="text-center mb-6">
                    <h1 className="h2" style={{ color: 'var(--primary)' }}>Nexus ERP</h1>
                    <p className="text-muted">Sign in to your account</p>
                </div>

                <form className="flex flex-col gap-4">
                    <div>
                        <label className="block text-sm font-medium mb-1 text-muted">Email</label>
                        <Input type="email" placeholder="you@company.com" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1 text-muted">Password</label>
                        <Input type="password" placeholder="••••••••" />
                    </div>
                    <Button className="w-full mt-2" style={{ width: '100%' }}>Sign In</Button>
                </form>
            </Card>
        </div>
    );
};
