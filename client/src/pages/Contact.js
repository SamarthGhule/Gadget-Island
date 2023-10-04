import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="row contactus1 ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <br/>
          <br/>
          <br/>
          <h1 className="bg-dark p-2 text-white text-center">Contact Us</h1>
          <p className="text-justify mt-2">
          <br/>
          <br/>
            If you have any query regarding your product, feel free to call anytime we are 24X7
            available...💁
          </p>
          <p className="mt-3">
            <BiMailSend /> : www.help@gadgetisland.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 98765 43210
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-0000-0000 (Toll Free)
          </p>

        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

        </div>
      </div>
    </Layout>
  );
};

export default Contact;
