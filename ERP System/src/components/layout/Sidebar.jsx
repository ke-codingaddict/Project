import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Users, FolderKanban, Receipt, Settings, FileText } from 'lucide-react';

const NavItem = ({ to, icon: Icon, label }) => (
    <NavLink
        to={to}
        className={({ isActive }) =>
            `flex items-center gap-2 p-3 rounded-md transition-colors ${isActive
                ? 'bg-primary/10 text-primary font-medium' // Note: utilizing vanilla CSS var hook if possible or fallback class
                : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'
            }`
        }
        style={({ isActive }) =>
            isActive ? { backgroundColor: 'hsla(var(--primary-h), var(--primary-s), var(--primary-l), 0.1)', color: 'var(--primary)' } : {}
        }
    >
        <Icon size={20} />
        <span>{label}</span>
    </NavLink>
);

export const Sidebar = () => {
    return (
        <aside className="w-64 h-screen border-r border-gray-200 bg-white flex flex-col" style={{ borderColor: '#e2e8f0', backgroundColor: 'var(--surface)' }}>
            <div className="p-6 border-b border-gray-100">
                <h1 className="h4 text-primary" style={{ color: 'var(--primary)' }}>Nexus ERP</h1>
            </div>

            <nav className="flex-1 overflow-y-auto p-4 flex flex-col gap-1">
                <NavItem to="/" icon={LayoutDashboard} label="Dashboard" />

                <div className="mt-4 mb-2 px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Operations</div>
                <NavItem to="/projects" icon={FolderKanban} label="Projects" />
                <NavItem to="/services" icon={FileText} label="Services" />

                <div className="mt-4 mb-2 px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Management</div>
                <NavItem to="/users" icon={Users} label="Users & Roles" />
                <NavItem to="/finance" icon={Receipt} label="Finance" />

                <div className="mt-auto"></div>
                <NavItem to="/settings" icon={Settings} label="Settings" />
            </nav>

            <div className="p-4 border-t border-gray-100">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-600">
                        JD
                    </div>
                    <div className="flex-1">
                        <div className="text-sm font-medium">John Doe</div>
                        <div className="text-xs text-muted">Admin</div>
                    </div>
                </div>
            </div>
        </aside>
    );
};
