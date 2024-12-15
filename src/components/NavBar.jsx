import React from 'react';

const navItems = [
  'HOME',
  'GAMES',
  'MENU',
  'EVENTS',
  'PICS',
  'STORE',
  'PARTY INQUIRY'
];

const NavBar = () => {
  return (
    <nav className="bg-gray-800 text-white text-2xl p-4 rounded-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold"></div>
        <div className="hidden md:flex space-x-4">
          {navItems.map((item, index) => (
            <a key={index} href="#" className="hover:text-gray-400">{item}</a>
          ))}
        </div>
        <div className="md:hidden">
          <button className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
