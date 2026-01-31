import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LogOut } from 'lucide-react';
import Logo from '../assets/ase-white-logo.png';
import { authClient } from '../lib/auth';

const AdminNavbar: React.FC = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        await authClient.signOut();
        navigate('/admin');
    };

    return (
        <nav className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <img src={Logo} alt="ASE" className="h-8 w-auto" />
                    <span className="text-sm font-medium text-slate-400 border-l border-white/10 pl-4 py-1">Admin Console</span>
                </div>
                <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors hover:bg-white/5 py-2 px-4 rounded-lg"
                >
                    <LogOut size={16} />
                    Logout
                </button>
            </div>
        </nav>
    );
};

export default AdminNavbar;
