// import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import ServiceCard from '../ServiceCard/ServiceCard';


const ServiceCards = () => {
    const serviceData =[
        {
           id: 1,
           name: 'Fluoride Treatment',
           description: 'Description',
           img: fluoride
        },
        {
           id: 2,
           name: 'Cavity Filling',
           description: 'Description',
           img: cavity
        },
        {
           id: 3,
           name: 'Teeth Whitening',
           description: 'Description',
           img: whitening
        }
    ]
    
    return (
        <div>
            <h1 className='text-5xl text-primary  font-bold uppercase text-center mt-10'>Our Services</h1>
            <h3 className='text-2xl text text-center mb-5'>Services We Provide</h3>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 mb-4 lg:grid-cols-3'>
               {
                serviceData.map(card => <ServiceCard key={card.id} card={card}></ServiceCard>)
               }
            </div>
       </div>
   );
};

export default ServiceCards;