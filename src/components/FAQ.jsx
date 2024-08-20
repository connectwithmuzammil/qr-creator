import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQ = ({ tabs, faqData, tabColor }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].key); // Default to the first tab
  const [activeFaq, setActiveFaq] = useState(null);

  const handleClickTab = (tabKey) => {
    setActiveTab(tabKey);
    setActiveFaq(null); // Reset active FAQ when switching tabs
  };

  const handleClickFaq = (faqIndex) => {
    setActiveFaq(activeFaq === faqIndex ? null : faqIndex);
  };

  // Get FAQs based on the active tab
  const currentFaqs = faqData[activeTab] || [];

  return (
    <div className="tabs-con faq">
      <div className="btn-tabs-con">
        {tabs.map((tab) => (
          <p
            key={tab.key}
            className={activeTab === tab.key ? "active" : ""}
            onClick={() => handleClickTab(tab.key)}
            style={{ color: tabColor }}
          >
            {tab.label}
          </p>
        ))}
      </div>
      <div className="faq-con">
        <ul>
          {currentFaqs.map((faq, index) => (
            <li key={index}>
              <div className="one" onClick={() => handleClickFaq(index)}>
                <div className="wrap">
                  <p>{faq.question}</p>
                  <div className="border1">
                    {activeFaq !== index ? <FaChevronDown /> : <FaChevronUp />}
                  </div>
                </div>
                {activeFaq === index && (
                  <div
                    className="two"
                    dangerouslySetInnerHTML={{ __html: faq.answer }}
                  ></div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FAQ;
