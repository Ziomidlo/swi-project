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
        <div>
            <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} />
            {fileName && <p>Załadowano plik: {fileName}</p>}
        </div>
    );
};

export default UploadExcel;
