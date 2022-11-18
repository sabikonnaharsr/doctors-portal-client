import React, { useContext, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { AuthContext } from '../../../context/AuthProvider';
import { FaBeer, FaGoogle, FaGithub, FaFacebook } from "react-icons/fa"; 



const SignUp = () => {

  const [error, setError] = useState(" ");
  const [accepted, setAccepted] = useState(false);
  const { createUser, googleSignIn, githubSingIn, updateUser } =
    useContext(AuthContext);
  const navigate = useNavigate();
  


  // user profile update
  const updateProfileInfo = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    updateUser(profile)
      .then((result) => {
        navigate('/')
        const user = result.user;
        console.log(user);
      })
      .then((err) => console.error("Error", err));
  };



  // signIn with email, password
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photoURL, email, password);
    

    // userCreate
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateProfileInfo(name, photoURL);
        console.log(user);
        form.reset();
        navigate("/");
        error("");
      })
      .catch((err) => {
        console.error(err);
        setError(error.message);
      });
  };


  // google signIn
  const googleProvider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    googleSignIn(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((err) => {
        console.error(err);
        setError(error.message);
      });
  };


  // github signIn
  const githubProvider = new GithubAuthProvider();
  const handleGithubSingIn = () => {
    githubSingIn(githubProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        alert("user successfully login");
      })
      .catch((e) => alert(e.message));
  };




    return (
        <div>
         <div className="relative">
          <img
            src="https://img.freepik.com/free-photo/green-wall-mockup-with-green-plant-shelf3d-rendering_41470-4114.jpg?size=626&ext=jpg&ga=GA1.2.1510053171.1664396538"
            className="absolute inset-0 object-cover w-full h-full"
            alt=""
          />
          <div className="relative bg-opacity-75 bg-deep-purple-accent-700">
            <svg
              className="absolute inset-x-0 bottom-0 text-white"
              viewBox="0 0 1160 163"
            >
              <path
                fill="currentColor"
                d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
              />
            </svg>
            <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
              <div className="flex flex-col items-center justify-between xl:flex-row">
                <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                  <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                    The quick, brown fox <br className="hidden md:block" />
                    jumps over a lazy dog
                  </h2>
                  <p className="max-w-xl mb-4 text-base text-gray-200 md:text-lg">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudan, totam rem aperiam, eaque ipsa
                    quae.
                  </p>
                  <a
                    href="/"
                    aria-label=""
                    className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700"
                  >
                    Learn more
                    <svg
                      className="inline-block w-3 ml-2"
                      fill="currentColor"
                      viewBox="0 0 12 12"
                    >
                      <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                    </svg>
                  </a>
                </div>
                <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                  <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                    <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                      Sign up for updates
                    </h3>
                    <form onSubmit={handleSubmit}>
                      <div className="mb-1 sm:mb-2">
                        <label
                          htmlFor="firstName"
                          className="inline-block mb-1 font-medium"
                        >
                          First name
                        </label>
                        <input
                          placeholder="John"
                          required
                          type="text"
                          className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                          id="firstName"
                          name="firstName"
                        />
                      </div>
                      <div className="mb-1 sm:mb-2">
                        <label
                          htmlFor="lastName"
                          className="inline-block mb-1 font-medium"
                        >
                          Last name
                        </label>
                        <input
                          placeholder="Doe"
                          required
                          type="text"
                          className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                          id="lastName"
                          name="lastName"
                        />
                      </div>
                      <div className="mb-1 sm:mb-2">
                        <label
                          htmlFor="photoURL"
                          className="inline-block mb-1 font-medium"
                        >
                          Photo URL
                        </label>
                        <input
                          placeholder="photoURL"
                          type="photoURL"
                          className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                          id="photoURL"
                          name="photoURL"
                        />
                      </div>
                      <div className="mb-1 sm:mb-2">
                        <label
                          htmlFor="email"
                          className="inline-block mb-1 font-medium"
                        >
                          E-mail
                        </label>
                        <input
                          placeholder="john.doe@example.org"
                          required
                          type="text"
                          className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                          id="email"
                          name="email"
                        />
                      </div>
                      <div className="mb-1 sm:mb-2">
                        <label
                          htmlFor="email"
                          className="inline-block mb-1 font-medium"
                        >
                          Password
                        </label>
                        <input
                          placeholder="john.doe@example.org"
                          required
                          type="password"
                          className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                          id="password"
                          name="password"
                        />
                      </div>  
                      <div>
            <label for="password" class="text-sm font-medium">Password</label>

            <div class="relative mt-1">
            <input
                name='signup'
                type="submit"
                value='signup'
                id=""
                class="w-full text-center bg-slate-500 rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                placeholder="Enter password"/>
            </div>
        </div>  
                 <p className="mt-4 text-sm text-gray-500 sm:mt-0 text-center">
                  Already have an account
                  <span>
                    
                  <Link to="/login" className="text-blue-600 font-medium underline">
                    Login
                  </Link>
                  .
                  </span>
                </p>
                    </form>
                  </div>
                   {/* icons */}
                   <span className=" flex justify-center  text-4xl gap-4 mt-3 text-center">
                      <Link
                        onClick={handleGoogleSignIn}
                        className="text-white bg-sky-400 rounded-full"
                      >
                        <FaGoogle></FaGoogle>
                      </Link>
                      <Link onClick={handleGithubSingIn} className="text-white bg-black rounded-full">
                        <FaGithub></FaGithub>
                      </Link>
                      <Link className="text-white bg-sky-500 rounded-full">
                        <FaFacebook></FaFacebook>
                      </Link>
                    </span>
                </div>
              </div>
            </div>
          </div>
        </div>
       </div>
    );
};

export default SignUp;