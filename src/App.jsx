import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loader from './components/Loader';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Contact from './components/Contact';
import Consultation from './components/Consultation';
import FullStackDevelopment from './components/Services/FullStackDevelopment';
import TechnologyConsulting from './components/Services/TechnologyConsulting';
import SystemIntegration from './components/Services/SystemIntegration';
import SaaS from './components/Services/SaaS';
import Myportfolio from './components/MyPortfolio';
import Success from './components/Success';
import Thanks from "./components/Thanks"; // Import the Thanks component
import ExploreAgriConnect from "./components/ExploreAgriConnect"; // Placeholder for future AgriConnect page
const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 5000);
  }, []);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/full-stack-development" element={<FullStackDevelopment />} />
            <Route path="/services/technology-consulting" element={<TechnologyConsulting />} />
            <Route path="/services/system-integration" element={<SystemIntegration />} />
            <Route path="/services/saas" element={<SaaS />} />
            <Route path="/consultation" element={<Consultation />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Myportfolio />} />
            <Route path="/success" element={<Success />} />
            <Route path="/thanks" element={<Thanks />} /> {/* Add Thanks route */}
            <Route path="/explore-agriconnect" element={<ExploreAgriConnect />} /> {/* Add Explore AgriConnect route */}
          </Routes>
        </>
      )}
    </>
  );
};
export default App;
