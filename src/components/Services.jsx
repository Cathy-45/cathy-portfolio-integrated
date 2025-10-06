import React from "react";
import { Routes, Route } from "react-router-dom";
import FullStackDevelopment from "./FullStackDevelopment.jsx"; // Added .jsx
import TechnologyConsulting from "./TechnologyConsulting.jsx"; // Added .jsx
import SystemIntegration from "./SystemIntegration.jsx"; // Added .jsx
import SaaS from "./SaaS.jsx"; // Added .jsx

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Services</h1>
      <Routes>
        <Route path="/" element={<FullStackDevelopment />} />
        <Route path="/full-stack-development" element={<FullStackDevelopment />} />
        <Route path="/technology-consulting" element={<TechnologyConsulting />} />
        <Route path="/system-integration" element={<SystemIntegration />} />
        <Route path="/saas" element={<SaaS />} />
      </Routes>
    </div>
  );
};

export default Services;
