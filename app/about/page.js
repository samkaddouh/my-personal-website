import Image from "next/image"

export default function About() {
  const techStack = [
    { name: "JavaScript", icon: "/js-logo.svg" },
    { name: "HTML5", icon: "/html5-logo.svg" },
    { name: "CSS3", icon: "/css3-logo.svg" },
    { name: "React", icon: "/react-logo.svg" },
    { name: "Next.js", icon: "/nextjs-logo.svg" },
    { name: "Python", icon: "/python-logo.svg" },
    { name: "R", icon: "/r-logo.svg" },
    { name: "Tableau", icon: "/tableau-logo.svg" },
    { name: "SQL", icon: "/sql-logo.svg" },
    { name: "MongoDB", icon: "/mongodb-logo.svg" },
    { name: "Neo4j", icon: "/neo4j-logo.svg" },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground pt-40 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-12">About Me</h1>

        <div className="space-y-12">
          <p className="text-xl leading-relaxed">
          I’m a recent graduate of Columbia University with a Master’s in Applied Analytics, and I hold a Bachelor’s degree in Electrical & Computer Engineering from Brunel University London. 
          My passion lies in solving real-world problems through data. Over the past few years, I’ve honed my skills in data analysis, machine learning, and backend development to build intelligent systems 
          that deliver business value.
          </p>

          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
            My journey began with web development—learning HTML, CSS, and JavaScript—but quickly evolved into building more dynamic and data-driven applications using React, Next.js, and serverless 
            technologies. Alongside this, I developed a deep interest in data engineering and analytics workflows, working on projects involving APIs, automation, and natural language processing.
            </p>

            <p className="text-lg leading-relaxed">
            At Columbia, I focused on mastering statistical modeling, predictive analytics, and data storytelling. I’ve built machine learning models for financial fraud detection, performed sentiment 
            analysis on social media data, and automated multi-platform workflows using cloud-based tools. One of my key projects, Tweel, is a sentiment analysis tool designed to surface emotional context 
            behind trending Twitter topics—giving users a clearer view of global discourse.
            </p>

            <p className="text-lg leading-relaxed">
            I’m especially drawn to roles where I can bridge the gap between raw data and business strategy—turning numbers into actionable insights. I believe the real challenge isn’t just solving a problem, 
            but defining it well.
            </p>
            <p className="text-lg leading-relaxed">
            Outside of work, I love reading, playing tennis and chess, running, and exploring NYC’s food and coffee scene.
            </p>
          </div>

          <div className="space-y-8">
            <h2 className="text-2xl font-semibold">Tech Stack</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg bg-muted"
                >
                  <div className="relative w-12 h-12">
                    <Image
                      src={tech.icon || "/placeholder.svg"}
                      alt={`${tech.name} logo`}
                      width={48}
                      height={48}
                      className="object-contain transition-transform hover:scale-110"
                    />
                  </div>
                  <span className="text-sm text-center">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

