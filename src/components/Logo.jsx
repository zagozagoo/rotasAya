import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div>
      <Link to="/">
        <img src="https://64.media.tumblr.com/eb67dd65368bd828bb1e62a85c01f2ff/35b47b15947a1857-ce/s1280x1920/995cc692c9620c007452791a09260e963513123c.png" alt="Logo" className="w-12 h-12" />
      </Link>
    </div>
  );
};

export default Logo;
