import MainNavbar from '../../components/MainNavbar'
import InnerNavbar from '../../components/InnerNavbar'
import Header from '../../components/Header'
import Link from 'next/link'

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <MainNavbar activeItem="About" />
      <div className="container mx-auto px-4 py-8">
        <Header title="About Me" />
        <InnerNavbar activeItem="About" />

        <div className="mt-8 space-y-8">
          {/* Introduction Card */}
          <div className="glass-card p-8">
            <h2 className="text-3xl font-bold text-white mb-6">Hello! I'm Rishabh Sahni</h2>
            <div className="text-gray-300 space-y-4 text-lg leading-relaxed">
              <p>
                I'm a Computer Science graduate with a minor in Finance from BITS Pilani, currently working 
                at <span className="text-blue-400 font-semibold">Tata 1mg</span> as a Software Development Engineer – AI, 
                where I design and deploy scalable AI systems — building backend pipelines, workflow automations, 
                and system integrations that interact with LLMs, NLP models, and data-driven services.
              </p>
              <p>
                My journey blends software engineering, applied ML, and quantitative finance, with hands-on 
                experience in building end-to-end systems that drive real business impact. I'm passionate 
                about creating intelligent solutions that scale and deliver measurable results.
              </p>
              <p>
                Beyond engineering, I'm deeply interested in the startup ecosystem & venture capital. 
                Through LinkedIn, I've reached <span className="text-purple-400 font-semibold">4.5M+ impressions</span>, 
                writing on startups, innovation, and tech-driven storytelling.
              </p>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="glass-card p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Professional Experience</h3>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-400 pl-6">
                <h4 className="text-xl font-semibold text-white">Software Development Engineer – AI</h4>
                <p className="text-blue-400 font-medium">Tata 1mg</p>
              </div>
              <div className="border-l-4 border-purple-400 pl-6">
                <h4 className="text-xl font-semibold text-white">ML Intern</h4>
                <p className="text-purple-400 font-medium">Eightfold AI</p>
              </div>
              <div className="border-l-4 border-pink-400 pl-6">
                <h4 className="text-xl font-semibold text-white">Data Intern</h4>
                <p className="text-pink-400 font-medium">Macquarie Global Services</p>
              </div>
              <div className="border-l-4 border-green-400 pl-6">
                <h4 className="text-xl font-semibold text-white">ML Intern</h4>
                <p className="text-green-400 font-medium">FernGlasz</p>
              </div>
            </div>
          </div>

          {/* Key Achievements & Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card p-6 text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">4.5M+</div>
              <div className="text-gray-300">LinkedIn Impressions</div>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">Multiple</div>
              <div className="text-gray-300">AI Systems Deployed</div>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">Open Source</div>
              <div className="text-gray-300">Contributor</div>
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="glass-card p-6">
              <h3 className="text-2xl font-bold text-white mb-4">Education</h3>
              <div className="text-gray-300">
                <div className="mb-6">
                  <p className="font-semibold text-lg">Bachelor of Engineering, Computer Science 
                    <span className="text-green-400 font-bold ml-2">8.5/10 CGPA</span>
                  </p>
                  <p className="text-blue-400 font-medium">BITS Pilani Pilani Campus</p>
                  <p className="text-sm text-gray-400">2021-2025</p>
                  <p className="text-sm text-gray-400">Leadership experience in Student Union</p>
                </div>
                <div className="mb-6">
                  <p className="font-semibold text-lg">Minor in Finance 
                    <span className="text-green-400 font-bold ml-2">8.6/10 CGPA</span>
                  </p>
                  <p className="text-blue-400 font-medium">BITS Pilani</p>
                </div>
                <div className="mb-4">
                  <p className="font-semibold text-lg">Class 12 (Senior Secondary) 
                    <span className="text-yellow-400 font-bold ml-2">97%</span>
                  </p>
                  <p className="text-blue-400 font-medium">Modern Vidya Niketan, Sector 17</p>
                  <p className="text-sm text-gray-400">2021</p>
                </div>
                <div>
                  <p className="font-semibold text-lg">Class 10 (Secondary) 
                    <span className="text-yellow-400 font-bold ml-2">97.6%</span>
                  </p>
                  <p className="text-blue-400 font-medium">Modern Vidya Niketan, Sector 17</p>
                  <p className="text-sm text-gray-400">2019</p>
                </div>
              </div>
            </div>
            <div className="glass-card p-6">
              <h3 className="text-2xl font-bold text-white mb-4">Certifications</h3>
              <div className="text-gray-300 space-y-2">
                <p>• <span className="text-purple-400">Open Source Models with Hugging Face</span></p>
                <p className="text-sm text-gray-400 ml-4">DeepLearning.AI • Aug 2025</p>
                
                <p>• <span className="text-blue-400">Certified Valuation Analyst (CVA)</span></p>
                <p className="text-sm text-gray-400 ml-4">Bocconi University</p>
                <p className="text-sm text-gray-400 ml-4">Mar 2024 • Skills: Private Equity, Venture Capital, Business Valuation</p>
                
                <p>• <span className="text-green-400">Financial Modelling Valuation Analyst</span></p>
                <p className="text-sm text-gray-400 ml-4">Erasmus School of Economics</p>
                <p className="text-sm text-gray-400 ml-4">Mar 2024 • Skills: Financial Modeling, Financial Analysis</p>
                
                <p>• <span className="text-orange-400">Microsoft Certified Systems Administrator: Machine Learning</span></p>
                <p className="text-sm text-gray-400 ml-4">DevTown & Microsoft</p>
                <p className="text-sm text-gray-400 ml-4">Skills: Python, OpenCV, Machine Learning</p>
              </div>
            </div>
          </div>

          {/* Test Scores & Academic Achievements */}
          <div className="glass-card p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Test Scores & Academic Achievements</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg p-6">
                  <h4 className="text-xl font-bold text-white mb-2">JEE Advanced</h4>
                  <div className="text-2xl font-bold text-yellow-300 mb-1">Rank: 3193</div>
                  <div className="text-sm text-gray-200">Oct 2021</div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-lg p-6">
                  <h4 className="text-xl font-bold text-white mb-2">BITSAT</h4>
                  <div className="text-2xl font-bold text-yellow-300 mb-1">390/450</div>
                  <div className="text-sm text-gray-200">Aug 2021</div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-r from-pink-500 to-red-500 rounded-lg p-6">
                  <h4 className="text-xl font-bold text-white mb-2">JEE Mains</h4>
                  <div className="text-2xl font-bold text-yellow-300 mb-1">99.876%ile</div>
                  <div className="text-sm text-gray-200">AIR: 1618 • Feb 2021</div>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Focus Areas */}
          <div className="glass-card p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Technical Expertise</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-3">AI & Machine Learning</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• LLM Integration & Routing</li>
                  <li>• NLP Models & Pipelines</li>
                  <li>• Computer Vision (AWS Textract)</li>
                  <li>• Embedding Systems</li>
                  <li>• Recommendation Algorithms</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-purple-400 mb-3">Backend & Systems</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Microservices Architecture</li>
                  <li>• Workflow Automation</li>
                  <li>• System Integrations</li>
                  <li>• Data Pipelines</li>
                  <li>• Scalable Backend Systems</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-pink-400 mb-3">Data & Analytics</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• BI Dashboards (Power BI)</li>
                  <li>• Alteryx Workflows</li>
                  <li>• RPA Solutions</li>
                  <li>• Financial Analytics</li>
                  <li>• Data-Driven Services</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Connect & Collaborate */}
          <div className="glass-card p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Let's Connect & Collaborate</h3>
            <p className="text-gray-300 mb-6">
              Always open to connect, collaborate, and build impactful solutions. 
              Check out my work and let's create something amazing together!
            </p>
            <div className="flex justify-center">
              <Link 
                href="https://github.com/RISHABH4SAHNI" 
                className="glass-button inline-flex items-center justify-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="mr-2">🚀</span>
                GitHub Portfolio
              </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}