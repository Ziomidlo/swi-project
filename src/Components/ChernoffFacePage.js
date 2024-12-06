import React from 'react';
import ChernoffFace from './ChernoffFace';
import Legend from './Legend';
import { scaleFaceData } from './dataProcessing';

const ChernoffFacePage = ({ stats }) => {
  if (!stats || stats.length === 0) {
    return (
      <div style={{ textAlign: 'center' }}>
        <h2>Twarze Charnoffa</h2>
        <p>Załaduj plik Excel, aby zobaczyć dane!</p>
      </div>
    );
  }

  const faceData = stats.reduce((acc, stat) => {
    acc[stat.attribute] = parseFloat(stat.average);
    return acc;
  }, {});

  const scaledFaceData = scaleFaceData(faceData);

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Twarze Charnoffa</h2>
      {Object.keys(scaledFaceData).length > 0 ? (
        <>
          <ChernoffFace data={scaledFaceData} />
          <Legend stats={stats}/>
        </>
      ) : (
        <p>Nie udało się przetworzyć danych. Sprawdź plik wejściowy.</p>
      )}
    </div>
  );
};

export default ChernoffFacePage;
