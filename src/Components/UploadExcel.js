import React, {useState} from 'react' ;
import * as XLSX from 'xlsx';

const UploadExcel = ({onDataLoad}) => {
    const [fileName, setFileName] = useState("");

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        setFileName(file.name);
        const reader = new FileReader();
        reader.onload = (event) => {
            const data = new Uint8Array(event.target.result);
            const workbook = XLSX.read(data, { type: "array" });
            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];
            let json = XLSX.utils.sheet_to_json(sheet);

            onDataLoad(json);
        };
        reader.readAsArrayBuffer(file);
    };

  return (
    <div style={{ textAlign: "center", margin: "20px 0" }}>
      <input
        type="file"
        accept=".xlsx, .xls"
        onChange={handleFileUpload}
        style={{
          display: "inline-block",
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#5C677D",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      />
    </div>
  );
};

export default UploadExcel;
