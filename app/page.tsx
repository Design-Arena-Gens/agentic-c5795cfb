'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Code2, Database, Globe, ArrowRight, ExternalLink, Terminal, Layers, Cpu } from 'lucide-react'

export default function Home() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const stagger = {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const skills = [
    { icon: <Code2 />, name: 'Frontend', tech: ['React', 'Next.js', 'Vue', 'TypeScript', 'Tailwind'] },
    { icon: <Database />, name: 'Backend', tech: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Redis'] },
    { icon: <Globe />, name: 'DevOps', tech: ['Docker', 'AWS', 'CI/CD', 'Kubernetes', 'Vercel'] },
    { icon: <Cpu />, name: 'Tools', tech: ['Git', 'Linux', 'REST APIs', 'GraphQL', 'WebSockets'] },
  ]

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Scalable marketplace with real-time inventory, payment processing, and admin dashboard.',
      tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'AI Chat Application',
      description: 'Real-time messaging app with AI-powered responses and smart recommendations.',
      tech: ['React', 'WebSocket', 'Python', 'Redis'],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Analytics Dashboard',
      description: 'Data visualization platform with custom reporting and interactive charts.',
      tech: ['Vue', 'Express', 'MongoDB', 'D3.js'],
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      title: 'DevOps Pipeline',
      description: 'Automated CI/CD infrastructure with containerization and cloud deployment.',
      tech: ['Docker', 'Kubernetes', 'AWS', 'Terraform'],
      gradient: 'from-orange-500 to-red-500',
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full z-50 glass-effect"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold gradient-text">DEV</div>
          <div className="flex gap-8">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="max-w-5xl mx-auto text-center relative z-10"
        >
          <motion.div variants={fadeIn} className="mb-6">
            <Terminal className="w-16 h-16 mx-auto text-primary mb-4" />
          </motion.div>

          <motion.h1
            variants={fadeIn}
            className="text-6xl md:text-8xl font-bold mb-6"
          >
            Fullstack
            <span className="gradient-text"> Developer</span>
          </motion.h1>

          <motion.p
            variants={fadeIn}
            className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto"
          >
            Building scalable web applications with modern technologies.
            Transforming ideas into elegant, performant solutions.
          </motion.p>

          <motion.div
            variants={fadeIn}
            className="flex gap-4 justify-center items-center flex-wrap"
          >
            <a href="#projects" className="px-8 py-4 bg-primary hover:bg-primary/80 rounded-full font-semibold flex items-center gap-2 transition-all hover:scale-105 glow">
              View Projects <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#contact" className="px-8 py-4 glass-effect hover:bg-white/10 rounded-full font-semibold transition-all">
              Get in Touch
            </a>
          </motion.div>

          <motion.div
            variants={fadeIn}
            className="flex gap-6 justify-center mt-12"
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors hover:scale-110 transform">
              <Github className="w-7 h-7" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors hover:scale-110 transform">
              <Linkedin className="w-7 h-7" />
            </a>
            <a href="mailto:contact@example.com" className="hover:text-primary transition-colors hover:scale-110 transform">
              <Mail className="w-7 h-7" />
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 bg-dark/50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-5xl font-bold mb-8 gradient-text">About Me</h2>
            <div className="glass-effect p-8">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Passionate fullstack developer with 5+ years of experience crafting robust web applications.
                I specialize in building end-to-end solutions that prioritize performance, scalability, and user experience.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                My journey spans from pixel-perfect frontends to optimized backend architectures,
                with a deep commitment to clean code, best practices, and continuous learning.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-5xl font-bold mb-16 text-center gradient-text"
          >
            Technical Skills
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="glass-effect p-6 hover:bg-white/10 transition-all hover:scale-105 group"
              >
                <div className="text-primary mb-4 group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{skill.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.tech.map((tech, i) => (
                    <span key={i} className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 bg-dark/50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-5xl font-bold mb-16 text-center gradient-text"
          >
            Featured Projects
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="glass-effect p-8 hover:bg-white/10 transition-all group cursor-pointer"
              >
                <div className={`w-full h-2 bg-gradient-to-r ${project.gradient} rounded-full mb-6`}></div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors flex items-center gap-2">
                  {project.title}
                  <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-gray-400 mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs bg-white/5 px-3 py-1 rounded-full border border-white/10">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-5xl font-bold mb-8 gradient-text">Let's Build Something</h2>
            <p className="text-xl text-gray-400 mb-12">
              Have a project in mind? Let's collaborate and create something extraordinary together.
            </p>

            <div className="glass-effect p-12">
              <div className="flex flex-col gap-6">
                <a
                  href="mailto:contact@example.com"
                  className="px-8 py-4 bg-primary hover:bg-primary/80 rounded-full font-semibold flex items-center justify-center gap-2 transition-all hover:scale-105 glow"
                >
                  <Mail className="w-5 h-5" />
                  Send me an email
                </a>

                <div className="flex gap-6 justify-center pt-4">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    <Github className="w-8 h-8" />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    <Linkedin className="w-8 h-8" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>© 2025 Fullstack Developer. Crafted with passion.</p>
        </div>
      </footer>
    </main>
  )
}
