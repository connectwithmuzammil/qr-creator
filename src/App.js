import { useState } from "react";
// CSS IMPORT
import "./assets/CSS/style.css";
import "./assets/CSS/responsive.css";
import 'react-toastify/dist/ReactToastify.css';

import { toast } from 'react-toastify';

import { Route, Routes } from "react-router-dom";
import {
  CookiePolicy, FaqPage, LandingPage, MyAccount, MyBilling, Pricing, PrivacyPolicy,
  QrAnalytics, QrCreator, QRDesign, QRDetail, QrMainPage,
  TermOfUse, TermsCondition, WhoWeAre, QRIMAGESHOW,
  Payment, LOGINSCREEN
} from "./screens";
import { ContactUs, Login, PrivateRoute, ScrollToTop } from "./components";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

function App() {
  const stripePromise = loadStripe(
    "pk_test_51MvYFsHR4p2bAk2CwOzjbovbZZQI05WyT3OlF7Ov1jEB8s3qApeF7VK1DoZJDpXXg24IcfuEMou7gxeKtjLYpqrd00XW9orPni"
  );

  return (
    <>

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/*" element={<LandingPage />} />
        <Route path="/login" element={<LOGINSCREEN />} />
        {/* QR ROUTES */}
        <Route path="/my-qr-codes" element={<PrivateRoute element={QrMainPage} />} />

        <Route path="/qr-editor" element={<QrCreator />} />
        <Route path="/qr-editor/:type" element={<QRDetail />} />
        <Route path="/qr-editor/:type/design" element={<QRDesign />} />
        <Route path="/my-qr-analytics" element={<QrAnalytics />} />
        <Route path="/my-account" element={<MyAccount />} />
        <Route path="/my-billing" element={<MyBilling />} />


        <Route path="/who-we-are" element={<WhoWeAre />} />
        <Route path="/terms-and-conditions" element={<TermsCondition />} />
        <Route path="/terms-of-use" element={<TermOfUse />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/cookies-policy" element={<CookiePolicy />} />
        <Route path="/pricing" element={<PrivateRoute element={Pricing} />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/qr-image" element={<QRIMAGESHOW />} />
        <Route path="/payment" element={<Elements stripe={stripePromise}>
          <Payment />
        </Elements>} />
      </Routes>

      <ScrollToTop />
    </>
  );
}

export default App;
