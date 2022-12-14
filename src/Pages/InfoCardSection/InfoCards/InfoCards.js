import React from "react";
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";
import InfoCard from "../InfoCard/InfoCard";



const InfoCards = () => {
  const cardData = [
    {
      id: 1,
      name: "Opening Hours",
      description: "Open 9.00 am to 5.00pm everyday",
      icon: clock,
      bgClass: " bg-gradient-to-r from-primary to-secondary ",
    },
    {
      id: 2,
      name: "Our Location",
      description: "Open 9.00 am to 5.00pm everyday",
      icon: marker,
      bgClass: "bg-accent",
    },
    {
      id: 3,
      name: "Contact Us Now",
      description: "Open 9.00 am to 5.00pm everyday",
      icon: phone,
      bgClass: " bg-gradient-to-r from-primary to-secondary ",
    },
  ];

  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-3 mb-4 lg:grid-cols-3 ">
      {cardData.map((card) => (
        <InfoCard key={card.id} infoCards={card}></InfoCard>
      ))}
    </div>
  );
};

export default InfoCards;
