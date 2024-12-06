import React from 'react';
import ChernoffFace from './ChernoffFace';
import { scaleFaceData } from './dataProcessing';

const Legend = ({ stats }) => {
  const sectionStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '50px',
    marginTop: '20px',
  };

  const faceContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px', 
  };

  const attributeListStyle = {
    textAlign: 'left',
    flex: '1',
    fontSize: '14px',
    lineHeight: '1.8',
  };

  const generateFaceData = (type) => {
    const faceData = {};
    stats.forEach(({ attribute, min, average, max }) => {
      if (type === 'min') faceData[attribute] = parseFloat(min);
      if (type === 'average') faceData[attribute] = parseFloat(average);
      if (type === 'max') faceData[attribute] = parseFloat(max);
    });
    
    return scaleFaceData(faceData);
  };

  return (
    <div>
      <h3 style={{ textAlign: 'center' }}>Legenda:</h3>
      <div style={sectionStyle}>
        <div style={attributeListStyle}>
          <h4>Atrybuty i ich wpływ na twarz:</h4>
          <ul>
            {stats.map(({ attribute, min, average, max }) => {
              let facePart;
              if (attribute === 'Bramki stracone') facePart = 'Głowa';
              else if (attribute === 'Ilość żółtych kartek') facePart = 'Oczy';
              else if (attribute === 'Bramki zdobyte') facePart = 'Usta';
              else if (attribute === 'Ilość przeprowadzonych zmian') facePart = 'Brwi';
              else if (attribute === 'Miejsce w tabeli ') facePart = 'Nos';

              return (
                <li key={attribute}>
                  <strong>{facePart}:</strong> {attribute}<br />
                  Min: <strong>{min}</strong>, Średnia: <strong>{average}</strong>, Max: <strong>{max}</strong>
                </li>
              );
            })}
          </ul>
        </div>

        <div style={faceContainerStyle}>
          {['min', 'average', 'max'].map((type, index) => (
            <div key={type} style={{ textAlign: 'center' }}>
              <ChernoffFace data={generateFaceData(type)} />
              <div>
                {type === 'min' && <strong>Minimalne wartości</strong>}
                {type === 'average' && <strong>Średnie wartości</strong>}
                {type === 'max' && <strong>Maksymalne wartości</strong>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Legend;
