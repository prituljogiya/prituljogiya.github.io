import { motion } from 'framer-motion'
import { FaCode, FaBook, FaGamepad, FaPlane } from 'react-icons/fa'

const Interests = () => {
  const interests = [
    {
      name: 'App Development',
      icon: <FaCode className="text-4xl" />,
      description: 'Passionate about building innovative mobile applications',
    },
    {
      name: 'Movies & Series',
      icon: <FaBook className="text-4xl" />,
      description: 'Love watch movies and binge-watch series',
    },
    {
      name: 'Playing Computer Games',
      icon: <FaGamepad className="text-4xl" />,
      description: 'Enjoy gaming in free time',
    },
    {
      name: 'Traveling',
      icon: <FaPlane className="text-4xl" />,
      description: 'Exploring new places and cultures',
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
    <section id="interests" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Interests
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Things I enjoy outside of coding
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {interests.map((interest, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass rounded-xl p-6 text-center hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-accent mb-4 flex justify-center">
                {interest.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{interest.name}</h3>
              <p className="text-gray-400 text-sm">{interest.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Interests

