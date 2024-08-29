import { useLocation } from "react-router-dom";

const QRIMAGESHOW = () => {
  const location = useLocation();
  const abc = location.state || {}; // Access the image path from navigation state
  // console.log("imagePath", abc);

  //   if (!imagePath) {
  //     return <div>No image available</div>;
  //   }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height:"100vh"
      }}
    >
      <h1>QR Code Image</h1>
      {/* Display QR Code Image */}
      <img src={abc?.generateQr?.path} alt="QR Code" />
    </div>
  );
};

export default QRIMAGESHOW;
