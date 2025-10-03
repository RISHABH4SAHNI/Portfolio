import { FaDownload } from 'react-icons/fa'

const ResumeDownload = () => {
  return (
    <a
      href="/documents/Rishabh_Sahni_Resume.pdf"
      download="Rishabh_Sahni_Resume.pdf"
      className="glass-button flex items-center gap-3 font-semibold bg-gradient-to-r from-blue-500/20 to-purple-500/20 hover:from-blue-500/30 hover:to-purple-500/30 w-60 justify-center"
    >
      <FaDownload className="text-xl" />
      <span>Download Resume</span>
    </a>
  )
}

export default ResumeDownload