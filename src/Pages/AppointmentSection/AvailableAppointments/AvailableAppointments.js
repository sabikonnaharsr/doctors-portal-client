import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentOption from '../Appointment/AppointmentOption/AppointmentOption';
import BookingModal from '../BookingModal/BookingModal';


const AvailableAppointments = ({selectedDate}) => {
    // const [appointmentOptions, setAppointmentOptions] =  useState([]);
    const [treatmentsType, setTreatmentsType] = useState(null)

    // new system two
    const {data:appointmentOption = []} = useQuery({
        queryKey: ['appointmentOption'],
        queryFn: ()=>  fetch('http://localhost:5000/appointmentOption')
        .then(res => res.json())
    })
console.log(appointmentOption)
    // new system three
    // const {data: appointmentOption , isLoading} = useQuery({
    //     queryKey: ['appointmentOption' ],
    //     queryFn: async()=> {
    //         const res = await fetch('http://localhost:5000/appointmentOption');
    //         const data = await res.json();
    //         return data
    //     }
    // })



    // old system one 
    // useEffect(() => {
    //     // show all data
    //     fetch('http://localhost:5000/appointmentOption')
    //     .then(res => res.json())
    //     .then(data => setAppointmentOptions(data))
    // },[])

console.log(treatmentsType)
    return (
        <div >
            <p className='text-center text-primary font-bold text-2xl mt-10'>Available Appointments on {format(selectedDate, 'PP')} </p>
             <div className='grid gird-cols-1 md:grid-cols-3 lg:gird-cols-3 gap-4 '>
                {
                      appointmentOption.map(option => <AppointmentOption
                      key={option._id}
                      p={option} 
                      setTreatmentsType={ setTreatmentsType}  

                      ></AppointmentOption>)
                }
             </div>
            { 
            treatmentsType &&
            <BookingModal
            treatmentsType={treatmentsType}
            setTreatmentsType={setTreatmentsType} 
            selectedDate={selectedDate}
            ></BookingModal>
             }
        </div>
    );
};

export default AvailableAppointments;