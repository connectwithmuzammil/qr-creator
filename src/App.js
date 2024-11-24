// CSS IMPORT
import "./assets/CSS/style.css";
import "./assets/CSS/responsive.css";
import "react-toastify/dist/ReactToastify.css";
import "react-loading-skeleton/dist/skeleton.css";

import { Route, Routes } from "react-router-dom";
import {
  CookiePolicy,
  FaqPage,
  LandingPage,
  MyAccount,
  MyBilling,
  Pricing,
  PrivacyPolicy,
  QrAnalytics,
  QrCreator,
  QRDesign,
  QRDetail,
  QrMainPage,
  TermOfUse,
  TermsCondition,
  WhoWeAre,
  QRCodeDetail,
  Payment,
  LOGINSCREEN,
} from "./screens";
import {
  ContactUs,
  PrivateRoute,
  ScanAndRedirectQr,
  ScrollToTop,
} from "./components";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

function App() {
  const stripePromise = loadStripe(
    "pk_test_51FTEPWIJaRH6RptoWVl1Wp7i3zV0GRlJfe9jShWK8qaBkHKYC4c8h3IG6NH7vIRlxCb7jjRVoqMMjbt3wIi9o0em00dwOlJmRV"
  );

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/*" element={<LandingPage />} />
        <Route path="/login" element={<LOGINSCREEN />} />
        {/* QR ROUTES */}
        <Route
          path="/my-qr-codes"
          element={<PrivateRoute element={QrMainPage} />}
        />

        <Route
          path="/qr-editor"
          element={<PrivateRoute element={QrCreator} />}
        />
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
        <Route
          path="/my-qr-codes-details"
          element={<PrivateRoute element={QRCodeDetail} />}
        />
        <Route
          path="/payment"
          element={
            <PrivateRoute
              element={() => (
                <Elements stripe={stripePromise}>
                  <Payment />
                </Elements>
              )}
            />
          }
        />

        <Route path="/qrcode/:qrCodeId" element={<ScanAndRedirectQr />} />
      </Routes>

      <ScrollToTop />
    </>
  );
}

export default App;
