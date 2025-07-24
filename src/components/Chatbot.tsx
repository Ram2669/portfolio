'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, User, Bot } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Debug log to ensure component is rendering
  useEffect(() => {
    console.log('Chatbot component mounted');
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Initialize with welcome message
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage: Message = {
        id: '1',
        text: "Hi! I&apos;m Ram&apos;s AI assistant. I can answer questions about his experience, skills, projects, and background. What would you like to know?",
        isBot: true,
        timestamp: new Date(),
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen, messages.length]);

  // AI Response Logic based on Ram's resume
  const getAIResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();

    // Experience related
    if (message.includes('experience') || message.includes('work') || message.includes('job') || message.includes('cisco')) {
      return "I&apos;m currently working as a Software Test Engineer Trainee at Cisco since November 2024. I specialize in automated testing using Java and Selenium, and I&apos;m developing a full-stack AI chatbot using Azure OpenAI, Django, and MySQL. I&apos;m also CCNA certified with strong networking fundamentals.";
    }

    // Skills related
    if (message.includes('skill') || message.includes('technology') || message.includes('programming') || message.includes('language')) {
      return "My technical skills include:\n\n• Programming: Java, Python, JavaScript\n• Frameworks: Angular, TestNG, JUnit, Django\n• Tools: Git, VSCode, PyCharm, Cypress, Selenium, AWS, Azure OpenAI\n• Databases: MySQL\n• Testing: Automated Testing, Selenium, TestNG, JUnit, Cypress\n• Cloud: Azure OpenAI, Azure Cognitive Search";
    }

    // Projects related
    if (message.includes('project') || message.includes('built') || message.includes('developed') || message.includes('chatbot')) {
      return "I&apos;ve worked on several key projects:\n\n🤖 AI Chatbot with Azure OpenAI - A full-stack solution with natural language processing\n\n🔍 Network-Based Pattern Searching - Client-server architecture for efficient file searching\n\n⚡ Self-Fuel Dispensing System - RFID-based automation that reduced operational errors by 25%\n\nWould you like details about any specific project?";
    }

    // Education related
    if (message.includes('education') || message.includes('college') || message.includes('degree') || message.includes('study')) {
      return "I completed my Bachelor of Technology in Electronics and Communication Engineering from Pragati Engineering College, Kakinada (August 2019 - June 2023) with a CGPA of 7.87.";
    }

    // Certifications related
    if (message.includes('certification') || message.includes('certified') || message.includes('ccna') || message.includes('nptel')) {
      return "My certifications include:\n\n• Cisco Certified Network Associate (CCNA)\n• The Joy of Computing using Python - IIT Madras (NPTEL)\n• Python Certification - HackerRank\n• Elite + Silver Badge - NPTEL\n\nI also have HackerRank badges in Java, Python, and SQL.";
    }

    // Contact related
    if (message.includes('contact') || message.includes('email') || message.includes('phone') || message.includes('linkedin')) {
      return "You can reach Ram at:\n\n📧 Email: ramgopalpampana10@gmail.com\n📱 Phone: +91 7730072669\n🔗 LinkedIn: linkedin.com/in/ramgopalpampana\n💻 GitHub: github.com/Ram2669\n📍 Location: Kakinada, Andhra Pradesh, India";
    }

    // Location related
    if (message.includes('location') || message.includes('where') || message.includes('based') || message.includes('kakinada')) {
      return "I&apos;m based in Kakinada, Andhra Pradesh, India. Currently working at Cisco in Bengaluru, India.";
    }

    // AI/ML related
    if (message.includes('ai') || message.includes('artificial intelligence') || message.includes('machine learning') || message.includes('azure')) {
      return "I&apos;m actively working with AI technologies! I&apos;m currently developing a full-stack AI chatbot using Azure OpenAI services, integrating Azure Cognitive Search for intelligent schema retrieval and dynamic SQL generation. This project showcases my ability to work with cutting-edge AI technologies.";
    }

    // Testing related
    if (message.includes('testing') || message.includes('selenium') || message.includes('automation') || message.includes('qa')) {
      return "I specialize in automated testing! At Cisco, I use Java and Selenium for automated testing to ensure software quality and reliability. I'm proficient in TestNG, JUnit, and Cypress for comprehensive test automation frameworks.";
    }

    // General greeting
    if (message.includes('hello') || message.includes('hi') || message.includes('hey') || message.includes('good')) {
      return "Hello! I&apos;m Ram&apos;s AI assistant. I&apos;m here to help you learn more about Ram Gopal Pampana&apos;s professional background, skills, and experience. What would you like to know?";
    }

    // Default response
    return "That&apos;s an interesting question! I can tell you about Ram&apos;s experience at Cisco, his technical skills, projects like the AI chatbot and pattern searching system, his education, certifications, or how to contact him. What specific aspect would you like to know more about?";
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getAIResponse(inputText),
        isBot: true,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Debug: Always visible chatbot button */}
      <div className="fixed bottom-6 right-6 z-[9999]">
        <button
          onClick={() => {
            console.log('Chatbot button clicked, isOpen:', isOpen);
            setIsOpen(!isOpen);
          }}
          className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 border-2 border-white flex items-center justify-center"
          style={{ minWidth: '60px', minHeight: '60px' }}
        >
          {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        </button>
      </div>

      {/* Chatbot Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 z-[9998] w-96 h-96 bg-white dark:bg-gray-800 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-t-lg">
              <div className="flex items-center gap-3">
                <Bot size={20} />
                <div>
                  <h3 className="font-semibold">Ram&apos;s AI Assistant</h3>
                  <p className="text-xs opacity-90">Ask me about Ram&apos;s experience!</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`flex items-start gap-2 max-w-[80%] ${message.isBot ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className={`p-2 rounded-full ${message.isBot ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}`}>
                      {message.isBot ? <Bot size={16} /> : <User size={16} />}
                    </div>
                    <div
                      className={`p-3 rounded-lg ${
                        message.isBot
                          ? 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
                          : 'bg-blue-600 text-white'
                      }`}
                    >
                      <p className="text-sm whitespace-pre-line">{message.text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  className="flex justify-start"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className="flex items-start gap-2">
                    <div className="p-2 rounded-full bg-blue-100 text-blue-600">
                      <Bot size={16} />
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about Ram&apos;s experience..."
                  className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputText.trim()}
                  className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white p-2 rounded-lg transition-colors duration-200"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
