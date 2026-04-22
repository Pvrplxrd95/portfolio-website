import Link from 'next/link';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-white px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Logo Placeholder */}
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto bg-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
            PRG
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          Building a multi-industry tech ecosystem.
        </h1>
        <h2 className="text-2xl md:text-3xl text-purple-400 mb-8 font-semibold">
          Founder of Purple Ray Group | Software Engineer | AI & Systems Builder
        </h2>
        <p className="text-xl md:text-2xl mb-12 text-gray-400">
          Creating AI systems, software, and real-world digital solutions that solve complex problems across industries.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#projects"
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 text-lg"
          >
            View My Ecosystem
          </Link>
          <Link
            href="#contact"
            className="border-2 border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white font-bold py-3 px-8 rounded-full transition-all duration-300 text-lg"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  );
}