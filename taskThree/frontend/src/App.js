import React, { useState } from "react";
import Dropzone from "react-dropzone";
import "./App.css";

export default function App() {
  const [fileNames, setFileNames] = useState([]);
  const handleDrop = (acceptedFiles) =>
    setFileNames(acceptedFiles.map((file) => file.name));

  return (
    <div className="App">
      <Dropzone
        onDrop={handleDrop}
        accept="image/*"
        minSize={1024}
        maxSize={3072000}
      >
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps({ className: "dropzone" })}>
            <input {...getInputProps()} />
            <p>Drag'n'drop files, or click to select files</p>
          </div>
        )}
      </Dropzone>
      <div>
        <strong>Files:</strong>
        <ul>
          {fileNames.map((fileName) => (
            <li key={fileName}>{fileName}</li> 
            
          ))}
        </ul>
      </div>
    </div>
  );
}

// export default App;
