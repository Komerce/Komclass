import { ReactElement } from 'react';

function MapsIcon(): ReactElement {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path d="M0 24.68H24V0.68H0V24.68Z" fill="url(#pattern0)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_9006_8130" transform="scale(0.015625)" />
        </pattern>
        <image
          id="image0_9006_8130"
          width="64"
          height="64"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
}
export default MapsIcon;
