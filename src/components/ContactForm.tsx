'use client'; // Acest marcaj este necesar pentru componentele care folosesc state sau efecte

import { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Trimitere...');

    // Simulare trimitere către un API
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Aici s-ar adăuga logica de trimitere (ex: fetch('/api/contact', ...))
    console.log({ name, email, message });

    // Resetare formular și afișare mesaj de succes
    setName('');
    setEmail('');
    setMessage('');
    setStatus('Mesajul tău a fost trimis cu succes!');
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
      <div className="mb-6">
        <label htmlFor="name" className="block text-yellow-400 font-bold mb-2">Nume</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full bg-gray-700 border border-gray-600 rounded py-2 px-3 text-gray-100 focus:outline-none focus:border-yellow-500"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="email" className="block text-yellow-400 font-bold mb-2">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full bg-gray-700 border border-gray-600 rounded py-2 px-3 text-gray-100 focus:outline-none focus:border-yellow-500"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block text-yellow-400 font-bold mb-2">Mesaj</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
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
