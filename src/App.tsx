import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

// Page imports
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ActionCenterPage from './pages/ActionCenterPage';
import SupportPage from './pages/SupportPage';
import ProgramsPage from './pages/ProgramsPage';
import ResourcesPage from './pages/ResourcesPage';
import EventsPage from './pages/EventsPage';
import DonationPage from './pages/DonationPage';
import ContactPage from './pages/ContactPage';
import GetInvolvedPage from './pages/GetInvolvedPage';
import SupportMissionPage from './pages/SupportMissionPage';
import PartnersPage from './pages/PartnersPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import AccessibilityPage from './pages/AccessibilityPage';
import IndependentOversightArticle from './pages/blog/independent-oversight-2025';
import NewApproachRecoveryArticle from './pages/blog/new-approach-recovery';
import LegislativeUpdateArticle from './pages/blog/legislative-update-2025';

// Program Pages
import PrisonOversightPage from './pages/programs/PrisonOversightPage';
import LegalSystemReformPage from './pages/programs/LegalSystemReformPage';
import SubstanceUsePage from './pages/programs/SubstanceUsePage';
import DoulaProgramPage from './pages/programs/DoulaProgramPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/action" element={<ActionCenterPage />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="/programs" element={<ProgramsPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/donate" element={<DonationPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/get-involved" element={<GetInvolvedPage />} />
            <Route path="/support-mission" element={<SupportMissionPage />} />
            <Route path="/partners" element={<PartnersPage />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermsOfServicePage />} />
            <Route path="/accessibility" element={<AccessibilityPage />} />
            <Route path="/blog/independent-oversight-2025" element={<IndependentOversightArticle />} />
            <Route path="/blog/new-approach-recovery" element={<NewApproachRecoveryArticle />} />
            <Route path="/blog/legislative-update-2025" element={<LegislativeUpdateArticle />} />
            <Route path="/programs/prison-oversight" element={<PrisonOversightPage />} />
            <Route path="/programs/legal-system" element={<LegalSystemReformPage />} />
            <Route path="/programs/substance-use" element={<SubstanceUsePage />} />
            <Route path="/programs/doula-program" element={<DoulaProgramPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;