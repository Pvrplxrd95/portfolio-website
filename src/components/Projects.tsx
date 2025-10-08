import Image from 'next/image';

interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Aurora – AI Assistant",
      description: "AI Assistant with emotional intelligence, task/project management, adaptive learning, and personality engine.",
      tags: ["AI", "NLP", "Python"],
    },
    {
      title: "Sales Tracker Bot",
      description: "Discord-based sales and task tracker with AI analytics and reminders.",
      tags: ["Discord.js", "AI Analytics", "Node.js"],
    },
    {
      title: "Talka",
      description: "South African lightweight messaging app for low-end devices with multilingual support.",
      tags: ["Mobile", "React Native", "i18n"],
    },
    {
      title: "Pro Driver Assist)",
      description: "Driver assistance software with **game profile management, input visualization, and feedback tuning.",
      tags: ["Python", "Tkinter", "Pandas"],
    },
    {
      title: "AlibiSafe",
      description: "Digital alibi system for safety & legal protection (80% complete).",
      tags: ["React", "Node.js", "Security"],
    },
    {
      title: "Predesigns Clothing",
      description: "Fashion brand combining creativity with tech-driven scaling plans.",
      tags: ["E-commerce", "Branding", "Fashion"],
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
            >
              {project.imageUrl && (
                <div className="relative h-48">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-blue-600 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}