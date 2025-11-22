import { motion } from 'framer-motion'
import { FaCertificate, FaAward } from 'react-icons/fa'

const Certifications = () => {
  const certifications = [
    {
      title: 'Flutter Development Training',
      issuer: 'Google / Udemy / Coursera',
      year: '2021',
      description: 'Comprehensive Flutter and Dart development course',
    },
    {
      title: 'Firebase Fundamentals',
      issuer: 'Google Firebase',
      year: '2022',
      description: 'Firebase Authentication, Firestore, and Cloud Functions',
    },
    {
      title: 'Google Play Academy',
      issuer: 'Google Play',
      year: '2022',
      description: 'App publishing and optimization on Google Play Store',
    },
    {
      title: 'Mobile App Development',
      issuer: 'Online Platform',
      year: '2021',
      description: 'Advanced mobile app development techniques',
    },
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
    <section id="certifications" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Certifications
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Professional certifications and training
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="glass rounded-xl p-6 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/20 rounded-lg">
                  <FaCertificate className="text-3xl text-accent" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold text-white">{cert.title}</h3>
                    <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-xs font-semibold">
                      {cert.year}
                    </span>
                  </div>
                  <p className="text-accent font-semibold mb-2">{cert.issuer}</p>
                  <p className="text-gray-400 text-sm">{cert.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications

