import { Helmet } from 'react-helmet-async';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import PatientSatisfaction from './components/sections/PatientSatisfaction';
import FinancialSuccess from './components/sections/FinancialSuccess';
import KeyDrivers from './components/sections/KeyDrivers';
import HospitalComparison from './components/sections/HospitalComparison';
import HolisticApproach from './components/sections/HolisticApproach';
import AssessmentMethod from './components/sections/AssessmentMethod';
import RiskAssessment from './components/sections/RiskAssessment';
import BehavioralProfiles from './components/sections/BehavioralProfiles';
import RiskAnalysis from './components/sections/RiskAnalysis';
import PlatformIntegration from './components/sections/PlatformIntegration';
import PartnerLogos from './components/sections/PartnerLogos';
import References from './components/sections/References';

function App() {
  return (
    <div>
      <Helmet>
        <title>Cognicit — Reducing Cognitive Bias in Healthcare</title>
        <meta
          name="description"
          content="Cognicit blends diagnostic assessments and AI-driven simulations to diagnose and reduce cognitive bias in healthcare."
        />
        <meta property="og:title" content="Cognicit" />
        <meta property="og:type" content="website" />
      </Helmet>
      <main id="main">
        {/* Sections matching the PDF slides exactly */}
        <Hero />
        <PatientSatisfaction />
        <FinancialSuccess />
        <KeyDrivers />
        <HospitalComparison />
        <HolisticApproach />
        <AssessmentMethod />
        <RiskAssessment />
        <BehavioralProfiles />
        <RiskAnalysis />
        <PlatformIntegration />
        <PartnerLogos />
        <References />
      </main>
      <Footer />
    </div>
  );
}

export default App;


