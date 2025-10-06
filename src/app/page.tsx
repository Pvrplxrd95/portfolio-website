import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <main>
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <footer className="py-8 bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 flex justify-center items-center space-x-6">
          <a
            href="https://github.com/pvrplxrd95"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
}
