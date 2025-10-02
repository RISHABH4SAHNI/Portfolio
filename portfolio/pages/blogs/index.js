import MainNavbar from '../../components/MainNavbar'
import Header from '../../components/Header'
import { FaCalendarAlt, FaClock, FaExternalLinkAlt, FaLinkedin, FaEye, FaHeart } from 'react-icons/fa'

export default function Blogs() {
  // Helper function to extract impression numbers for sorting
  const extractImpressions = (engagement) => {
    // Handle both K (thousands) and M (millions) suffixes
    const match = engagement.match(/(\d+(?:\.\d+)?)\s*([KM])?\s+impressions/i)
    if (match) {
      const num = parseFloat(match[1])
      const suffix = match[2]?.toUpperCase()
      if (suffix === 'M') {
        return num * 1000000
      } else if (suffix === 'K') {
        return num * 1000
      }
      return num
    }
    return 0
  }

  // Helper function to get performance tier and styling
  const getPerformanceTier = (impressions) => {
    if (impressions >= 1000000) {
      return {
        tier: 'mega-viral',
        badge: '🌟 MEGA VIRAL',
        bgGradient: 'from-yellow-500/30 via-orange-500/30 to-red-600/30',
        borderGradient: 'from-yellow-400 via-orange-400 to-red-500',
        textColor: 'text-yellow-200',
        scale: 'lg:scale-110',
        glow: 'shadow-2xl shadow-yellow-500/50'
      }
    } else if (impressions >= 100000) {
      return {
        tier: 'viral',
        badge: '🔥 VIRAL',
        bgGradient: 'from-orange-500/20 via-red-500/20 to-pink-500/20',
        borderGradient: 'from-yellow-300 via-orange-300 to-red-400',
        textColor: 'text-yellow-200',
        textColor: 'text-orange-300',
        scale: 'lg:scale-105',
        glow: 'shadow-xl shadow-orange-500/30'
      }
    } else if (impressions >= 30000) {
      return {
        tier: 'super-trending',
        badge: '🚀 SUPER TRENDING',
        bgGradient: 'from-purple-500/20 via-blue-500/20 to-cyan-500/20',
        borderGradient: 'from-purple-400 via-blue-400 to-cyan-400',
        textColor: 'text-purple-300',
        scale: 'lg:scale-103',
        glow: 'shadow-lg shadow-purple-500/30'
      }
    } else if (impressions >= 10000) {
      return {
        tier: 'trending',
        badge: '🚀 TRENDING',
        bgGradient: 'from-purple-500/15 via-blue-500/15 to-indigo-500/15',
        borderGradient: 'from-purple-400 via-blue-400 to-indigo-400',
        textColor: 'text-purple-300',
        scale: 'lg:scale-102',
        glow: 'shadow-md shadow-purple-500/20'
      }
    } else if (impressions >= 2000) {
      return {
        tier: 'popular',
        badge: '⭐ POPULAR',
        bgGradient: 'from-green-500/15 via-teal-500/15 to-blue-500/15',
        borderGradient: 'from-green-400 via-teal-400 to-blue-400',
        textColor: 'text-green-300',
        scale: 'hover:scale-[1.01]',
        glow: 'shadow-md shadow-green-500/20'
      }
    } else {
      return {
        tier: 'standard',
        badge: null,
        bgGradient: 'from-gray-500/10 via-slate-500/10 to-gray-500/10',
        borderGradient: 'from-gray-400/50 to-slate-400/50',
        textColor: 'text-gray-300',
        scale: 'hover:scale-[1.01]',
        glow: ''
      }
    }
  }

  const blogs = [
    {
      title: "Uber's Phone-Dead Fallback: Invisible Product Genius",
      excerpt: "Phone dies just as your Uber arrives? Driver asks for last 4 digits of your number and starts the trip. A fallback mechanism that doesn't demand attention but makes a huge difference when everything else fails. Not flashy—just works.",
      date: "2024-12-30",
      readTime: "4 min read",
      category: "Product Design",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7357712461875073025/",
      platform: "LinkedIn",
      engagement: "185K impressions • 1,788 reactions • 35 comments • 10 reposts"
    },
    {
      title: "Swiggy's ₹37 Crore Genius: The Rounding Strategy Most Users Miss",
      excerpt: "Swiggy makes over ₹37 crore a year just through rounding off—something most users hardly notice. A handling fee of ₹7.30 instead of ₹7 means GST brings it to ₹8.61, rounded up to ₹9. That's ₹1 extra per order across 1M daily orders.",
      date: "2025-02-10",
      readTime: "3 min read",
      category: "Business Intelligence",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7293904245194428417/",
      platform: "LinkedIn",
      engagement: "2.9M impressions • 8,387 reactions • 323 comments • 125 reposts"
    },
    {
      title: "BITS Pilani Alumni Startup Empire: From Swiggy to Postman",
      excerpt: "1,580 companies, 825 funded, 20 unicorns. BITS Pilani alumni have built an incredible startup ecosystem: Swiggy ($11B), Postman ($7.5B), OfBusiness ($5B), Groww ($3B), Eruditus ($3.2B), and many more. A powerhouse of innovation.",
      date: "2025-02-08",
      readTime: "3 min read",
      category: "Startup Ecosystem",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7236271281459884033/",
      platform: "LinkedIn",
      engagement: "36K impressions • 384 reactions • 16 comments • 6 reposts"
    },
    {
      title: "BITS Pilani Diamond Jubilee: Government Issues ₹60 Commemorative Coin",
      excerpt: "A proud moment for BITSians! The Government of India is issuing a commemorative ₹60 coin to celebrate BITS Pilani's Diamond Jubilee. Honoring over six decades of excellence in shaping leaders and innovators in engineering, science, and technology.",
      date: "2025-02-05",
      readTime: "2 min read",
      category: "Education & Pride",
      link: "https://www.linkedin.com/in/rishabh-sahni-612229244/",
      platform: "LinkedIn",
      engagement: "34K impressions • 502 reactions • 9 comments • 15 reposts"
    },
    {
      title: "I'm not worried about the new H-1B reforms",
      excerpt: "These changes are nudging us to build at home. Every time a friend returns with global experience, they bring back networks, ideas, and confidence. The end of 'US hi future hai' thinking can mark the beginning of 'India is the future' thinking.",
      date: "2025-02-03",
      readTime: "3 min read",
      category: "Career & Policy",
      link: "https://www.linkedin.com/in/rishabh-sahni-612229244/",
      platform: "LinkedIn",
      engagement: "13.9K impressions • 31 reactions • 22 comments"
    },
    {
      title: "Two months in at Tata 1mg — DeputyDev's Real-World AI Impact",
      excerpt: "Real results from our year-long study: 31.8% reduction in PR review cycle time, 61% increase in code output for top adopters, and 85% developer satisfaction. When AI coding tools move from benchmarks to real-world scale.",
      date: "2025-02-07",
      readTime: "3 min read",
      category: "AI & Engineering",
      link: "https://www.linkedin.com/in/rishabh-sahni-612229244/",
      platform: "LinkedIn",
      engagement: "5.9K impressions • 75 reactions"
    },
    {
      title: "Swiggy's Invisible UX Masterclass",
      excerpt: "Open the app—'You're at Home?' Your saved address detected, just tap and order. No dropdowns, no typing, no fuss. Food ordering is high-intent, low-patience. Every unnecessary step risks losing the user. Invisible UX at its best.",
      date: "2025-01-06",
      readTime: "2 min read",
      category: "Product Design",
      link: "https://www.linkedin.com/posts/rishabh-sahni-612229244_productdesign-ux-swiggy-activity-7163123456789012345-ghij",
      platform: "LinkedIn",
      engagement: "2.4K impressions • 28 reactions • 2 comments"
    },
    {
      title: "Two months in at Tata 1mg — DeputyDev's Real-World AI Impact",
      excerpt: "Real results from our year-long study: 31.8% reduction in PR review cycle time, 61% increase in code output for top adopters, and 85% developer satisfaction. When AI coding tools move from benchmarks to real-world scale.",
      date: "2025-02-07",
      readTime: "3 min read",
      category: "AI & Engineering",
      link: "https://www.linkedin.com/in/rishabh-sahni-612229244/",
      platform: "LinkedIn",
      engagement: "5.9K impressions • 75 reactions"
    },
    {
      title: "Rapido's UX Dilemma: When Convenience Creates Vulnerability",
      excerpt: "Fixed OTPs solve a real problem—until your driver memorizes it. A fascinating case study of how well-meaning UX decisions can create security blind spots. Great design isn't just ease of use—it's context, trust, and fail-safes.",
      date: "2025-01-13",
      readTime: "4 min read",
      category: "Product Design",
      link: "https://www.linkedin.com/posts/rishabh-sahni-612229244_productdesign-uxdesign-techproducts-activity-7162987654321098765-cdef",
      platform: "LinkedIn",
      engagement: "1.9K impressions • 18 reactions"
    },
    {
      title: "Ultimate DSA Sheet Collection: All Links in One Place",
      excerpt: "From Striver's A2Z to Love Babbar's 450 problems - comprehensive collection of curated DSA sheets covering every important topic. Consistency beats speed. Pick one sheet, stick with it, and gradually expand to others.",
      date: "2025-01-27",
      readTime: "2 min read",
      category: "DSA & Coding",
      link: "https://www.linkedin.com/posts/rishabh-sahni-612229244_dsa-placements-codinginterviews-activity-7160987654321098765-mnop",
      platform: "LinkedIn",
      engagement: "1.9K impressions • 12 reactions"
    },
    {
      title: "Call Graphs vs Lookup Tables: Analyzing Large Codebases",
      excerpt: "Two strategies for codebase analysis: Call Graphs show execution flow and dependencies but are heavy. Lookup Tables provide instant metadata search but are static. Real engineering often needs both approaches.",
      date: "2025-01-13",
      readTime: "4 min read",
      category: "Software Engineering",
      link: "https://www.linkedin.com/posts/rishabh-sahni-612229244_codeanalysis-engineering-softwarearchitecture-activity-7162123456789012345-yzab",
      platform: "LinkedIn",
      engagement: "1.4K impressions • 14 reactions • 1 repost"
    },
    {
      title: "India's New Unicorn Club: 11 New Entrants in 2025",
      excerpt: "From AI.tech ($1.5B) to Rapido ($3.0B), India's startup ecosystem reaches 73 unicorns. Highlighting the diversity of innovation across technology, mobility, finance and sustainability - the breadth of opportunity in India's growing ecosystem.",
      date: "2025-01-27",
      readTime: "4 min read",
      category: "Startups & Unicorns",
      link: "https://www.linkedin.com/posts/rishabh-sahni-612229244_indiastartups-unicorn-innovation-activity-7160123456789012345-ijkl",
      platform: "LinkedIn", 
      engagement: "1.3K impressions • 10 reactions • 2 comments"
    },
    {
      title: "AI-Assisted Development: GitMCP Game Changer",
      excerpt: "A simple domain change from github.com to gitmcp.io transforms how AI tools interact with your codebase. Zero setup, no tokens - just ready-to-use config for AI-assisted development with live context.",
      date: "2025-01-20",
      readTime: "2 min read",
      category: "AI & Productivity",
      link: "https://www.linkedin.com/posts/rishabh-sahni-612229244_ai-mcp-developers-activity-7161123456789012345-qrst",
      platform: "LinkedIn",
      engagement: "1.1K impressions • 9 reactions"
    },
    {
      title: "API-First Architecture: Security in the AI Era",
      excerpt: "In a world where bots and AI consume data at scale, API-first architecture isn't optional—it's essential. Every interaction through well-defined APIs ensures security, consistency, and scalability for future-ready platforms.",
      date: "2025-01-20",
      readTime: "3 min read",
      category: "System Architecture",
      link: "https://www.linkedin.com/posts/rishabh-sahni-612229244_api-architecture-techstrategy-activity-7161987654321098765-uvwx",
      platform: "LinkedIn",
      engagement: "1.1K impressions • 14 reactions • 1 repost"
    },
  ];

  // Sort blogs by impressions (highest first)
  const sortedBlogs = [...blogs].sort((a, b) => {
    const impressionsA = extractImpressions(a.engagement)
    const impressionsB = extractImpressions(b.engagement)
    return impressionsB - impressionsA
  })

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <MainNavbar activeItem="Blogs" />
      <div className="container mx-auto px-4 py-8">
        <Header 
          title="Insights & Content" 
          subtitle="Sharing thoughts on startups, tech innovation, and building impactful solutions"
        />

        <div className="max-w-4xl mx-auto mt-8 space-y-6">
          {sortedBlogs.map((blog, index) => {
            const impressions = extractImpressions(blog.engagement)
            const performance = getPerformanceTier(impressions)

            return (
            <div 
              key={index} 
              className="glass-card p-8 hover:scale-[1.02] transition-transform duration-300 min-h-[280px] flex flex-col justify-between"
            >
              <div>
                  {/* Performance Badge */}
                  <div className="mb-3 h-8 flex items-center">
                    {performance.badge ? (
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${performance.textColor} 
                                      bg-current/10 border border-current/30`}>
                        {performance.badge}
                      </span>
                    ) : (
                      <span className="invisible">placeholder</span>
                    )}
                  </div>

                  <div className="flex items-center gap-4 mb-3">
                    <div className="flex items-center gap-2">
                      <FaLinkedin className="text-blue-400" />
                      <span className="text-blue-300 text-sm">{blog.platform}</span>
                    </div>
                    {blog.engagement && (
                      <div className="flex items-center gap-1">
                        <FaEye className="text-gray-400" />
                        <span className={`text-sm font-semibold ${
                          impressions >= 100000 ? 'text-orange-300' :
                          impressions >= 10000 ? 'text-purple-300' :
                          impressions >= 2000 ? 'text-green-300' : 'text-gray-400'
                        } ${impressions >= 1000000 ? 'font-bold text-lg' : ''}`}>
                          {blog.engagement}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="mb-3">
                    <span className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 text-sm rounded-full border border-blue-400/30">
                      {blog.category}
                    </span>
                  </div>

                    <div className="flex items-center gap-4 text-gray-400 text-sm">
                      <div className="flex items-center gap-1">
                        <FaCalendarAlt />
                        <span>{formatDate(blog.date)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FaClock />
                        <span>{blog.readTime}</span>
                      </div>
                    </div>

                  <h3 className="text-2xl font-bold text-white mb-3">{blog.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{blog.excerpt}</p>
              </div>

              <div>
                  <a 
                    href={blog.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300"
                  >
                    Read More <FaExternalLinkAlt className="text-sm" />
                  </a>
              </div>
            </div>
            )
          })}
        </div>

        {/* LinkedIn Achievement Highlight */}
        <div className="mt-12 text-center">
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <FaLinkedin className="text-4xl text-blue-400" />
              <div>
                <div className="text-3xl font-bold text-white">5.5M+</div>
                <div className="text-gray-300">LinkedIn Impressions</div>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Writing about startups, innovation, and tech-driven storytelling
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://www.linkedin.com/in/rishabh-sahni-612229244/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass-button"
              >
                Follow on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}