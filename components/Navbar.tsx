import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/ase-white-logo.png';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setIsOpen(false);
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="fixed flex w-full z-50 pt-6 px-4 top-0 left-0 justify-center">
      <nav
        className="flex md:gap-12 md:w-auto w-full max-w-5xl py-3 px-6 gap-x-8 items-center justify-between transition-all duration-300 bg-black/60 border border-white/10 text-white shadow-2xl backdrop-blur-xl rounded-full"
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0 group" onClick={closeMenu}>
          <img src={Logo} alt="ASE GmbH" className="h-10 w-auto" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/leistungen"
            className={`text-xs font-medium transition-colors duration-200 uppercase tracking-wide ${isActive('/leistungen') ? "text-white" : "text-zinc-400 hover:text-white"}`}
          >
            Leistungen
          </Link>
          <Link
            to="/ueber-uns"
            className={`text-xs font-medium transition-colors duration-200 uppercase tracking-wide ${isActive('/ueber-uns') ? "text-white" : "text-zinc-400 hover:text-white"}`}
          >
            Über uns
          </Link>
          <Link
            to="/karriere"
            className={`text-xs font-medium transition-colors duration-200 uppercase tracking-wide ${isActive('/karriere') ? "text-white" : "text-zinc-400 hover:text-white"}`}
          >
            Karriere
          </Link>
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4 shrink-0">
          <Link
            to="/kontakt"
            className="group relative inline-flex items-center justify-center overflow-hidden px-5 py-2 text-xs font-medium transition-all rounded-full bg-zinc-950 text-white hover:bg-zinc-900 border border-white/10"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2E8F0_0%,#393BB2_50%,#E2E8F0_100%)] opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative flex items-center gap-2">
              Kontakt
              <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white transition-colors">
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 top-24 z-40 p-4 md:hidden rounded-t-3xl border-t animate-fade-in-up bg-black/95 backdrop-blur-xl border-white/10">
          <div className="flex flex-col space-y-6 mt-8 px-4">
            {['/', '/leistungen', '/ueber-uns', '/karriere'].map((path) => (
              <Link
                key={path}
                to={path}
                onClick={closeMenu}
                className="text-2xl font-bold hover:opacity-70 text-white"
              >
                {path === '/' ? 'Home' : path.substring(1).charAt(0).toUpperCase() + path.substring(2)}
              </Link>
            ))}
            <Link to="/kontakt" onClick={closeMenu} className="text-2xl font-bold text-left hover:opacity-70 text-white">Kontakt</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;