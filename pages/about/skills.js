import React from 'react'
import MainNavbar from '../../components/MainNavbar'
import InnerNavbar from '../../components/InnerNavbar'
import Header from '../../components/Header'
import { 
  SiJavascript, SiReact, SiNodedotjs, SiPython, SiNextdotjs,
  SiTailwindcss, SiMongodb, SiPostgresql, SiGit, SiDocker,
  SiAmazonaws, SiExpress, SiTypescript, SiRedis, SiPytorch, SiScikitlearn,
  SiPandas, SiNumpy, SiTensorflow, SiR, SiCsharp,
  SiSqlite, SiAlteryx, SiPowerbi, SiYolo
} from 'react-icons/si'
import { 
  FaServer, FaDatabase, FaChartBar, FaCogs, FaMicrosoft, 
  FaJira, FaRobot, FaChart 
} from 'react-icons/fa'

export default function Skills() {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      skills: [
        { name: "Python", icon: SiPython, level: 90 },
        { name: "PyTorch", icon: SiPytorch, level: 85 },
        { name: "LLMs & NLP", icon: SiTensorflow, level: 85 }, // Using TensorFlow icon as proxy for ML frameworks
        { name: "Scikit-Learn", icon: SiScikitlearn, level: 80 },
        { name: "YOLO & Computer Vision", icon: SiYolo, level: 75 },
        { name: "ROS & MLOps", icon: FaRobot, level: 75 }
      ]
    },
    {
      title: "Data Science & Analytics",
      skills: [
        { name: "Pandas", icon: SiPandas, level: 90 },
        { name: "NumPy", icon: SiNumpy, level: 90 },
        { name: "Matplotlib", icon: FaChartBar, level: 90 },
        { name: "R & RStudio", icon: SiR, level: 75 },
        { name: "SQL", icon: SiSqlite, level: 85 },
        { name: "Power BI & Alteryx", icon: SiPowerbi, level: 80 }
      ]
    },
    {
      title: "Frontend & Full-Stack",
      skills: [
        { name: "JavaScript", icon: SiJavascript, level: 80 },
        { name: "TypeScript", icon: SiTypescript, level: 80 },
        { name: "React.js", icon: SiReact, level: 80 },
        { name: "Next.js", icon: SiNextdotjs, level: 85 },
        { name: "Tailwind CSS", icon: SiTailwindcss, level: 70 },
        { name: "Node.js & Express", icon: SiNodedotjs, level: 85 }
      ]
    },
    {
      title: "Backend & Databases",
      skills: [
        { name: "REST APIs & Async/Await", icon: FaServer, level: 85 },
        { name: "MongoDB", icon: SiMongodb, level: 80 },
        { name: "PostgreSQL", icon: SiPostgresql, level: 80 },
        { name: "Data Pipelines", icon: FaDatabase, level: 85 },
        { name: "C (Data Structures)", icon: SiCsharp, level: 70 } // Using C# icon as proxy for C
      ]
    },
    {
      title: "Tools & DevOps",
      skills: [
        { name: "Git", icon: SiGit, level: 90 },
        { name: "Docker", icon: SiDocker, level: 85 },
        { name: "AWS (Textract)", icon: SiAmazonaws, level: 85 },
        { name: "Redis", icon: SiRedis, level: 80 },
        { name: "Jira & RPA", icon: FaJira, level: 80 },
        { name: "Financial Modeling (Excel)", icon: FaMicrosoft, level: 90 }
      ]
    },
    {
      title: "Finance & Domain Expertise",
      skills: [
        { name: "Financial Analysis", icon: FaChartBar, level: 80 },
        { name: "Quantitative Analytics", icon: FaCogs, level: 85 },
        { name: "Stock Market & Hedging", icon: FaChart, level: 85 },
        { name: "WACC/ROCE/ROIC", icon: FaChartBar, level: 80 },
        { name: "Investment Analysis", icon: FaChartBar, level: 80 }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <MainNavbar activeItem="About" />
      <div className="container mx-auto px-4 py-8">
        <Header 
          title="Technical Skills" 
          subtitle="Comprehensive proficiencies across AI, data, development, and finance—drawn from projects and professional experience"
        />
        <InnerNavbar activeItem="Skills" />

        <div className="space-y-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="glass-card p-8">
              <h2 className="text-2xl font-bold text-white mb-6">{category.title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="flex items-center gap-4 mb-3">
                      {skill.icon && React.createElement(skill.icon, { 
                        className: "text-3xl text-blue-400" })}
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-white font-medium">{skill.name}</span>
                          <span className="text-gray-400 text-sm">{skill.level ? `${skill.level}%` : 'Proficient'}</span>
                        </div>
                        {skill.level && (
                          <div className="skill-progress-bar">
                            <div 
                              className="skill-progress-fill"
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
