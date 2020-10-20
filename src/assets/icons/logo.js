import React from 'react';

const Logo = ({color, size}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 500"
      width={size || 100}
      height={size || 100}>
      <g stroke={color || '#F4F2F7'}>
        <circle cx="250" cy="155.664" r="10.8" fill="none" strokeWidth="13" />
        <path
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="20"
          d="M78.105 144.864L78.105 102.088 421.895 102.088 421.738 144.838"
        />
        <g fill="none" strokeWidth="20">
          <path
            d="M77.606 47.761c30.091 0 58.403 11.519 85.337 24.937 27.03 13.466 56.967 23.376 86.121 23.418"
            transform="translate(1.217 97.103)"
          />
          <path
            d="M419.959 47.761c-30.091 0-58.403 11.519-85.337 24.937-27.03 13.466-56.967 23.376-86.121 23.418"
            transform="translate(1.217 97.103)"
          />
        </g>
        <path
          fill="none"
          strokeLinecap="round"
          strokeWidth="20"
          d="M78.105 144.864c-.718 355.136 343.072 355.136 343.79 0"
          paintOrder="fill"
        />
        <text
          style={{whiteSpace: 'pre'}}
          x="184.919"
          y="368.029"
          fill={color || '#F4F2F7'}
          fontFamily="Roboto"
          fontSize="200"
          fontWeight="900">
          P
        </text>
      </g>
    </svg>
  );
};

export default Logo;
