import React, { useState, useEffect } from 'react';
import {
  database,
  ref as dbRef,
  get
} from '../../firebase';

const MarqueeDisplay = () => {
  const [marqueeText, setMarqueeText] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadMarqueeText();
  }, []);

  const loadMarqueeText = async () => {
    try {
      const marqueeRef = dbRef(database, 'shivpratapmultistate/marquee');
      const snapshot = await get(marqueeRef);

      if (snapshot.exists()) {
        const marqueeData = snapshot.val();
        setMarqueeText(marqueeData.text || '');
      }
    } catch (error) {
      console.error('Error loading marquee text:', error);
    } finally {
      setLoading(false);
    }
  };

  // Don't render if there's no text or still loading
  if (loading || !marqueeText.trim()) {
    return null;
  }

  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 overflow-hidden">
      <div className="relative">
        <div className="flex whitespace-nowrap animate-scroll">
          <span className="mx-8 font-medium">{marqueeText}</span>
          <span className="mx-8">•</span>
          <span className="mx-8 font-medium">{marqueeText}</span>
          <span className="mx-8">•</span>
          <span className="mx-8 font-medium">{marqueeText}</span>
          <span className="mx-8">•</span>
          <span className="mx-8 font-medium">{marqueeText}</span>
          <span className="mx-8">•</span>
          <span className="mx-8 font-medium">{marqueeText}</span>
          <span className="mx-8">•</span>
          <span className="mx-8 font-medium">{marqueeText}</span>
          <span className="mx-8">•</span>
          <span className="mx-8 font-medium">{marqueeText}</span>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 25s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default MarqueeDisplay;
