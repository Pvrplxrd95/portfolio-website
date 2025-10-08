import Image from 'next/image';

export default function About() {
  const skills = [
    { category: "Programming", items: ["Python", "C#", "MT4/MT5 (MQL)", "JavaScript/TypeScript", "React", "Node.js"] },
    { category: "AI & Automation", items: ["NLP", "Trading EAs", "Discord/Telegram bots"] },
    { category: "Design & Creativity", items: ["UI/UX concepts", "Brand building", "Fashion design"] },
    { category: "Entrepreneurship", items: ["Business strategy", "Startup planning", "Financial projections"] }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800 text-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>

        <div className="flex flex-col md:flex-row items-center md:items-start mb-12">
          <div className="md:mr-8 mb-6 md:mb-0">
            <Image
              src="/profile.jpg"
              alt="Josias Tlou"
              width={300}
              height={300}
              className="rounded-full object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>
          <div className="prose prose-invert max-w-none">
            <p className="text-lg mb-6">
              I&apos;m a passionate software developer and entrepreneur from South Africa.
              My focus is on building intelligent assistants, automation tools, and business-driven software.
            </p>
            <p className="text-lg mb-12">
              Beyond coding, I run my clothing brand <strong>Predesigns Clothing</strong> and I&apos;m building
              scalable tech solutions through <strong>Trade Pulse Technologies</strong>.
            </p>
          </div>
        </div>

        <h3 className="text-2xl font-bold mb-6">Skills I Bring to the Table:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category} className="bg-gray-700 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-4">{skillGroup.category}</h4>
              <ul className="space-y-2">
                {skillGroup.items.map((item) => (
                  <li key={item} className="flex items-center space-x-2">
                    <span className="text-blue-400">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}