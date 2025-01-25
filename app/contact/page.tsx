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
    <div className={`flex justify-center items-center min-h-screen w-full p-4 md:p-8 lg:p-12 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div className={`w-full max-w-[90vw] 2xl:max-w-[80vw] shadow-xl rounded-lg p-4 md:p-8 lg:p-12 mt-32 mb-16 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className={`w-full shadow-lg rounded-lg p-4 md:p-8 lg:p-10 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
          {messageSent ? (
            <div className="text-center space-y-6">
              <div className="relative w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 mx-auto">
                <Image
                  src="/images/success.png"
                  alt="Success"
                  fill
                  className="object-contain"
                />
              </div>
              <div className={`text-2xl md:text-4xl lg:text-5xl font-semibold ${darkMode ? 'text-green-400' : 'text-green-600'}`}>
                Thank you! Your message was sent successfully!
              </div>
            </div>
          ) : (
            <form ref={form} onSubmit={sendEmail} className="space-y-6 md:space-y-8 lg:space-y-10">
              <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 md:mb-10 lg:mb-12 ${darkMode ? 'text-white' : 'text-black'}`}>Contact Me</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div>
                  <label className={`block text-2xl md:text-3xl lg:text-4xl font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>First Name</label>
                  <input type="text" name="first_name" required className={`form-input w-full px-4 py-3 md:px-6 md:py-4 border rounded-lg shadow-sm text-xl md:text-2xl lg:text-3xl ${darkMode ? 'bg-gray-600 border-gray-500 text-white' : 'bg-white border-gray-300 text-black'}`} />
                </div>
                <div>
                  <label className={`block text-2xl md:text-3xl lg:text-4xl font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Last Name</label>
                  <input type="text" name="last_name" required className={`form-input w-full px-4 py-3 md:px-6 md:py-4 border rounded-lg shadow-sm text-xl md:text-2xl lg:text-3xl ${darkMode ? 'bg-gray-600 border-gray-500 text-white' : 'bg-white border-gray-300 text-black'}`} />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div>
                  <label className={`block text-2xl md:text-3xl lg:text-4xl font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Email address</label>
                  <input type="email" name="email" required className={`form-input w-full px-4 py-3 md:px-6 md:py-4 border rounded-lg shadow-sm text-xl md:text-2xl lg:text-3xl ${darkMode ? 'bg-gray-600 border-gray-500 text-white' : 'bg-white border-gray-300 text-black'}`} />
                </div>
                <div>
                  <label className={`block text-2xl md:text-3xl lg:text-4xl font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Phone</label>
                  <input type="tel" name="phone" required className={`form-input w-full px-4 py-3 md:px-6 md:py-4 border rounded-lg shadow-sm text-xl md:text-2xl lg:text-3xl ${darkMode ? 'bg-gray-600 border-gray-500 text-white' : 'bg-white border-gray-300 text-black'}`} />
                </div>
              </div>
              <div>
                <label className={`block text-2xl md:text-3xl lg:text-4xl font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Message</label>
                <textarea name="message" rows={6} className={`form-textarea w-full px-4 py-3 md:px-6 md:py-4 border rounded-lg shadow-sm text-xl md:text-2xl lg:text-3xl ${darkMode ? 'bg-gray-600 border-gray-500 text-white' : 'bg-white border-gray-300 text-black'}`}></textarea>
              </div>
              <button 
                type="submit" 
                className={`w-full h-16 md:h-20 lg:h-24 text-3xl md:text-4xl lg:text-5xl font-mulish flex items-center justify-center transform hover:scale-105 rounded-md ${darkMode ? 'bg-gray-600 text-white' : 'bg-gray-100 text-black'}`}
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