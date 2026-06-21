import Image from 'next/image';

interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string;
  mediaPlaceholder?: string;
  link?: string;
}

export default function Projects() {
  const companies: Project[] = [
    {
      title: "Trade Pulse Technologies",
      description: "Trade Pulse Technologies develops automated trading systems, Expert Advisors, and data-driven tools to enhance performance and decision-making in financial markets.",
      tags: ["FinTech", "Trading", "Forex", "Expert Advisors", "Automation", "Market Analysis", "Algorithmic Trading"],
      mediaPlaceholder: "Trading dashboard screenshot placeholder",
      imageUrl: "/images/tradepulse-technologies.png"
    },
    {
      title: "Predesigns Clothing",
      description: "Predesigns Clothing is a modern streetwear brand focused on expressive design, clean aesthetics, and identity-driven fashion.",
      tags: ["Fashion", "Streetwear", "Clothing Brand", "Design", "Lifestyle", "Creative"],
      mediaPlaceholder: "Fashion collection preview placeholder",
      imageUrl: "/images/predesigns-logo.jpg"
    },
    // TODO: Update Predesigns domain to .store after Namecheap migration
    {
      title: "Xentara Life",
      description: "Premium gaming battlestation setups and desk lighting. A PRG consumer goods venture.",
      tags: ["Consumer Goods", "Revenue", "Gaming", "Battlestations", "Desk Lighting", "Lifestyle", "Hardware"],
      mediaPlaceholder: "Xentara Life product showcase placeholder",
      imageUrl: "/images/xentara-logo.jpeg",
      link: "https://xentaralife.store"
    }
  ];

  const products: Project[] = [
    {
      title: "AlibiSafe",
      description: "Privacy-first digital protection system that securely records time-stamped activity and location data to provide verifiable proof when it matters most.",
      tags: ["Security", "Privacy", "Mobile App", "Location Tracking", "Legal Tech", "Safety", "Encryption", "Digital Identity"],
      mediaPlaceholder: "AlibiSafe app UI preview placeholder",
      imageUrl: "/images/alibisafe-activity.jpeg"
    },
    {
      title: "MindOS",
      description: "Intelligent productivity system designed to organize thoughts, tasks, and workflows using AI-driven insights and cognitive structuring.",
      tags: ["AI", "Productivity", "Cognitive System", "Task Management", "Automation", "Personal Development", "SaaS"],
      mediaPlaceholder: "MindOS dashboard mockup placeholder",
      imageUrl: "/images/mindos.png"
    },
    {
      title: "Aurora",
      description: "Aurora is an adaptive AI assistant designed to support users across tasks, learning, and daily activities through intelligent interaction and personalization.",
      tags: ["AI Assistant", "Machine Learning", "NLP", "Automation", "Voice AI", "Productivity", "Personal AI"],
      mediaPlaceholder: "Aurora interface screenshot placeholder"
    },
    {
      title: "Revenue Radar",
      description: "Revenue Radar is a business automation tool that tracks sales, monitors performance, and provides insights to help optimize revenue and decision-making.",
      tags: ["Business Tools", "Analytics", "Sales Tracking", "Automation", "Finance", "Dashboard", "SaaS"],
      mediaPlaceholder: "Sales analytics chart placeholder",
      imageUrl: "/images/revenue-radar.jpeg"
    },
    {
      title: "Pro Driver Assist",
      description: "Pro Driver Assist is a driver enhancement system that improves control, responsiveness, and feedback through advanced input tuning and real-time adjustments.",
      tags: ["Automation", "Driving Software", "Input Control", "Gaming Tools", "Simulation", "Performance Optimization"],
      mediaPlaceholder: "Driver assist interface placeholder",
      imageUrl: "/images/pro-driver-assist.png"
    },
    {
      title: "Talka",
      description: "Talka is a lightweight messaging platform designed for fast, reliable communication with support for local languages and low-end devices.",
      tags: ["Messaging App", "Mobile App", "Real-Time Chat", "Low Data", "Local Languages", "Social Communication"],
      mediaPlaceholder: "Talka chat interface placeholder",
      imageUrl: "/images/talka-app.png"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">My Ecosystem</h2>

        {/* Companies Section */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-purple-400 text-center">🏢 Companies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {companies.map((company, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300 border border-purple-600/30"
              >
                {company.imageUrl && (
                  <div className="relative h-48">
                    <Image
                      src={company.imageUrl}
                      alt={company.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                {!company.imageUrl && (
                  <div className="h-32 bg-gray-700 flex items-center justify-center">
                    <span className="text-purple-400 text-sm">{company.mediaPlaceholder}</span>
                  </div>
                )}
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-2 text-purple-400">{company.title}</h4>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{company.description}</p>
                  {company.link && (
                    <a
                      href={company.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-purple-400 hover:text-purple-300 text-sm mb-4 transition-colors"
                    >
                      Visit Store &rarr;
                    </a>
                  )}
                  <div className="flex flex-wrap gap-2">
                    {company.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-purple-600/20 text-purple-300 px-2 py-1 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                    {company.tags.length > 3 && (
                      <span className="text-purple-400 text-xs px-2 py-1">
                        +{company.tags.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Products Section */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-purple-400 text-center">💻 Products (Software)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300 border border-purple-600/30"
              >
                {product.imageUrl && (
                  <div className="relative h-48">
                    <Image
                      src={product.imageUrl}
                      alt={product.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                {!product.imageUrl && (
                  <div className="h-32 bg-gray-700 flex items-center justify-center">
                    <span className="text-purple-400 text-sm">{product.mediaPlaceholder}</span>
                  </div>
                )}
                <div className="p-6">
                  <h4 className="text-lg font-bold mb-2 text-purple-400">{product.title}</h4>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{product.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {product.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-purple-600/20 text-purple-300 px-2 py-1 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                    {product.tags.length > 3 && (
                      <span className="text-purple-400 text-xs px-2 py-1">
                        +{product.tags.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}