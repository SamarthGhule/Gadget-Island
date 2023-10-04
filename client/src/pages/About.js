import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiUnderline } from "react-icons/bi";

const About = () => {
  return (
    <Layout title={"About Us - Gadget Island"}>
      <div className="row contactus">
        {/* <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div> */}
        <div className="col-md-4" style={{width:"100%"}}>
          <p className="text-justify mt-2">
  
          <br/>  
          <br/>  
          <br/>  
          <h1 className="abouth1">Gadget Island</h1>
          <h2 className="abouth2">Your Ultimate Destination for Electronic Gadgets</h2>
          
          <br/>
          <br/>
          <br/>
               
          Welcome to Gadget Island!

          <br/>
          <br/>

          Your passport to a world of cutting-edge electronic 
          gadgets and technology wonders. 
        
          <br/>

          We are your premier online destination for all things electronic, offering 
          a treasure trove of the latest and greatest devices to satisfy every 
          tech enthusiast's cravings.
          
          <br/>
          <br/>
          <br/>
          
          <div className="about-headings">Our Story</div>

          <br/>

          At Gadget Island, our journey began with a simple yet profound vision to 
          bridge the gap between technology and your everyday life.<br/> 
          We understood that in this rapidly evolving digital age, staying ahead of the 
          curve requires access to the finest electronic innovations.<br/> 
          That's why we embarked on a mission to curate an extensive collection of 
          electronic gadgets that cater to your ever-evolving needs.

          <br/>
          <br/>
          <br/>
          
          <div className="about-headings">What Sets Us Apart?</div>  

          <br/>

          Wide Range of Selection:
          From the hottest smartphones and tablets to smart home
          devices and wearables our extensive catalog spans every facet 
          of the electronic realm.
          <br/>
          <br/>

          Quality Assurance : We believe in offering only the best. 
          Our team meticulously selects products from trusted brands, ensuring superior 
          quality, performance, and durability.

          <br/>
          <br/>

          Competitive Pricing : We understand the value of your hard-earned money. 
          That's why we strive to provide competitive pricing without compromising on 
          product excellence.

          <br/>
          <br/>

          User-Friendly Experience : Our intuitive interface, detailed product descriptions, and customer reviews 
          ensure that you make informed decisions.

          <br/>
          <br/>

          Secure Shopping : Your security is our priority. 
          We employ the latest encryption and security measures to guarantee safe and 
          secure transactions.

          <br/>
          <br/>
          <br/>

          <div className="about-headings">Our Commitment</div>

          <br/>

          At Gadget Island, we're not just an e-commerce platform; we're your technology 
          partner. 

          <br/>

          Our commitment goes beyond providing you with exceptional gadgets.<br/> 
          We're dedicated to enhancing your technical lifestyle by delivering the latest 
          trends and innovations right at your doorstep.

         <br/>
         <br/>

          Thank you for choosing Gadget Island as your trusted source for electronic 
          gadgets. <br/>We look forward to being part of your tech adventures and helping you 
          stay ahead in the ever-evolving digital landscape.

          <br/>
          <br/>

           Explore - Experience - Evolve. Welcome to Gadget Island once again. 
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
