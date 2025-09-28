import Link from 'next/link';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-white px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          👋 Hi, I'm Josias Tlou
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-300 mb-8">
          🚀 Software Developer | AI Builder | Entrepreneur
        </h2>
        <p className="text-xl md:text-2xl mb-12 text-gray-400">
          I create intelligent systems, automation tools, and business solutions.
        </p>
        <Link 
          href="#projects"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 text-lg"
        >
          View My Work
        </Link>
      </div>
    </section>
  );
}