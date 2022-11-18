import React from 'react';
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
import ClientReview from '../ClientReview/ClientReview';
import quote from '../../../assets/icons/quote.svg'


const ClientReviews = () => {
  
    const clientData = [
        {   
            id: 1,
            name: 'Nick',
            img: people1,
            description : 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California'
        },
        {   
            id: 2,
            name: 'Henry Wilson',
            img: people2,
            description : 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California'
        },
        {   
            id: 3,
            name: 'Pitar Katar',
            img: people3,
            description : 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California'
        }
    ]
    return (
        <div>
            <section className='flex justify-between'>
                <h1 className='text-7xl text-primary font-bold'>Our Patient says</h1>
              <figure >
                <img className='w-24 lg:w-48' src={quote} alt="" />
              </figure>
            </section>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-3 mb-4 lg:grid-cols-3'>
                {
                  clientData.map(client => <ClientReview key={client.id} c={client}></ClientReview>)
                }
            </div>
        </div>
    );
};

export default ClientReviews;