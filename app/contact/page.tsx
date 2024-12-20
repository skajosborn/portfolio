'use client';

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Image from 'next/image';
import { useDarkMode } from '@/app/components/darkMode';

interface EmailJSResponse {
  text: string;
}

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [messageSent, setMessageSent] = useState(false);
  const { darkMode } = useDarkMode();

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm('service_0hminpb', 'template_nfojb9b', form.current, 'usPipvYC33NB7OYEF')
        .then((result: EmailJSResponse) => {
          console.log(result.text);
          setMessageSent(true);
        }, (error: EmailJSResponse) => {
          console.log(error.text);
        });
    }
  };

  return (
    <div className={`flex justify-center items-center min-h-screen h-full p-4 sm:p-8 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div className={`w-full max-w-6xl shadow-xl rounded-lg p-6 sm:p-12 my-24 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className={`w-full shadow-lg rounded-lg p-6 sm:p-10 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
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
              <div className={`text-green-500 text-xl sm:text-3xl font-semibold ${darkMode ? 'text-green-400' : 'text-green-600'}`}>
                Thank you! Your message was sent successfully!
              </div>
            </div>
          ) : (
            <form ref={form} onSubmit={sendEmail} className="space-y-4 sm:space-y-8">
              <h1 className={`text-4xl sm:text-5xl font-bold text-center mb-6 sm:mb-8 ${darkMode ? 'text-white' : 'text-black'}`}>Contact Me</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className={`block text-xl sm:text-2xl font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>First Name</label>
                  <input type="text" name="first_name" required className={`form-input w-full mt-2 px-4 py-2 sm:px-5 sm:py-3 border rounded-lg shadow-sm text-xl sm:text-2xl ${darkMode ? 'bg-gray-600 border-gray-500 text-white' : 'bg-white border-gray-300 text-black'}`} />
                </div>
                <div>
                  <label className={`block text-xl sm:text-2xl font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Last Name</label>
                  <input type="text" name="last_name" required className={`form-input w-full mt-2 px-4 py-2 sm:px-5 sm:py-3 border rounded-lg shadow-sm text-xl sm:text-2xl ${darkMode ? 'bg-gray-600 border-gray-500 text-white' : 'bg-white border-gray-300 text-black'}`} />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className={`block text-xl sm:text-2xl font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Email address</label>
                  <input type="email" name="email" required className={`form-input w-full mt-2 px-4 py-2 sm:px-5 sm:py-3 border rounded-lg shadow-sm text-xl sm:text-2xl ${darkMode ? 'bg-gray-600 border-gray-500 text-white' : 'bg-white border-gray-300 text-black'}`} />
                </div>
                <div>
                  <label className={`block text-xl sm:text-2xl font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Phone</label>
                  <input type="tel" name="phone" required className={`form-input w-full mt-2 px-4 py-2 sm:px-5 sm:py-3 border rounded-lg shadow-sm text-xl sm:text-2xl ${darkMode ? 'bg-gray-600 border-gray-500 text-white' : 'bg-white border-gray-300 text-black'}`} />
                </div>
              </div>
              <div>
                <label className={`block text-xl sm:text-2xl font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Message</label>
                <textarea name="message" rows={6} className={`form-textarea w-full mt-2 px-4 py-2 sm:px-5 sm:py-3 border rounded-lg shadow-sm text-xl sm:text-2xl ${darkMode ? 'bg-gray-600 border-gray-500 text-white' : 'bg-white border-gray-300 text-black'}`}></textarea>
              </div>
              <button 
                type="submit" 
                className={`w-full h-[40px] sm:h-[100px] text-4xl sm:text-5xl font-mulish flex items-center justify-center transform hover:scale-105 rounded-md ${darkMode ? 'bg-gray-600 text-white' : 'bg-gray-100 text-black'}`}
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