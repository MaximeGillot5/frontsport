import React, { useState, useEffect } from 'react';
import '../App.css';

const getMobileStatus = () => window.innerWidth < 600;

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(getMobileStatus);
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(prevShowMenu => !prevShowMenu);
  }

  useEffect(() => {
    const handleResize = () => setIsMobile(getMobileStatus());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <nav className="flex justify-between items-center py-4 px-8 bg-white">
        <div>
          <span className="text-black font-bold text-xl">Sportner</span>
        </div>
        {isMobile ? (
          <div className="small-screen-menu">
            <button onClick={handleClick}>Menu</button>
          </div>
        ) : (
          <div className="space-x-4 small-screen-links">
            <a href="#" className="text-black hover:text-gray-300">
              Autre1              
            </a>
            <a href="#" className="text-black hover:text-gray-300">
              Autre2
            </a>
            <a href="#" className="text-black hover:text-gray-300">
              Autre3
            </a>
          </div>
        )}
      </nav>
      {isMobile && (
        <>
          <div
            className={`fixed top-0 left-0 w-full h-full bg-black opacity-50 ${
              showMenu ? '' : 'pointer-events-none'
            }`}
            onClick={handleClick}
          />
          <div
            className={`fixed top-0 left-0 w-3/4 h-full bg-white z-20 transform transition-transform ease-in-out duration-300 ${
              showMenu ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            {/* Contenu du menu */}
            <ul className="space-y-8 p-8">
              <li>
                <a href="#" className="text-black hover:text-gray-300">
                  Option 1
                </a>
              </li>
              <li>
                <a href="#" className="text-black hover:text-gray-300">
                  Option 2
                </a>
              </li>
              <li>
                <a href="#" className="text-black hover:text-gray-300">
                  Option 3
                </a>
              </li>
              <li>
                <a href="#" className="text-black hover:text-gray-300">
                  Option 4
                </a>
              </li>
            </ul>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
