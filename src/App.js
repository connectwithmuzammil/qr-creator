import { useState } from "react";
// CSS IMPORT
import "./assets/CSS/style.css";
import "./assets/CSS/responsive.css";

import { Route, Routes } from "react-router-dom";
import {
  CookiePolicy, FaqPage, LandingPage, Pricing, PrivacyPolicy,
  QrAnalytics, QrCreator, QRDesign, QRDetail, QrMainPage,
  TermOfUse, TermsCondition, WhoWeAre
} from "./screens";
import { ContactUs, ScrollToTop } from "./components";

function App() {

  return (
    <>

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/*" element={<LandingPage />} />
        {/* QR ROUTES */}
        <Route path="/qr-editor" element={<QrCreator />} />
        <Route path="/qr-editor/:type" element={<QRDetail />} />
        <Route path="/qr-editor/:type/design" element={<QRDesign />} />

        <Route path="/my-qr-analytics" element={<QrAnalytics />} />


        <Route path="/who-we-are" element={<WhoWeAre />} />
        <Route path="/terms-and-conditions" element={<TermsCondition />} />
        <Route path="/terms-of-use" element={<TermOfUse />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/cookies-policy" element={<CookiePolicy />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/my-qr-codes" element={<QrMainPage />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/faq" element={<FaqPage />} />
      </Routes>
      <ScrollToTop />
    </>
  );
}

export default App;
