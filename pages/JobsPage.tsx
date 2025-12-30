import React, { useEffect, useState } from 'react';
import SEO from '../components/SEO';
import { ArrowRight, MapPin, Clock, Briefcase, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Job } from '../types';
import { localJobs as jobs } from '../data/jobs';

const JobsPage: React.FC = () => {
  const [jobsData, setJobsData] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch('/.netlify/functions/get-jobs');
        if (!response.ok) {
          // Fallback to local data if fetch fails (e.g. locally without netlify dev)
          console.warn('Failed to fetch jobs using functions, using fallback data');
          setJobsData(jobs);
          setLoading(false);
          return;
        }
        const data = await response.json();
        setJobsData(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching jobs:', err);
        // Fallback to local data on error
        setJobsData(jobs);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="bg-black pt-20 pb-20 min-h-screen text-white">
      <SEO title="Karriere" description="Werden Sie Teil unseres Teams. Wir suchen SPS-Programmierer, Roboter-Programmierer und Elektrokonstrukteure." url="https://asegmbh.netlify.app/karriere" />

      {/* Hero Section */}
      <div className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-900/20 rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <span className="animate-fade-slide-in opacity-0 inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-widest text-brand-400 uppercase mb-8">
              Karriere
            </span>
            <h1 className="animate-fade-slide-in opacity-0 [animation-delay:200ms] text-5xl md:text-7xl font-semibold tracking-tighter leading-[1.1] font-manrope mb-8">
              Gestalten Sie die <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-white">Zukunft.</span>
            </h1>
            <p className="animate-fade-slide-in opacity-0 [animation-delay:400ms] text-xl text-slate-400 max-w-2xl leading-relaxed">
              Werden Sie Teil eines Teams, das Technologie lebt. Wir suchen Talente, die mit uns wachsen wollen – fachlich und menschlich.
            </p>
          </div>
        </div>
      </div>

      {/* Job List */}
      <div className="max-w-7xl mx-auto px-6 space-y-6">
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-10 h-10 text-brand-500 animate-spin" />
          </div>
        ) : (
          jobsData.map((job, index) => (
            <Link
              to={`/karriere/${job.id}`}
              key={job.id}
              className="animate-fade-slide-in opacity-0 group block bg-zinc-900 rounded-3xl p-8 border border-white/10 hover:border-brand-500/30 transition-all duration-300 relative overflow-hidden hover:-translate-y-1"
              style={{ animationDelay: `${index * 150 + 600}ms`, animationFillMode: 'forwards' }}
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-900/10 rounded-full blur-[80px] -mr-20 -mt-20 group-hover:bg-brand-500/20 transition-colors pointer-events-none"></div>

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 relative z-10">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-brand-400 transition-colors font-manrope">{job.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-slate-400 mb-6">
                    <div className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                      <MapPin size={14} className="text-brand-400" /> {job.location}
                    </div>
                    <div className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                      <Clock size={14} className="text-brand-400" /> {job.type}
                    </div>
                    <div className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                      <Briefcase size={14} className="text-brand-400" /> {job.department}
                    </div>
                  </div>
                  <p className="text-slate-300 max-w-2xl font-light leading-relaxed">{job.shortDescription}</p>
                </div>

                <div className="flex-shrink-0">
                  <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white text-black group-hover:scale-110 transition-transform duration-300">
                    <ArrowRight size={24} />
                  </span>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>

      {/* Unsolicited Application */}
      <div className="max-w-7xl mx-auto px-6 mt-24 animate-fade-slide-in opacity-0 [animation-delay:1000ms]">
        <div className="bg-gradient-to-br from-zinc-900 to-black p-12 rounded-[2.5rem] border border-white/10 text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-900/10 blur-[100px] pointer-events-none"></div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-6 font-manrope">Kein passender Job dabei?</h3>
            <p className="text-slate-400 mb-10 text-lg font-light">
              Wir sind immer auf der Suche nach motivierten Talenten. Senden Sie uns gerne Ihre Initiativbewerbung und erzählen Sie uns, warum Sie zu uns passen.
            </p>
            <a href="mailto:karriere@ase-gmbh.de" className="inline-flex items-center px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-slate-200 transition-colors">
              Initiativ bewerben
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};

export default JobsPage;