import React, { useState } from 'react';
import UploadExcel from './Components/UploadExcel';
import DataTable from './Components/DataTable';

const App = () => {
  const [data, setData] = useState([]);

  return (
    <div>
      <h1>Statystyki Barcelony</h1>
      <UploadExcel onDataLoad={setData} />
      {data.length > 0 ? <DataTable data={data} /> : <p>Wgraj dane z Excela!</p>}
    </div>
  );
};

export default App;
