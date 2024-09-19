import React, { useState } from 'react';
import QrReader from 'react-qr-reader';

const QrCodeScanner = ({ onScan }) => {
  const [error, setError] = useState(null);

  const handleScan = (data) => {
    if (data) {
      onScan(data); // Pass the scanned data to the parent component
    }
  };

  const handleError = (err) => {
    setError(err);
    console.error(err);
  };

  return (
    <div>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: '100%' }}
      />
      {error && <p>Error: {error.message}</p>}
    </div>
  );
};

export default QrCodeScanner;
