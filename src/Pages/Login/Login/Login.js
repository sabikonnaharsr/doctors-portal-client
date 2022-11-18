import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import Swal from "sweetalert2";


const Login = () => {
    const [error, setError] = useState([]);
    const {signIn} = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
  
    
    const handleLoginSubmit = (e) => {
      e.preventDefault();
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;
      console.log(email, password);
  
      signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        navigate(from, { replace: true });
        Swal.fire({
          icon: "success",
          title: "SingIn Success!",
          showConfirmButton: false,
          timer: 1500,
        });
        })
        .catch((error) => {
          setError(error.message);
          console.error("error", error);
        });

      };

    

    return (
        <div>
          <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div class="mx-auto max-w-lg">
             <h1 class="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
            Get started today
            </h1>
            <p class="mx-auto mt-4 max-w-md text-center text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati sunt
            dolores deleniti inventore quaerat mollitia?
            </p>

            <form onSubmit={handleLoginSubmit} action="" class="mt-6 mb-0 space-y-4 rounded-lg p-8 shadow-2xl">
            <p class="text-lg font-medium">Sign in to your account</p>
         <div>
            <label for="email" class="text-sm font-medium">Email</label>
            <div class="relative mt-1">
            <input
                type="email"
                id="email"
                class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                placeholder="Enter email"
            />
            <span class="absolute inset-y-0 right-4 inline-flex items-center">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
                </svg>
            </span>
            </div>
        </div>

        <div>
            <label for="password" class="text-sm font-medium">Password</label>

            <div class="relative mt-1">
            <input
                type="password"
                id="password"
                class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                placeholder="Enter password"/>

            <span class="absolute inset-y-0 right-4 inline-flex items-center">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
            </span>
            </div>
        </div>
       <button
            type="submit"
            class="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white">
            Login
        </button>
        <p class="text-center text-sm text-gray-500">
            No account?
            <Link class="underline" to="/signup">Sign up</Link>
        </p>
    </form>
  </div>
  </div>
</div>
 );
};

export default Login;