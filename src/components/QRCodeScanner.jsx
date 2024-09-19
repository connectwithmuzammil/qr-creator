import React, { useEffect, useState } from 'react';
import { BrowserMultiFormatReader } from '@zxing/library';

const QRScanner = () => {
  const [scanCount, setScanCount] = useState(0);
  const [scanned, setScanned] = useState(false); // Flag to stop scanning

  useEffect(() => {
    const codeReader = new BrowserMultiFormatReader();

    const decode = () => {
      codeReader.decodeFromVideoDevice(null, 'video', (result, err) => {
        if (result && !scanned) {
          console.log(result); // Handle the result
          setScanCount(prevCount => prevCount + 1); // Increment scan count
          setScanned(true); // Stop further scanning
        }
        if (err) {
          console.error(err); // Handle errors
        }
      });
    };

    decode(); // Start scanning

    return () => {
      codeReader.reset(); // Stop scanning on unmount
    };
  }, [scanned]);

  return (
    <div>
      <video id="video" style={{ width: '100%' }} />
      <p>Scan Count: {scanCount}</p>
    </div>
  );
};

export default QRScanner;
