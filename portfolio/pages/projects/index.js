import MainNavbar from '../../components/MainNavbar'
import Header from '../../components/Header'
import { FaGithub, FaExternalLinkAlt, FaCode, FaRobot, FaChartLine, FaDatabase, FaShieldAlt, FaMicrochip, FaUniversity } from 'react-icons/fa'
import { SiPython, SiJavascript, SiReact, SiNodedotjs, SiMongodb, SiPostgresql, SiTensorflow, SiPytorch, SiStreamlit, SiOpensearch, SiR, SiC } from 'react-icons/si'
import { useState } from 'react'

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')

  const projects = [
    // AI/ML Projects
    {
      title: "Code Analysis Tool",
      description: "An AI-powered tool that helps developers analyze and understand complex codebases more effectively. Combines call graph analysis, function lookup tables, vector search for semantic similarity, and hybrid mode for comprehensive insights. Features multi-LLM support (OpenAI, Ollama, Perplexity) with embeddings powered by OpenSearch.",
      detailedDescription: "Code Analysis Bot is an AI-powered tool that helps developers analyze and understand complex codebases more effectively. It combines multiple approaches — call graph analysis for mapping function dependencies, function lookup tables for fast metadata-based search, vector search for semantic similarity, and a hybrid mode for comprehensive insights. With multi-LLM support (OpenAI, Ollama, Perplexity), embeddings powered by OpenSearch, and a clean Streamlit UI, the bot makes debugging, code review, and refactoring impact analysis faster and smarter.",
      technologies: ["Python", "LLM", "OpenSearch", "Streamlit", "NLP", "Vector Search", "REST APIs", "Async/Await"],
      skills: ["Large Language Models (LLM)", "REST APIs", "Async/Await Programming", "Natural Language Processing (NLP)", "Full-Stack Development", "Machine Learning"],
      github: "https://github.com/RISHABH4SAHNI/Code_Analysis_Tool",
      duration: "Jun 2025 - Aug 2025",
      category: "AI/ML",
      icon: FaRobot,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Payment Fraud Detection using Graph Neural Networks",
      description: "Built an intelligent binary classification model using Graph Neural Networks to detect fraudulent transactions in financial data. Implemented comprehensive data preprocessing, feature engineering, and dimensionality reduction techniques for high-performing fraud detection.",
      detailedDescription: "In this project, we address the growing challenge of financial fraud by using machine learning to detect suspicious transactions. As digital banking expands, the volume and complexity of financial data have outpaced traditional rule-based systems. Our goal is to build an intelligent binary classification model that can accurately identify fraudulent transactions, helping institutions prevent losses and maintain user trust. We worked with a widely used synthetic dataset containing millions of labeled transaction records. Our approach included careful data preprocessing, feature engineering, dimensionality reduction, and selecting encoding strategies based on data characteristics. We trained and evaluated multiple machine learning models to find the most effective solution. The result is a high-performing fraud detection model supported by a reproducible pipeline for real-world use.",
      technologies: ["Python", "PyTorch", "Graph Neural Networks", "Deep Learning", "CNN", "Machine Learning"],
      skills: ["Machine Learning", "Deep Learning", "Neural Networks", "Convolutional Neural Networks (CNN)", "Graph Neural Networks"],
      duration: "Jan 2025 - Apr 2025",
      category: "AI/ML",
      icon: FaShieldAlt,
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Object Detection and Semantic Mapping",
      description: "Integrated advanced object detection and semantic mapping technologies with speech-to-text capabilities to aid visually impaired individuals. Used YOLO for real-time object detection and implemented speech-to-text using Mozilla DeepSpeech and ROS packages.",
      detailedDescription: "The Project focused on integrating advanced object detection and semantic mapping technologies with speech-to-text capabilities to aid visually impaired individuals. Using deep learning models like YOLO for real-time object detection and semantic mapping, the system provides contextual understanding of the environment. Speech-to-text functionality was implemented using Mozilla DeepSpeech and ROS packages, enabling robots to convert spoken language into written text and provide real-time auditory guidance. The integration of these technologies aims to enhance the mobility, independence, and overall quality of life for visually impaired users by allowing them to navigate and interact with their surroundings more effectively.",
      technologies: ["Python", "YOLO", "ROS", "Mozilla DeepSpeech", "Computer Vision", "Machine Learning"],
      skills: ["Robot Operating System (ROS)", "Machine Learning", "Large Language Models (LLM)"],
      category: "AI/ML",
      icon: FaMicrochip,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Models for Stock Prediction",
      description: "Developed predictive models for stock market analysis using ARIMA (Auto-Regressive Integrated Moving Average) for price prediction and Support Vector Machine for classification of stock price data.",
      technologies: ["Python", "NumPy", "Pandas", "ARIMA", "SVM", "Machine Learning"],
      skills: ["Python (Programming Language)", "NumPy", "Supervised Learning", "Pandas", "Machine Learning"],
      category: "AI/ML",
      icon: FaChartLine,
      color: "from-green-500 to-blue-500"
    },
    // Software Development Projects
    {
      title: "Hostel Allocation System",
      description: "A comprehensive hostel allocation system for BITS Pilani students using SQL for database management, Node.js for backend operations, and Tkinter for the frontend interface to manage room assignments efficiently.",
      technologies: ["Python", "SQL", "Tkinter", "Database Management", "GUI Development"],
      skills: ["Python (Programming Language)", "SQL", "Tkinter"],
      category: "Software Development",
      icon: FaDatabase,
      color: "from-cyan-500 to-blue-600"
    },
    {
      title: "Mound Data Structure Implementation",
      description: "Designed and implemented a C program incorporating the Mound Data Structure based on Lehigh University research. Achieved efficient O(log(log(N))) insertion and O(log(N)) minimum extraction complexities using randomization techniques.",
      detailedDescription: "Designed and implemented a C program to incorporate the Mound Data Structure, as outlined in a research publication by Lehigh University researchers from Pennsylvania. The Mound Data Structure is a rooted tree composed of sorted lists, leveraging randomization techniques to achieve efficient complexities of O(log(log(N))) for insertion and O(log(N)) for extracting the minimum element.",
      technologies: ["C", "Data Structures", "Algorithm Design", "Performance Optimization"],
      skills: ["C (Programming Language)", "Data Structures"],
      category: "Software Development",
      icon: FaCode,
      color: "from-gray-600 to-gray-800"
    } , 
    // Data Science & Analytics Projects
    {
      title: "Exploratory Data Analysis - Retail",
      description: "Comprehensive analysis of sample superstore data focusing on sales, quantity, profits, and discounts across different product segments to identify business problems and opportunities for increased profitability.",
      detailedDescription: "Analyzing the data from the sample superstore, as a business manager, I focused on exploring sales, quantity, profits, and discounts across different product segments to identify potential business problems and opportunities for increased profitability. By evaluating product performance, customer segmentation, pricing and discounts, supply chain efficiency, market trends, and customer satisfaction, I aimed to pinpoint areas for improvement. Utilizing these insights, I could develop strategies to optimize product offerings, pricing, and supply chain operations, capitalize on market trends, and address customer concerns. Taking a data-driven approach enables informed decision-making to enhance profitability and drive business success.",
      technologies: ["Python", "NumPy", "Pandas", "Matplotlib", "Scikit-Learn", "Data Visualization"],
      skills: ["Python (Programming Language)", "NumPy", "Data Analysis", "Pandas", "Matplotlib", "Data Science", "Scikit-Learn"],
      category: "Data Science",
      icon: FaChartLine,
      color: "from-yellow-500 to-red-500"
    },
    {
      title: "Exploratory Data Analysis - World Health Report 2023",
      description: "Analyzed key health indicators, regional disparities, determinants of health, disease burden, and policy effectiveness from the World Health Report 2023 to uncover insights into global health trends and challenges.",
      detailedDescription: "The exploratory data analysis (EDA) project for the World Health Report 2023 involves analyzing key health indicators, regional disparities, determinants of health, disease burden, and policy effectiveness. By examining data visualizations, statistical techniques, and summaries, we aim to uncover insights into global health trends and challenges. This analysis will provide a comprehensive understanding of health outcomes, regional variations, and the impact of social, economic, and environmental factors on health. The findings will contribute to evidence-based decision-making, policy formulation, and targeted interventions to improve global health outcomes and address health inequalities worldwide.",
      technologies: ["R", "RStudio", "Data Visualization", "Statistical Analysis"],
      skills: ["RStudio", "R (Programming Language)"],
      category: "Data Science",
      icon: FaDatabase,
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "Quant Analysis Research",
      description: "Analyzed historical data of 5 asset classes (GLD, CL, Vix, TLT, and SPY) to identify correlations and trends, focusing on relationships during recession and non-recession periods for hedging strategies and diversification opportunities.",
      detailedDescription: "In this project, we analyzed historical data of 5 asset classes (GLD, CL, Vix, TLT, and SPY) to identify correlations and trends. Our focus was on studying the relationships between these asset classes and observing their behavior during recession and non-recession periods. By examining correlations, we aimed to find opportunities for hedging strategies and diversification in the US market. Our analysis aimed to uncover patterns that could indicate potential hedging opportunities, where movements in one asset class may offset movements in another. Through quantitative analysis, we sought to understand correlations, trends, and potential hedging prospects among these asset classes.",
      technologies: ["Python", "NumPy", "Pandas", "Matplotlib", "Financial Analysis", "Statistical Modeling"],
      skills: ["Python (Programming Language)", "NumPy", "Financial Analysis", "Pandas", "Matplotlib", "Stock Market Analysis"],
      category: "Finance",
      icon: FaChartLine,
      color: "from-green-400 to-blue-600"
    },

    // Financial Analysis Projects
    {
      title: "Financial Analysis - Gujarat Pipavav Port Ltd.",
      description: "Comprehensive financial analysis of Gujarat Pipavav Port Ltd (GPPL) for FY22 and FY23, examining capital expenditure, working capital management, cost of capital estimation, and profitability metrics for investment insights.",
      detailedDescription: "This in-depth financial analysis delves into the well-being of Gujarat Pipavav Port Ltd (GPPL), a prominent Indian private port operator, for fiscal years 2022 (FY22) and 2023 (FY23). We'll leverage data from annual reports and public sources to dissect critical aspects like capital expenditure (Capex) and its purpose (expansion, diversification, etc.). We'll explore how these investments connect to GPPL's growth in assets, sales, exports, and partnerships. Additionally, we'll assess their working capital management strategy and capital structure, including funding sources and their relation to Capex needs. Furthermore, the analysis will estimate GPPL's cost of capital using various approaches and consider the company's life cycle stage. To gain insights into profitability and efficiency, we'll compare trends in key metrics like dividend yield, share price appreciation, return on capital metrics (ROCE & ROIC), and weighted average cost of capital (WACC). Finally, by analyzing these various aspects, we'll identify GPPL's strengths and weaknesses, providing a holistic understanding of their current financial position and potential for future growth. This comprehensive analysis will prove valuable for investors, analysts, and anyone seeking informed decisions regarding GPPL.",
      technologies: ["Financial Modeling", "Excel", "Financial Ratios", "WACC Analysis", "ROCE/ROIC Analysis"],
      skills: ["Financial Statement Analysis", "Financial Analysis", "Investment Analysis"],
      category: "Finance",
      icon: FaUniversity,
      color: "from-indigo-500 to-purple-600"
    },
    {
      title: "Security Analysis - White Organic Retail Limited",
      description: "Extensive security analysis including price movements, volume trends, dividend policy examination, quarterly analyses, peer comparisons, and fundamental analysis to assess investment prospects and speculative nature.",
      detailedDescription: "During my project, I undertook an extensive security analysis of White Organic Retail Limited, engaging in multifaceted evaluations spanning different aspects of the company's performance. I meticulously analyzed the daily and monthly price movements and volume trends over the past two years to discern patterns and insights. Additionally, I delved into the company's dividend policy, conducting a thorough examination to understand the reasons behind its non-provision of dividends. Moreover, I conducted comprehensive quarterly analyses and comparative assessments with peer companies in the agriculture and horticulture sector. This involved scrutinizing financial metrics, performance indicators, and profitability ratios to contextualize the company's standing within the industry. Furthermore, I embarked on a detailed fundamental analysis, examining various ratios and metrics to ascertain the speculative nature, if any, of the security. Through these multifaceted analyses, I gained a holistic understanding of White Organic Retail Limited's performance, its dividend policies, industry comparisons, and the fundamental attributes influencing its security dynamics.",
      technologies: ["Financial Analysis", "Technical Analysis", "Comparative Analysis", "Ratio Analysis"],
      skills: ["Financial Modeling", "Financial Analysis", "Stock Market Analysis"],
      category: "Finance",
      icon: FaChartLine,
      color: "from-emerald-500 to-teal-600"
    },

    
  ]

  const categories = ['All', 'AI/ML', 'Data Science', 'Finance', 'Software Development']

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory)

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <MainNavbar activeItem="Projects" />
      <div className="container mx-auto px-4 py-8">
        <Header 
          title="My Projects" 
          subtitle="A comprehensive showcase of my development work across AI/ML, Data Science, Finance, and Software Development"
        />

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-blue-500 text-white shadow-lg'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Count */}
        <div className="text-center mb-8">
          <p className="text-gray-300">
            Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
            {activeCategory !== 'All' && ` in ${activeCategory}`}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {filteredProjects.map((project, index) => (
            <div key={index} className="project-card">
              {/* Project Image Placeholder */}
              <div className={`project-image bg-gradient-to-br ${project.color || 'from-blue-500 to-purple-600'}`}>
                {project.icon ? (
                  <project.icon className="text-6xl text-white/80" />
                ) : (
                  <FaCode className="text-6xl text-white/80" />
                )}
              </div>

              {/* Project Content */}
              <div>
                <div className="flex items-start justify-between mb-2">
                  <h3 className="project-title flex-1">{project.title}</h3>
                  {project.category && (
                    <span className="text-xs px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full ml-2">
                      {project.category}
                    </span>
                  )}
                </div>

                {project.duration && (
                  <p className="text-sm text-gray-400 mb-2">{project.duration}</p>
                )}

                <p className="project-description">{project.description}</p>

                {/* Skills */}
                {project.skills && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Skills:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.skills.slice(0, 4).map((skill, skillIndex) => (
                        <span key={skillIndex} className="text-xs px-2 py-1 bg-purple-500/20 text-purple-300 rounded">
                          {skill}
                        </span>
                      ))}
                      {project.skills.length > 4 && (
                        <span className="text-xs px-2 py-1 bg-gray-500/20 text-gray-300 rounded">
                          +{project.skills.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                )}

                {/* Technologies */}
                <div className="project-tech">
                  {project.technologies.slice(0, 6).map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 6 && (
                    <span className="tech-tag bg-gray-500/20 text-gray-300">
                      +{project.technologies.length - 6}
                    </span>
                  )}
                </div>

                {/* Project Links */}
                <div className="project-links">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <FaGithub />
                      <span>Code</span>
                    </a>
                  )}
                  {project.live && (
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <FaExternalLinkAlt />
                      <span>Live</span>
                    </a>
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