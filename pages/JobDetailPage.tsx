import React, { useEffect, useState } from 'react';
import SEO from '../components/SEO';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, MapPin, Clock, Briefcase, ArrowRight, Loader2 } from 'lucide-react';
import { Job } from '../types';

const JobDetailPage: React.FC = () => {
   const { jobId } = useParams<{ jobId: string }>();
   const navigate = useNavigate();
   const [job, setJob] = useState<Job | null>(null);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState<string | null>(null);

   useEffect(() => {
      const fetchJob = async () => {
         if (!jobId) return;
         try {
            const response = await fetch(`/.netlify/functions/get-job?id=${jobId}`);
            if (!response.ok) {
               if (response.status === 404) {
                  // Try fallback first before redirecting/showing error in dev mode without functions
                  console.warn('Job not found via API, checking fallback if available');
               }
               throw new Error('Job fetch failed');
            }
            const data = await response.json();
            setJob(data);
         } catch (err) {
            console.error('Error fetching job details:', err);
            setError('Job could not be loaded');
         } finally {
            setLoading(false);
         }
      };

      fetchJob();
   }, [jobId]);

   if (loading) {
      return (
         <div className="bg-black min-h-screen text-white pt-32 pb-20 flex justify-center">
            <Loader2 className="w-10 h-10 text-brand-500 animate-spin" />
         </div>
      );
   }

   if (error || !job) return (
      <div className="pt-32 pb-20 text-center text-white bg-black min-h-screen px-4">
         <h2 className="text-2xl font-bold mb-4">Job nicht gefunden</h2>
         <p className="text-slate-400 mb-8">Die gesuchte Stellenausschreibung existiert nicht oder ist nicht mehr verfügbar.</p>
         <Link to="/karriere" className="inline-flex items-center text-brand-400 hover:text-white transition-colors">
            <ArrowLeft size={16} className="mr-2" /> Zurück zur Übersicht
         </Link>
      </div>
   );

   return (
      <div className="bg-black min-h-screen text-white pt-20 pb-20">
         <SEO title={job.title} description={job.shortDescription} url={`https://asegmbh.netlify.app/karriere/${job.id}`} image={job.image} />

         {/* 1. Job Hero Section */}
         <div className="relative pt-32 pb-32 overflow-hidden border-b border-white/5">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
               <img src={job.image} alt={job.title} className="w-full h-full object-cover opacity-40" />
               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40"></div>
            </div>

            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-900/20 rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2 z-10"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">

               {/* Back Link */}
               <Link to="/karriere" className="animate-fade-slide-in opacity-0 inline-flex items-center text-sm font-semibold text-slate-500 hover:text-white mb-12 transition-colors uppercase tracking-wider">
                  <ArrowLeft size={16} className="mr-2" /> Zurück zur Übersicht
               </Link>

               <div className="max-w-4xl">
                  <div className="animate-fade-slide-in opacity-0 [animation-delay:200ms] flex flex-wrap gap-4 mb-8">
                     <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-brand-400 uppercase tracking-wide">
                        <MapPin size={12} className="mr-2" /> {job.location}
                     </span>
                     <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-brand-400 uppercase tracking-wide">
                        <Clock size={12} className="mr-2" /> {job.type}
                     </span>
                     <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-brand-400 uppercase tracking-wide">
                        <Briefcase size={12} className="mr-2" /> {job.department}
                     </span>
                  </div>
                  <h1 className="animate-fade-slide-in opacity-0 [animation-delay:400ms] text-4xl md:text-6xl font-bold tracking-tighter leading-[1.1] font-manrope text-white mb-6">
                     {job.title}
                  </h1>
                  <p className="animate-fade-slide-in opacity-0 [animation-delay:600ms] text-xl text-slate-400 max-w-2xl leading-relaxed font-light">
                     {job.shortDescription}
                  </p>
               </div>
            </div>
         </div>

         {/* 2. Main Content Grid */}
         <div className="max-w-7xl mx-auto px-6 py-20 animate-fade-slide-in opacity-0 [animation-delay:800ms]">
            <div className="grid lg:grid-cols-3 gap-16 lg:gap-24">

               {/* Left Column: Details */}
               <div className="lg:col-span-2 space-y-16">

                  <section>
                     <h2 className="text-2xl font-bold text-white mb-8 font-manrope">Über die Stelle</h2>
                     <div className="prose prose-invert prose-lg text-slate-300 font-light leading-relaxed">
                        <p>{job.description}</p>
                     </div>
                  </section>

                  <section>
                     <h2 className="text-2xl font-bold text-white mb-8 font-manrope">Ihre Aufgaben</h2>
                     <ul className="space-y-4">
                        {job.responsibilities.map((item, idx) => (
                           <li key={idx} className="flex items-start text-slate-300 group">
                              <CheckCircle2 className="w-6 h-6 text-brand-500 mr-5 flex-shrink-0 mt-0.5 group-hover:text-brand-400 transition-colors" />
                              <span className="leading-relaxed font-light">{item}</span>
                           </li>
                        ))}
                     </ul>
                  </section>

                  <section>
                     <h2 className="text-2xl font-bold text-white mb-8 font-manrope">Das bringen Sie mit</h2>
                     <ul className="space-y-4">
                        {job.requirements.map((item, idx) => (
                           <li key={idx} className="flex items-start text-slate-300 group">
                              <div className="w-2 h-2 rounded-full bg-zinc-600 mt-2.5 mr-5 flex-shrink-0 group-hover:bg-brand-500 transition-colors"></div>
                              <span className="leading-relaxed font-light">{item}</span>
                           </li>
                        ))}
                     </ul>
                  </section>

               </div>

               {/* Right Column: Sidebar */}
               <div className="lg:col-span-1">
                  <div className="bg-zinc-900 border border-white/10 rounded-3xl p-8 sticky top-32">
                     <h3 className="text-xl font-bold text-white mb-8 font-manrope">Wir bieten</h3>
                     <ul className="space-y-4 mb-10">
                        {job.benefits.map((benefit, idx) => (
                           <li key={idx} className="text-sm text-slate-300 flex items-start leading-relaxed">
                              <span className="text-brand-500 mr-3 font-bold text-lg leading-none">+</span> {benefit}
                           </li>
                        ))}
                     </ul>

                     <div className="pt-8 border-t border-white/10">
                        <p className="text-sm text-slate-500 mb-6">
                           Interessiert? Senden Sie uns Ihre Unterlagen direkt per E-Mail.
                        </p>
                        <a
                           href={`mailto:karriere@ase-gmbh.de?subject=Bewerbung: ${job.title}`}
                           className="group w-full flex items-center justify-center py-4 bg-white text-black font-bold rounded-xl hover:bg-slate-200 transition-colors"
                        >
                           Jetzt bewerben
                           <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                        </a>
                     </div>
                  </div>
               </div>

            </div>
         </div>

      </div>
   );
};

export default JobDetailPage;