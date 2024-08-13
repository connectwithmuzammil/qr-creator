// CSS IMPORT
import "./assets/CSS/style.css";
import "./assets/CSS/responsive.css";
import { Route, Routes } from "react-router-dom";
import { LandingPage } from "./screens";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/*" element={<LandingPage />} />
      </Routes>
    </>
  );
}

export default App;
