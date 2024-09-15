import React, { useEffect, useState } from "react";
import {
  useStripe,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useElements,
} from "@stripe/react-stripe-js";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Header } from "../components";
import apis from "../services";
import { setUser, startLoading } from "../redux/slice/userSlice";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";

const Payment = () => {
  const { user } = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user?.user || !user) {
      navigate("/login");
    }
  }, [user, navigate]);

  const [cardHolderNameError, setCardHolderNameError] = useState(null);
  const [cardNumberError, setCardNumberError] = useState(null);
  const [expiryError, setExpiryError] = useState(null);
  const [cvcError, setCvcError] = useState(null);
  const [cardHolderName, setCardHolderName] = useState("");

  const [processing, setProcessing] = useState(false);
  const [disabled, setDisabled] = useState(true);

  const location = useLocation();
  const state = location.state || {};
  console.log("location", state);

  const stripe = useStripe();
  const elements = useElements();

  const cardStyle = {
    style: {
      base: {
        color: "#000",
        fontFamily: "Poppins, sans-serif",
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#3e3e3e",
        },
      },
      invalid: {
        fontFamily: "Poppins, sans-serif",
        color: "#FF3333",
        iconColor: "#FF3333",
      },
    },
  };

  // Handle change for Card Elements
  const handleChange = (event, setError) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  // Handle cardholder name input
  const handleCardHolderChange = (event) => {
    setCardHolderName(event.target.value);
    if (!event.target.value) {
      setCardHolderNameError("Cardholder name is required.");
    } else {
      setCardHolderNameError(null);
    }
  };

  // const { mutate: mutatePayment, isPending } = useMutation({
  //   mutationFn: apis.checkout,
  //   onError: function (error) {
  //     // console.log("error", error);
  //     toast.error(error?.message);
  //   },
  //   onSuccess: async ({ data: success, status }) => {
  //     console.log("success!!:", success);
  //     if (success) {
  //       toast.success(success?.message);
  //       dispatch(setUser(success?.data));
  //       await new Promise((resolve) => setTimeout(resolve, 300));
  //       navigate("/my-qr-codes")
  //     }
  //   },
  // });

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setProcessing(true);

    const cardNumberElement = elements.getElement(CardNumberElement);

    if (!cardNumberElement || !cardHolderName) {
      setProcessing(false);
      return;
    }

    const { error, token } = await stripe.createToken(cardNumberElement, {
      name: cardHolderName,
    });

    console.log("tokenIDD", token);
    if (error) {
      setCardNumberError(error.message);
      setProcessing(false);
      return;
    }

    const subPlan = state?.name.replace("7-Day", "").trim();
    const paymentData = {
      amount: parseFloat(state?.price.replace(/[^0-9.]/g, "")),
      stripeToken: token.id,
      sub_plan: subPlan,
    };
    console.log("PAYMENTDATA", paymentData);
    // mutatePayment(paymentData);

    try {
      const response = await apis.checkout(paymentData);
      console.log("responsee", response);
      console.log("checkUserData", response?.data?.data);
      if (response.status === 200) {
        console.log("INSIDE STATUS 200");
        dispatch(setUser(response?.data?.data));
        await new Promise((resolve) => setTimeout(resolve, 300));
        toast.success(response.data.message);
        navigate("/my-qr-codes");
      } else {
        console.error("Payment failed: ", response.data.message);
      }
    } catch (error) {
      console.error("Payment API error: ", error);
    }

    setProcessing(false);
  };

  return (
    <>
      <Header />
      <div className="payment-page">
        <div className="wrapper">
          <h1>
            You’re almost done! Complete payment to activate your QR codes
          </h1>
          <div className="containerr">
            <div className="left">
              <form onSubmit={handleSubmit}>
                <div className="top">
                  <div className="content">
                    <h2>{state?.price}</h2>
                    <p>{state?.name}</p>
                  </div>
                  <div className="payment-card">
                    <img src="/assets/images/amex.png" alt="amex" />
                    <img src="/assets/images/mastercard.png" alt="mastercard" />
                    <img src="/assets/images/visa.png" alt="visa" />
                    <img src="/assets/images/dinersclub.png" alt="dinersclub" />
                    <img src="/assets/images/discover.png" alt="discover" />
                    <img src="/assets/images/jcb.png" alt="jcb" />
                  </div>
                </div>

                <div className="stripe-card-input">
                  {/* Cardholder Name Input */}
                  <div className="mb-4">
                    <label className="fw-semibold d-block position-relative">
                      <span className="card-num-head">Card Holder Name *</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Card Holder Name"
                      className="pay_input"
                      value={cardHolderName}
                      onChange={handleCardHolderChange}
                    />
                    {cardHolderNameError && (
                      <div className="text-danger">{cardHolderNameError}</div>
                    )}
                  </div>

                  {/* Card Number Input */}
                  <div className="mb-4">
                    <label className="fw-semibold mb-2 d-block position-relative">
                      <span className="card-num-head">Card Number *</span>
                      <CardNumberElement
                        options={cardStyle}
                        onChange={(event) =>
                          handleChange(event, setCardNumberError)
                        }
                        className="pay_input"
                      />
                    </label>
                    {cardNumberError && (
                      <div className="text-danger">{cardNumberError}</div>
                    )}
                  </div>

                  {/* Expiry Date Input */}
                  <div className="d-flex mb-4">
                    <div className="w-100">
                      <label className="fw-semibold mb-2 d-block">
                        <span className="card-num-head">Expiration Date *</span>
                        <CardExpiryElement
                          options={cardStyle}
                          onChange={(event) =>
                            handleChange(event, setExpiryError)
                          }
                          className="pay_input"
                        />
                      </label>
                      {expiryError && (
                        <div className="text-danger">{expiryError}</div>
                      )}
                    </div>

                    {/* CVC Input */}
                    <div className="ms-3 w-100">
                      <label className="fw-semibold mb-2 d-block">
                        <span className="card-num-head">CVC</span>
                        <CardCvcElement
                          options={cardStyle}
                          onChange={(event) => handleChange(event, setCvcError)}
                          className="pay_input"
                        />
                      </label>
                      {cvcError && (
                        <div className="text-danger">{cvcError}</div>
                      )}
                    </div>
                  </div>

                  <button
                    disabled={processing || disabled}
                    id="submit"
                    className="btn-stripe"
                  >
                    <span id="button-text">
                      {processing ? "loading..." : "Pay Now"}
                    </span>
                  </button>
                </div>
                <p className="terms">
                  By clicking "Complete Payment" you agree to QR Creator{" "}
                  <span> Terms and Conditions </span> and{" "}
                  <span> Privacy Policy.</span>
                </p>
              </form>
            </div>

            <div className="right">
              <div className="top">
                <h3>Cancel anytime</h3>
                <p>
                  <strong> Money-back guarantee.</strong> You may cancel by
                  calling us toll-free at <strong> +1 (833) 862 3200.</strong>
                </p>
              </div>
              <div className="payment-certificate">
                <h3>Pay with confidence</h3>
                <p>
                  This site is SSL secured and your credit card information will
                  be safely encrypted.
                </p>
                <div className="payment-logo">
                  <img src="/assets/images/cert1.png" alt="cert" />
                  <img src="/assets/images/cert2.png" alt="cert" />
                  <img src="/assets/images/cert3.png" alt="cert" />
                  <img src="/assets/images/cert4.png" alt="cert" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
