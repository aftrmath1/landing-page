import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

  emailjs.sendForm ({/*fill ids in*/})
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="relative isolate md:-translate-y-10 lg:-translate-y-12 bg-white z-10 sm:mx-10 md:mx-20 lg:mx-32 md:rounded-xl rounded-none shadow-xl">
    <div className="px-6 py-8 text-black">
    <form ref={form} onSubmit={sendEmail}>
      <label htmlFor="name" className="text-xl mt-6 font-semibold">Name</label>
      <input type="text" name="from_name" className="w-full px-4 py-2 mt-2 border rounded-md" />
      <label className="text-xl mt-6 font-semibold" >Email</label>
      <input type="email" name="user_email"  className="w-full px-4 py-2 mt-2 border rounded-md" />
      <label className="text-xl mt-6 font-semibold" >Message</label>
      <textarea name="message" className="w-full px-4 py-2 mt-2 border rounded-md"
            rows="4"
            required />
      <input type="submit" value="Send"  />
    </form>
    </div>
    </div>
  );
};
