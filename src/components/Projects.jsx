import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { useState } from 'react'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 1,
      name: 'Bazaar App',
      description: 'Financial trading application facilitating analysis and trading of financial products like stocks. Traders use this software to place trades, execute market positions, and monitor their accounts.',
      responsibilities: [
        'UI development with Flutter',
        'REST API Integration',
        'Live Trading Software implementation',
        'WebSocket integration for real-time data',
        'Push notifications implementation',
      ],
      technologies: ['Dart', 'Flutter', 'REST API', 'WebSocket', 'Push Notifications'],
      platforms: 'macOS, Windows, Android, iOS',
      screenshots: [
        'https://via.placeholder.com/400x800/02569B/ffffff?text=Bazaar+Home',
        'https://via.placeholder.com/400x800/0175C2/ffffff?text=Trading+Screen',
        'https://via.placeholder.com/400x800/13B9FD/ffffff?text=Market+Analysis',
        'https://via.placeholder.com/400x800/02569B/ffffff?text=Account+Monitor',
      ],
      playStoreLink: '#',
      githubLink: '#',
    },
    {
      id: 2,
      name: 'MOTOGURU',
      description: 'Car repair service application providing facilities for all car repair services online. Find garage details, different service packages, send damaged part images, find nearest garage station, and pickup facility to your location.',
      responsibilities: [
        'UI/UX design and development',
        'REST API Integration',
        'Firebase Authentication implementation',
        'Push notifications setup',
        'Live tracking feature development',
        'Image upload and gallery integration',
      ],
      technologies: ['Dart', 'Flutter', 'REST API', 'Firebase Auth', 'Push Notifications', 'Google Maps'],
      platforms: 'Android, iOS',
      screenshots: [
        'https://via.placeholder.com/400x800/02569B/ffffff?text=Garage+List',
        'https://via.placeholder.com/400x800/0175C2/ffffff?text=Service+Packages',
        'https://via.placeholder.com/400x800/13B9FD/ffffff?text=Live+Tracking',
      ],
      playStoreLink: '#',
      githubLink: '#',
    },
    {
      id: 3,
      name: '360 sim International',
      description: 'Application providing facilities for international SIM providers for travellers. Includes OCR technology and MRZ scanner implementation for document verification.',
      responsibilities: [
        'Coordinated with client to gather requirements',
        'Designed UI screens',
        'API integration',
        'Implemented OCR technology',
        'MRZ scanner implementation',
      ],
      technologies: ['Dart', 'Flutter', 'REST API', 'OCR', 'MRZ Scanner'],
      platforms: 'Android, iOS',
      screenshots: [
        'https://via.placeholder.com/400x800/02569B/ffffff?text=Home+Screen',
        'https://via.placeholder.com/400x800/0175C2/ffffff?text=OCR+Scan',
        'https://via.placeholder.com/400x800/13B9FD/ffffff?text=MRZ+Scanner',
      ],
      playStoreLink: '#',
      githubLink: '#',
    },
    {
      id: 4,
      name: 'KhataBook App',
      description: 'Application created to manage clients daily account credit, debit details and generate Excel reports. Send all details to WhatsApp directly.',
      responsibilities: [
        'Coordinated with client to gather requirements',
        'Designed UI screens',
        'API integration',
        'Excel report generation',
        'WhatsApp integration',
      ],
      technologies: ['Dart', 'Flutter', 'REST API', 'Excel Generation', 'WhatsApp API'],
      platforms: 'Android, iOS, Windows',
      screenshots: [
        'https://via.placeholder.com/400x800/02569B/ffffff?text=Account+List',
        'https://via.placeholder.com/400x800/0175C2/ffffff?text=Credit+Debit',
        'https://via.placeholder.com/400x800/13B9FD/ffffff?text=Reports',
      ],
      playStoreLink: '#',
      githubLink: '#',
    },
    {
      id: 5,
      name: 'Akshar Hospital App',
      description: 'Application providing facility to take prior appointments with respective doctors based on their availability on a particular day.',
      responsibilities: [
        'Understood requirements',
        'Created UI screens',
        'API integration for all modules',
        'Appointment booking system',
      ],
      technologies: ['Dart', 'Flutter', 'REST API', 'Firebase'],
      platforms: 'Android, iOS',
      screenshots: [
        'https://via.placeholder.com/400x800/02569B/ffffff?text=Doctors+List',
        'https://via.placeholder.com/400x800/0175C2/ffffff?text=Appointments',
        'https://via.placeholder.com/400x800/13B9FD/ffffff?text=Schedule',
      ],
      playStoreLink: '#',
      githubLink: '#',
    },
    {
      id: 6,
      name: 'WLCMCLUB',
      description: 'Super smart software for streamlined event management. Manage events, post images and videos on social media. Includes email-type chat system.',
      responsibilities: [
        'Understood requirements',
        'Created UI screens',
        'API integration for modules',
        'Social media integration',
        'Chat system implementation',
      ],
      technologies: ['Dart', 'Flutter', 'REST API', 'Social Media APIs', 'Chat System'],
      platforms: 'Android, iOS (LIVE)',
      screenshots: [
        'https://via.placeholder.com/400x800/02569B/ffffff?text=Events',
        'https://via.placeholder.com/400x800/0175C2/ffffff?text=Social+Media',
        'https://via.placeholder.com/400x800/13B9FD/ffffff?text=Chat',
      ],
      playStoreLink: '#',
      githubLink: '#',
    },
    // {
    //   id: 7,
    //   name: 'Affinity Plus - Tapp Engine',
    //   description: 'App based on US stock market with various functionalities like learning about stocks, wealth creation, stock buy and sell features.',
    //   responsibilities: [
    //     'Understood requirements',
    //     'Created UI screens',
    //     'API integration for modules',
    //     'Stock market data integration',
    //   ],
    //   technologies: ['Dart', 'Flutter', 'REST API', 'Stock Market APIs'],
    //   platforms: 'Android, iOS',
    //   screenshots: [
    //     'https://via.placeholder.com/400x800/02569B/ffffff?text=Market+View',
    //     'https://via.placeholder.com/400x800/0175C2/ffffff?text=Stock+Details',
    //     'https://via.placeholder.com/400x800/13B9FD/ffffff?text=Buy+Sell',
    //   ],
    //   playStoreLink: '#',
    //   githubLink: '#',
    // },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my recent work and contributions
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              className="glass rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              {/* Screenshot Preview */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.screenshots[0]}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white mb-2">{project.name}</h3>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <p className="text-gray-400 mb-3 line-clamp-2">{project.description}</p>
                
                {/* Platforms */}
                {project.platforms && (
                  <p className="text-xs text-accent mb-3 font-semibold">{project.platforms}</p>
                )}

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-accent/20 text-accent rounded-full text-xs font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-accent to-secondary rounded-lg text-white font-semibold text-sm"
                  >
                    View Details
                  </motion.button>
                  {project.githubLink && (
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 glass rounded-lg text-white hover:bg-white/10 transition-colors"
                    >
                      <FaGithub />
                    </motion.a>
                  )}
                  {project.playStoreLink && (
                    <motion.a
                      href={project.playStoreLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 glass rounded-lg text-white hover:bg-white/10 transition-colors"
                    >
                      <FaExternalLinkAlt />
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-3xl font-bold text-white">{selectedProject.name}</h3>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-400 hover:text-white text-2xl"
                  >
                    ×
                  </button>
                </div>

                <p className="text-gray-300 mb-4">{selectedProject.description}</p>
                
                {selectedProject.platforms && (
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-2">Platforms:</h4>
                    <p className="text-accent font-semibold">{selectedProject.platforms}</p>
                  </div>
                )}

                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-white mb-3">My Responsibilities:</h4>
                  <ul className="space-y-2">
                    {selectedProject.responsibilities.map((resp, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-300">
                        <span className="text-accent mt-1">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-white mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-accent/20 text-accent rounded-lg font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* <div className="mb-6">
                  <h4 className="text-xl font-semibold text-white mb-3">Screenshots:</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {selectedProject.screenshots.map((screenshot, index) => (
                      <img
                        key={index}
                        src={screenshot}
                        alt={`Screenshot ${index + 1}`}
                        className="rounded-lg border-2 border-accent/30 hover:border-accent transition-colors"
                      />
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  {selectedProject.playStoreLink && (
                    <motion.a
                      href={selectedProject.playStoreLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent to-secondary rounded-lg text-white font-semibold"
                    >
                      <FaExternalLinkAlt /> Play Store
                    </motion.a>
                  )}
                  {selectedProject.githubLink && (
                    <motion.a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-6 py-3 glass rounded-lg text-white font-semibold hover:bg-white/10 transition-colors"
                    >
                      <FaGithub /> GitHub
                    </motion.a>
                  )}
                </div> */}
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Projects

