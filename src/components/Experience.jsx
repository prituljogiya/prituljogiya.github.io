import { motion } from 'framer-motion'
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa'

const Experience = () => {
  const experiences = [
    {
      company: 'Trentium Solution Pvt Ltd, Ahmedabad',
      role: 'Flutter Developer',
      duration: 'Sep 2020 – Present',
      tasks: [
        'Built and developed multiple mobile apps using Flutter framework',
        'Developed financial trading application (Bazaar app) with live trading software and WebSocket integration',
        'Created car repair service app (MOTOGURU) with garage finder, service packages, and live tracking',
        'Implemented REST API integrations for various applications',
        'Integrated Firebase Authentication, Push Notifications, and Cloud Storage',
        'Worked on OCR technology and MRZ scanner implementation',
        'Coordinated with clients to gather requirements and design UI screens',
        'Maintained code quality and followed clean architecture practices',
      ],
      modules: ['Bazaar App', 'MOTOGURU', '360 sim International', 'KhataBook App', 'Akshar Hospital App', 'WLCMCLUB', 'Affinity Plus'],
    },
  ]

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
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  }

  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Work Experience
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My professional journey and contributions
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-secondary to-accent transform md:-translate-x-1/2"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative mb-12 ${
                index % 2 === 0 ? 'md:pr-1/2 md:pl-0' : 'md:pl-1/2 md:pr-0'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-accent rounded-full border-4 border-gray-900 transform md:-translate-x-1/2 z-10"></div>

              <motion.div
                whileHover={{ scale: 1.02, x: index % 2 === 0 ? 5 : -5 }}
                className="glass rounded-xl p-6 ml-16 md:ml-0 hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                    <p className="text-accent text-lg font-semibold">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 mt-2 md:mt-0">
                    <FaCalendarAlt className="text-accent" />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                    <FaBriefcase className="text-accent" />
                    Tasks Handled:
                  </h4>
                  <ul className="space-y-2">
                    {exp.tasks.map((task, taskIndex) => (
                      <li key={taskIndex} className="flex items-start gap-2 text-gray-300">
                        <span className="text-accent mt-1">•</span>
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Modules Built:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.modules.map((module, moduleIndex) => (
                      <span
                        key={moduleIndex}
                        className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-semibold"
                      >
                        {module}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Experience

