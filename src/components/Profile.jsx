import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaBriefcase, FaDownload } from 'react-icons/fa'
import { HiMail, HiPhone } from 'react-icons/hi'
import ThreeBackground from './ThreeBackground'

const Profile = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ThreeBackground />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Profile Photo */}
          <motion.div
            variants={itemVariants}
            className="mb-8 flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-secondary rounded-full blur-2xl opacity-50 animate-pulse-slow"></div>
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-accent shadow-2xl">
                <img
                  src="/profile.png"
                  alt="Pritul Jogiya"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-4 gradient-text"
          >
            PRITUL JOGIYA
          </motion.h1>

          {/* Title */}
          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-3xl text-gray-300 mb-6"
          >
            Flutter Developer | Mobile App Engineer
          </motion.h2>

          {/* Introduction */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Experienced and results-driven Flutter Developer with over 2 years of expertise in building 
            robust, scalable, and high-performance cross-platform mobile applications. Proficient in Dart 
            and Flutter framework with a strong grasp of UI/UX design principles, third-party integrations, 
            and clean architecture practices.
          </motion.p>

          {/* Info Cards */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 max-w-3xl mx-auto"
          >
            <div className="glass rounded-lg p-4">
              <FaMapMarkerAlt className="text-accent text-2xl mb-2 mx-auto" />
              <p className="text-sm text-gray-400">Location</p>
              <p className="text-white font-semibold">Rajkot / Ahmedabad / Remote</p>
            </div>
            <div className="glass rounded-lg p-4">
              <FaBriefcase className="text-accent text-2xl mb-2 mx-auto" />
              <p className="text-sm text-gray-400">Experience</p>
              <p className="text-white font-semibold">2+ Years</p>
            </div>
            <div className="glass rounded-lg p-4">
              <HiMail className="text-accent text-2xl mb-2 mx-auto" />
              <p className="text-sm text-gray-400">Email</p>
              <p className="text-white font-semibold text-sm">prituljogiya99@gmail.com</p>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.button
              onClick={(e) => {
                e.preventDefault()
                const element = document.getElementById('contact')
                if (element) {
                  window.history.replaceState(null, '', window.location.pathname)
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-accent to-secondary rounded-lg font-semibold text-white shadow-lg hover:shadow-xl transition-shadow"
            >
              Get In Touch
            </motion.button>
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 glass rounded-lg font-semibold text-white flex items-center gap-2 hover:bg-white/10 transition-colors"
            >
              <FaDownload /> Download Resume
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="mt-16"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-6 h-10 border-2 border-gray-400 rounded-full mx-auto flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-1 h-3 bg-gray-400 rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Profile

