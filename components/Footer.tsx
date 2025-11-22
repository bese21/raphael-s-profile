import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-black border-t border-white/10 text-center">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Raphael Melese. All rights reserved.
        </p>
        <p className="text-gray-600 text-xs mt-2">
          Disclaimer: Sports betting involves risk. Please gamble responsibly. Medical information on this site is for educational purposes only.
        </p>
      </div>
    </footer>
  );
};

export default Footer;