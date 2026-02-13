import React from 'react';

const Logo = ({ 
  className = '', 
  variant = 'default',
  size = 'medium'
}) => {
  const color = variant === 'inverse' ? '#FFFFFF' : '#000000';
  
  const sizes = {
    small: 120,
    medium: 180,
    large: 240
  };
  
  const width = sizes[size] || sizes.medium;

  return (
    <svg
      width={width}
      height={width * 0.4}
      viewBox="0 0 310 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Rectangle around entire LawBOX */}
      <rect
        x="8"
        y="8"
        width="264"
        height="74"
        stroke={color}
        strokeWidth="3"
        fill="none"
      />
      
      {/* "LawBOX" text */}
      <text
        x="140"
        y="65"
        fontFamily="Inter, sans-serif"
        fontSize="60"
        fontWeight="400"
        fill={color}
        textAnchor="middle"
        letterSpacing="-1"
      >
        Law<tspan fontWeight="700">BOX</tspan>
      </text>
      
      {/* TM symbol in top right */}
      <text
        x="278"
        y="18"
        fontFamily="Inter, sans-serif"
        fontSize="14"
        fontWeight="500"
        fill={color}
      >
        TM
      </text>
    </svg>
  );
};

export default Logo;
