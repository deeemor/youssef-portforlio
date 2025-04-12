import { motion } from 'framer-motion';
import { Code2, Terminal, Wrench, Laptop, Github, Linkedin, Instagram } from 'lucide-react';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const technologies = [
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'Three.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg' },
    { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' }
  ];

  const tools = [
    { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' }
  ];

  return (
    <section className="py-20 relative overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
              About Me
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Passionate about creating innovative solutions and delivering exceptional user experiences
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div variants={itemVariants}>
              <div className="bg-slate-800/50 rounded-2xl p-8 backdrop-blur-sm h-full border border-white/5 hover:border-white/10 transition-colors">
                <div className="flex items-center gap-3 mb-6">
                  <Terminal className="w-6 h-6 text-blue-400" />
                  <h3 className="text-xl font-semibold text-white">My Journey</h3>
                </div>
                <p className="text-gray-300 leading-relaxed mb-6">
                Erfahrener und ergebnisorientierter Full-Stack-Entwickler sowie derzeit
Informatikstudent an der TU Dortmund. Ich verfüge über umfassende
Kenntnisse in Java, REST-Architekturen, MERN-Stack (MongoDB, Express,
React, Node.js), Next.js, Odoo sowie modernen Frontend-Technologien
(React.js, Tailwind CSS, Three.js).             </p>
                <p className="text-gray-300 leading-relaxed">
                Mein Ziel ist es, innovative
Softwarelösungen zu entwickeln, effiziente Systeme zu optimieren und mich
kontinuierlich weiterzuentwickeln. Neben meiner Leidenschaft für
Technologie bin ich auch aktiver Bodybuilder – eine Disziplin, die mir
Ausdauer, Zielstrebigkeit und Fokussierung vermittelt.                   </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="bg-slate-800/50 rounded-2xl p-8 backdrop-blur-sm h-full border border-white/5 hover:border-white/10 transition-colors">
                <div className="flex items-center gap-3 mb-6">
                  <Code2 className="w-6 h-6 text-purple-400" />
                  <h3 className="text-xl font-semibold text-white">Technologies</h3>
                </div>
                <div className="grid grid-cols-4 gap-4">
                  {technologies.map((tech) => (
                    <motion.div
                      key={tech.name}
                      className="group"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="flex flex-col items-center gap-2 p-3 rounded-xl bg-slate-700/50 backdrop-blur-sm hover:bg-slate-600/50 transition-colors border border-white/5 hover:border-white/10">
                        <img
                          src={tech.icon}
                          alt={tech.name}
                          className="w-8 h-8 opacity-75 group-hover:opacity-100 transition-opacity"
                        />
                        <span className="text-xs text-gray-400 group-hover:text-white transition-colors">{tech.name}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="bg-slate-800/50 rounded-2xl p-8 backdrop-blur-sm h-full border border-white/5 hover:border-white/10 transition-colors">
                <div className="flex items-center gap-3 mb-6">
                  <Wrench className="w-6 h-6 text-green-400" />
                  <h3 className="text-xl font-semibold text-white">Development Tools</h3>
                </div>
                <div className="grid grid-cols-4 gap-4">
                  {tools.map((tool) => (
                    <motion.div
                      key={tool.name}
                      className="group"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="flex flex-col items-center gap-2 p-3 rounded-xl bg-slate-700/50 backdrop-blur-sm hover:bg-slate-600/50 transition-colors border border-white/5 hover:border-white/10">
                        <img
                          src={tool.icon}
                          alt={tool.name}
                          className="w-8 h-8 opacity-75 group-hover:opacity-100 transition-opacity"
                        />
                        <span className="text-xs text-gray-400 group-hover:text-white transition-colors">{tool.name}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="bg-slate-800/50 rounded-2xl p-8 backdrop-blur-sm h-full border border-white/5 hover:border-white/10 transition-colors">
                <div className="flex items-center gap-3 mb-6">
                  <Laptop className="w-6 h-6 text-yellow-400" />
                  <h3 className="text-xl font-semibold text-white">Connect With Me</h3>
                </div>
                <p className="text-gray-300 leading-relaxed mb-6">
                  I'm always interested in hearing about new projects and opportunities. Let's connect and create something amazing together!
                </p>
                <div className="flex gap-4">
                  <motion.a
                    href="https://github.com/deeemor"
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 rounded-full bg-slate-700/50 hover:bg-slate-600/50 transition-colors border border-white/5 hover:border-white/10"
                  >
                    <Github className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/youssef-slimani-776258287/"
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 rounded-full bg-slate-700/50 hover:bg-slate-600/50 transition-colors border border-white/5 hover:border-white/10"
                  >
                    <Linkedin className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    href="https://www.instagram.com/de_mor1/?next=%2F"  // Update the URL to your Instagram profile
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 rounded-full bg-slate-700/50 hover:bg-slate-600/50 transition-colors border border-white/5 hover:border-white/10"
                  >
                    <Instagram className="w-6 h-6" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/4 -right-1/4 w-1/2 h-1/2 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-purple-500/10 rounded-full blur-3xl" />
    </section>
  );
};

export default About;