import { useState } from 'react'
import MainNavbar from '../../components/MainNavbar'
import Header from '../../components/Header'
import { 
  FaEnvelope, FaLinkedin, FaGithub, FaTwitter, 
  FaPhone, FaMapMarkerAlt, FaPaperPlane 
} from 'react-icons/fa'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Replace with your form handling service (Formspree, etc.)
      const response = await fetch('https://formspree.io/f/your-form-id', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    }

    setIsSubmitting(false)
  }

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: "rishabhsahni2002@gmail.com",
      link: "mailto:rishabhsahni2002@gmail.com"
    },
    {
      icon: FaPhone,
      label: "Phone",
      value: "+91 9310565356",
      link: "tel:+919310565356"
    },
    {
      icon: FaMapMarkerAlt,
      label: "Location",
      value: "Gurugram, India",
      link: null
    }
  ]

  const socialLinks = [
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/rishabh-sahni-612229244/",
      color: "hover:text-blue-400"
    },
    {
      icon: FaGithub,
      label: "GitHub", 
      url: "https://github.com/RISHABH4SAHNI",
      color: "hover:text-gray-300"
    },
    {
      icon: () => <img src="https://img.icons8.com/fluency/48/telegram-app.png" alt="Telegram" className="w-5 h-5" />,
      label: "Telegram",
      url: "https://t.me/YourTelegramUsername",
      color: "hover:text-blue-400"
    },
    {
      icon: () => <img src="https://img.icons8.com/fluency/48/discord-logo.png" alt="Discord" className="w-5 h-5" />,
      label: "Discord", 
      url: "https://discordapp.com/users/rishabhsahni_25743",
      color: "hover:text-indigo-400"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <MainNavbar activeItem="Contact" />
      <div className="container mx-auto px-4 py-8">
        <Header 
          title="Get In Touch" 
          subtitle="Let's connect and discuss opportunities or collaborations"
        />

        <div className="max-w-6xl mx-auto mt-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Contact Form */}
            <div className="glass-card p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>

                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input"
                  required
                />

                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  rows={6}
                  required
                ></textarea>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="submit-button w-full flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <FaPaperPlane />
                      Send Message
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <p className="text-green-400 text-center">Message sent successfully!</p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-red-400 text-center">Failed to send message. Please try again.</p>
                )}
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">

              {/* Contact Details */}
              <div className="glass-card p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                        <info.icon className="text-blue-400 text-xl" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">{info.label}</p>
                        {info.link ? (
                          <a href={info.link} className="text-white hover:text-blue-300 transition-colors duration-300">
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-white">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="glass-card p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Connect With Me</h2>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`social-icon ${social.color}`}
                      aria-label={social.label}
                    >
                      <social.icon className="text-xl" />
                    </a>
                  ))}
                </div>
                <p className="text-gray-300 mt-4">
                  Feel free to reach out on any platform. I'm always open to discussing 
                  new opportunities, interesting projects, or just having a chat about technology!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}