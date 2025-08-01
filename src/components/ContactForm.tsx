'use client';

import { useState } from 'react';

const ContactForm = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Trimitere...');

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch('https://formspree.io/f/xgvzzbwg', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('Mesajul tău a fost trimis cu succes!');
        (e.target as HTMLFormElement).reset(); // Golește formularul
      } else {
        setStatus('A apărut o eroare. Te rugăm să încerci din nou.');
      }
    } catch (error) {
      setStatus('A apărut o eroare. Te rugăm să încerci din nou.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
      <div className="mb-6">
        <label htmlFor="name" className="block text-yellow-400 font-bold mb-2">Nume</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full bg-gray-700 border border-gray-600 rounded py-2 px-3 text-gray-100 focus:outline-none focus:border-yellow-500"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="email" className="block text-yellow-400 font-bold mb-2">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full bg-gray-700 border border-gray-600 rounded py-2 px-3 text-gray-100 focus:outline-none focus:border-yellow-500"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block text-yellow-400 font-bold mb-2">Mesaj</label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full bg-gray-700 border border-gray-600 rounded py-2 px-3 text-gray-100 focus:outline-none focus:border-yellow-500"
        />
      </div>
      <div className="text-center">
        <button
          type="submit"
          className="bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-lg hover:bg-yellow-400 transition-colors"
        >
          Trimite Mesajul
        </button>
      </div>
      {status && <p className="mt-4 text-center text-yellow-400">{status}</p>}
    </form>
  );
};

export default ContactForm;
