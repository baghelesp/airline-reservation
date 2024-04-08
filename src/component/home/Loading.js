
import './loading.css';

import React from 'react';

import { CgAirplane } from "react-icons/cg";
const Loader = () => {
  const spanStyles = {
    '--i': 0
  };

  // Generating spans with styles
  const spans = Array.from({ length: 20 }, (_, i) => (
    <span key={i} style={{ '--i': i + 1 }}></span>
  ));

  return (
    <div className="loader">
      {spans}
      <div className="plane">
        <CgAirplane name="airplane-sharp" className="icon" />
      </div>
    </div>
  );
};

export default Loader;