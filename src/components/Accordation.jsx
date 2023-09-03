import React, { useState } from "react";
import AccorCard from "./AccorCard";

function Accordation() {

  
  const content = [
    {
      title: "What happens if my payment fails?",
      overview:
        "In case of payment failure, please retry using the same or different payment option: When re-trying using the same payment option, please check your account details for any errors.For any clarifications and help, you can also get in touch with us via email on customercare@campusshoes.com or Call : +91-11-43272500.",
    },
    {
        title:"How do I pay?",
        overview:"The payment options we support are: Credit Card, Debit Card, Net Banking.For Supported Netbanking & other payment options, please refer CC Avenue website"
    },
    {
        title:"What is the estimated delivery time?",
        overview:"Campus shoes generally ship the items within the time specified below:- Region Estimated Delivery Time NCR Delhi 2 to 3 Business Days North Region 3 to 5 Business Days Rest of India 4 to 7 Business Days"
    },
    {
        title:"I have requested an exchange, when will I get it?",
        overview:"Once an exchange request is created, we send you an email detailing the pickup process as well as provide details about the exchange. The exchange item is delivered to you at the time of pick-up, wherever possible. In all other areas, the exchange is initiated after the originally delivered item is picked up/received."
    },
    {
        title:"Do I have to return the free gift when I return a product?",
        overview:"Yes. The free gift is included as part of the item order and needs to be returned along with the originally delivered product."
    },
    {
        title:"Can I return part of my order?",
        overview:"Yes, a return can be created at item level and if you have ordered multiple items, you can initiate a return for a partial quantity."
    }
  ];
  return (
    <div className="m-8">
      <h2 className="text-2xl font-semibold">FAQ</h2>
      <div className="flex flex-col gap-3 my-2">
          {
            content.map((item,index)=>(<div><AccorCard item={item} index={index}/></div>))
          }
      </div>
    </div>
  );
}

export default Accordation;
