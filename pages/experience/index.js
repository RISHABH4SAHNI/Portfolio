import MainNavbar from '../../components/MainNavbar'
import Header from '../../components/Header'
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'
import Image from 'next/image'

export default function Experience() {
  const experiences = [
    {
      title: "Software Development Engineer – AI",
      company: "Tata 1mg",
      location: "Gurugram, Haryana, India",
      logo: "/images/companies/1mg.png",
      duration: "Jul 2025 - Present",
      type: "Full-time",
      description: "Designing and deploying scalable AI systems — building backend pipelines, workflow automations, and system integrations that interact with LLMs, NLP models, and data-driven services.",
      achievements: [
        "Design and deploy scalable AI systems for healthcare technology",
        "Build backend pipelines and workflow automations",
        "Integrate systems with LLMs and NLP models",
        "Develop data-driven services at enterprise scale"
      ],
      technologies: ["AI/ML", "LLMs", "NLP", "Backend Systems", "Data Pipelines", "System Integration"]
    },
    {
      title: "Engineering Intern - AI Platform Team",
      company: "Eightfold AI",
      logo: "/images/companies/eightfold.jpeg",
      location: "Noida, Uttar Pradesh, India",
      duration: "Jul 2024 - Dec 2024",
      type: "Internship",
      description: "Led the development of advanced AI solutions for talent intelligence platform, building production-ready systems for resume parsing and intelligent LLM routing that processed thousands of documents daily and optimized API costs by 40%.",
      achievements: [
        "Architected and deployed AWS Textract integration for intelligent image-based resume parsing, handling 10,000+ documents weekly with 95% accuracy",
        "Designed and implemented sophisticated LLM routing system with dynamic API selection, reducing operational costs by 40% while maintaining response quality",
        "Developed advanced optimization algorithms considering cost, accuracy, and latency factors for real-time decision making",
        "Built end-to-end full-stack solutions for internal team workflows, improving operational efficiency by 60%",
        "Collaborated with senior engineers on scalable ML infrastructure serving millions of users globally",
        "Implemented comprehensive monitoring and logging systems for production AI services"
      ],
      technologies: ["Machine Learning", "Deep Learning", "LLMs", "MLOps", "AWS Textract", "Full-Stack Development", "Production AI Systems", "Cost Optimization"]
    },
    {
      title: "Data Science and Business Apprentice",
      company: "FernGlasz",
      logo: "/images/companies/ferngalsz.jpeg",
      location: "Hybrid",
      duration: "May 2024 - Jul 2024",
      type: "Full-time",
      description: "Played a pivotal role in developing ML-powered solutions for an early-stage startup bridging top-tier students with high-growth startups through advanced candidate-job matching systems.",
      achievements: [
        "Created and fine-tuned ML/DL models for candidate-job matching",
        "Conducted in-depth data analysis for continuous model improvement",
        "Developed strategic plans to onboard new companies",
        "Designed community growth initiatives and academic partnerships",
        "Gained invaluable startup experience in product development and scaling"
      ],
      technologies: ["Data Science", "Business Strategy", "Data Modeling", "MLOps", "LLMs", "Business Planning"]
    },
    {
      title: "Research Intern - Natural Language Processing",
      company: "BITS Pilani",
      logo: "/images/companies/bits.jpeg",
      location: "Pilani, India",
      duration: "Dec 2023 - May 2024",
      type: "Full-time",
      description: "Worked under Dr. Virendra Singh Shekhawat and Mr. Dharmateja Adapa on integrating advanced object detection and semantic mapping with speech-to-text capabilities for visually impaired assistance.",
      achievements: [
        "Utilized YOLO for real-time object detection and environmental mapping",
        "Developed semantic mapping for contextual understanding of surroundings",
        "Implemented speech-to-text using Mozilla DeepSpeech and ROS packages",
        "Focused on improving mobility and independence for visually impaired users",
        "Ensured system reliability and effectiveness in real-world scenarios"
      ],
      technologies: ["Neural Networks", "ROS", "Machine Learning", "NLP", "Deep Learning", "YOLO", "Mozilla DeepSpeech"]
    },
    {
      title: "Research Intern - Reinforcement Learning",
      company: "BITS Pilani",
      logo: "/images/companies/bits.jpeg",
      location: "Pilani, India",
      duration: "Jul 2023 - Nov 2023",
      type: "Research",
      description: "Guided by Dr. Tejasvi Alladi and Mr. Amit Choghle, focused on leveraging advanced AI tools for extensive data analysis and insight generation.",
      achievements: [
        "Collaborated on processing complex datasets with AI algorithms",
        "Utilized ChatGPT, BARD, and Bing for advanced data analysis",
        "Produced detailed reports uncovering crucial data patterns",
        "Enhanced accuracy and depth of data analyses using AI tools",
        "Developed strong capabilities in AI-driven data analytics"
      ],
      technologies: ["Machine Learning", "Reinforcement Learning", "SQL", "AI", "Pandas", "Data Analysis"]
    },
    {
      title: "Summer Data Intern - Finance Management Group",
      company: "Macquarie Global Services",
      logo: "/images/companies/macquarie.png",
      location: "Gurugram, Haryana, India",
      duration: "May 2023 - Jul 2023",
      type: "Internship",
      description: "Part of the Financial Management Group-Enabling Team, focusing on automation and data solutions to streamline financial operations and enhance efficiency.",
      achievements: [
        "Designed and implemented new automation processes for financial operations",
        "Modified and optimized existing automations for client requirements",
        "Leveraged Alteryx, PowerBI, and RPA for automation solutions",
        "Delivered client-focused solutions with measurable value",
        "Enhanced financial operational efficiency through data-driven approaches"
      ],
      technologies: ["Jira", "Corporate Finance", "Data Science", "Financial Analysis", "Alteryx", "Power BI", "RPA"]
    },
    {
      title: "Research Intern - Quantitative Analytics",
      company: "BITS Pilani",
      logo: "/images/companies/bits.jpeg",
      location: "Pilani, India",
      duration: "Dec 2022 - Jun 2023",
      type: "Internship",
      description: "Guided by Dr. Kamlesh Tiwari, conducted comprehensive analysis of historical data for five asset classes to explore correlations, trends, and hedging opportunities in financial markets.",
      achievements: [
        "Analyzed historical data for GLD, CL, VIX, TLT, and SPY asset classes",
        "Examined relationships during recession and non-recession periods",
        "Applied quantitative analysis for hedging and diversification opportunities",
        "Implemented ARIMA models for stock price prediction",
        "Utilized SVM techniques for enhanced predictive accuracy"
      ],
      technologies: ["Quantitative Analytics", "Neural Networks", "Machine Learning", "Financial Analysis", "Python", "Financial Modeling"]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <MainNavbar activeItem="Experience" />
      <div className="container mx-auto px-4 py-8">
        <Header 
          title="Professional Experience"
          subtitle="My journey across AI, data science, research, and software development"
        />

        <div className="max-w-4xl mx-auto mt-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12">
              {/* Timeline line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-40 bg-gradient-to-b from-blue-400 to-purple-400"></div>
              )}

              {/* Experience Card */}
              <div className="flex items-start gap-6">
                {/* Timeline dot */}
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <FaBriefcase className="text-white text-xl" />
                </div>

                {/* Content */}
                <div className="glass-card p-8 flex-1">
                  {/* Header Section */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          exp.type === 'Full-time' ? 'bg-green-400/20 text-green-300' :
                          exp.type === 'Internship' ? 'bg-blue-400/20 text-blue-300' :
                          exp.type === 'Part-time' ? 'bg-yellow-400/20 text-yellow-300' : 'bg-purple-400/20 text-purple-300'
                        }`}>{exp.type}</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 text-gray-300 text-sm mt-3 lg:mt-0 lg:text-right">
                      <div className="flex items-center gap-1">
                        <FaCalendarAlt />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FaMapMarkerAlt />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Company Section */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                      <Image
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        width={32}
                        height={32}
                        className="object-contain"
                      />
                    </div>
                    <h4 className="text-xl text-blue-300 font-semibold">{exp.company}</h4>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>

                  {/* Achievements and Technologies Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <h5 className="text-white font-semibold mb-3">Key Achievements:</h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-gray-300 text-sm flex items-start gap-2">
                            <span className="text-blue-400 mt-1">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h5 className="text-white font-semibold mb-3">Technologies Used:</h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="px-3 py-1 bg-white/10 rounded-full text-sm text-blue-300 border border-blue-400/30">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}