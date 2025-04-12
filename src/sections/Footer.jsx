import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Heart } from 'lucide-react';

const Footer = () => {
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

  return (
    <footer className="relative py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2"
            >
              <span className="text-gray-400">Designed and Developed with</span>
              <Heart className="w-5 h-5 text-red-400 animate-pulse" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex gap-4"
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 text-gray-400 hover:text-white transition-colors border border-white/5 hover:border-white/10"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {link.icon}
                  <span className="sr-only">{link.name}</span>
                </motion.a>
              ))}
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gray-400"
            >
              © 2025 Youssef Slimani
            </motion.p>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/2 -right-1/4 w-1/2 h-1/2 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 -left-1/4 w-1/2 h-1/2 bg-purple-500/5 rounded-full blur-3xl" />
    </footer>
  );
};

export default Footer;