import Link from "next/link"

export default function Projects() {
  const projects = [
    {
      title: "Tweel - Analyzing Twitter Data Using Sentiment Analysis",
      description:
        "Developed a Flask-based web application that analyzes real-time Twitter data using NLP and Machine Learning for sentiment analysis. The system retrieves tweets via the Twitter API, cleans text through tokenization, stemming, and lemmatization, and converts it into features using TF-IDF. Sentiment classification is performed using Logistic Regression and Bernoulli Naïve Bayes, optimized through hyperparameter tuning and evaluated with confusion matrices. The application includes data visualizations (word clouds, polarity histograms) and a ranking system for trending topics. Processed data is stored in PostgreSQL, with pickle serialization and sparse matrices optimizing model inference.",
      technologies: ["Python", "Flask", "NLP", "Machine Learning", "Twitter API", "PostgreSQL", "Data Visualization"],
      github: "https://github.com/samkaddouh/Tweel",
    },
    {
      title: "Skies Shipping & Clearing Web Application",
      description:
        "Created a modern, responsive website for Skies Shipping & Clearing, a company offering international shipping and customs clearance services. The website features a clean, professional design with a blue color scheme, highlighting the company's main services: Sea Freight, Freight Forwarding, Air Freight, and International Shipping. The site includes a homepage with a hero section, services overview, solutions, and a call-to-action, individual pages for each service, a dedicated 'Get a Quote' page with a comprehensive quote request form, and a contact page with company information and a contact form. The website is built with a component-based architecture, making it easy to maintain and scale. It's also optimized for performance and SEO, thanks to Next.js's built-in features.",
      technologies: ["React", "Next.js", "Tailwind CSS", "JavaScript", "Responsive Design", "SEO Optimization"],
    },
    {
      title: "Beads n Beyond E-commerce Website",
      description:
        "Created a responsive e-commerce website for Beads n Beyond, a jewelry brand specializing in beaded accessories. The website features a clean, modern design with sections for featured products, best sellers, and category navigation. The site includes a promotional banner, navigation header with logo and cart, hero section with a captivating tagline, product showcase sections, and category quick links. This structure provides a solid foundation for an e-commerce site, ready for further customization and backend integration to fully bring Beads n Beyond's online presence to life.",
      technologies: ["Next.js", "React", "Tailwind CSS", "Lucide React", "Responsive Design", "E-commerce"],
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground pt-40 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-12">Projects</h1>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <div key={index} className="bg-muted rounded-lg overflow-hidden shadow-lg transition-all hover:shadow-xl">
              <div className="p-6 space-y-4">
                <h2 className="text-2xl font-semibold text-center">{project.title}</h2>

                <p className="text-muted-foreground">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 text-xs rounded-full bg-background text-foreground">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-center mt-4">
                  {project.github ? (
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-3 py-1 text-sm bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                    >
                      View on GitHub
                    </Link>
                  ) : (
                    <p className="italic text-muted-foreground">Under Production</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

