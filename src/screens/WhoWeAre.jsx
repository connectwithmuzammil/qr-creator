import React from "react";

const WhoWeAre = () => {
  return (
    <div className="who-we-are">
      <div className="heading">
        <h1>Who we are</h1>
      </div>
      <div className="content">
        <div className="wrap">
          <p>
            We're not a company. We're a group of people who love QR codes and
            believe in their power to transform your business, campaign, or
            organization.
          </p>
          <p>
            We created QR Creator as a way to make it easy for you to generate
            your own QR codes and then manage them once they're out there in the
            world.
          </p>
          <p>
            Do you have a business that needs to track how many people are
            scanning your QR code? We can do that for you.
          </p>
          <p>
            Are you an event planner who wants to make sure everyone knows about
            your event, but doesn't want to spend all day making flyers? Let us
            help!
          </p>
          <p>
            We can help generate QR codes for all of your marketing materials,
            so you can get back to doing what you love: managing your business!
          </p>
          <div className="bottom-con">
            <h5>Here are some of the things you can do with QR Creator:</h5>
            <ul>
              <li>
                Generate unlimited numbers of dynamic QR codes that look exactly
                how you want them to look.
              </li>
              <li>
                Edit those codes at any time to change the information they
                contain.
              </li>
              <li>
                Track QR scanning activity and get insightful data such as
                number of scans by city, country, and operating system.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
