import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { ArrowLeft, Save, Loader2, Plus, Trash2, Check } from 'lucide-react';
import { Job } from '../types';

import AdminNavbar from '../components/AdminNavbar';

const JobEditor: React.FC = () => {
    const { jobId } = useParams<{ jobId: string }>();
    const navigate = useNavigate();
    const isNew = !jobId;

    const [loading, setLoading] = useState(false);
    const [fetching, setFetching] = useState(!isNew);
    const [formData, setFormData] = useState<Job>({
        id: '',
        title: '',
        type: 'Vollzeit',
        location: 'Neckarsulm',
        department: '',
        image: '',
        shortDescription: '',
        description: '',
        responsibilities: [],
        requirements: [],
        benefits: []
    });

    // Temp state for array inputs
    const [newResp, setNewResp] = useState('');
    const [newReq, setNewReq] = useState('');
    const [newBenefit, setNewBenefit] = useState('');

    useEffect(() => {
        if (!isNew && jobId) {
            const fetchJob = async () => {
                try {
                    const response = await fetch(`/.netlify/functions/get-job?id=${jobId}`);
                    if (response.ok) {
                        const data = await response.json();
                        setFormData(data);
                    } else {
                        console.error('Failed to fetch job');
                        navigate('/admin/dashboard');
                    }
                } catch (error) {
                    console.error('Error fetching job:', error);
                } finally {
                    setFetching(false);
                }
            };
            fetchJob();
        }
    }, [jobId, isNew, navigate]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleArrayAdd = (field: 'responsibilities' | 'requirements' | 'benefits', value: string, setter: (s: string) => void) => {
        if (!value.trim()) return;
        setFormData(prev => ({
            ...prev,
            [field]: [...prev[field], value.trim()]
        }));
        setter('');
    };

    const handleArrayRemove = (field: 'responsibilities' | 'requirements' | 'benefits', index: number) => {
        setFormData(prev => ({
            ...prev,
            [field]: prev[field].filter((_, i) => i !== index)
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const endpoint = isNew ? '/.netlify/functions/create-job' : '/.netlify/functions/update-job';
        const method = isNew ? 'POST' : 'PUT';

        try {
            const response = await fetch(endpoint, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                navigate('/admin/dashboard');
            } else {
                const errorData = await response.json();
                alert(`Failed to save job: ${errorData.error}`);
            }
        } catch (error) {
            console.error('Error saving job:', error);
            alert('An error occurred while saving.');
        } finally {
            setLoading(false);
        }
    };

    if (fetching) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center">
                <Loader2 className="animate-spin text-brand-500" size={32} />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black text-white pb-20 pt-20">
            <SEO title={isNew ? "New Job" : "Edit Job"} description="Job Editor" url="https://asegmbh.netlify.app/admin" />

            <AdminNavbar />

            <div className="max-w-4xl mx-auto px-6 pt-12">
                <div className="flex items-center gap-4 mb-8">
                    <Link to="/admin/dashboard" className="p-2 rounded-full hover:bg-zinc-800 transition-colors">
                        <ArrowLeft size={24} />
                    </Link>
                    <h1 className="text-3xl font-bold font-manrope">{isNew ? 'Create New Job' : 'Edit Job'}</h1>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8 animate-fade-slide-in">
                    {/* Basic Info Card */}
                    <div className="bg-zinc-900 border border-white/10 rounded-3xl p-8 space-y-6">
                        <h2 className="text-xl font-bold border-b border-white/10 pb-4 mb-6">Basic Information</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-wider text-slate-400 font-bold ml-1">Job Title</label>
                                <input
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-500/50"
                                    placeholder="e.g. Senior PLC Developer"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-wider text-slate-400 font-bold ml-1">ID (Slug)</label>
                                <input
                                    name="id"
                                    value={formData.id}
                                    onChange={handleChange}
                                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-500/50"
                                    placeholder="e.g. senior-plc-dev"
                                    required
                                    disabled={!isNew}
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-wider text-slate-400 font-bold ml-1">Department</label>
                                <input
                                    name="department"
                                    value={formData.department}
                                    onChange={handleChange}
                                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-500/50"
                                    placeholder="e.g. Automation"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-wider text-slate-400 font-bold ml-1">Location</label>
                                <input
                                    name="location"
                                    value={formData.location}
                                    onChange={handleChange}
                                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-500/50"
                                    placeholder="e.g. Neckarsulm"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-wider text-slate-400 font-bold ml-1">Type</label>
                                <select
                                    name="type"
                                    value={formData.type}
                                    onChange={handleChange}
                                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-500/50 text-white"
                                >
                                    <option value="Vollzeit">Vollzeit</option>
                                    <option value="Teilzeit">Teilzeit</option>
                                    <option value="Freelance">Freelance</option>
                                    <option value="Werkstudent">Werkstudent</option>
                                </select>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-wider text-slate-400 font-bold ml-1">Short Description</label>
                            <textarea
                                name="shortDescription"
                                value={formData.shortDescription}
                                onChange={handleChange}
                                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-500/50 h-24 resize-none"
                                placeholder="Brief overview for the card..."
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-wider text-slate-400 font-bold ml-1">Full Description</label>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-500/50 h-40"
                                placeholder="Detailed introduction..."
                            />
                        </div>
                    </div>

                    {/* Lists Section */}
                    {([
                        { title: 'Responsibilities', field: 'responsibilities', value: newResp, setter: setNewResp },
                        { title: 'Requirements', field: 'requirements', value: newReq, setter: setNewReq },
                        { title: 'Benefits', field: 'benefits', value: newBenefit, setter: setNewBenefit }
                    ] as const).map((section) => (
                        <div key={section.field} className="bg-zinc-900 border border-white/10 rounded-3xl p-8 space-y-6">
                            <h2 className="text-xl font-bold border-b border-white/10 pb-4 mb-6">{section.title}</h2>

                            <div className="space-y-4">
                                {(formData[section.field] || []).map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-3 group animate-fade-in-up">
                                        <div className="mt-1 text-green-500"><Check size={16} /></div>
                                        <p className="flex-1 text-slate-300 text-sm">{item}</p>
                                        <button
                                            type="button"
                                            onClick={() => handleArrayRemove(section.field, idx)}
                                            className="opacity-0 group-hover:opacity-100 p-1 text-red-500 hover:bg-zinc-800 rounded transition-all"
                                        >
                                            <Trash2 size={16} />
                                        </button>
                                    </div>
                                ))}
                            </div>

                            <div className="flex gap-2 pt-4">
                                <input
                                    value={section.value}
                                    onChange={(e) => section.setter(e.target.value)}
                                    // Submit on Enter
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            e.preventDefault();
                                            handleArrayAdd(section.field, section.value, section.setter);
                                        }
                                    }}
                                    className="flex-1 bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-500/50 text-sm"
                                    placeholder={`Add new ${section.title.toLowerCase()} item...`}
                                />
                                <button
                                    type="button"
                                    onClick={() => handleArrayAdd(section.field, section.value, section.setter)}
                                    className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-xl transition-colors"
                                >
                                    <Plus size={20} />
                                </button>
                            </div>
                        </div>
                    ))}

                    {/* Actions */}
                    <div className="flex justify-end gap-4 pt-4 pb-20">
                        <Link
                            to="/admin/dashboard"
                            className="px-8 py-4 rounded-xl font-bold text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
                        >
                            Cancel
                        </Link>
                        <button
                            type="submit"
                            disabled={loading}
                            className="bg-white text-black px-8 py-4 rounded-xl font-bold hover:bg-slate-200 transition-colors flex items-center gap-2"
                        >
                            {loading ? <Loader2 size={18} className="animate-spin" /> : <Save size={18} />}
                            {isNew ? 'Create Job' : 'Save Changes'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default JobEditor;
