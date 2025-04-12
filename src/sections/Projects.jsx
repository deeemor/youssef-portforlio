import { motion } from 'framer-motion';
import { Github, ExternalLink, Folder } from 'lucide-react';

const projects = [
  {
    title: "Healthcare Management & Communication Platform",
    description: "FYMove is a healthcare web platform for patients and doctors. It includes dashboards for both, real-time chat between patients and doctors, doctor-to-doctor chat, appointment booking, and email notifications. The application features a sleek, responsive interface built with modern full-stack technologies. Users can also browse a diverse collection of exercises with detailed information like targeted muscles, equipment, and exercise type.",
    image: "public/Fymove.png",
    tags: ["Next.js", "Tailwind CSS", "Express", "TypeScript" , "MongoDb" ,"Node.js" , "Rest API" ,"MERN STACK"],
    github: "https://github.com/deeemor/nextjs-fymove",
    live: "https://fymove.vercel.app/",
    featured: true
  },
  {
    title: "3D Portfolio Website",
    description: "Modern portfolio with Three.js animations, interactive UI elements, and responsive design.",
    image: "public/youssef.png",
    tags: ["React", "Three.js", "Tailwind CSS", "Framer Motion" , "Vite" ],
    github: "https://github.com/yourusername/portfolio",
    live: "https://your-portfolio.com",
    featured: true
  },
  {
    title: "Online Coaching Platfrom (soon)",
    description: "Full-stack Online Coaching platform with real-time analytics, inventory management, and admin dashboard.",
    image: "public/Fitdemor.png",
    tags: ["Next.js", "Tailwind CSS", "Express", "TypeScript" , "MongoDb" ,"Node.js" , "Rest API" ,"MERN STACK"],
    github: "https://github.com/yourusername/ecommerce",
    live: "https://your-ecommerce.com"
  }
];

const ProjectCard = ({ project, index }) => {
  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      scale: 0.95,
      rotateX: -10
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.5,
        delay: index * 0.1
      }
    },
    hover: {
      scale: 1.02,
      rotateY: 5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    }
  };

  const imageVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const overlayVariants = {
    hover: {
      opacity: 0.3,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true }}
      className="group relative perspective-1000"
    >
      <motion.div 
        className="relative overflow-hidden rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-white/5 group-hover:border-white/10 transition-all duration-500 transform-gpu"
      >
        <div className="h-64 overflow-hidden">
          <motion.img
            variants={imageVariants}
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <motion.div 
            variants={overlayVariants}
            className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60"
          />
        </div>

        <motion.div 
          className="relative p-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              {project.featured && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="px-3 py-1 text-xs font-medium bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/20"
                >
                  Featured
                </motion.span>
              )}
              <motion.div
                whileHover={{ rotate: 15 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Folder className="w-5 h-5 text-blue-400" />
              </motion.div>
            </div>
            <div className="flex items-center gap-3">
              {project.github && (
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-full bg-slate-700/50 hover:bg-slate-600/50 transition-colors border border-white/5 hover:border-white/10"
                >
                  <Github className="w-4 h-4" />
                </motion.a>
              )}
              {project.live && (
                <motion.a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-full bg-slate-700/50 hover:bg-slate-600/50 transition-colors border border-white/5 hover:border-white/10"
                >
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              )}
            </div>
          </div>

          <motion.h3 
            className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {project.title}
          </motion.h3>
          
          <motion.p 
            className="text-gray-400 mb-4 line-clamp-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {project.description}
          </motion.p>

          <motion.div 
            className="flex flex-wrap gap-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {project.tags.map((tag, index) => (
              <motion.span
                key={index}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ scale: 1.1 }}
                className="px-3 py-1 text-xs font-medium bg-slate-700/50 text-gray-300 rounded-full border border-white/5"
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section className="py-20 relative overflow-hidden" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
            Featured Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work in web development and design
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 text-center"
        >
          <motion.a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-800/50 hover:bg-slate-700/50 rounded-full text-white font-medium transition-colors backdrop-blur-sm border border-white/5 hover:border-white/10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-5 h-5" />
            View More Projects
          </motion.a>
        </motion.div> */}
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-purple-500/10 rounded-full blur-3xl" />
    </section>
  );
};

export default Projects;