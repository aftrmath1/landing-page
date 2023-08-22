import React, { useState } from 'react';
import firebase from '../lib/firebaseClient';
import firestore from 'firebase/firestore';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await firebase.firestore().collection('contacts').add({
        name,
        email,
        message,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });

      // Clear form fields
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Error saving contact:', error);
    }
  };

  return (
    <div className="relative isolate md:-translate-y-10 lg:-translate-y-12 bg-white z-10 sm:mx-10 md:mx-20 lg:mx-32 md:rounded-xl rounded-none shadow-xl">
      <div className="px-6 py-8 text-black">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name" className="text-xl mt-6 font-semibold">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 mt-2 border rounded-md"
            required
          />

          <label htmlFor="email" className="text-xl mt-6 font-semibold">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 mt-2 border rounded-md"
            required
          />

          <label htmlFor="message" className="text-xl mt-6 font-semibold">
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-4 py-2 mt-2 border rounded-md"
            rows="4"
            required
          />

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 mt-6 rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
