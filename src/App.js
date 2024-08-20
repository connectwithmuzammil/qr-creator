import { useState } from "react";
// CSS IMPORT
import "./assets/CSS/style.css";
import "./assets/CSS/responsive.css";
import { Route, Routes } from "react-router-dom";
import { CookiePolicy, FaqPage, LandingPage, Pricing, PrivacyPolicy, QrCreator, TermOfUse, TermsCondition, UserDashboard, WhoWeAre } from "./screens";
import { ContactUs, Footer, Header, ScrollToTop } from "./components";

function App() {
  const [User, setUser] = useState(true);

  return (
    <>

      <Header User={User} />
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
        <Route path="/my-qr-codes" element={<UserDashboard />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/faq" element={<FaqPage />} />
      </Routes>
      <ScrollToTop />
      <Footer />
    </>
  );
}

export default App;
