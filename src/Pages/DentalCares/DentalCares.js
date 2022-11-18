import React from "react";
import treatment from "../../assets/images/treatment.png";
import DentalCare from "../DentalCare/DentalCare";

const DentalCares = () => {
  const dentalData = [
    {
      id: 1,
      img: treatment,
      title: "Exceptional Dental Care, On Your Terms",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page",
    },
  ];

  return (
    <div>
      <div className="">
        {dentalData.map((dental) => (
          <DentalCare key={dental.id} dentalCare={dental}></DentalCare>
        ))}
      </div>
    </div>
  );
};

export default DentalCares;
