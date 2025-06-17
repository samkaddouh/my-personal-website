export default function Experience() {
    const experiences = [
      {
        startDate: "October 2024",
        endDate: "March 2025",
        title: "Software Engineer",
        company: "Stealth Startup",
        department: "Backend",
        description:
          "Designed and implemented OpenAPI specifications for various platforms, such as Notion, X and Github. Built CNCF serverless workflows to automate cross-platform integrations, including tasks like creating GitHub issues and sending Slack notifications. developed RAG-enhanced API endpoints to improve user intent understanding, allowing for the dynamic generation of workflow definitions. Designed and deployed backend services, integrated authentication mechanisms, and leveraged serverless computing to enable asynchronous workflow execution, ensuring high scalability and efficiency.",
        technologies: [
          "Backend Development",
          "API Design",
          "OpenAPI",
          "Swagger-UI",
          "CNCF Serverless Workflows",
          "RESTFul APIs",
          "OAuth2",
          "RAG",
          "LLMs",
          "State Machines",
          "HTTP Protocols",
          "Docker",
          "Github",
          "Unit Testing",
          "Python",
          "Javascript",
          "HTML",
        ],
      },
      {
        startDate: "September 2024",
        endDate: "December 2024",
        title: "Data Scientist",
        company: "Columbia University",
        department: "Financial Instituion",
        description:
          "Developed a machine learning system to detect Anti-Money Laundering (AML) activities, using unsupervised learning techniques to identify suspicious transactions. The project combined K-Means clustering to group similar transactions, HDBSCAN to detect anomalies, and Graph Network Analysis to track fund movement and hidden financial networks. A risk-scoring system aggregated these results, assigning fraud likelihood scores to transactions. The model processed large-scale financial data, applying feature selection, dimensionality reduction, and anomaly detection to improve accuracy. The final system provided explainability for flagged transactions, enhancing transparency in financial compliance.",
        technologies: [
          "Machine Learning", "Clustering (K-Means, HDBSCAN)", "Graph Networks", "Anomaly Detection", "Fraud Detection", "Python", "R", "Data Visualization", "Risk Scoring"
        ],
      },
      {
        startDate: "June 2024",
        endDate: "August 2024",
        title: "BI Analyst Intern",
        company: "Credico LLC",
        department: "Business Intelligence",
        description:
          "Designed and implemented an automated reporting algorithm using Qlik Application Automation to generate detailed 40-page reports for consultants on a weekly schedule. Introduced custom thumbnail graphics for Qlik Sense applications, enhancing the user interface aesthetics and improving navigation efficiency. Managed Qlik NPrinting distribution lists to automate internal reporting, improved report visuals, and conducted quality control checks to ensure data accuracy and consistency across reports.",
        technologies: [
          "Business Intelligence",
          "Data Visualization",
          "Report Automation",
          "Qlik Sense",
          "Qlik NPrinting",
          "Qlik Application Automation",
          "Data Processing",
          "Python",
          "SQL",
        ],
      },
      {
        startDate: "April 2024",
        endDate: "May 2024",
        title: "Thinkathon 2024 – United Nations International Computing Centre",
        company: "Columbia University | UNICC",
        department: "Computing",
        description:
          "Secured 1st place among 10 competing teams in the United Nations Thinkathon 2024, developing an innovative platform to advance Digital Diplomacy. The platform leveraged mobile technologies, AI, and process automation to facilitate diplomatic conferences, negotiations, and multilateral engagements.",
        technologies: ["Digital Diplomacy", "AI", "Process Automation", "Mobile Technologies", "Multilateral Engagement", "Data Security", "UX for Global Platforms", "International Policy Compliance"],
      },
      
      {
        startDate: "September 2021",
        endDate: "February 2023",
        title: "Data Analyst & NLP Engineer",
        company: "Brunel University London",
        department: "Department of Research & Development",
        description:
          "Developed a web-based application that analyzes Twitter data by retrieving real-time tweets via the X API based on user-input keywords. Implemented sentiment analysis using Python, incorporating word frequency analysis, distribution metrics, and word cloud visualizations to generate meaningful insights. Structured a PostgreSQL database to store and manage large-scale Twitter data efficiently, leveraging Tweepy for seamless data collection. Integrated Natural Language Processing (NLP) techniques to extract sentiment trends and analyze public discourse, highlighting the role of AI-driven analytics in understanding social behavior.",
        technologies: ["Sentiment Analysis", "Data Engineering", "Data Visualization", "Machine Learning", "Neural Networks", "NLP", "Python", "Tweepy", "Numpy", "TensorFlow", "Keras", "Pandas", "Scikit-learn", "matplotlib", "X API", "PostgreSQL"],
      },
      {
        startDate: "October 2020",
        endDate: "September 2021",
        title: "Business Data Analyst",
        company: "Money Expert",
        department: "Business Intelligence",
        description:
          "As a Business Data Analyst in the Business Intelligence team, I focused on delivering data-driven insights to enhance user engagement and improve business operations. I analyzed app usage and user behavior, helping guide UI/UX improvements that increased mobile engagement by 30%. I also applied market research techniques to design user surveys, then used Python, SQL, and Tableau to analyze results, revealing key patterns and user segments. My work included building automated SQL-based pipelines for financial reporting and applying regression and clustering models to support product and marketing strategies. ",
        technologies: [
          "SQL", 
          "Python", 
          "Pandas", 
          "Tableau", 
          "Power BI", 
          "Survey Design", 
          "Regression Analysis", 
          "Clustering", 
          "Market Research", 
          "Data Visualization", 
          "PostgreSQL"
        ],
      },
      
    ]
  
    return (
      <div className="min-h-screen bg-background text-foreground pt-40 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-12">Career Progression</h1>
  
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-muted"></div>
  
            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <div key={index} className="relative pl-8">
                  {/* Timeline dot */}
                  <div className="absolute left-[-4px] top-0 w-2 h-2 rounded-full bg-muted border-4 border-background"></div>
  
                  <div className="space-y-4">
                    <div className="text-sm text-muted-foreground">
                      {experience.startDate} - {experience.endDate}
                    </div>
  
                    <div className="bg-muted rounded-lg p-6 space-y-4">
                      <div>
                        <h2 className="text-xl font-semibold">{experience.title}</h2>
                        <div className="text-muted-foreground">
                          {experience.company} - {experience.department}
                        </div>
                      </div>
  
                      <p className="text-muted-foreground leading-relaxed">{experience.description}</p>
  
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <span key={tech} className="px-3 py-1 text-sm rounded-full bg-background text-foreground">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  