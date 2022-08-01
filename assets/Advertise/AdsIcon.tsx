import { ReactElement } from 'react';

function AdsIcon(): ReactElement {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_9439_9907)">
        <circle cx="30" cy="29" r="28" fill="white" />
      </g>
      <path
        d="M30 39C35.5228 39 40 34.5228 40 29C40 23.4772 35.5228 19 30 19C24.4772 19 20 23.4772 20 29C20 34.5228 24.4772 39 30 39Z"
        stroke="#5931A6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M34 33C34 33 32.5 31 30 31C27.5 31 26 33 26 33"
        stroke="#5931A6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M27 26H27.01"
        stroke="#5931A6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M33 26H33.01"
        stroke="#5931A6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <filter
          id="filter0_d_9439_9907"
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
            result="effect1_dropShadow_9439_9907"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_9439_9907"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
export default AdsIcon;
