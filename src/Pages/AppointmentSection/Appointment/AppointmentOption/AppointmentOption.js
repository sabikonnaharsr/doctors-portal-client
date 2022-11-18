import React from 'react';
import { } from 'react-day-picker';

const AppointmentOption = ( { p, setTreatmentsType } ) => {
    const {name, slots} = p;
    return (
        <div>
           <div className=" gap-4">
            <div className=" sm:max-w-sm sm:mx-auto ">
                <div className="p-8 bg-white border rounded shadow-sm">
                <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                         
                    <label 
                    disabled={slots.length === 0}
                    onClick={()=> setTreatmentsType(p)} htmlFor="booking-modal" className="btn btn-ghost mb-3 bg-primary">
                     Book Appointment
                    </label> 
                    <br />
                    <p
                   
                    className="transition-colors text-slate-700 duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                    aria-label="Category"
                    >
                    {slots.length > 0 ? slots[0]: 'Try another day'}
                    </p>{' '}
                    {/* <span className="text-gray-600">— 1 Feb 2022</span> */}
                    <p
                    className="transition-colors text-slate-500 duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                    aria-label="Category"
                    >
                    {slots.length} {slots.length > 1 ? 'spaces': 'space'}Available
                    </p>{' '}      
                </p>
                <p
                    
                    aria-label="Article"
                    title="Jingle Bells"
                    className="inline-block mb-3 text-2xl font-bold leading-5 text-primary transition-colors duration-200 hover:text-deep-purple-accent-400">
                    {name}
                </p>
                 
                <div className="flex items-center">
                    <a href="/" aria-label="Author" title="Author" className="mr-3">
                    <img
                        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                        alt="avatar"
                        className="object-cover w-10 h-10 rounded-full shadow-sm"/>
                    </a>
                    <div>
                    <a
                        href="/"
                        aria-label="Author"
                        title="Author"
                        className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400" >
                        Vasile Melinte
                    </a>
                    <p className="text-sm font-medium leading-4 text-gray-600">
                        Author
                    </p>                
                    </div>
                </div>
                </div>
            </div>
          </div>
        </div>
    );
};

export default AppointmentOption;