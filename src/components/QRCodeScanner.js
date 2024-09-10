// // QRCodeScanner.js
// import React from 'react';
// import QrReader from 'react-qr-reader';

// const QRCodeScanner = ({ onScan }) => {
//   const handleScan = (data) => {
//     if (data) {
//       onScan(data);
//     }
//   };

//   const handleError = (err) => {
//     console.error(err);
//   };

//   return (
//     <QrReader
//       onScan={handleScan}
//       onError={handleError}
//       style={{ width: '100%' }}
//     />
//   );
// };

// export default QRCodeScanner;

import React from 'react'

const QRCodeScanner = () => {
  return (
    <div>QRCodeScanner</div>
  )
}

export default QRCodeScanner