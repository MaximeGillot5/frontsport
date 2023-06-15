import React from 'react';

const Footer = () => {
  return (
    <footer id='footer' className="items-center p-4 bg-neutral text-neutral-content">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2">
        <div className="flex justify-start">
          <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clip-rule="evenodd"
            className="fill-current"
          >
            {/* SVG Path */}
          </svg>
          <p className="ml-2">
            Copyright © 2023 - All right reserved
          </p>
        </div>
        <div className="flex justify-end">
          {/* Other content */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
