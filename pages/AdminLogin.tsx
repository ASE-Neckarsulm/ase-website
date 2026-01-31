import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';
import { Lock, ArrowRight, Loader2 } from 'lucide-react';
import Logo from '../assets/ase-white-logo.png';
import { authClient } from '../lib/auth';

const AdminLogin: React.FC = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const { error } = await authClient.signIn.email({
                email,
                password
            });

            if (error) {
                setError(error.message);
                setLoading(false);
                return;
            }

            // Success
            navigate('/admin/dashboard');
        } catch (err) {
            setError('An unexpected error occurred.');
            setLoading(false);
        }
    };

    return (
        <div className="w-full min-h-[60vh] flex flex-col items-center justify-center p-6 relative py-32">
            <SEO title="Admin Login" description="ASE GmbH Admin Portal" url="https://asegmbh.netlify.app/admin" />

            {/* Ambient Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-900/10 rounded-full blur-[120px] pointer-events-none animate-pulse-slow"></div>
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-900/5 rounded-full blur-[80px] pointer-events-none"></div>

            {/* Login Card */}
            <div className="relative z-10 w-full max-w-md animate-fade-slide-in">
                <div className="bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden group">
                    {/* Hover Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                    <div className="flex justify-center mb-10">
                        <img src={Logo} alt="ASE GmbH" className="h-12 w-auto" />
                    </div>

                    <div className="mb-8 text-center">
                        <h1 className="text-2xl font-bold text-white mb-2 font-manrope">Welcome Back</h1>
                        <p className="text-slate-400 text-sm">Enter your credentials to access the admin dashboard.</p>
                        {error && (
                            <div className="mt-4 p-3 bg-red-500/10 border border-red-500/20 text-red-400 text-xs rounded-lg">
                                {error}
                            </div>
                        )}
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6 relative z-10">
                        <div className="space-y-2">
                            <label className="text-xs text-slate-400 font-medium ml-1 uppercase tracking-wider">Email Address</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-500/50 focus:bg-black/60 transition-all font-light placeholder:text-white/20"
                                placeholder="name@ase-gmbh.de"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs text-slate-400 font-medium ml-1 uppercase tracking-wider">Password</label>
                            <div className="relative">
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-500/50 focus:bg-black/60 transition-all font-light placeholder:text-white/20 pr-10"
                                    placeholder="••••••••"
                                />
                                <Lock size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500" />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full relative overflow-hidden group/btn bg-white text-black font-bold py-4 rounded-xl mt-4 transition-all hover:scale-[1.02] hover:shadow-lg disabled:opacity-70 disabled:hover:scale-100"
                        >
                            <div className="absolute inset-0 bg-slate-200 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                            <span className="relative flex items-center justify-center gap-2">
                                {loading ? (
                                    <>
                                        <Loader2 size={18} className="animate-spin" /> Authenticating...
                                    </>
                                ) : (
                                    <>
                                        Sign In <ArrowRight size={18} />
                                    </>
                                )}
                            </span>
                        </button>
                    </form>
                </div>

                <p className="text-center text-xs text-slate-600 mt-8">
                    Protected System. Authorized personnel only.
                </p>
            </div>
        </div>
    );
};

export default AdminLogin;
