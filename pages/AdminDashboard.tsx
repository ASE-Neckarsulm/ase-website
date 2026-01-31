import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';
import { Plus, Edit2, Trash2, LogOut, Search, MapPin, Briefcase, Loader2 } from 'lucide-react';
import Logo from '../assets/ase-white-logo.png';
import { Job } from '../types';

import AdminNavbar from '../components/AdminNavbar';

const AdminDashboard: React.FC = () => {
    const navigate = useNavigate();
    const [jobs, setJobs] = useState<Job[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchJobs();
    }, []);

    const fetchJobs = async () => {
        try {
            const response = await fetch('/.netlify/functions/get-jobs');
            if (response.ok) {
                const data = await response.json();
                setJobs(data);
            } else {
                console.error('Failed to fetch jobs');
            }
        } catch (error) {
            console.error('Error fetching jobs:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!window.confirm('Are you sure you want to delete this job posting? This action cannot be undone.')) {
            return;
        }

        try {
            const response = await fetch(`/.netlify/functions/delete-job?id=${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                setJobs(jobs.filter(job => job.id !== id));
            } else {
                alert('Failed to delete job. Please try again.');
            }
        } catch (error) {
            console.error('Error deleting job:', error);
            alert('An error occurred while deleting the job.');
        }
    };

    const filteredJobs = jobs.filter(job =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.department.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-brand-500/30">
            <SEO title="Admin Dashboard" description="Manage Job Postings" url="https://asegmbh.netlify.app/admin/dashboard" />

            <AdminNavbar />

            <main className="max-w-7xl mx-auto px-6 pt-32 pb-20">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 animate-fade-slide-in">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 font-manrope">Job Postings</h1>
                        <p className="text-slate-400">Manage your open positions and applications.</p>
                    </div>

                    <div className="flex items-center gap-4">
                        <Link
                            to="/admin/jobs/new"
                            className="group flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-bold hover:scale-105 transition-transform"
                        >
                            <Plus size={20} />
                            Create New Job
                        </Link>
                    </div>
                </div>

                {/* Filter & Search */}
                <div className="mb-10 animate-fade-slide-in [animation-delay:100ms]">
                    <div className="relative max-w-md">
                        <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                        <input
                            type="text"
                            placeholder="Search jobs..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full bg-zinc-900 border border-white/10 rounded-2xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-brand-500/50 transition-all font-light"
                        />
                    </div>
                </div>

                {/* Jobs Grid */}
                {loading ? (
                    <div className="flex justify-center py-20">
                        <Loader2 className="animate-spin text-brand-500" size={32} />
                    </div>
                ) : (
                    <div className="grid gap-4 animate-fade-slide-in [animation-delay:200ms]">
                        {filteredJobs.length === 0 ? (
                            <div className="bg-zinc-900/50 border border-white/10 rounded-3xl p-12 text-center">
                                <Briefcase size={48} className="mx-auto text-slate-600 mb-4" />
                                <h3 className="text-xl font-bold text-white mb-2">No jobs found</h3>
                                <p className="text-slate-400">Try adjusting your search terms or create a new job.</p>
                            </div>
                        ) : (
                            filteredJobs.map((job) => (
                                <div
                                    key={job.id}
                                    className="group bg-zinc-900 hover:bg-zinc-800/80 border border-white/5 hover:border-white/10 p-6 rounded-2xl transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6"
                                >
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-2">
                                            <h3 className="text-xl font-bold text-white font-manrope">{job.title}</h3>
                                            <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border ${job.type === 'Vollzeit' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-blue-500/10 text-blue-400 border-blue-500/20'
                                                }`}>
                                                {job.type}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-6 text-sm text-slate-400">
                                            <div className="flex items-center gap-1.5">
                                                <MapPin size={14} /> {job.location}
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                <Briefcase size={14} /> {job.department}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <Link
                                            to={`/admin/jobs/${job.id}`}
                                            className="p-3 rounded-xl bg-black border border-white/10 text-slate-400 hover:text-white hover:border-white/30 transition-all hover:scale-105"
                                            title="Edit Job"
                                        >
                                            <Edit2 size={18} />
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(job.id)}
                                            className="p-3 rounded-xl bg-black border border-white/10 text-red-500/70 hover:text-red-400 hover:border-red-500/30 transition-all hover:scale-105"
                                            title="Delete Job"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                )}
            </main>
        </div>
    );
};

export default AdminDashboard;
