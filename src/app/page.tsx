import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import CurrentFocus from '@/components/CurrentFocus';
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
        <CurrentFocus />
        <Experience />
        <Contact />
      </main>
      <footer className="py-8 bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 flex flex-col items-center space-y-4">
          <div className="flex justify-center items-center space-x-6">
            <a
              href="https://github.com/pvrplxrd95"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              LinkedIn (Coming Soon)
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              X (Coming Soon)
            </a>
          </div>
          <div className="text-gray-500 text-sm">
            Founder of <a
              href="https://purpleraygroup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 transition-colors"
            >Purple Ray Group</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
