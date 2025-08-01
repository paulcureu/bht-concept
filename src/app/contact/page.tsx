import ContactForm from '@/components/ContactForm';

const ContactPage = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-yellow-400">Contactați-ne</h1>
      <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
        Aveți o întrebare sau doriți o ofertă personalizată? Completați formularul de mai jos și vă vom contacta în cel mai scurt timp.
      </p>

      <div className="mt-12">
        <ContactForm />
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold">Alte metode de contact</h2>
        <div className="mt-4 text-lg">
            <p><strong>Email:</strong> <a href="mailto:contact@bht-smart.ro" className="text-yellow-400 hover:underline">contact@bht-smart.ro</a></p>
            <p className="mt-2"><strong>Telefon:</strong> 0700 123 456</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
