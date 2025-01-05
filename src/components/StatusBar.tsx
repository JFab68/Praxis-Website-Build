import React, { useEffect, useState } from 'react';
import { Facebook, Twitter, Instagram, Search } from 'lucide-react';

const StatusBar = () => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formattedTime = now.toLocaleString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
      });
      setCurrentTime(formattedTime);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-white py-0.5 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between text-xs">
        {/* Date and Time */}
        <div className="text-gray-600 mb-2 md:mb-0">{currentTime}</div>

        {/* Search Field */}
        <div className="relative mb-2 md:mb-0">
          <input
            type="text"
            placeholder="Search"
            className="w-full md:w-auto border border-gray-300 rounded-full py-0.5 px-3 focus:outline-none focus:ring focus:ring-teal"
          />
          <Search className="absolute right-2 top-1.5 h-3 w-3 text-gray-400" />
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4 text-gray-600">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <Facebook className="h-4 w-4 hover:text-blue-600" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <Twitter className="h-4 w-4 hover:text-blue-400" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <Instagram className="h-4 w-4 hover:text-pink-500" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default StatusBar;