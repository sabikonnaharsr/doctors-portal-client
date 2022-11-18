import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Appointment from "../../Pages/AppointmentSection/Appointment/Appointment";
import AppointmentDate from "../../Pages/AppointmentSection/AppointmentDate/AppointmentDate";
import AvailableAppointments from "../../Pages/AppointmentSection/AvailableAppointments/AvailableAppointments";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home/Home";
import InfoCard from "../../Pages/InfoCardSection/InfoCard/InfoCard";
import InfoCards from "../../Pages/InfoCardSection/InfoCards/InfoCards";
import Login from "../../Pages/Login/Login/Login";
import SignUp from "../../Pages/Login/SignUp/SignUp";
import MyLogin from "../../Pages/MyLogin/MyLogin";
import Testimonial from "../../Pages/TestimonialSection/Testimonial/Testimonial";


export const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/signup',
            element: <SignUp></SignUp>
        },
        {
          path: '/infoCards',
          element: <InfoCards></InfoCards>
        },
        {
          path: '/infoCard',
          element: <InfoCard></InfoCard>
        },
        {
          path: '/appointment',
          element: <Appointment></Appointment>
        },
        {
          path: '/availableAppointments',
          element: <AvailableAppointments></AvailableAppointments>
        },
        {
          path: 'myLogin',
          element: <MyLogin></MyLogin>
        },
        {
          path: '/testimonial',
          element: <Testimonial></Testimonial>
        },
        {
          path: '/appointmentDate',
          element: <AppointmentDate></AppointmentDate>
        }
      ]
    },
    {
       path: '*',
       element: <ErrorPage></ErrorPage>
    }
])