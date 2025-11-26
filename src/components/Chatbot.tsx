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
    // removed debug log for production
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
        text: "Hi! I'm Ram's AI assistant. I can answer questions about experience, skills, projects, education, and certifications. What would you like to know?",
        isBot: true,
        timestamp: new Date(),
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen, messages.length]);
  // Reset chat when closed so each open starts fresh
  useEffect(() => {
    if (!isOpen) {
      setMessages([]);
      setIsTyping(false);
      setInputText('');
    }
  }, [isOpen]);


  // Project-specific details helper
  const getProjectDetails = (msg: string): string | null => {
    // AI-Powered Chatbot for Infrastructure Management
    if (
      (msg.includes('chatbot') && (msg.includes('ai') || msg.includes('infrastructure'))) ||
      msg.includes('ai-powered chatbot') ||
      msg.includes('ai powered chatbot') ||
      msg.includes('ai chatbot') ||
      msg.includes('infrastructure management') ||
      msg.includes('azure openai') ||
      msg.includes('langchain') ||
      msg.includes('langgraph')
    ) {
      return "AI-Powered Chatbot for Infrastructure Management\n\nStatus: Currently Implementing\nCategory: AI/ML & Infrastructure\nTechnologies: LangChain, LangGraph, Azure AI Search, Azure OpenAI (GPT-4.0, GPT-3.5-Turbo), Azure MySQL Server, Azure Cosmos DB, Azure VNet, Azure Blob Storage, Django\nHighlights:\n• Multi-agent: GPT-4 primary + GPT-3.5-Turbo SQL agent\n• Intelligent routing across RAG, SQL, and web-search\n• RAG via Azure AI Search; embeddings + vector index\n• SQL agent auto-generates, validates, and executes queries (Azure MySQL & Cosmos DB)\n• Secure Azure architecture with VNet and private networking";
    }

    // Network-Based Pattern Searching System
    if (
      msg.includes('network-based pattern') ||
      msg.includes('network based pattern') ||
      msg.includes('pattern searching') ||
      msg.includes('pattern search') ||
      msg.includes('client-server') ||
      msg.includes('client server')
    ) {
      return "Network-Based Pattern Searching System\n\nStatus: Completed\nCategory: Backend\nTechnologies: Python, JSON, Client-Server Architecture\nHighlights:\n• Client–server pattern searching for efficient text matching\n• Structured data exchange using JSON\n• Optimized error handling and file parsing (25% latency reduction)";
    }

    // Self-Fuel Dispensing Automated Framework Using RFID Cards
    if (
      msg.includes('self-fuel') ||
      msg.includes('self fuel') ||
      msg.includes('fuel dispensing') ||
      msg.includes('rfid')
    ) {
      return "Self-Fuel Dispensing Automated Framework Using RFID Cards\n\nStatus: Completed\nCategory: IoT/Embedded\nTechnologies: Embedded C, Arduino, RFID Technology, Real-time Processing\nHighlights:\n• RFID card-based authentication to prevent unauthorized access\n• Automated dispensing workflow to minimize manual errors\n• ~40% improvement in transaction accuracy via real-time sync\n• Robust microcontroller control logic";
    }

    return null;
  };

  // AI Response Logic based on Ram's resume
  const getAIResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();

    const projectDetails = getProjectDetails(message);
    if (projectDetails) return projectDetails;

    // Experience related
    if (message.includes('experience') || message.includes('work') || message.includes('job') || message.includes('cisco')) {
      return "I’m a Software Test Engineer Trainee at Cisco (since Nov 2024). I work on automated testing using Python with Selenium and Pytest, and I’m building a full‑stack AI chatbot using Azure OpenAI, Django, MySQL, and Azure AI Search.";
    }

    // Skills related
    if (message.includes('skill') || message.includes('technology') || message.includes('programming') || message.includes('language')) {
      return "My technical skills include:\n\n• Programming: Java, Python, JavaScript\n• Frameworks: React, Django, REST APIs\n• Tools: Git, VSCode, PyCharm, Selenium, Postman, GitHub Copilot\n• Databases: MySQL, Azure Cosmos DB\n• Testing: Selenium, Pytest\n• Cloud: AWS, Azure OpenAI, Azure AI Search";
    }

    // Projects related
    if (message.includes('project') || message.includes('built') || message.includes('developed') || message.includes('chatbot')) {
      return "Key projects:\n\n• AI Chatbot for Infrastructure Management — Full‑stack solution using Azure OpenAI, Django, MySQL, and Azure AI Search\n• Network‑Based Pattern Searching — Client–server system for file search with JSON requests\n• Self‑Fuel Dispensing Framework — RFID‑based automation to reduce errors\n\nWould you like details about any specific project?";
    }

    // Education related
    if (message.includes('education') || message.includes('college') || message.includes('degree') || message.includes('study')) {
      return "I completed my Bachelor of Technology in Electronics and Communication Engineering from Pragati Engineering College, Kakinada (August 2019 - June 2023) with a CGPA of 7.87.";
    }

    // Certifications related
    if (
      message.includes('certification') ||
      message.includes('certifications') ||
      message.includes('certificate') ||
      message.includes('certificates') ||
      message.includes('certified') ||
      message.includes('ccna') ||
      message.includes('hackerrank') ||
      message.includes('devnet') ||
      message.includes('nptel')
    ) {
      return "My certifications include:\n\n• Cisco Certified DevNet Associate\n• CCNA (Cisco Certified Network Associate)\n• Data Science Certification — Cisco Generative AI Green Belt (2025)\n• Python Programming — NPTEL (2024)\n• Python (Basic) — HackerRank (2024)";
    }

    // Contact related
    if (message.includes('contact') || message.includes('email') || message.includes('phone') || message.includes('linkedin')) {
      return "You can reach Ram at:\n\nEmail: ramgopalpampana10@gmail.com\nPhone: +91 7730072669\nLinkedIn: https://www.linkedin.com/in/ramgopalpampana/\nGitHub: https://github.com/Ram2669\nLocation: Bengaluru, Karnataka, India";
    }

    // Location related
    if (message.includes('location') || message.includes('where') || message.includes('based') || message.includes('kakinada')) {
      return "I’m based in Bengaluru, Karnataka, India.";
    }

    // AI/ML related
    if (message.includes('ai') || message.includes('artificial intelligence') || message.includes('machine learning') || message.includes('azure')) {
      return "I’m actively working with AI technologies: building a full‑stack AI chatbot using Azure OpenAI, Django, and MySQL, with Azure AI Search for intelligent retrieval and dynamic SQL generation.";
    }

    // Testing related
    if (message.includes('testing') || message.includes('selenium') || message.includes('automation') || message.includes('qa')) {
      return "I specialize in automated testing: Python with Selenium and Pytest for UI automation; experience with TestNG and JUnit as well.";
    }

    // General greeting
    if (message.includes('hello') || message.includes('hi') || message.includes('hey') || message.includes('good')) {
      return "Hello! I'm Ram's AI assistant. I'm here to help you learn more about Ram Gopal Pampana's professional background, skills, and experience. What would you like to know?";
    }

    // Default response
    return "That's an interesting question! I can tell you about Ram's experience at Cisco, his technical skills, projects like the AI chatbot and pattern searching system, his education, certifications, or how to contact him. What specific aspect would you like to know more about?";
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
        text: getAIResponse(userMessage.text),
        isBot: true,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    // Send on Enter (without Shift), but ignore IME composition
    // @ts-expect-error React typing for nativeEvent may vary across versions
    const isComposing = (e as any).nativeEvent?.isComposing;
    if (e.key === 'Enter' && !e.shiftKey && !isComposing) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Debug: Always visible chatbot button */}
      <div className="fixed bottom-6 right-6 z-[9999]">
        <button
          onClick={() => setIsOpen(v => !v)}
          aria-label={isOpen ? 'Close chat' : 'Open chat'}
          className="bg-[var(--mission-accent)] hover:opacity-90 text-white p-4 rounded-full shadow-2xl transition-all duration-300 border border-[var(--mission-border)] flex items-center justify-center"
          style={{ minWidth: '60px', minHeight: '60px' }}
        >
          {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        </button>
      </div>

      {/* Chatbot Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 z-[9998] w-[min(92vw,22rem)] h-[min(65vh,28rem)] bg-[var(--mission-panel)] rounded-lg shadow-2xl border border-[var(--mission-border)] flex flex-col"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header */}
            <div className="bg-[var(--mission-accent)] text-white p-4 rounded-t-lg">
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
                    <div className={`p-2 rounded-full ${message.isBot ? 'bg-[rgba(245,158,11,.15)] text-[var(--mission-accent-2)]' : 'bg-[rgba(198,40,40,.15)] text-[var(--mission-accent)]'}`}>
                      {message.isBot ? <Bot size={16} /> : <User size={16} />}
                    </div>
                    <div
                      className={`p-3 rounded-lg ${
                        message.isBot
                          ? 'bg-[var(--mission-surface)] text-[var(--mission-text)] border border-[var(--mission-border)]'
                          : 'bg-[var(--mission-accent)] text-black'
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
                    <div className="p-2 rounded-full bg-[rgba(245,158,11,.15)] text-[var(--mission-accent-2)]">
                      <Bot size={16} />
                    </div>
                    <div className="bg-[var(--mission-surface)] border border-[var(--mission-border)] p-3 rounded-lg">
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
            <div className="p-4 border-t border-[var(--mission-border)]">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about Ram&apos;s experience..."
                  className="flex-1 px-3 py-2 border border-[var(--mission-border)] rounded-lg focus:ring-2 focus:ring-[var(--mission-accent)] focus:border-transparent bg-[var(--mission-surface)] text-[var(--mission-text)] text-sm"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputText.trim()}
                  className="bg-[var(--mission-accent)] hover:opacity-90 disabled:opacity-50 text-black p-2 rounded-lg transition-colors duration-200"
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
