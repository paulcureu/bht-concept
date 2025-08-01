const ContactPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="mt-4">Utilizați informațiile de mai jos pentru a ne contacta. Aici va fi adăugat un formular de contact.</p>
      <div className="mt-8">
        <p><strong>Email:</strong> <a href="mailto:contact@bht-smart.ro" className="text-yellow-400 hover:underline">contact@bht-smart.ro</a></p>
        <p><strong>Telefon:</strong> 0700 123 456</p>
      </div>
    </div>
  );
};

export default ContactPage;
