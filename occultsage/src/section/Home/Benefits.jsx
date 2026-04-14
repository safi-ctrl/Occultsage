import React from 'react';

import { Lightbulb, Search, Home, Building2, Wrench, Handshake } from 'lucide-react';
import './Benefits.css';
const Benefits = () => {
  const benefits = [
    {
      title: "Mastery of Foundational Knowledge",
      desc: "Gain a deep understanding of the fundamentals of Vedic Vastu, including the five elements, directions, and their interplay in a space.",
      icon: <Lightbulb className="w-10 h-10 text-yellow-500" />,
    },
    {
      title: "Comprehensive Site Analysis",
      desc: "Develop expertise in plot selection, soil testing, identifying auspicious zones, and understanding the impact of surrounding features.",
      icon: <Search className="w-10 h-10 text-blue-500" />,
    },
    {
      title: "Optimized Residential Design",
      desc: "Learn the principles of room placement, door locations, and interior design elements aligned with Vastu for maximum harmony.",
      icon: <Home className="w-10 h-10 text-orange-700" />,
    },
    {
      title: "Insights for Diverse Spaces",
      desc: "Apply Vastu wisdom to a wide range of properties, including apartments, shops, offices, factories, and even temples.",
      icon: <Building2 className="w-10 h-10 text-blue-400" />,
    },
    {
      title: "Effective Remedies and Solutions",
      desc: "Master the art of identifying Vastu imbalances and implementing practical remedies, often without requiring major structural changes.",
      icon: <Wrench className="w-10 h-10 text-purple-500" />,
    },
    {
      title: "Professional Consultancy Skills",
      desc: "Learn the step-by-step process of conducting Vastu consultations, from analysis to delivering impactful reports.",
      icon: <Handshake className="w-10 h-10 text-yellow-600" />,
    }
  ];

  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-16 text-gray-800">
          Benefits Of This <span className="text-[#d4a017]">Comprehensive Vastu Course</span>
        </h2>

       
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {benefits.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-10 rounded-2xl flex flex-col items-center text-center shadow-md border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.04)' }}
            >
              
              <div className="mb-6">
                {item.icon}
              </div>

            
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {item.title}
              </h3>

             
              <p className="text-gray-600 leading-relaxed text-[15px]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;