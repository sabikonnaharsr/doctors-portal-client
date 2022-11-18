import React from 'react';
import img from '../../../assets/images/chair.png'

const Banner = () => {
    return (
        <div>
           <section>
                <div class="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
                    <div class="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
                    <div class="relative z-10 lg:py-16">
                        <div class="relative h-64 sm:h-80 lg:h-full">
                        <img
                            alt="House"
                            src={img}
                            class="absolute inset-0 h-full w-full object-cover"/>
                        </div>
                    </div>
                    <div class="relative flex items-center bg-gray-100">
                        <span
                        class="hidden lg:absolute lg:inset-y-0 lg:-left-16 lg:block lg:w-16 lg:bg-gray-100">       
                        </span>
                        <div class="p-8 sm:p-16 lg:p-24">
                        <h2 class="text-2xl font-bold sm:text-3xl">
                           Your New Smile Starts Here
                        </h2>
                        <p class="mt-4 text-gray-600">
                           <h2 className='text-2xl'> General Dentistry</h2>
                            divider
                            We not only fix urgent dental problems, but examine your mouth more closely to ensure that all your oral health issues are thoroughly understood. At Braeside Dental we offer a full range of general dental services to all patients, and if we can’t do it then we can refer you to a local dental specialist who can. Starting with the humble dental check-up, we provide top quality services at affordable prices.
                        </p>
                        <a
                            href="/"
                            class="mt-8 inline-block rounded border border-indigo-600 bg-[#0FCFEC] bg-gradient-to-r from-primary to-secondary px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500">
                            Get Started
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;