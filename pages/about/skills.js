import React from 'react'
import MainNavbar from '../../components/MainNavbar'
import InnerNavbar from '../../components/InnerNavbar'
import Header from '../../components/Header'
import { 
  SiJavascript, SiReact, SiNodedotjs, SiPython, SiNextdotjs,
  SiTailwindcss, SiMongodb, SiPostgresql, SiGit, SiDocker,
  SiAws, SiExpress, SiTypescript, SiRedis
} from 'react-icons/si'

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "JavaScript", icon: SiJavascript, level: 90 },
        { name: "TypeScript", icon: SiTypescript, level: 85 },
        { name: "React.js", icon: SiReact, level: 90 },
        { name: "Next.js", icon: SiNextdotjs, level: 85 },
        { name: "Tailwind CSS", icon: SiTailwindcss, level: 90 },
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", icon: SiNodedotjs, level: 85 },
        { name: "Express.js", icon: SiExpress, level: 85 },
        { name: "Python", icon: SiPython, level: 80 },
        { name: "MongoDB", icon: SiMongodb, level: 80 },
        { name: "PostgreSQL", icon: SiPostgresql, level: 75 },
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", icon: SiGit, level: 90 },
        { name: "Docker", icon: SiDocker, level: 75 },
        { name: "AWS", icon: SiAws, level: 70 },
        { name: "Redis", icon: SiRedis, level: 70 },
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <MainNavbar activeItem="About" />
      <div className="container mx-auto px-4 py-8">
        <Header 
          title="Technical Skills" 
          subtitle="Technologies and tools I work with to bring ideas to life"
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
                          <span className="text-gray-400 text-sm">{skill.level}%</span>
                        </div>
                        <div className="skill-progress-bar">
                          <div 
                            className="skill-progress-fill"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
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