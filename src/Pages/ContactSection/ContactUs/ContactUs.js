import React from 'react';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import appointment from '../../../assets/images/appointment.png'



const ContactUs = () => {
    return (
        <div>

<section class=" " style={{background: `url(${appointment})`}}>
  <div class="mx-auto max-w-screen-xl mb-10 px-4 py-16 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
      <div class="lg:col-span-2 lg:py-12">
        <p class="max-w-xl text-lg">
          At the same time, the fact that we are wholly owned and totally
          independent from manufacturer and other group control gives you
          confidence that we will only recommend what is right for you.
        </p>

        <div class="mt-8">
          <a href="/" class="text-2xl font-bold text-pink-600">
            0151 475 4450
          </a>

          <address class="mt-2 not-italic">
            282 Kevin Brook, Imogeneborough, CA 58517
          </address>
        </div>
      </div>

      <div class="rounded-lg bg-slate-600 p-8 shadow-lg lg:col-span-3 lg:p-12">
        <form action="" class="space-y-4">
          <div>
            <label class="sr-only" for="name">Name</label>
            <input
              class="w-full rounded-lg border-gray-200 p-3 text-sm"
              name='name'
              placeholder="Name"
              type="text"
              id="name"
            />
          </div>

          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label class="sr-only" for="email">Email</label>
              <input
                name='email'
                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Email address"
                type="email"
                id="email"
              />
            </div>

            <div>
              <label class="sr-only" for="phone">Phone</label>
              <input
                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                name='phone'
                placeholder="Phone Number"
                type="text"
                id="phone"
              />
            </div>
          </div>

          <div class="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
            <div>
              <input class="sr-only" id="option1" type="radio" tabindex="-1" />
              <label
                for="option1"
                name='text'
                class="block w-full rounded-lg border border-gray-200 p-3"
                tabindex="0"
              >
                <span class="text-sm font-medium"> Option 1 </span>
              </label>
            </div>

            <div>
              <input class="sr-only" id="option2" type="radio" tabindex="-1" />
              <label
                for="option2"
                class="block w-full rounded-lg border border-gray-200 p-3"
                tabindex="0"
              >
                <span class="text-sm font-medium"> Option 2 </span>
              </label>
            </div>

            <div>
              <input class="sr-only" id="option3" type="radio" tabindex="-1" />
              <label
                for="option3"
                class="block w-full rounded-lg border border-gray-200 p-3"
                tabindex="0"
              >
                <span class="text-sm font-medium"> Option 3 </span>
              </label>
            </div>
          </div>

          <div>
            <label class="sr-only" for="message">Message</label>
            <textarea
              class="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Message"
              rows="8"
              id="message"
            ></textarea>
          </div>

          <div class="mt-4">
             <div>
                <PrimaryButton>Get In Touch</PrimaryButton>
             </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>

     </div>
    );
};

export default ContactUs;