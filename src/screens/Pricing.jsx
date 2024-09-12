import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Header } from "../components";

const Pricing = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const navigate = useNavigate();

  const cardData = [
    {
      id: 1,
      title: "7-Day Limited Access",
      price: "$0.79",
      features: [
        "Dynamic QR design",
        "Various types of QR code available",
        "Edit and manage your QR codes",
        "After 7 days, auto-renews to $29.95 to be billed every 4 weeks. Cancel anytime.",
      ],
    },
    {
      id: 2,
      title: "7-Day Full Access",
      price: "$0.99",
      features: [
        "Dynamic QR design",
        "Unlimited scans",
        "Generate QR codes using AI",
        "Various types of QR code available",
        "Edit and manage your QR codes",
        "Download your codes in a variety of formats",
        "Comprehensive QR analytics",
        "After 7 days, auto-renews to $29.95 to be billed every 4 weeks. Cancel anytime.",
      ],
      isMostPopular: true,
    },
    {
      id: 3,
      title: "Yearly UnLimited",
      price: "$11.95",
      features: [
        "Dynamic QR design",
        "Unlimited scans",
        "Generate QR codes using AI",
        "Various types of QR code available",
        "Edit and manage your QR codes",
        "Download your codes in a variety of formats",
        "Comprehensive QR analytics",
        "One-time payment of $143.30, auto-renews every year. Cancel anytime.",
      ],
    },
  ];

  const handleCardSelect = (card) => {
    setSelectedCard(card);
  };
  const handleContinue = () => {
    if (selectedCard) {
      navigate("/payment", {
        state: { price: selectedCard.price, name: selectedCard.title },
      });
    }
  };

  return (
    <>
      <Header />

      <div className="pricing">
        <div className="content">
          <p>Select an option to access all our QR tools at the best prices!</p>
          <button
            onClick={handleContinue}
            disabled={!selectedCard}
            className={selectedCard ? "active-btn" : "disabled-btn"}
          >
            Continue
          </button>
        </div>
        <div className="card-container">
          {cardData.map((card) => (
            <div
              key={card.id}
              className={`cardd ${
                selectedCard?.id === card.id ? "active" : ""
              }`}
              onClick={() => handleCardSelect(card)}
            >
              {card.isMostPopular && (
                <div className="most-popular">
                  <h3>Most popular</h3>
                </div>
              )}
              <div className="top">
                <span />
                <h1>{card.title}</h1>
              </div>
              <p className="pricing">{card.price}</p>
              <ul>
                {card.features.map((feature, index) => (
                  <li key={index}>
                    <FaCheck />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="bottom">
          <p>
            <span> Money-back guarantee.</span> You may cancel by calling us
            toll-free at <span> +1 (833) 862 3200.</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Pricing;
