import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowRight, FiCode, FiLayers, FiSmartphone, FiTrendingUp } from 'react-icons/fi'
import './App.css'

const ColorfulUI = () => {
  const [activeTab, setActiveTab] = useState('design')
  const [isHovered, setIsHovered] = useState(false)
  const [count, setCount] = useState(0)

  // Auto-increment counter effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prev => (prev < 1000 ? prev + 17 : 0))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const features = [
    {
      icon: <FiCode className="text-3xl" />,
      title: "Modular Components",
      desc: "Build with reusable, customizable React components"
    },
    {
      icon: <FiLayers className="text-3xl" />,
      title: "Pixel Perfect",
      desc: "Crisp, responsive designs for all devices"
    },
    {
      icon: <FiSmartphone className="text-3xl" />,
      title: "Mobile First",
      desc: "Optimized for touch and small screens"
    },
    {
      icon: <FiTrendingUp className="text-3xl" />,
      title: "Performance",
      desc: "Lightning fast with Vite and React 18"
    }
  ]

  const tabs = [
    { id: 'design', label: 'Design', color: 'from-purple-500 to-pink-500' },
    { id: 'develop', label: 'Develop', color: 'from-amber-500 to-red-500' },
    { id: 'deploy', label: 'Deploy', color: 'from-blue-500 to-cyan-500' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Animated Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div 
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"
          >
            ReactSpark
          </motion.div>
          <div className="hidden md:flex space-x-8">
            <a href="#" className="font-medium text-gray-700 hover:text-purple-600 transition-colors">Home</a>
            <a href="#" className="font-medium text-gray-700 hover:text-purple-600 transition-colors">Features</a>
            <a href="#" className="font-medium text-gray-700 hover:text-purple-600 transition-colors">Pricing</a>
            <a href="#" className="font-medium text-gray-700 hover:text-purple-600 transition-colors">Contact</a>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-2 rounded-full font-medium shadow-lg hover:shadow-xl transition-all"
          >
            Get Started
          </motion.button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-8 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-6 py-24 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"
            >
              Build Stunning UIs
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto"
            >
              Create beautiful, interactive React applications with our modern component library
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <button className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-8 py-4 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center gap-2">
                Explore Components <FiArrowRight />
              </button>
              <button className="bg-white text-gray-800 px-8 py-4 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 border border-gray-200">
                View Demo
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Animated Counter */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-purple-100 to-blue-100 rounded-2xl p-8 shadow-inner">
            <div className="flex flex-wrap justify-center gap-12">
              <div className="text-center">
                <div className="text-5xl font-bold text-purple-600 mb-2">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={count}
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 20, opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="inline-block"
                    >
                      {count}+
                    </motion.span>
                  </AnimatePresence>
                </div>
                <p className="text-gray-600">Components Built</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-blue-600 mb-2">42K</div>
                <p className="text-gray-600">Developers</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-pink-600 mb-2">1.2M</div>
                <p className="text-gray-600">Downloads</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Tabs */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">How It Works</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Three simple steps to create amazing user interfaces
          </p>
          
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center gap-2 mb-12">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-6 py-3 rounded-full font-medium transition-colors ${
                    activeTab === tab.id ? 'text-white' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {activeTab === tab.id && (
                    <motion.span
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r rounded-full z-0"
                      style={{ background: `linear-gradient(to right, ${tab.color.replace('from-', '').replace('to-', '').replace(/-500/g, '-600')})` }}
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                {activeTab === 'design' && (
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-4 text-purple-600">Beautiful Designs</h3>
                    <p className="text-gray-600 mb-6">
                      Start with our library of professionally designed components and templates.
                      Customize colors, typography, and layouts to match your brand.
                    </p>
                    <div className="h-48 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl flex items-center justify-center">
                      <span className="text-gray-500">Design Preview</span>
                    </div>
                  </div>
                )}
                {activeTab === 'develop' && (
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-4 text-amber-600">Easy Development</h3>
                    <p className="text-gray-600 mb-6">
                      Our components are built with React and TypeScript for type safety.
                      Well-documented APIs make integration a breeze.
                    </p>
                    <div className="h-48 bg-gradient-to-r from-amber-100 to-red-100 rounded-xl flex items-center justify-center">
                      <span className="text-gray-500">Code Example</span>
                    </div>
                  </div>
                )}
                {activeTab === 'deploy' && (
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-4 text-blue-600">Instant Deployment</h3>
                    <p className="text-gray-600 mb-6">
                      Optimized for performance with Vite. Deploy anywhere - Vercel, Netlify,
                      or your own infrastructure.
                    </p>
                    <div className="h-48 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center">
                      <span className="text-gray-500">Deployment Options</span>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Feature Cards with Hover Effects */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">Why Choose Us</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Everything you need to build modern web applications
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all cursor-pointer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Animated CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-500">
        <div className="container mx-auto px-6 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            Ready to Build Something Amazing?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-purple-100 mb-10 max-w-2xl mx-auto"
          >
            Join thousands of developers creating beautiful UIs with our components
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <button className="bg-white text-purple-600 px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
              Get Started Now
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
              View Documentation
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ColorfulUI