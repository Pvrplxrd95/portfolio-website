export default function Experience() {
  const achievements = [
    {
      title: "Expert Advisor Development",
      description: "Built multiple Expert Advisors (EAs) for MT4/MT5, helping traders automate their strategies.",
      icon: "📈"
    },
    {
      title: "Predesigns Clothing",
      description: "Successfully launched and run a fashion brand, combining creative design with business acumen.",
      icon: "👕"
    },
    {
      title: "AI Development",
      description: "Developed AI-powered automation solutions including Aurora and Sales Tracker Bot.",
      icon: "🤖"
    },
    {
      title: "Web Development",
      description: "Created professional websites for businesses and services, focusing on user experience and functionality.",
      icon: "🌐"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-800 text-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Experience & Achievements</h2>
        
        <div className="space-y-8">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="bg-gray-700 rounded-lg p-6 transform hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-start space-x-4">
                <span className="text-4xl">{achievement.icon}</span>
                <div>
                  <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                  <p className="text-gray-300">{achievement.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}