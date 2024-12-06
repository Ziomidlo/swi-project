import React from 'react';

const Legend = ({ stats }) => {
  const sectionStyle = {
    textAlign: 'center',
    marginTop: '20px',
  };

  const listStyle = {
    listStyle: 'none',
    padding: 0,
    margin: '10px 0',
  };

  const listItemStyle = {
    marginBottom: '20px',
  };

  const exampleStyle = {
    fontWeight: 'bold',
    fontSize: '14px',
    marginTop: '10px',
    color: '#555',
  };

  // Wyszukujemy konkretne wartości dla każdego atrybutu w stats
  const getAttributeValue = (attribute) => {
    const stat = stats.find((stat) => stat.attribute === attribute);
    return stat ? stat.average : 'Brak danych';
  };

  return (
    <div style={sectionStyle}>
      <h3>Legenda:</h3>
      <ul style={listStyle}>
        <li style={listItemStyle}>
          <strong>Głowa:</strong>
          <div>Szerokość głowy zależy od liczby *Bramki stracone*:</div>
          <div style={exampleStyle}>
            - Więcej bramek → Szeroka głowa<br />
            - Mniej bramek → Wąska głowa
          </div>
          <div>
            <strong>Aktualna wartość: {getAttributeValue('Bramki stracone')}</strong>
          </div>
        </li>
        <li style={listItemStyle}>
          <strong>Oczy:</strong>
          <div>Wielkość oczu zależy od liczby *Żółtych kartek*:</div>
          <div style={exampleStyle}>
            - Więcej kartek → Małe oczy<br />
            - Mniej kartek → Duże oczy
          </div>
          <div>
            <strong>Aktualna wartość: {getAttributeValue('Ilość żółtych kartek')}</strong> 
          </div>
        </li>
        <li style={listItemStyle}>
          <strong>Nos:</strong>
          <div>Długość nosa zależy od *Miejsca w tabeli*:</div>
          <div style={exampleStyle}>
            - Krótki nos → Lepsze miejsce w tabeli<br />
            - Długi nos → Gorsze miejsce w tabeli
          </div>
          <div>
            <strong>Aktualna wartość: {getAttributeValue('Miejsce w tabeli ')}</strong> 
          </div>
        </li>
        <li style={listItemStyle}>
          <strong>Usta:</strong>
          <div>Szerokość ust zależy od *Bramki zdobyte*:</div>
          <div style={exampleStyle}> 
            - Więcej bramek → Szeroki uśmiech<br />
            - Mniej bramek → Wąskie usta
          </div>
          <div>
            <strong>Aktualna wartość: {getAttributeValue('Bramki zdobyte')}</strong> 
          </div>
        </li>
        <li style={listItemStyle}>
          <strong>Brwi:</strong>
          <div>Pochylenie brwi zależy od *Liczby zmian*:</div>
          <div style={exampleStyle}>
            - Więcej zmian → Brwi pochylone w dół (smutne)<br />
            - Mniej zmian → Brwi uniesione (radosne)
          </div>
          <div>
            <strong>Aktualna wartość:  {getAttributeValue('Ilość przeprowadzonych zmian')}</strong>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Legend;
