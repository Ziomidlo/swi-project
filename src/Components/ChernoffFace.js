import React from 'react';

const ChernoffFace = ({ data }) => {
  const { headWidth, eyeSize, mouthWidth, browTilt, noseLength } = data;

  return (
    <svg width="200" height="200" viewBox="0 0 200 200">
      {/* Głowa */}
      <ellipse cx="100" cy="100" rx={headWidth} ry="75" fill="#FFDAB9" />

      {/* Oczy */}
      <circle cx="70" cy="80" r={eyeSize} fill="black" />
      <circle cx="130" cy="80" r={eyeSize} fill="black" />

      {/* Brwi */}
      <line x1="60" y1="65" x2="80" y2={65 + browTilt} stroke="black" strokeWidth="2" />
      <line x1="120" y1={65 + browTilt} x2="140" y2="65" stroke="black" strokeWidth="2" />

      {/* Nos */}
      <line x1="100" y1="90" x2="100" y2={90 + noseLength} stroke="black" strokeWidth="2" />

      {/* Usta */}
      <rect x={100 - mouthWidth / 2} y="140" width={mouthWidth} height="10" fill="red" />
    </svg>
  );
};

export default ChernoffFace;
