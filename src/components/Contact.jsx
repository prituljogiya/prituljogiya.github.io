import { motion } from 'framer-motion'
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp, FaGlobe } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaPhone />,
      label: 'Phone',
      value: '+91 95746 95217',
      link: 'tel:+919574695217',
      color: 'text-green-400',
    },
    {
      icon: <HiMail />,
      label: 'Email',
      value: 'prituljogiya99@gmail.com',
      link: 'mailto:prituljogiya99@gmail.com',
      color: 'text-blue-400',
    },
    {
      icon: <FaWhatsapp />,
      label: 'WhatsApp',
      value: 'Chat on WhatsApp',
      link: 'https://wa.me/919574695217',
      color: 'text-green-500',
    },
    {
      icon: <FaLinkedin />,
      label: 'LinkedIn',
      value: 'prituljogiya',
      link: 'https://www.linkedin.com/in/prituljogiya/',
      color: 'text-blue-500',
    },
    {
      icon: <FaGithub />,
      label: 'GitHub',
      value: 'github.com/prituljogiya',
      link: 'https://github.com/prituljogiya',
      color: 'text-gray-300',
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
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Let's discuss your next project or opportunity
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {contactInfo.map((contact, index) => (
            <motion.a
              key={index}
              href={contact.link}
              target={contact.link.startsWith('http') ? '_blank' : '_self'}
              rel={contact.link.startsWith('http') ? 'noopener noreferrer' : ''}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="glass rounded-xl p-6 hover:shadow-2xl transition-all duration-300 group"
            >
              <div className={`text-4xl mb-4 ${contact.color} group-hover:scale-110 transition-transform`}>
                {contact.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">{contact.label}</h3>
              <p className="text-gray-400 text-sm">{contact.value}</p>
            </motion.a>
          ))}
        </motion.div>

        {/* Additional Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 mb-4">Also available on:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="https://www.upwork.com/freelancers/~01f9b79ba92d992f3b?mp_source=share"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="px-6 py-2 glass rounded-lg text-white hover:bg-white/10 transition-colors"
            >
              Upwork
            </motion.a>
            {/* <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="px-6 py-2 glass rounded-lg text-white hover:bg-white/10 transition-colors"
            >
              Fiverr
            </motion.a> */}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact

