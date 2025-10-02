import Link from 'next/link'

const InnerNavbar = ({ activeItem }) => {
  const navItems = [
    { name: 'About', href: '/about' },
    { name: 'Skills', href: '/about/skills' },
    { name: 'Strengths', href: '/about/strengths' },
  ]

  return (
    <div className="flex justify-center mb-8">
      <div className="glass-card p-2 inline-flex rounded-2xl">
        <div className="flex space-x-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`px-6 py-3 rounded-xl transition-all duration-300 font-medium ${
                activeItem === item.name
                  ? 'bg-white/20 text-white shadow-lg'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default InnerNavbar