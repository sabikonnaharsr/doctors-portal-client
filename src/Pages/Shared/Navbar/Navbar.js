import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
           <header aria-label="Site Header" className="border-b border-gray-100">
                <div className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between sm:px-6 lg:px-8">
                <div className="flex items-center">
          <div class="dropdown">
         <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/myReview'>My Review</Link></li>
            <li><Link to='/appointments'>Appointments</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
        </ul>
      </div>
                   
    {/* dropdown end*/}
    
    <form class="mb-0 hidden lg:flex">
        <div class="relative">
          <input
            class="h-10 rounded-lg border-gray-200 pr-10 text-sm placeholder-gray-300 focus:z-10"
            placeholder="Search..."
            type="text"
          />

          <button
            type="submit"
            class="absolute inset-y-0 right-0 mr-px rounded-r-lg p-2 text-gray-600"
          >
            <span class="sr-only">Submit Search</span>
            <svg
              class="h-5 w-5"
              fill="currentColor"
              view box="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clip-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                fill-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </form>
                </div>

            <div className="flex flex-1 items-center justify-end">
            <nav aria-label="Site Nav"
              className="hidden lg:flex lg:gap-4 lg:text-xs lg:font-bold lg:uppercase lg:tracking-wide lg:text-gray-500">
                <Link
                to="/"
                className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700">
               Home
                </Link>

                <Link
                to="/about"
                className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700">
                About
                </Link>

                <Link
                    to="/appointments"
                    className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700">
                    Appointments
                </Link>

                <Link
                    to="/myReview"
                    className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700">
                    My Review
                </Link>
                <Link
                    href="/contact"
                    className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700">
                    Contact
                </Link>
            </nav>

          <div className="ml-8 flex items-center">
            <div
               className="flex items-center divide-x divide-gray-100 border-x border-gray-100"> 
                {/* listt */}
               <div className="hidden items-center gap-4 lg:flex">
                <Link to="/login"className="rounded-lg bg-gray-100 px-5 py-2 text-sm font-medium text-gray-600">
                    Log in
                </Link>
                <Link
                to="/signUp"
                className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white">
                Sign up
             </Link>
          </div>
          </div> 
         {/* <div className="border-t border-gray-100 lg:hidden">
           <nav className="flex items-center justify-center overflow-x-auto p-4 text-sm font-medium">
            <Link className="flex-shrink-0 pl-4 text-gray-900" href="">About</Link>
            <Link className="flex-shrink-0 pl-4 text-gray-900" href="">Blog</Link>
            <Link className="flex-shrink-0 pl-4 text-gray-900" href="">Projects</Link>
            <Link className="flex-shrink-0 pl-4 text-gray-900" href="">Contact</Link>
          </nav>
           list end
        </div>  */}
     </div> 
    </div>
  </div>
</header>
</div>
);
};

export default Navbar;