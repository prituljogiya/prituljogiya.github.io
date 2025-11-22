import { motion } from 'framer-motion'
import { FaGraduationCap, FaCalendarAlt } from 'react-icons/fa'

const Education = () => {
  const education = [
    {
      degree: 'B.Tech Computer Engineering',
      field: 'Computer Engineering',
      college: 'Atmiya University, Rajkot, Gujarat, India',
      year: 'Graduated',
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="education" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Education
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My academic background
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass rounded-xl p-6 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-accent/20 rounded-lg">
                  <FaGraduationCap className="text-3xl text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                  <p className="text-gray-400 text-sm mb-2">{edu.field}</p>
                  <p className="text-accent font-semibold">{edu.college}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <FaCalendarAlt className="text-accent" />
                <span>{edu.year}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Education

