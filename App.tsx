import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MobileStickyBar from './components/MobileStickyBar';
import ScrollProgress from './components/ScrollProgress';
import Preloader from './components/Preloader';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import ContactPage from './pages/ContactPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import PolicyQuestions from './pages/PolicyQuestions';

// Products
import BoatInsurance from './pages/BoatInsurance';
import CarInsurance from './pages/CarInsurance';
import CondoInsurance from './pages/CondoInsurance';
import HealthInsurance from './pages/HealthInsurance';
import HomeInsurance from './pages/HomeInsurance';
import LifeInsurance from './pages/LifeInsurance';
import MotorcycleInsurance from './pages/MotorcycleInsurance';
import RentersInsurance from './pages/RentersInsurance';
import UmbrellaInsurance from './pages/UmbrellaInsurance';
import BusinessInsurance from './pages/BusinessInsurance';
import CommercialAutoInsurance from './pages/CommercialAutoInsurance';

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Preloader />
        <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
          <ScrollProgress />
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/policy-questions" element={<PolicyQuestions />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsAndConditions />} />
              <Route path="/products/boat-insurance" element={<BoatInsurance />} />
              <Route path="/products/car-insurance" element={<CarInsurance />} />
              <Route path="/products/condo-insurance" element={<CondoInsurance />} />
              <Route path="/products/health-insurance" element={<HealthInsurance />} />
              <Route path="/products/home-insurance" element={<HomeInsurance />} />
              <Route path="/products/life-insurance" element={<LifeInsurance />} />
              <Route path="/products/motorcycle-insurance" element={<MotorcycleInsurance />} />
              <Route path="/products/renters-insurance" element={<RentersInsurance />} />
              <Route path="/products/umbrella-insurance" element={<UmbrellaInsurance />} />
              <Route path="/products/business-insurance" element={<BusinessInsurance />} />
              <Route path="/products/commercial-auto-insurance" element={<CommercialAutoInsurance />} />
              {/* Catch all route - redirects to home */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
          <MobileStickyBar />
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;