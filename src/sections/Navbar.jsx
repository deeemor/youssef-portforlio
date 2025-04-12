import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Home, User, Briefcase, Mail, Code, ExternalLink } from 'lucide-react';

const navItems = [
  { id: 'home', name: 'Home', href: '#home', icon: <Home className="w-4 h-4" /> },
  { id: 'about', name: 'About', href: '#about', icon: <User className="w-4 h-4" /> },
  { id: 'projects', name: 'Projects', href: '#projects', icon: <Code className="w-4 h-4" /> },
  { id: 'experience', name: 'Experience', href: '#experience', icon: <Briefcase className="w-4 h-4" /> },
  { id: 'contact', name: 'Contact', href: '#contact', icon: <Mail className="w-4 h-4" /> }
];

const NavItems = ({ className = "", onClick }) => {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <ul className={`nav-ul ${className}`}>
      {navItems.map((item) => (
        <motion.li
          key={item.id}
          className="nav-li relative"
          onHoverStart={() => setHoveredItem(item.id)}
          onHoverEnd={() => setHoveredItem(null)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onClick}
        >
          <a href={item.href} className="nav-li_a">
            <span className="flex items-center gap-2">
              <motion.span
                animate={{
                  color: hoveredItem === item.id ? "#60A5FA" : "#9CA3AF",
                }}
                transition={{ duration: 0.2 }}
              >
                {item.icon}
              </motion.span>
              <span className="relative overflow-hidden">
                {item.name}
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400"
                  initial={{ scaleX: 0 }}
                  animate={{
                    scaleX: hoveredItem === item.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.2 }}
                />
              </span>
            </span>
          </a>
        </motion.li>
      ))}
      <motion.li
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative"
      >
        <a
          href="https://github.com/deeemor"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full text-white hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300 border border-white/10"
        >
          <Github className="w-4 h-4" />
          <span>GitHub</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </motion.li>
    </ul>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      setScrolled(scrollPosition > 30);
      setScrollProgress(scrollPosition / (documentHeight - windowHeight));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background-light/80 backdrop-blur-lg border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <nav className="flex justify-between items-center py-4 mx-auto c-space">
          <motion.a
            href="/"
            className="relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
              Youssef
            </span>
            <motion.span
              className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400"
              initial={{ width: "0%" }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>

          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-400 hover:text-white focus:outline-none sm:hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>

          <div className="sm:flex hidden">
            <NavItems />
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="sm:hidden bg-background-light/95 backdrop-blur-md border-t border-white/5"
          >
            <nav className="p-5">
              <NavItems
                className="flex-col items-start gap-6"
                onClick={() => setIsOpen(false)}
              />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-blue-400 to-purple-400"
        style={{ width: `${scrollProgress * 100}%` }}
      />
    </motion.header>
  );
};

export default Navbar;