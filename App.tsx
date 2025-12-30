import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';

// Pages
// Pages
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import JobsPage from './pages/JobsPage';
import JobDetailPage from './pages/JobDetailPage';
import ImpressumPage from './pages/ImpressumPage';
import DataProtectionPage from './pages/DataProtectionPage';
import ReferencesPage from './pages/ReferencesPage';
import ContactPage from './pages/ContactPage';
import CertificatesPage from './pages/CertificatesPage';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Internal component to use 'useLocation' inside Router context
const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      {/* @ts-expect-error: 'key' is a valid React prop but strictly not in RoutesProps */}
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <Home />
            </PageTransition>
          }
        />
        <Route
          path="/leistungen"
          element={
            <PageTransition>
              <ServicesPage />
            </PageTransition>
          }
        />
        <Route
          path="/ueber-uns"
          element={
            <PageTransition>
              <AboutPage />
            </PageTransition>
          }
        />
        <Route
          path="/karriere"
          element={
            <PageTransition>
              <JobsPage />
            </PageTransition>
          }
        />
        <Route
          path="/karriere/:jobId"
          element={
            <PageTransition>
              <JobDetailPage />
            </PageTransition>
          }
        />
        <Route
          path="/impressum"
          element={
            <PageTransition>
              <ImpressumPage />
            </PageTransition>
          }
        />
        <Route
          path="/datenschutz"
          element={
            <PageTransition>
              <DataProtectionPage />
            </PageTransition>
          }
        />
        <Route
          path="/referenzen"
          element={
            <PageTransition>
              <ReferencesPage />
            </PageTransition>
          }
        />
        <Route
          path="/kontakt"
          element={
            <PageTransition>
              <ContactPage />
            </PageTransition>
          }
        />
        <Route
          path="/zertifikate"
          element={
            <PageTransition>
              <CertificatesPage />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="min-h-screen font-sans flex flex-col bg-black text-white">
          <ScrollToTop />
          <Navbar />
          <main className="flex-grow">
            <AnimatedRoutes />
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;