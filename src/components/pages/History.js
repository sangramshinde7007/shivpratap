import React from 'react';
import {  FaTrophy, FaChartLine, FaHandshake } from 'react-icons/fa';

const History = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our History</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            A journey of growth, trust, and excellence spanning over three decades of banking innovation and customer service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Timeline */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Journey</h2>
            <div className="space-y-8">
              {[
                { year: '1985', title: 'Foundation', description: 'Established as a small cooperative society with just 100 members and initial capital of ₹10,000.' },
                { year: '1995', title: 'Growth Phase', description: 'Expanded to 5 branches and introduced computerized banking systems.' },
                { year: '2005', title: 'Digital Transformation', description: 'Launched internet banking and ATM services across all branches.' },
                { year: '2015', title: 'Multistate Status', description: 'Granted RBI license to operate as a multistate cooperative bank.' },
                { year: '2020', title: 'Modern Banking Era', description: 'Reached 500,000+ customers and 150+ branches across Maharashtra.' },
                { year: '2024', title: 'Innovation Hub', description: 'Introduced AI-powered banking solutions and mobile banking app.' }
              ].map((milestone, index) => (
                <div key={index} className="flex items-start mb-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-bold text-lg">{milestone.year}</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Key Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: <FaTrophy />, title: 'RBI Licensed', description: 'First cooperative bank in region to receive multistate license' },
                { icon: <FaChartLine />, title: '500K+ Customers', description: 'Trusted by over half a million customers' },
                { icon: <FaHandshake />, title: '150+ Branches', description: 'Extensive network across Maharashtra' }
              ].map((achievement, index) => (
                <div key={index} className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
                  <div className="text-3xl text-blue-600 mb-3">
                    {achievement.icon}
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">{achievement.title}</h3>
                  <p className="text-gray-600 text-sm">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
