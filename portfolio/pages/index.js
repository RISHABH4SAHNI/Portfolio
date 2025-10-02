import MainNavbar from '../components/MainNavbar'
import MyName from '../components/MyName'
import MyImage2 from '../components/MyImage2'
import LinkedinButton from '../components/LinkedinButton'
import GitHubButton from '../components/GitHubButton'
import LeetCodeButton from '../components/LeetCodeButton'
import ResumeDownload from '../components/ResumeDownload'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <MainNavbar activeItem="Home" />

      <main className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[80vh]">

          {/* Hero Text Section */}
          <div className="flex-1 text-center lg:text-left lg:pr-12 mb-12 lg:mb-0">
            <div className="mb-8">
              <MyName />
            </div>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Software Engineer passionate about creating innovative web solutions
              and building exceptional user experiences.
            </p>

            {/* Top row: Resume + LinkedIn */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-4">
              <ResumeDownload />
              <LinkedinButton />
            </div>

            {/* Bottom row: GitHub + LeetCode */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <GitHubButton />
              <LeetCodeButton />
            </div>
          </div>

          {/* Image Section */}
          <div className="flex-1 flex justify-center">
            <MyImage2 />
          </div>
        </div>
      </main>
    </div>
  )
}