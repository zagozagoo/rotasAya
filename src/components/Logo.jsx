import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div>
      <Link to="/">
        <img src="https://live.staticflickr.com/3666/8924805953_af2eeaa097_b.jpg" alt="Logo" className="w-12 h-12" />
      </Link>
    </div>
  );
};

export default Logo;
