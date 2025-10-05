import React from 'react';
import { Routes, Route } from 'react-router-dom';
import FullStackDevelopment from './FullStackDevelopment';
import SaaS from './SaaS';
import SystemIntegration from './SystemIntegration';
import TechnologyConsulting from './TechnologyConsulting';

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Routes>
        <Route path="/" element={<FullStackDevelopment />} />
        <Route path="/fullstack" element={<FullStackDevelopment />} />
        <Route path="/saas" element={<SaaS />} />
        <Route path="/system-integration" element={<SystemIntegration />} />
        <Route path="/technology-consulting" element={<TechnologyConsulting />} />
      </Routes>
    </div>
  );
};

export default Services;
