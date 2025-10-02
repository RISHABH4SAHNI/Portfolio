import MainNavbar from '../../components/MainNavbar'
import InnerNavbar from '../../components/InnerNavbar'
import Header from '../../components/Header'
import { 
  FaLightbulb, FaUsers, FaCog, FaRocket, 
  FaCode, FaBrain, FaComments, FaHeart 
} from 'react-icons/fa'

export default function Strengths() {
  const strengths = [
    {
      icon: FaLightbulb,
      title: "Problem Solving",
      description: "I enjoy breaking down complex problems into manageable parts and finding efficient solutions through analytical thinking and creative approaches."
    },
    {
      icon: FaUsers,
      title: "Team Collaboration",
      description: "Strong believer in teamwork. I communicate effectively, share knowledge openly, and contribute positively to team dynamics."
    },
    {
      icon: FaBrain,
      title: "Quick Learning",
      description: "Adaptable and eager to learn new technologies, frameworks, and methodologies. I stay updated with industry trends and best practices."
    },
    {
      icon: FaCode,
      title: "Clean Code Advocate",
      description: "I write maintainable, well-documented code following industry standards and best practices for scalability and readability."
    },
    {
      icon: FaRocket,
      title: "Innovation Mindset",
      description: "Always looking for ways to improve processes, implement new features, and create better user experiences through innovative solutions."
    },
    {
      icon: FaComments,
      title: "Communication",
      description: "Clear and effective communication with both technical and non-technical stakeholders, ensuring everyone stays aligned."
    },
    {
      icon: FaCog,
      title: "Process Optimization",
      description: "Experienced in identifying bottlenecks and optimizing workflows to improve efficiency and productivity."
    },
    {
      icon: FaHeart,
      title: "Passion for Quality",
      description: "Committed to delivering high-quality work with attention to detail, testing, and continuous improvement."
    },
    {
      icon: FaBrain,
      title: "Analytical Thinking",
      description: "Excel at dissecting complex data and systems—from financial correlations to AI model optimization—for actionable insights and strategic decisions."
    },
    {
      icon: FaRocket,
      title: "Impact-Driven Innovation",
      description: "Focused on building scalable solutions with real-world value, like AI for healthcare and assistive tech for visually impaired users."
    },
    {
      icon: FaUsers,
      title: "Collaborative Leadership",
      description: "Thrived in research teams, startups, and enterprises by mentoring, strategizing partnerships, and driving cross-functional projects."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <MainNavbar activeItem="About" />
      <div className="container mx-auto px-4 py-8">
        <Header 
          title="My Strengths" 
          subtitle="Core qualities that define my approach to work and collaboration"
        />
        <InnerNavbar activeItem="Strengths" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {strengths.map((strength, index) => (
            <div key={index} className="glass-card p-6 hover:scale-105 transition-transform duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-4 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20">
                  <strength.icon className="text-3xl text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {strength.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {strength.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}