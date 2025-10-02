import { FaLinkedin } from 'react-icons/fa'

const LinkedinButton = () => {
  return (
    <a
      href="https://www.linkedin.com/in/rishabh-sahni-612229244/"
      target="_blank"
      rel="noopener noreferrer"
      className="glass-button flex items-center gap-3 font-semibold w-60 justify-center"
    >
      <FaLinkedin className="text-xl" />
      <span>Connect on LinkedIn</span>
    </a>
  )
}

export default LinkedinButton