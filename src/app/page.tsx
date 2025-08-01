export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-yellow-400 sm:text-5xl md:text-6xl">
        B.H.T. SMART CONCEPT
      </h1>
      <p className="mt-4 text-lg text-gray-300 sm:text-xl md:text-2xl">
        Soluții complete pentru un viitor electric inteligent.
      </p>
      <div className="mt-8">
        <a
          href="/contact"
          className="inline-block bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-lg hover:bg-yellow-400 transition-colors"
        >
          Cere o Ofertă
        </a>
      </div>
    </div>
  );
}
