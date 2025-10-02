const Header = ({ title, subtitle }) => {
  return (
    <div className="text-center py-8">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
        {title}
      </h1>
      {subtitle && (
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  )
}

export default Header