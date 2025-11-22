import { motion } from 'framer-motion'
import { FaQuoteLeft, FaStar } from 'react-icons/fa'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Client Name',
      role: 'CEO, Company Name',
      content: 'Excellent Flutter developer! Delivered our app on time with great quality. Highly recommended for mobile app projects.',
      rating: 5,
      company: 'XYZ Tech',
    },
    {
      name: 'Manager Name',
      role: 'Project Manager, ABC Solutions',
      content: 'Outstanding work on the HRMS app. Great attention to detail and always responsive to feedback. A pleasure to work with!',
      rating: 5,
      company: 'ABC Solutions',
    },
    {
      name: 'Client Name',
      role: 'Founder, Startup Name',
      content: 'Built our ecommerce app from scratch. Clean code, smooth UI, and excellent API integration. Exceeded expectations!',
      rating: 5,
      company: 'Startup Name',
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
    <section id="testimonials" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Testimonials
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            What clients and colleagues say about my work
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass rounded-xl p-6 hover:shadow-2xl transition-all duration-300"
            >
              <FaQuoteLeft className="text-4xl text-accent mb-4" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="border-t border-gray-700 pt-4">
                <p className="text-white font-semibold">{testimonial.name}</p>
                <p className="text-gray-400 text-sm">{testimonial.role}</p>
                <p className="text-accent text-sm mt-1">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials

