import React from "react";

const Button = ({ name, isBeam = false, containerClass }) => {
  return (
    <button 
      className={`btn glow-on-hover ${containerClass} px-6 py-3 text-sm sm:text-base rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300`}
    >
      {isBeam && (
        <span className="relative flex h-3 w-3 mr-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
        </span>
      )}
      {name}
    </button>
  );
};

export default Button;