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
          I am a recent graduate of Columbia University, where I earned a Master’s degree in Applied Analytics. I also hold a Bachelor’s degree in Electrical & Computer Engineering from 
          Brunel University London. My fascination with software development and network communication has driven me to explore how systems interact and evolve. 
          I’ve always enjoyed the challenges that come with technology, and I take pride in the journey of learning and problem-solving.
          </p>

          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
            I started my web development journey by educating myself HTML, CSS, and JavaScript to build strong frontend foundations. Over time, I transitioned to industry-standard 
            frameworks like React, Next.js, and TailwindCSS to create more dynamic and scalable applications. When I set my mind to something, I commit fully and get it done.
            </p>

            <p className="text-lg leading-relaxed">
            Beyond coding, I have an entrepreneurial spirit and a passion for creating solutions that simplify people’s lives and address unmet market needs. I believe that 
            every problem has a solution and the real challenge lies in identifying the problem itself. At Columbia, I refined my machine learning and business analytics skills, 
            learning how to leverage data to drive impactful business decisions. My hands-on experience with various projects has 
            shaped my understanding of how companies utilize analytics to make informed decisions.
            </p>

            <p className="text-lg leading-relaxed">
            One of my key projects, Tweel, is an application currently in development that aims to provide a new way to understand trending topics on Twitter. Instead of just 
            highlighting the most discussed subjects, Tweel offers insight into the general sentiment surrounding them. This feature helps shape global perspectives, giving communities 
            a better understanding of how different topics are being perceived around the world.
            </p>
            <p className="text-lg leading-relaxed">
            Outside of tech, I enjoy reading, running, and playing chess and tennis. I also love exploring NYC’s vibrant food and coffee scene and occasionally unwinding with a night out.
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

