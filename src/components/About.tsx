'use client';

import { motion } from 'framer-motion';
import { Code, Database, Cloud, TestTube, Award, MapPin, Mail, Phone } from 'lucide-react';

const About = () => {
  const skills = [
    {
      category: 'Programming Languages',
      items: ['Java', 'Python', 'JavaScript'],
      icon: Code,
    },
    {
      category: 'Frameworks & Libraries',
      items: ['Angular', 'TestNG', 'JUnit', 'Django'],
      icon: Code,
    },
    {
      category: 'Tools & Platforms',
      items: ['Git', 'VSCode', 'PyCharm', 'Cypress', 'Selenium', 'AWS', 'Azure OpenAI', 'REST APIs', 'Postman'],
      icon: Cloud,
    },
    {
      category: 'Databases',
      items: ['MySQL'],
      icon: Database,
    },
    {
      category: 'Testing',
      items: ['Automated Testing', 'Selenium', 'TestNG', 'JUnit', 'Cypress'],
      icon: TestTube,
    },
  ];

  const certifications = [
    'Cisco Certified Network Associate (CCNA)',
    'The Joy of Computing using Python - IIT Madras (NPTEL)',
    'Python - HackerRank',
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
            Passionate Software Test Engineer with expertise in automated testing and full-stack development
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
                  <span>Kakinada, Andhra Pradesh</span>
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
                      <li>• Developing full-stack AI chatbot using Azure OpenAI, Django, MySQL</li>
                      <li>• Integrating Azure Cognitive Search for intelligent schema retrieval</li>
                      <li>• CCNA Certified with proficiency in networking and IP fundamentals</li>
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
                    className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6"
                    variants={itemVariants}
                  >
                    <div className="flex items-center mb-3">
                      <IconComponent className="w-6 h-6 text-blue-600 mr-3" />
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {skillGroup.category}
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Certifications */}
            <div className="mt-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Certifications & Awards
              </h3>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center">
                      <Award className="w-5 h-5 text-yellow-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{cert}</span>
                    </div>
                  ))}
                  <div className="flex items-center">
                    <Award className="w-5 h-5 text-yellow-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">
                      Elite + Silver Badge in NPTEL Certification
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Award className="w-5 h-5 text-yellow-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">
                      HackerRank Badges in Java, Python, and SQL
                    </span>
                  </div>
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
