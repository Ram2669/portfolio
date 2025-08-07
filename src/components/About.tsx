'use client';

import { motion } from 'framer-motion';
import { Code, Database, Cloud, TestTube, Award, MapPin, Mail, Phone, Brain, Network, Cpu } from 'lucide-react';

const About = () => {
  const skills = [
    {
      category: 'Programming Languages',
      items: ['Java', 'Python', 'JavaScript', 'HTML5', 'CSS3'],
      icon: Code,
    },
    {
      category: 'Testing & Automation',
      items: ['Selenium WebDriver', 'TestNG', 'JUnit', 'Cypress', 'Automated Testing'],
      icon: TestTube,
    },
    {
      category: 'Web Technologies',
      items: ['React', 'Angular', 'Django', 'REST APIs'],
      icon: Code,
    },
    {
      category: 'Cloud & AI Technologies',
      items: ['Azure OpenAI', 'AWS', 'GPT-4', 'Azure Cognitive Search', 'Generative AI'],
      icon: Cloud,
    },
    {
      category: 'Data Science',
      items: ['Generative AI', 'Machine Learning', 'Data Analysis', 'LangChain', 'LangGraph'],
      icon: Brain,
    },
    {
      category: 'Databases & Tools',
      items: ['MySQL', 'Azure Cosmos DB', 'Git', 'VSCode', 'PyCharm'],
      icon: Database,
    },
    {
      category: 'Networking',
      items: ['CCNA Certified', 'TCP/IP', 'Network Protocols'],
      icon: Network,
    },
  ];

  const certifications = [
    'Data Science Certification - Cisco Systems (2025) - Generative AI Green Belt Program',
    'CCNA (Cisco Certified Network Associate) - Cisco Systems (2024)',
    'Python Programming - NPTEL (2024)',
    'Python (Basic) - HackerRank (2024)',
    'Automation Testing - Test Automation Training (2024)',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Data Science certified Software Test Engineer with expertise in automated testing, AI solutions, and full-stack development. Currently learning LangChain and LangGraph for advanced AI applications.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Personal Info & Experience */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Contact Info */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Contact Information
              </h3>
              <div className="space-y-3">
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Mail className="w-5 h-5 mr-3 text-blue-600" />
                  <span>ramgopalpampana10@gmail.com</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Phone className="w-5 h-5 mr-3 text-blue-600" />
                  <span>+91 7730072669</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <MapPin className="w-5 h-5 mr-3 text-blue-600" />
                  <span>Bengaluru, Karnataka, India</span>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Experience
              </h3>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <TestTube className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Software Test Engineer Trainee
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">CISCO</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                      November 2024 - Present • Bengaluru, India
                    </p>
                    <ul className="text-gray-600 dark:text-gray-300 space-y-1 text-sm">
                      <li>• Automated testing using Java and Selenium to ensure software quality</li>
                      <li>• Developing a full-stack AI chatbot using Azure OpenAI, Django, MySQL, and Azure Cognitive Search for real-time natural language query handling</li>
                      <li>• Integrating Azure Cognitive Search for intelligent schema retrieval and dynamic SQL generation</li>
                      <li>• CCNA Certified: Proficient in networking, routing, switching, and IP fundamentals</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Education
              </h3>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Bachelor of Technology
                </h4>
                <p className="text-blue-600 dark:text-blue-400 font-medium">
                  Electronics and Communication Engineering
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Pragati Engineering College, Kakinada
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  August 2019 - June 2023 • CGPA: 7.87
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Technical Skills
            </h3>
            <motion.div
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {skills.map((skillGroup, index) => {
                const IconComponent = skillGroup.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300"
                    variants={itemVariants}
                    whileHover={{
                      y: -6,
                      scale: 1.03,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <div className="flex items-center mb-4">
                      <motion.div
                        className="w-12 h-12 bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 dark:from-blue-900 dark:via-blue-800 dark:to-blue-700 rounded-xl flex items-center justify-center mr-4 shadow-lg"
                        whileHover={{ rotate: 10, scale: 1.15 }}
                        transition={{ duration: 0.3 }}
                      >
                        <IconComponent className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </motion.div>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                        {skillGroup.category}
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <motion.span
                          key={skillIndex}
                          className="px-4 py-2 bg-gradient-to-r from-blue-50 via-blue-100 to-blue-150 dark:from-blue-900 dark:via-blue-800 dark:to-blue-700 text-blue-800 dark:text-blue-200 rounded-full text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-300 border border-blue-200 dark:border-blue-600"
                          whileHover={{
                            scale: 1.08,
                            y: -2,
                            backgroundColor: "#3B82F6",
                            color: "#FFFFFF",
                            borderColor: "#1D4ED8"
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Certifications */}
            <div className="mt-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Certifications
              </h3>
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300"
                      whileHover={{ scale: 1.02, y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Award className="w-5 h-5 text-yellow-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{cert}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
