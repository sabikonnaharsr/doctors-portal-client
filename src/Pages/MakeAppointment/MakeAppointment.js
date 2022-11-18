import React from 'react';
import { Link } from 'react-router-dom';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../components/PrimaryButton/PrimaryButton';


const MakeAppointment = () => {

    
    return (
       
         <section  style={{background: `url(${appointment})`}}>
           
            <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 sm:py-18 lg:px-8">
                {/* <div class="max-w-3xl">
                <h2 class="text-3xl mt text-center text-teal-400 font-bold sm:text-4xl">
                   Dental Filling in Launceston.
                </h2>
                </div> */}

                <div class="mt-5 grid grid-cols-1 card card-side shadow-xl gap-8 lg:grid-cols-2 lg:gap-16">
                <div class="relative  sm:h-96 lg:h-full">
                    <img
                    alt=""
                    src= {doctor}
                   /*  lg:w-1/2 */
                    class="absolute -mt-32 inset-0 hidden  md:block lg:w-4/2 w-full object-cover"/>
                </div>

            <div class="lg:py-10">
            <article class="space-y-2 text-gray-600">
             <h2 className='text-primary font-bold'>Appointment</h2>
            <p className='text-white'>
            <h2 className='text-2xl text-white font-bold '>Make An Appointment Today</h2>
             understood. At Braeside Dental we offer a full range of general dental services to all patients, and if we can’t do it then we can refer you to a local dental specialist who can. Starting with the humble dental check-up, we provide top quality services at affordable prices.
            </p>
            <p className='text-white'>
            Guided Biofilm Therapy (GBT) is a Swiss innovation in oral hygiene which is an alternative way of professionally cleaning the teeth. It uses 'Airflow' technology to remove all plaque (biofilm) stains and hard deposits from teeth, and is suitable for use with fillings, braces, crowns, veneers, implants and gum disease.
            </p>
            {/* <Link
                to="/"
                class="mt-8 inline-block rounded border border-indigo-600 bg-[#0FCFEC] bg-gradient-to-r from-primary to-secondary px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500">
                 Get Started
            </Link> */}
            <PrimaryButton>Appointment</PrimaryButton>
        </article>
      </div>
    </div>
  </div>
</section>

       
    );
};

export default MakeAppointment;