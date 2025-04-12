import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';

const workExperiences = [
  {
    name: " Praktikum :Vega Net ",
    pos: "Software entwicklung with Odoo / Python  ",
    duration: "2023.01 - 2023.04",
    location: "Sousse",
    icon: "/hahaha.jpg",
    href: "#",
    title: "Entwicklung von Odoo-Modulen für Fitnessstudio-Management – genutzt von einem großen Trainerteam im laufenden Betrieb",
    achievements: [
      "Member management & billing automatio",
      "Trainer scheduling & class allocation",
      "Real-time analytics for facility usage"
    ]
  },
  {
    name: "Digital Solutions Lab",
    pos: "Full Stack Developer — Personal Projects",
    duration: "2024",
    location: "Münster, Germany",
    icon: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=100",
    href: "#",
    title: "Developed and maintained Web Applications ",
    achievements: [
      "Developed a full-stack web app with Next.js, React, Tailwind CSS, Node.js, and MongoDB, featuring dashboards, real-time chat, and appointment booking",
      "Integrated external APIs to display exercises with images, muscle groups, and equipment details",
      "Integrated payment gateways and third-party APIs"
    ]
  },
  {
    name: "StartUp Vision",
    pos: "Full stack Developer",
    duration: "2025",
    location: "Dortmund , Germany",
    icon: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=100",
    href: "https://company3.com",
    title: "Created  3D Interactive Web Applications",
    achievements: [
      "Gained hands-on experience with Three.js and React Three Fiber (R3F), developing interactive 3D scenes, animations, and visual effects integrated within React projects",
      "Combined Next.js with Three.js to create immersive, web-based 3D experiences, optimizing performance and responsiveness across devices",
      "Applied custom shaders, lighting, and camera controls to enhance user interactivity and dynamic visual storytelling"
    ]
  }
];

const Experience = () => {
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-20 relative overflow-hidden" id="experience">
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
              Work Experience
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              My professional journey in software development and the impact I've made along the way
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {workExperiences.map((experience, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative"
              >
                {/* Timeline connector */}
                {index !== workExperiences.length - 1 && (
                  <div className="absolute left-8 top-24 w-0.5 h-full bg-gradient-to-b from-blue-500 to-transparent"></div>
                )}

                <motion.div 
                  className="flex gap-8 mb-12"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Company Logo */}
                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl bg-slate-800/50 backdrop-blur-sm p-3 shadow-lg border border-white/5">
                      <img 
                        src={experience.icon} 
                        alt={experience.name}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl -z-10"></div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-slate-800/50 rounded-2xl p-6 backdrop-blur-sm border border-white/5 hover:border-white/10 transition-colors">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">
                          {experience.name}
                        </h3>
                        <p className="text-blue-400 font-medium">
                          {experience.pos}
                        </p>
                      </div>
                      
                      <motion.a
                        href={experience.href}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-lg bg-slate-700/50 hover:bg-slate-600/50 transition-colors border border-white/5 hover:border-white/10"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.a>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{experience.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{experience.location}</span>
                      </div>
                    </div>

                    <p className="text-gray-300 leading-relaxed">
                      {experience.title}
                    </p>

                    {experience.achievements && (
                      <ul className="mt-4 space-y-2">
                        {experience.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2"></span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/4 -right-1/4 w-1/2 h-1/2 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-purple-500/10 rounded-full blur-3xl" />
    </section>
  );
};

export default Experience;