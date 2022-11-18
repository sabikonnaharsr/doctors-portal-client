import React from "react";
import ContactUs from "../../ContactSection/ContactUs/ContactUs";
import DentalCares from "../../DentalCares/DentalCares";
import DoctorsDetails from "../../DoctorsDetails/DoctorsDetails";
import InfoCards from "../../InfoCardSection/InfoCards/InfoCards";
import MakeAppointment from "../../MakeAppointment/MakeAppointment";
import ClientReviews from "../../ReviewSection/ClientReviews/ClientReviews";
import ServiceCards from "../../ServiceSection/ServiceCards/ServiceCards";
import Testimonial from "../../TestimonialSection/Testimonial/Testimonial";
import Testimonials from "../../TestimonialSection/Testimonials/Testimonials";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <InfoCards></InfoCards>
      <ServiceCards></ServiceCards>
      <DentalCares></DentalCares>
      <MakeAppointment></MakeAppointment>
      {/* <Testimonials></Testimonials> */}
      {/* <Testimonial></Testimonial> */}
      <ClientReviews></ClientReviews>
      <DoctorsDetails></DoctorsDetails>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
