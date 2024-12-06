import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UploadExcel from './Components/UploadExcel';
import DataTable from './Components/DataTable';
import Statistics from './Components/Statistics';
import ChernoffFacePage from './Components/ChernoffFacePage';
import Legend from './Components/Legend';
import './App.css';

const App = () => {
  const [data, setData] = useState([]);
  const [stats, setStats] = useState([]);

  return (
    <Router>
      <header>
        <h1>Statystyki Fc Barcelony 2023/24</h1>
      </header>
      <nav>
        <Link to="/">Dane</Link>
        <Link to="/statistics">Statystyki</Link>
        <Link to="/charnoff">Twarze Charnoffa</Link>
      </nav>
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <UploadExcel onDataLoad={setData} />
                {data.length > 0 ? (
                  <DataTable data={data} />
                ) : (
                  <p>Załaduj plik Excel, aby zobaczyć dane!</p>
                )}
              </>
            }
          />

            <Route path="/statistics" element={<Statistics data={data} onStatsComputed={setStats} />} /> 
            <Route path="/charnoff" element={<ChernoffFacePage stats={stats} />}  /> 
        </Routes>
      </div>
    </Router>
  );
};

export default App;
