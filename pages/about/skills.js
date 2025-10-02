import React from 'react'
import MainNavbar from '../../components/MainNavbar'
import InnerNavbar from '../../components/InnerNavbar'
import Header from '../../components/Header'
import { 
  SiJavascript, SiReact, SiNodedotjs, SiPython, SiNextdotjs,
  SiTailwindcss, SiMongodb, SiPostgresql, SiGit, SiDocker,
  SiAws, SiExpress, SiTypescript, SiRedis, SiPytorch, SiScikitlearn,
  SiPandas, SiNumpy, SiMatplotlib, SiTensorflow, SiR, SiCsharp,
  SiSqlite, SiAlteryx, SiPowerbi, SiYolo
} from 'react-icons/si'

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
        { name: "ROS & MLOps", level: 75 } // No icon, text-based
      ]
    },
    {
      title: "Data Science & Analytics",
      skills: [
        { name: "Pandas", icon: SiPandas, level: 85 },
        { name: "NumPy", icon: SiNumpy, level: 85 },
        { name: "Matplotlib", icon: SiMatplotlib, level: 80 },
        { name: "R & RStudio", icon: SiR, level: 75 },
        { name: "SQL", icon: SiSqlite, level: 80 },
        { name: "Power BI & Alteryx", icon: SiPowerbi, level: 75 }
      ]
    },
    {
      title: "Frontend & Full-Stack",
      skills: [
        { name: "JavaScript", icon: SiJavascript, level: 90 },
        { name: "TypeScript", icon: SiTypescript, level: 85 },
        { name: "React.js", icon: SiReact, level: 90 },
        { name: "Next.js", icon: SiNextdotjs, level: 85 },
        { name: "Tailwind CSS", icon: SiTailwindcss, level: 90 },
        { name: "Node.js & Express", icon: SiNodedotjs, level: 85 }
      ]
    },
    {
      title: "Backend & Databases",
      skills: [
        { name: "REST APIs & Async/Await", level: 85 }, // Text-based
        { name: "MongoDB", icon: SiMongodb, level: 80 },
        { name: "PostgreSQL", icon: SiPostgresql, level: 75 },
        { name: "Data Pipelines", level: 80 }, // Text-based
        { name: "C (Data Structures)", icon: SiCsharp, level: 70 } // Using C# icon as proxy for C
      ]
    },
    {
      title: "Tools & DevOps",
      skills: [
        { name: "Git", icon: SiGit, level: 90 },
        { name: "Docker", icon: SiDocker, level: 75 },
        { name: "AWS (Textract)", icon: SiAws, level: 70 },
        { name: "Redis", icon: SiRedis, level: 70 },
        { name: "Jira & RPA", level: 75 }, // Text-based
        { name: "Financial Modeling (Excel)", level: 80 } // Text-based
      ]
    },
    {
      title: "Finance & Domain Expertise",
      skills: [
        { name: "Financial Analysis", level: 80 }, // Text-based
        { name: "Quantitative Analytics", level: 75 }, // Text-based
        { name: "Stock Market & Hedging", level: 75 }, // Text-based
        { name: "WACC/ROCE/ROIC", level: 70 }, // Text-based
        { name: "Investment Analysis", level: 70 } // Text-based
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
