import { ReactElement } from 'react';

function BoxIcon(): ReactElement {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_9439_9914)">
        <circle cx="30" cy="29" r="28" fill="white" />
      </g>
      <path
        d="M39 32.9999V24.9999C38.9996 24.6492 38.9071 24.3047 38.7315 24.0011C38.556 23.6974 38.3037 23.4453 38 23.2699L31 19.2699C30.696 19.0944 30.3511 19.002 30 19.002C29.6489 19.002 29.304 19.0944 29 19.2699L22 23.2699C21.6963 23.4453 21.444 23.6974 21.2685 24.0011C21.0929 24.3047 21.0004 24.6492 21 24.9999V32.9999C21.0004 33.3506 21.0929 33.6951 21.2685 33.9987C21.444 34.3024 21.6963 34.5545 22 34.7299L29 38.7299C29.304 38.9054 29.6489 38.9979 30 38.9979C30.3511 38.9979 30.696 38.9054 31 38.7299L38 34.7299C38.3037 34.5545 38.556 34.3024 38.7315 33.9987C38.9071 33.6951 38.9996 33.3506 39 32.9999Z"
        stroke="#5931A6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.2695 23.96L29.9995 29.01L38.7295 23.96"
        stroke="#5931A6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30 39.08V29"
        stroke="#5931A6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <filter
          id="filter0_d_9439_9914"
          x="0"
          y="0"
          width="64"
          height="64"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="2" dy="3" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_9439_9914"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_9439_9914"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
export default BoxIcon;
