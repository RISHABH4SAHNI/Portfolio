import { SiLeetcode } from 'react-icons/si'

const LeetCodeButton = () => {
  return (
    <a
      href="https://leetcode.com/u/f20211630/"
      target="_blank"
      rel="noopener noreferrer"
      className="glass-button flex items-center gap-3 font-semibold w-60 justify-center"
    >
      <SiLeetcode className="text-xl" />
      <span>LeetCode Profile</span>
    </a>
  )
}

export default LeetCodeButton