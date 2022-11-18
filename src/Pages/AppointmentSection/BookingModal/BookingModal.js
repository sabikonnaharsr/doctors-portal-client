import { format } from "date-fns/esm";
import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";

const BookingModal = ({ treatmentsType,setTreatmentsType ,selectedDate}) => {
  const {name, slots} = treatmentsType;
  const date = format(selectedDate, 'PP')  //treatment is appointmentOption different name
  const {user} = useContext(AuthContext);
  console.log(user)

  const handleBooking= (e) =>{
    e.preventDefault();
    const form = e.target;
    const phone = form.phone.value;
    const slot = form.slot.value;
    const name = form.name.value;
    const email = form.email.value;
    console.log(name, date, email, phone, slot) 
    // [3, 5, 5].map((value, i) => console.log(value))
    const booking = {
      appointmentDate: date,
      treatment: name,
      patient: name,
      slot,
      email,
      phone,

    }
    console.log(booking)
    setTreatmentsType(null)
  } 

  return (
    <div>
       {/* Put this part before </body> tag */}
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
       <div className="modal">
        <div className="modal-box relative text-primary">
          <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="text-lg text-slate-600 font-bold">{name}</h3>

           <form onSubmit={handleBooking} className="grid gird-cols-1 gap-3 mt-5">
              <input type="text" disabled value={date} className="input w-full input-bordered"/>
              <select name="slot" className="select select-bordered w-full ">
                  {
                    slots.map((slot,i )=> <option key={(i)} value={slot}>{slot}</option>)
                  } 
              </select>
              <input type="text" placeholder="Your Name"name="name" defaultValue={user?.displayName} disabled className="input w-full input-bordered " />
              <input type="text" placeholder="Phone Number" name="phone" className="input w-full input-bordered " required/>
              <input type="text" placeholder="Email Address" defaultValue={user?.email} disabled name="email"className="input w-full input-bordered " required/>
              <input type="text" placeholder="Type here" className="input w-full input-bordered " />
              <input className="btn btn-accent w-full max-w-xm" type="submit"value="Submit" />
           </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
