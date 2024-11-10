'use client';

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Image from 'next/image';

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm('service_0hminpb', 'template_nfojb9b', form.current, 'usPipvYC33NB7OYEF')
        .then((result) => {
          console.log(result.text);
          setMessageSent(true);
        }, (error) => {
          console.log(error.text);
        });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4 sm:p-8 mt-16 sm:mt-20">
      <div className="w-full max-w-3xl bg-white shadow-xl rounded-lg p-4 sm:p-10">
        <div className="w-full bg-gray-200 shadow-lg rounded-lg p-4 sm:p-8">
          {messageSent ? (
            <div className="text-center space-y-4">
              <div className="relative w-24 h-24 sm:w-44 sm:h-44 mx-auto">
                <Image
                  src="/images/success.png"
                  alt="Success"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-green-600 text-base sm:text-xl font-semibold">
                Thank you! Your message was sent successfully!
              </div>
            </div>
          ) : (
            <form ref={form} onSubmit={sendEmail} className="space-y-4 sm:space-y-6">
              <h1 className="text-2xl sm:text-3xl text-black font-bold text-center mb-4 sm:mb-6">Contact Me</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 text-sm sm:text-base font-medium">First Name</label>
                  <input type="text" name="first_name" required className="form-input w-full mt-1 px-3 py-1 sm:px-4 sm:py-2 border border-gray-300 rounded-lg shadow-sm text-sm sm:text-base" />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm sm:text-base font-medium">Last Name</label>
                  <input type="text" name="last_name" required className="form-input w-full mt-1 px-3 py-1 sm:px-4 sm:py-2 border border-gray-300 rounded-lg shadow-sm text-sm sm:text-base" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 text-sm sm:text-base font-medium">Email address</label>
                  <input type="email" name="email" required className="form-input w-full mt-1 px-3 py-1 sm:px-4 sm:py-2 border border-gray-300 rounded-lg shadow-sm text-sm sm:text-base" />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm sm:text-base font-medium">Phone</label>
                  <input type="tel" name="phone" required className="form-input w-full mt-1 px-3 py-1 sm:px-4 sm:py-2 border border-gray-300 rounded-lg shadow-sm text-sm sm:text-base" />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 text-sm sm:text-base font-medium">Message</label>
                <textarea name="message" rows={5} className="form-textarea w-full mt-1 px-3 py-1 sm:px-4 sm:py-2 border border-gray-300 rounded-lg shadow-sm text-sm sm:text-base text-black"></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-gray-100 h-[40px] sm:h-[60px] text-lg sm:text-2xl font-mulish text-black flex items-center justify-center transform hover:scale-105 rounded-md"
                style={{
                  transition: 'all 0.3s ease',
                  boxShadow: '3px 3px 5px rgba(0, 0, 0, 0.3), inset -2px -2px 5px rgba(0, 0, 0, 0.2), inset 2px 2px 5px rgba(255, 255, 255, 0.5)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `
                    0 0 10px rgba(255, 255, 255, 0.6), 
                    0 0 20px rgba(255, 255, 255, 0.5), 
                    0 0 30px rgba(255, 255, 255, 0.4),
                    inset 0 0 10px rgba(255, 255, 255, 0.3),
                    inset 0 0 20px rgba(255, 255, 255, 0.2)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '3px 3px 5px rgba(0, 0, 0, 0.3), inset -2px -2px 5px rgba(0, 0, 0, 0.2), inset 2px 2px 5px rgba(255, 255, 255, 0.5)';
                }}
                onMouseDown={(e) => {
                  e.currentTarget.style.transform = 'scale(0.95) translateY(2px)';
                }}
                onMouseUp={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
              >
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}