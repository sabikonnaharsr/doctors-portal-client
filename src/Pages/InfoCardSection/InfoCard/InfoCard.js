import React from "react";
import { Link } from "react-router-dom";



const InfoCard = ({ infoCards }) => {
  const { name, bgClass, description, icon } = infoCards;


  return (
    // card card-side shadow-xl
    <div className={`${bgClass}`}>
      <Link to="/blog" className="group block  h-56">
        <div className= "relative flex h-full items-end rounded-3xl border-4 border-black  p-8 transition group-hover:-translate-x-2 group-hover:-translate-y-2 group-hover:shadow-[8px_8px_0_0_#000]">
          <div className="lg:group-hover:absolute lg:group-hover:opacity-0">
            <span
              className="text-3xl sm:text-4xl"
              role="img"
              aria-hidden="true">
              <img src={icon} alt="" />
            </span>
            <p className="mt-4 text-xl font-bold sm:text-2xl">{name}</p>
          </div>

          <div className="absolute opacity-0 lg:group-hover:relative lg:group-hover:opacity-100">
            <h3 className="text-2xl font-bold">pp</h3>
            <p className="mt-4 text-lg font-medium leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default InfoCard;
