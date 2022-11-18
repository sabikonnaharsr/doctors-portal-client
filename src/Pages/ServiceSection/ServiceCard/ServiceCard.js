import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({card}) => {
  console.log(card)
  const {description, name, img} = card;


    return (
        <div>
           <Link to=""class="relative block rounded-sm border-t-4 border-pink-600 p-8 pb-24 shadow-xl">
             <h3 class="text-4xl font-bold">100+</h3>
             <p class="mt-4 text-lg font-medium text-gray-500">
                  {name}
             </p>
             <p class="mt-4 text-lg font-medium text-gray-500">
                  {description}
             </p>
             <span class="absolute bottom-8 right-8">
             <img src={img} alt="" />
             </span>
          </Link>
        </div>
      );
    };

export default ServiceCard;