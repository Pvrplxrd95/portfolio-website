import Image from 'next/image';

export default function CurrentFocus() {
  const currentProjects = [
    {
      title: "AlibiSafe",
      description: "Privacy-first digital protection system that securely records time-stamped activity and location data to provide verifiable proof when it matters most.",
      status: "80% Complete",
      tags: ["Security", "Privacy", "Mobile App", "Location Tracking", "Legal Tech", "Safety", "Encryption", "Digital Identity"],
      mediaPlaceholder: "AlibiSafe promo video placeholder",
      imageUrl: "/images/alibisafe-activity.jpeg"
    },
    {
      title: "MindOS",
      description: "Intelligent productivity system designed to organize thoughts, tasks, and workflows using AI-driven insights and cognitive structuring.",
      status: "In Development",
      tags: ["AI", "Productivity", "Cognitive System", "Task Management", "Automation", "Personal Development", "SaaS"],
      mediaPlaceholder: "MindOS UI preview placeholder",
      imageUrl: "/images/mindos.png"
    },
    {
      title: "Purple Ray Group",
      description: "The holding company unifying all ventures and products. Visit the official site.",
      status: "Live",
      tags: ["Technology", "AI", "Innovation", "Software", "Startup", "Ecosystem", "Multi-Industry"],
      mediaPlaceholder: "PRG ecosystem diagram placeholder",
      imageUrl: "/images/prg-logo.png",
      link: "https://purpleraygroup.com"
    },
    {
      title: "Taxi App",
      description: "Fleet management platform for South African taxi operators.",
      status: "Coming Soon",
      tags: ["Mobile App", "Fleet Management", "South Africa", "Transportation", "Logistics", "Real-Time Tracking"],
      mediaPlaceholder: "Taxi App mockup placeholder"
    }
  ];

  return (
    <section id="current-focus" className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          🔥 Currently Building
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProjects.map((project) => (
            <div key={project.title} className="bg-gray-800 rounded-lg p-6 hover:scale-105 transition-transform duration-300 border border-purple-600/30">
              <div className="mb-4">
                <h3 className="text-xl font-bold mb-2 text-purple-400">{project.title}</h3>
                <span className="text-sm bg-purple-600/20 text-purple-300 px-2 py-1 rounded-full">
                  {project.status}
                </span>
              </div>

              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>

              {'link' in project && project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-full text-sm mb-4 transition-colors"
                >
                  Visit PRG &rarr;
                </a>
              )}

              {/* Media Placeholder */}
              {'imageUrl' in project && project.imageUrl ? (
                <div className="relative h-40 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="bg-gray-700 rounded-lg p-4 mb-4 text-center">
                  <div className="text-purple-400 text-sm">
                    📹 {project.mediaPlaceholder}
                  </div>
                </div>
              )}

              <div className="flex flex-wrap gap-2">
                {project.tags.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className="bg-purple-600/20 text-purple-300 text-xs px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 4 && (
                  <span className="text-purple-400 text-xs px-2 py-1">
                    +{project.tags.length - 4} more
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}