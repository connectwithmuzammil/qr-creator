import React from "react";
import { FAQ } from "../components";

const FaqPage = () => {
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
    <div className="faq">
      <div className="top">
        <h1>FAQ</h1>
      </div>
      <div className="bottom">
        <FAQ tabs={tabs} faqData={faqData} tabColor={"#000"} />
      </div>
    </div>
  );
};

export default FaqPage;
