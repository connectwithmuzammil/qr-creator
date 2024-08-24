import React, { useState } from "react";
import { Button, FAQ, Footer, Header, Step } from "../components";

import { FaChevronDown, FaChevronUp } from "react-icons/fa";

import { StarIcon, TrustpilotIcon, Card1, Card2 } from "../components/SVGIcon";
import step1 from "../assets/images/step1.svg";
import step2 from "../assets/images/step2.svg";
import step3 from "../assets/images/step3.svg";
import URL from "../assets/images/url.svg";
import vcard from "../assets/images/icon-qr-vcard.svg";
import business from "../assets/images/icon-qr-business.svg";
import social from "../assets/images/icon-qr-social.svg";
import apps from "../assets/images/icon-qr-apps.svg";
import video from "../assets/images/icon-qr-video.svg";
import pdf from "../assets/images/icon-qr-pdf.svg";
import links from "../assets/images/icon-qr-links.svg";
import wifi from "../assets/images/icon-qr-wifi.svg";
import gallery from "../assets/images/icon-qr-image.svg";
import youtube from "../assets/images/icon-qr-youtube.svg";
import landing from "../assets/images/icon-qr-website.svg";
import event from "../assets/images/icon-qr-event.svg";

const LandingPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const stepsData = [
    {
      image: step1,
      title: "Select your QR code content",
      description:
        "Choose from apps, PDFs, images, videos, websites, and much more.",
    },
    {
      image: step2,
      title: "Enter the details",
      description:
        "Fill out your QR code information such as text, links, or contact details.",
    },
    {
      image: step3,
      title: "Download your QR code",
      description: "Pick your design and download your customized QR code.",
    },
  ];
  const buttons = [
    {
      id: 0,
      title: "URL",
      imgSrc: URL,
      description:
        "Direct users to your landing page with QR codes. No need to type in the URL, users can reach your site with a simple scan.",
      imgRight: "/assets/images/phone-url.png",
    },
    {
      id: 1,
      title: "vCard",
      imgSrc: vcard,
      description:
        "Printed business cards are a thing of the past. Share your business information the easy way with QR vCards. Limitless and impossible to lose!",
      imgRight: "/assets/images/phone-vcard.png",
    },
    {
      id: 2,
      title: "Business Page",
      imgSrc: business,
      description:
        "Forget printing. QR codes are the best way to share your business information. Let customers know your opening hours and contact details, your menu, and more in an instant.",
      imgRight: "/assets/images/phone-business.png",
    },
    {
      id: 3,
      title: "Social Media",
      imgSrc: social,
      description:
        "Link all your social media platforms to a single QR code. Get more followers on Facebook, Instagram, LinkedIn, Twitter, and more",
      imgRight: "/assets/images/phone-social.png",
    },
    {
      id: 4,
      title: "Apps",
      imgSrc: apps,
      description:
        "Get more downloads with QR Creator. Make your app easier to find and improve user experience.",
      imgRight: "/assets/images/phone-apps.png",
    },
    {
      id: 5,
      title: "Video",
      imgSrc: video,
      description:
        "Get your videos out into the world. Generate QR codes to share your videos and boost your audience.",
      imgRight: "/assets/images/phone-video.png",
    },
    {
      id: 6,
      title: "PDF",
      imgSrc: pdf,
      description:
        "Create QR codes to share PDF files. The fast and secure way to make information and text available to everyone.",
      imgRight: "/assets/images/phone-pdf.png",
    },
    {
      id: 7,
      title: "Links",
      imgSrc: links,
      description:
        "Get your message across with QR codes. Gather your links in one place to easily share content with your audience.",
      imgRight: "/assets/images/phone-links.png",
    },
    {
      id: 8,
      title: "WI-FI",
      imgSrc: wifi,
      description:
        "No more writing down passwords. Provide fast and secure Wi-Fi access with a QR code— your customers will thank you!",
      imgRight: "/assets/images/phone-wifi.png",
    },
    {
      id: 9,
      title: "Images' Gallery",
      imgSrc: gallery,
      description:
        "Sending images is easy thanks to QR Creator. Let family and friends see your snaps and share the memories.",
      imgRight: "/assets/images/phone-image.png",
    },
    {
      id: 10,
      title: "YouTube",
      imgSrc: youtube,
      description:
        "Want more YouTube views and subscribers? Link the URL to a QR code and let the world see you in action.",
      imgRight: "/assets/images/phone-youtube.png",
    },
    {
      id: 11,
      title: "Landing Page",
      imgSrc: landing,
      description:
        "Provide instant access to your website. QR codes help drive traffic to your site and increase engagement.",
      imgRight: "/assets/images/phone-website.png",
    },
    {
      id: 12,
      title: "Event",
      imgSrc: event,
      description:
        "Create a landing page with all your event info. Guests can easily add it to their calendars and RSPV.",
      imgRight: "/assets/images/phone-event.png",
    },
  ];

  // FAQ CODE LOGIC
  // const faqData1 = {
  //   basicInfo: [
  //     {
  //       question: "What is a QR code?",
  //       answer:
  //         "A QR code is a square-shaped code that can be scanned by a mobile device.<br/><br/> QR stands for “Quick Response”, which is exactly what these codes do. If you hover your device’s camera over a QR code, it might allow you to instantly open a link to a website, read a document, or access other kinds of information. The possibilities are endless!",
  //     },
  //     {
  //       question: "How can I create my own QR code?",
  //       answer:
  //         "You can generate your own QR codes quickly and easily on this website. Using the tools we provide, you can generate custom QR codes and manage and edit them in the future. With our tools, you can also track how many people have scanned your code, at what times or the types of devices used to scan the QR code, for instance.",
  //     },
  //     {
  //       question: "What are QR codes useful for?",
  //       answer:
  //         "QR codes are incredibly useful and have become an integral part of day-to-day life.<br/><br/> They can be used for all sorts of things. They can provide links to websites, apps, menus in restaurants and cafés, documents, your Wi-Fi information, and much more. QR codes have also been used in travel documents and COVID-19 vaccine passports.<br/><br/> A QR code makes your business or product instantly accessible in the digital age. It allows your customers to directly interact with your services and products at the click of a button, which can be key in promoting your business.",
  //     },
  //   ],
  //   creatingDesigning: [
  //     {
  //       question: "How do you read a QR code?",
  //       answer:
  //         "To read a QR code, you simply need a smartphone or device with a camera. Point the camera at the code and your device will read the code, giving you instant access to the information, website, or document that the QR code links to.",
  //     },
  //     {
  //       question: "Can I edit my QR code with QR Creator?",
  //       answer:
  //         "Yes! You can edit the QR codes you have already created through our website. All you have to do is log into your account, find the code you’d like to modify, and click the Edit button to make any changes you like.",
  //     },
  //     {
  //       question:
  //         "What is the difference between a static QR and a dynamic one?",
  //       answer:
  //         "Static QR codes contain fixed information and cannot be changed or edited. They also do not collect tracking metrics. The patterns of static QR codes are visually much denser than those of dynamic QR codes. Examples of static QRs include email and text codes.<br/><br/> Dynamic QR codes can be edited after they have been created. They can be used to gather statistics on things like the number of scans, times, locations, and types of devices used to scan them.",
  //     },
  //     {
  //       question:
  //         "Can a static QR code be converted to a dynamic one or vice versa?",
  //       answer:
  //         "No, static and dynamic QR codes have a number of technical differences, including the pattern of the code. One type cannot be converted into the other.",
  //     },
  //     {
  //       question: "Can I change the size of my QR logo?",
  //       answer:
  //         "No, the most important thing is that the QR code is readable. That’s why QR Creator uses a standard size to make sure all our codes can be easily scanned and we’re a leader in generating reliable QR codes for our users.",
  //     },
  //   ],
  //   scanningPrinting: [
  //     {
  //       question: "What data can you collect with a dynamic QR code?",
  //       answer: `
  //       Dynamic QR codes can collect the following information:<br/><br/>
  //       <ol>
  //         <li>Number of total scans</li>
  //         <li>Number of unique scans</li>
  //         <li>Location of scans</li>
  //         <li>Times when people are scanning your code</li>
  //         <li>Number of scans per operating system</li>
  //         <li>Types of devices used to scan the code</li>
  //       </ol>
  //     `,
  //     },
  //     {
  //       question: "Can I check that my QR code is working correctly?",
  //       answer:
  //         "You can use your smartphone or device to scan your QR code to make sure that it is working as it should.",
  //     },
  //     {
  //       question: "Why aren't my QR codes working?",
  //       answer: `
  //       If you’re making your QR codes with QR Creator, you should have no problems. Our tools are designed to help you generate QR codes that work perfectly.<br/><br/>
  //       Occasionally, some apps and cameras might have trouble scanning complex QR codes due to certain elements in the code’s design.<br/><br/>
  //       Here are some tips to make sure your codes are easy to read:
  //       <ul>
  //         <li>There needs to be sufficient contrast between the background and foreground of the QR code</li>
  //         <li>Ensure that your logo is not overlapping the important parts of the QR code</li>
  //         <li>Get the size right — if a QR code is too small, it may not be readable. As a rule, static QR codes should be a minimum of 3×3 cm; dynamic QR codes should be at least 2×2 cm.</li>
  //       </ul>
  //     `,
  //     },
  //     {
  //       question: "How do I download my QR code?",
  //       answer:
  //         "You can download the QR codes you have created if you subscribe to the QR Creator website. You can save them in whichever format you prefer, such as PNG, JPEG or SVG.",
  //     },
  //     {
  //       question: "What type of access does the trial period give me?",
  //       answer:
  //         "If you’d like to take our services for a test run before you subscribe, we offer a 7-day trial option. You will have access to all our tools for 7 days.",
  //     },
  //   ],
  //   aiGenerated: [
  //     {
  //       question: "What makes AI-generated QR codes different?",
  //       answer:
  //         "Not only are our AI-enhanced QR codes functional, but they also look amazing! Using our powerful AI tool you can personalize your QR codes to match your brand. From color schemes to logos, you’re in control. Your brand is unique, so your QR codes should be too!",
  //     },
  //     {
  //       question: "Can AI-personalized QR codes benefit my marketing strategy?",
  //       answer: `Absolutely! Customizing your QR codes using AI can optimize your marketing campaigns.<br/><br/>
  //       Already using standard QR codes? Switching to AI-generated codes will take your marketing materials to the next level. Grab the attention of your audience with eye-catching designs and increase scans.<br/><br/>
  //       Brand new to QR codes? Choose AI-generated codes for maximum impact. Get your marketing materials noticed and boost engagement.
  //       `,
  //     },
  //     {
  //       question:
  //         "Can I add AI-generated QR codes to existing content and materials?",
  //       answer: `Yes! We make it easy to add QR codes to your existing digital content, marketing materials, and more. Customize the design so it matches your brand seamlessly. Also, you can download your QR codes in the format that works for you.
  //       `,
  //     },
  //     {
  //       question: "What kinds of content can I share using QR codes?",
  //       answer: `Website URLs, business info, PDFs, image galleries, YouTube videos, Wi-Fi networks… so many options! Easily add the content you want to share and let AI take care of the rest.
  //       `,
  //     },
  //     {
  //       question: "My QR code is not scanning, what should I do?",
  //       answer: `If your QR code does not scan correctly, don’t worry. First, try scanning the code from a distance of approximately 10 times its size.<br/><br/>
  //       If that does not work, simply regenerate the code using the same prompt. Repeat the process until you have a QR code you love and that works like a dream. It may take a couple of attempts — our AI tool is constantly learning and improving.
  //       `,
  //     },
  //     {
  //       question: "How long does it take to generate a QR code using AI?",
  //       answer: `It takes up to 60 seconds for AI to work its magic. Wait until your QR has been generated before getting started on another design.`,
  //     },
  //   ],
  // };
  // const handleClickTab = (tab) => {
  //   setActiveTab(tab);
  //   setActiveFaq(null);
  // };
  // const handleClickFaq = (index) => {
  //   setActiveFaq(activeFaq === index ? null : index);
  // };
  // const currentFaqs = faqData[activeTab];

  const tabs = [
    { key: "basicInfo", label: "Basic Information" },
    { key: "creatingDesigning", label: "Creating & Designing" },
    { key: "scanningPrinting", label: "Scanning & Printing" },
    { key: "aiGenerated", label: "AI-generated QR code" },
  ];
  const faqData = {
    basicInfo: [
      {
        question: "What is a QR code?",
        answer: `
          A QR code is a square-shaped code that can be scanned by a mobile device.<br/><br/>
          QR stands for “Quick Response”, which is exactly what these codes do. If you hover your device’s camera over a QR code, it might allow you to instantly open a link to a website, read a document, or access other kinds of information. The possibilities are endless!
        `,
      },
      {
        question: "How can I create my own QR code?",
        answer: `
          You can generate your own QR codes quickly and easily on this website. Using the tools we provide, you can generate custom QR codes and manage and edit them in the future. With our tools, you can also track how many people have scanned your code, at what times or the types of devices used to scan the QR code, for instance.
        `,
      },
      {
        question: "What are QR codes useful for?",
        answer: `
          QR codes are incredibly useful and have become an integral part of day-to-day life.<br/><br/>
          They can be used for all sorts of things. They can provide links to websites, apps, menus in restaurants and cafés, documents, your Wi-Fi information, and much more. QR codes have also been used in travel documents and COVID-19 vaccine passports.<br/><br/>
          A QR code makes your business or product instantly accessible in the digital age. It allows your customers to directly interact with your services and products at the click of a button, which can be key in promoting your business.
        `,
      },
    ],
    creatingDesigning: [
      {
        question: "How do you read a QR code?",
        answer: `
          To read a QR code, you simply need a smartphone or device with a camera. Point the camera at the code and your device will read the code, giving you instant access to the information, website, or document that the QR code links to.
        `,
      },
      {
        question: "Can I edit my QR code with QR Creator?",
        answer: `
          Yes! You can edit the QR codes you have already created through our website. All you have to do is log into your account, find the code you’d like to modify, and click the Edit button to make any changes you like.
        `,
      },
      {
        question:
          "What is the difference between a static QR and a dynamic one?",
        answer: `
          Static QR codes contain fixed information and cannot be changed or edited. They also do not collect tracking metrics. The patterns of static QR codes are visually much denser than those of dynamic QR codes. Examples of static QRs include email and text codes.<br/><br/>
          Dynamic QR codes can be edited after they have been created. They can be used to gather statistics on things like the number of scans, times, locations, and types of devices used to scan them.
        `,
      },
      {
        question:
          "Can a static QR code be converted to a dynamic one or vice versa?",
        answer: `
          No, static and dynamic QR codes have a number of technical differences, including the pattern of the code. One type cannot be converted into the other.
        `,
      },
      {
        question: "Can I change the size of my QR logo?",
        answer: `
          No, the most important thing is that the QR code is readable. That’s why QR Creator uses a standard size to make sure all our codes can be easily scanned and we’re a leader in generating reliable QR codes for our users.
        `,
      },
    ],
    scanningPrinting: [
      {
        question: "What data can you collect with a dynamic QR code?",
        answer: `
          Dynamic QR codes can collect the following information:<br/><br/>
          <ol>
            <li>Number of total scans</li>
            <li>Number of unique scans</li>
            <li>Location of scans</li>
            <li>Times when people are scanning your code</li>
            <li>Number of scans per operating system</li>
            <li>Types of devices used to scan the code</li>
          </ol>
        `,
      },
      {
        question: "Can I check that my QR code is working correctly?",
        answer: `
          You can use your smartphone or device to scan your QR code to make sure that it is working as it should.
        `,
      },
      {
        question: "Why aren't my QR codes working?",
        answer: `
          If you’re making your QR codes with QR Creator, you should have no problems. Our tools are designed to help you generate QR codes that work perfectly.<br/><br/>
          Occasionally, some apps and cameras might have trouble scanning complex QR codes due to certain elements in the code’s design.<br/><br/>
          Here are some tips to make sure your codes are easy to read:
          <ul>
            <li>There needs to be sufficient contrast between the background and foreground of the QR code</li>
            <li>Ensure that your logo is not overlapping the important parts of the QR code</li>
            <li>Get the size right — if a QR code is too small, it may not be readable. As a rule, static QR codes should be a minimum of 3×3 cm; dynamic QR codes should be at least 2×2 cm.</li>
          </ul>
        `,
      },
      {
        question: "How do I download my QR code?",
        answer: `
          You can download the QR codes you have created if you subscribe to the QR Creator website. You can save them in whichever format you prefer, such as PNG, JPEG, or SVG.
        `,
      },
      {
        question: "What type of access does the trial period give me?",
        answer: `
          If you’d like to take our services for a test run before you subscribe, we offer a 7-day trial option. You will have access to all our tools for 7 days.
        `,
      },
    ],
    aiGenerated: [
      {
        question: "What makes AI-generated QR codes different?",
        answer: `
          Not only are our AI-enhanced QR codes functional, but they also look amazing! Using our powerful AI tool you can personalize your QR codes to match your brand. From color schemes to logos, you’re in control. Your brand is unique, so your QR codes should be too!
        `,
      },
      {
        question: "Can AI-personalized QR codes benefit my marketing strategy?",
        answer: `
          Absolutely! Customizing your QR codes using AI can optimize your marketing campaigns.<br/><br/>
          Already using standard QR codes? Switching to AI-generated codes will take your marketing materials to the next level. Grab the attention of your audience with eye-catching designs and increase scans.<br/><br/>
          Brand new to QR codes? Choose AI-generated codes for maximum impact. Get your marketing materials noticed and boost engagement.
        `,
      },
      {
        question:
          "Can I add AI-generated QR codes to existing content and materials?",
        answer: `
          Yes! We make it easy to add QR codes to your existing digital content, marketing materials, and more. Customize the design so it matches your brand seamlessly. Also, you can download your QR codes in the format that works for you.
        `,
      },
      {
        question: "What kinds of content can I share using QR codes?",
        answer: `
          Website URLs, business info, PDFs, image galleries, YouTube videos, Wi-Fi networks… so many options! Easily add the content you want to share and let AI take care of the rest.
        `,
      },
      {
        question: "My QR code is not scanning, what should I do?",
        answer: `
          If your QR code does not scan correctly, don’t worry. First, try scanning the code from a distance of approximately 10 times its size.<br/><br/>
          If that does not work, simply regenerate the code using the same prompt. Repeat the process until you have a QR code you love and that works like a dream. It may take a couple of attempts — our AI tool is constantly learning and improving.
        `,
      },
      {
        question: "How long does it take to generate a QR code using AI?",
        answer: `
          It takes up to 60 seconds for AI to work its magic. Wait until your QR has been generated before getting started on another design.
        `,
      },
    ],
  };

  return (
    <>
      <Header />
      <div className="landingpage">
        <section className="sec-one">
          <div className="containerr">
            <div className="left">
              <div className="content">
                <h1>
                  Make your own QR codes today.
                  <span> Fast, easy, and customizable!</span>
                </h1>
                <p>It’s simple to make, manage, and track your own QR codes.</p>
                <Button title={"Generate QR Code"} redirect={"/qr-editor"} />
              </div>
            </div>
            <div className="right">
              <img src="/assets/images/hero-sideimg.png" alt="hero-sideimg" />
            </div>
          </div>
        </section>
        <section className="sec-two">
          <div className="content">
            <p className="p1">Our customers say</p>
            <h2>Excellent</h2>
            <StarIcon className={"StarIcon"} />
            <p className="p2">4.6 out of 5 based on 215 reviews</p>
            <TrustpilotIcon className={"TrustpilotIcon"} />
          </div>
        </section>
        <section className="sec-three">
          <h1>Create your QR code in 3 steps</h1>
          <div className="steps-con">
            {stepsData.map((step, index) => (
              <Step
                key={index}
                image={step.image}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
          <div className="btn-wrapper">
            <Button title={"Generate QR Code"} redirect={"/qr-editor"} />
          </div>
        </section>
        <section className="sec-four">
          <div className="containerr">
            <div className="left">
              <img src="/assets/images/ai-module.png" alt="ai-module" />
            </div>
            <div className="right">
              <div className="content">
                <div className="wrap">
                  <h3>New AI feature now available</h3>
                  <p>NEW</p>
                </div>
                <p className="p1">
                  Introducing our new AI beta feature, exclusively for
                  subscribers. Add a prompt describing your desired QR code and
                  let AI do the rest. Creating personalized QR codes has never
                  been easier!
                </p>
                <div className="btn-wrapper">
                  <Button title={"Generate QR Code"} redirect={"/qr-editor"} />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="sec-five">
          <div className="top-content">
            <h1>With QR Creator, the possibilities are endless</h1>
            <p>Generate QR codes for all kinds of content using QR Creator.</p>
          </div>
          <div className="preview-container">
            <div className="left">
              <div className="preview-buttons-con">
                {buttons.map((button, index) => (
                  <div
                    key={button.id}
                    className={`one ${index === activeIndex ? "active" : ""}`}
                    onClick={() => setActiveIndex(index)}
                  >
                    <div
                      className={`img-con ${
                        index === activeIndex ? "active" : ""
                      }`}
                    >
                      <img src={button.imgSrc} alt={button.title} />
                    </div>
                    <p>{button.title}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="right">
              <div className="wrap">
                <div className="left">
                  <img
                    src={buttons[activeIndex].imgRight}
                    alt={buttons[activeIndex].title}
                  />
                </div>
                <div className="right">
                  <div className="content">
                    <h1>{buttons[activeIndex].title}</h1>
                    <p>{buttons[activeIndex].description}</p>
                    <Button
                      title={"Generate QR CODE"}
                      redirect={"/qr-editor"}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="sec-six">
          <div className="containerr">
            <div className="left">
              <div className="content">
                <h1>Keep it simple with QR Creator</h1>
                <p>
                  Generating your own QR codes is quick and simple with QR
                  Creator. <br />
                  <br />
                  With a wide range of designs and features to choose from, you
                  can easily create QR codes that work for you.
                </p>
                <Button title={"Generate QR Code"} redirect={"/qr-editor"} />
              </div>
            </div>
            <div className="right">
              <div className="one">
                <div className="cardd">
                  <div className="wrap">
                    <img
                      src="/assets/images/match-your-brand.png"
                      alt="match-your-brand"
                      width={88}
                    />
                    <h2>Match your brand</h2>
                  </div>
                  <p>
                    Customize your codes. Choose the shapes, logos, and colors
                    that fit with your brand. Your QR codes, your design!
                  </p>
                </div>
                <div className="cardd">
                  <div className="wrap">
                    <img
                      src="/assets/images/data-driven-decision.png"
                      alt="data-driven-decision"
                      width={88}
                    />
                    <h2>Make data-driven decisions</h2>
                  </div>
                  <p>
                    No more guesswork. Make informed marketing strategy
                    decisions based on QR code tracking and analysis.
                  </p>
                </div>
                <div className="cardd">
                  <div className="wrap">
                    <img
                      src="/assets/images/understand-your-audience.png"
                      alt="understand-your-audience"
                      width={88}
                    />
                    <h2>Understand your audience</h2>
                  </div>
                  <p>
                    Discover when and where your QR codes are scanned. Our
                    geographical insights will help you finetune your campaigns.
                  </p>
                </div>
              </div>
              <div className="two">
                <div className="cardd">
                  <div className="wrap">
                    <img
                      src="/assets/images/keep-it-fresh.png"
                      alt="keep-it-fresh"
                      width={88}
                    />
                    <h2>Keep it fresh</h2>
                  </div>
                  <p>
                    Need to change your QR code content or switch up the design?
                    No problem! Edit and manage your dynamic QR codes at any
                    time.
                  </p>
                </div>
                <div className="cardd">
                  <div className="wrap">
                    <img
                      src="/assets/images/create-unlimited-code.png"
                      alt="create-unlimited-code"
                    />
                    <h2>Create unlimited codes</h2>
                  </div>
                  <p>
                    Generate as many dynamic QR codes as you want. The easy way
                    to share your website, videos, business info, and more!
                  </p>
                </div>
                <div className="cardd">
                  <div className="wrap">
                    <img
                      src="/assets/images/choose-your-format.png"
                      alt="choose-your-format"
                      width={88}
                    />
                    <h2>Choose your format</h2>
                  </div>
                  <p>
                    From printed materials to digital displays, download your QR
                    codes in the format that works best. We’ve got you!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="sec-seven">
          <h1>
            New to QR codes?
            <br />
            Here’s what you need to know
          </h1>
          <FAQ tabs={tabs} faqData={faqData} tabColor={"#fff"} />
          {/* <div className="tabs-con">
            <div className="btn-tabs-con">
              <p
                className={activeTab === "basicInfo" ? "active" : ""}
                onClick={() => handleClickTab("basicInfo")}
              >
                Basic Information
              </p>
              <p
                className={activeTab === "creatingDesigning" ? "active" : ""}
                onClick={() => handleClickTab("creatingDesigning")}
              >
                Creating & Designing
              </p>
              <p
                className={activeTab === "scanningPrinting" ? "active" : ""}
                onClick={() => handleClickTab("scanningPrinting")}
              >
                Scanning & Printing
              </p>
              <p
                className={activeTab === "aiGenerated" ? "active" : ""}
                onClick={() => handleClickTab("aiGenerated")}
              >
                AI-generated QR code
              </p>
            </div>
            <div className="faq-con">
              <ul>
                {currentFaqs.map((faq, index) => (
                  <li key={index}>
                    <div className="one" onClick={() => handleClickFaq(index)}>
                      <div className="wrap">
                        <p>{faq.question}</p>
                        <div className="border1">
                          {activeFaq !== index ? (
                            <FaChevronDown />
                          ) : (
                            <FaChevronUp />
                          )}
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
          </div> */}
        </section>
        <section className="sec-eight">
          <div className="content">
            <h1>Want to know more?</h1>
            <p>Check out our FAQ to answer all your QR code questions.</p>
            <Button title={"Find out more"} />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
