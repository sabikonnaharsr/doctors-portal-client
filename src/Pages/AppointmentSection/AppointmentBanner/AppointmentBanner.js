import React, { useState } from 'react';
import sit from '../../../assets/images/chair.png'
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import { DayPicker } from 'react-day-picker';
import appointment from '../../../assets/images/treatment.png'


// 35363A pc background color
const AppointmentBanner = ({selectedDate, setSelectedDate}) => {

 

    return (
        <header style={{background: `url(${appointment})`}} >
            <section class="overflow-hidden mt-20 bg-gray-50 sm:grid sm:grid-cols-2">
                <div class="p-8 md:p-12 lg:px-16 lg:py-18">
                  <div class="mx-auto max-w-xl text-slate-700 text-center sm:text-left">
                      <DayPicker
                        mode = 'single'
                        selected = {selectedDate}
                        onSelect={setSelectedDate}
                      />     
                    <div class="mt-4 md:mt-8">
                      <PrimaryButton>Get Appointment Today</PrimaryButton>
                    </div>
                  </div>
                </div>
                   <img
                    alt="Dentist Chair"
                    src={sit}
                    class="h-56 w-full object-cover sm:h-full" />
            </section>
         </header>
    );
};

export default AppointmentBanner;