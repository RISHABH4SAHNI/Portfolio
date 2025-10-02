import { useEffect, useState } from 'react'

const MyName = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="text-center lg:text-left">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
        Hi, I'm{' '}
        <span className={`text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 ${mounted ? 'typewriter' : ''}`}>
          Rishabh Sahni
        </span>
      </h1>
    </div>
  )
}

export default MyName