import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Copy, ExternalLink, Github, Linkedin, Instagram } from 'lucide-react';

const Contact = () => {
  const [hasCopied, setHasCopied] = useState(false);
  const email = "slimaniy151@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github className="w-5 h-5" />,
      href: 'https://github.com/deeemor',
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-5 h-5" />,
      href: 'https://www.linkedin.com/in/youssef-slimani-776258287/',
    },
    {
      name: 'Instagram',
      icon: <Instagram className="w-5 h-5" />,
      href: 'https://www.instagram.com/de_mor1/?next=%2F',
    },
  ];

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

  return (
    <section className="py-20 relative overflow-hidden" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="relative z-10"
        >
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
              Let's Connect
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-white/5">
              <div className="flex flex-col items-center gap-6">
                <div className="relative">
                  <div className="w-20 h-20 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <Mail className="w-10 h-10 text-blue-400" />
                  </div>
                  <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl -z-10"></div>
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-2">Email Me</h3>
                  <p className="text-gray-400 mb-4">
                    I'll get back to you as soon as possible
                  </p>
                </div>

                <button
                  onClick={handleCopy}
                  className="group relative w-full bg-slate-700/50 rounded-xl p-4 flex items-center justify-between hover:bg-slate-600/50 transition-colors border border-white/5 hover:border-white/10"
                >
                  <span className="text-lg text-gray-300">{email}</span>
                  <span className="flex items-center gap-2 text-gray-400">
                    {hasCopied ? (
                      <span className="text-green-400">Copied!</span>
                    ) : (
                      <>
                        <Copy className="w-5 h-5" />
                        <span className="hidden group-hover:inline">Copy</span>
                      </>
                    )}
                  </span>
                </button>

                <div className="w-full border-t border-white/5 my-6"></div>

                <div className="flex gap-4">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-slate-700/50 hover:bg-slate-600/50 transition-colors border border-white/5 hover:border-white/10 group"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="sr-only">{link.name}</span>
                      {link.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/4 -right-1/4 w-1/2 h-1/2 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-blue-500/10 rounded-full blur-3xl" />
    </section>
  );
};

export default Contact;