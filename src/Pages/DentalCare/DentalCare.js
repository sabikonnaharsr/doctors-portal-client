import React from "react";

const DentalCare = ({ dentalCare }) => {
  const { img, title, description } = dentalCare;

  return (
    <div>
      <section className="max-w-screen-xl mx-auto">
        <div class="grid grid-cols-2 gap-6 items-center">
          <div class="">
            <img alt="Party" src={img} class="w-3/5" />
          </div>

          <div class="">
            <h2 class="text-3xl font-bold sm:text-4xl">{title}</h2>
            <p class="mt-4 text-gray-600">{description}</p>

            <a
              href="/"
              class="mt-8 inline-flex items-center rounded border border-indigo-600 bg-indigo-600 bg-gradient-to-r from-primary to-secondary px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
            >
              <span class="text-sm font-medium"> Get Started </span>
              <svg
                class="ml-3 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DentalCare;
