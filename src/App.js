import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UploadExcel from './Components/UploadExcel';
import DataTable from './Components/DataTable';
import './App.css';

const App = () => {
  const [data, setData] = useState([]);

  return (
    <Router>
      <header>
        <h1>Statystyki Barcelony</h1>
      </header>
      <nav>
        <Link to="/">Dane</Link>
        <Link to="/stats">Statystyki</Link>
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
          <Route path="/stats" element={<h2>Statystyki</h2>} />
          <Route path="/charnoff" element={<h2>Twarze Charnoffa</h2>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
