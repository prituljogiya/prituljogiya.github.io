import { motion } from 'framer-motion'
import { FaFire, FaCode, FaTools, FaMobile } from 'react-icons/fa'
import { SiFlutter, SiDart, SiFirebase, SiNodedotjs, SiPhp, SiLaravel, SiGit, SiPostman, SiVisualstudiocode, SiAndroidstudio, SiJira, SiTrello } from 'react-icons/si'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Flutter & Dart',
      icon: <SiFlutter className="text-4xl text-accent" />,
      skills: [
        { name: 'Dart & Flutter', icon: <SiDart /> },
        { name: 'Stateful/Stateless Widgets', icon: <FaCode /> },
        { name: 'Custom Widgets & Animations', icon: <FaMobile /> },
        { name: 'State Management (GetX, Provider, Riverpod, Bloc/Cubit)', icon: <FaCode /> },
        { name: 'Clean Architecture, MVC, MVVM', icon: <FaCode /> },
      ],
    },
    {
      title: 'Backend & Database',
      icon: <FaFire className="text-4xl text-accent" />,
      skills: [
        { name: 'Firebase (Auth, Firestore, FCM, Storage, Analytics, Crashlytics)', icon: <SiFirebase /> },
        { name: 'RESTful APIs & GraphQL', icon: <SiNodedotjs /> },
        { name: 'SQLite, Hive, Shared Preferences', icon: <FaCode /> },
        { name: 'WebSockets Integration', icon: <FaCode /> },
      ],
    },
    {
      title: 'Tools & Technologies',
      icon: <FaTools className="text-4xl text-accent" />,
      skills: [
        { name: 'Git, GitHub/GitLab', icon: <SiGit /> },
        { name: 'Postman, JSON Parsing', icon: <SiPostman /> },
        { name: 'VS Code, Android Studio', icon: <SiVisualstudiocode /> },
        { name: 'JIRA, Trello', icon: <SiJira /> },
        { name: 'CI/CD (GitHub Actions, Bitrise, Codemagic)', icon: <FaTools /> },
        { name: 'Figma Integration', icon: <FaTools /> },
      ],
    },
    {
      title: 'App Features & Integrations',
      icon: <FaMobile className="text-4xl text-accent" />,
      skills: [
        { name: 'Push Notifications (FCM)', icon: <FaMobile /> },
        { name: 'Google Maps & Location Services', icon: <FaMobile /> },
        { name: 'OCR Technology & MRZ Scanner', icon: <FaMobile /> },
        { name: 'Live Trading & WebSocket', icon: <FaMobile /> },
        { name: 'App Localization (Intl)', icon: <FaMobile /> },
        { name: 'Lottie Animations', icon: <FaMobile /> },
        { name: 'Deep Linking', icon: <FaMobile /> },
        { name: 'Platform Channels (Native Integration)', icon: <FaMobile /> },
      ],
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
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Skills & Technologies
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My technical expertise and tools I work with
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="glass rounded-xl p-6 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                {category.icon}
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <span className="text-accent text-xl">{skill.icon}</span>
                    <span className="text-gray-300 text-sm">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

