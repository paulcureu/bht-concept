const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} B.H.T. SMART CONCEPT. Toate drepturile rezervate.</p>
        <p className="mt-2">
          <a href="mailto:contact@bht-smart.ro" className="hover:text-yellow-400">contact@bht-smart.ro</a> | Tel: 0700 123 456
        </p>
      </div>
    </footer>
  );
};

export default Footer;
