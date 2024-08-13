// CSS IMPORT
import "./assets/CSS/style.css";
import "./assets/CSS/responsive.css";
import { Route, Routes } from "react-router-dom";
import { LandingPage } from "./screens";
import { Footer, Header } from "./components";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/*" element={<LandingPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
