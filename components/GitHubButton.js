import { FaGithub } from 'react-icons/fa'

const GitHubButton = () => {
  return (
    <a
      href="https://github.com/RISHABH4SAHNI"
      target="_blank"
      rel="noopener noreferrer"
      className="glass-button flex items-center gap-3 font-semibold w-56 justify-center"
    >
      <FaGithub className="text-xl" />
      <span>View on GitHub</span>
    </a>
  )
}

export default GitHubButton