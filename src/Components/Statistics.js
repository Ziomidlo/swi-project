import React, { useEffect, useState} from 'react';

const Statistics = ({ data, onStatsComputed }) => {
  const [stats, setStats] = useState([]);
  
  const attributes = ['Bramki stracone', 'Bramki zdobyte', 'Ilość żółtych kartek', 'Ilość przeprowadzonych zmian', 'Miejsce w tabeli '];

  useEffect(() => {
    if (data && data.length > 0) {
      const computedStats = attributes.map((key) => ({
        attribute: key,
        average: calculateAverage(data, key).toFixed(2),
        min: calculateMin(data, key),
        max: calculateMax(data, key),
        stdDev: calculateStandardDeviation(data, key).toFixed(2),
        q25: calculateQuantiles(data, key, 0.25).toFixed(2),
        q50: calculateQuantiles(data, key, 0.5).toFixed(2),
        q75: calculateQuantiles(data, key, 0.75).toFixed(2),
      }));
      setStats(computedStats);
      onStatsComputed(computedStats);
    }
  }, [data, onStatsComputed]);

  return (
    <div style={{margin: '0 auto', textAlign: 'center'}}>
      <h2>Statystyki</h2>
      <table border="1" style={{ margin: '0 auto', textAlign: 'center' }}>
        <thead>
          <tr>
            <th>Atrybut</th>
            <th>Średnia</th>
            <th>Min</th>
            <th>Max</th>
            <th>Odchylenie standardowe</th>
            <th>25%</th>
            <th>Mediana</th>
            <th>75%</th>
          </tr>
        </thead>
        <tbody>
          {stats.map((row) => (
            <tr key={row.attribute}>
              <td>{row.attribute}</td>
              <td>{row.average}</td>
              <td>{row.min}</td>
              <td>{row.max}</td>
              <td>{row.stdDev}</td>
              <td>{row.q25}</td>
              <td>{row.q50}</td>
              <td>{row.q75}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const calculateAverage = (data, key) => {
    const sum = data.reduce((acc, item) => acc + item[key], 0);
    return sum / data.length;
  };

const calculateQuantiles = (data, key, quantile) => {
  const sorted = [...data].sort((a, b) => a[key] - b[key]);
  const pos = quantile * (sorted.length - 1);
  const base = Math.floor(pos);
  const rest = pos - base;
  
  if (sorted[base + 1]) {
    return sorted[base][key] + rest * (sorted[base + 1][key] - sorted[base][key]);
  }
  return sorted[base][key];
};
  
const calculateMin = (data, key) => Math.min(...data.map(item => item[key]));
const calculateMax = (data, key) => Math.max(...data.map(item => item[key]));

const calculateStandardDeviation = (data, key) => {
  const average = calculateAverage(data, key)
  const sumSquaredDiff = data.reduce((acc, item) => acc + Math.pow(item[key] - average, 2), 0);
  return Math.sqrt(sumSquaredDiff / data.length)
};


export default Statistics;
