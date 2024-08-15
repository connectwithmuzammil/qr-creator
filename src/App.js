// CSS IMPORT
import "./assets/CSS/style.css";
import "./assets/CSS/responsive.css";
import { Route, Routes } from "react-router-dom";
import { CookiePolicy, LandingPage, Pricing, PrivacyPolicy, QrCreator, TermOfUse, TermsCondition, WhoWeAre } from "./screens";
import { Footer, Header, ScrollToTop } from "./components";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/*" element={<LandingPage />} />
        <Route path="/qr-editor" element={<QrCreator />} />
        <Route path="/who-we-are" element={<WhoWeAre />} />
        <Route path="/terms-and-conditions" element={<TermsCondition />} />
        <Route path="/terms-of-use" element={<TermOfUse />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/cookies-policy" element={<CookiePolicy />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
      <ScrollToTop />
      <Footer />
    </>
  );
}

export default App;
