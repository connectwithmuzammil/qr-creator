// CSS IMPORT
import "./assets/CSS/style.css";
import "./assets/CSS/responsive.css";
import { Route, Routes } from "react-router-dom";
import { LandingPage, QrCreator } from "./screens";
import { Footer, Header, ScrollToTop } from "./components";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/*" element={<LandingPage />} />
        <Route path="/qr-editor" element={<QrCreator />} />
      </Routes>
      <ScrollToTop />
      <Footer />
    </>
  );
}

export default App;
