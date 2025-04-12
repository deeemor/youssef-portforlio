import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { motion } from 'framer-motion';
import { Suspense } from "react";
import { useMediaQuery } from "react-responsive";
import HackerRoom from "../components/HackerRoom";
import CanvasLoader from "../components/CanvasLoader";
import { calculateSizes } from "../constants/index.js";
import HeroCamera from "../components/HeroCamera.jsx";
import Button from "../components/Button.jsx";
import pdf from "/assets/Lebenslauf!!.pdf";
import {
  ReactLogo,
  NodeLogo,
  ExpressLogo,
  MongoDbLogo,
} from "../components/Logos.jsx";

const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 relative min-h-screen">
        {/* Top Content */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="absolute top-0 left-0 right-0 z-10 pt-28 sm:pt-32"
        >
          <div className="text-center">
            <motion.div
              variants={item}
              className="mb-6"
            >
              <h1 className="text-4xl sm:text-4xl font-bold text-white mb-6 font-generalsans tracking-tight">
                Hi, I'm{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                  Youssef Slimani
                </span>
                <motion.span
                  className="inline-block ml-2"
                  animate={{
                    rotate: [0, 14, -8, 14, -4, 10, 0],
                    y: [0, -5, 0, -5, 0]
                  }}
                  transition={{
                    duration: 2.5,
                    ease: "easeInOut",
                    times: [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.9],
                    repeat: Infinity,
                    repeatDelay: 1
                  }}
                >
                  👋
                </motion.span>
              </h1>
            </motion.div>

            <motion.p
              variants={item}
              className="text-2xl sm:text-4xl font-semibold text-gray-300 max-w-2xl mx-auto leading-relaxed"
            >
              Building{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                Digital Experiences
              </span>{" "}
              that make a difference
            </motion.p>
          </div>
        </motion.div>

        {/* 3D Scene */}
        <div className="absolute inset-0 w-full h-full">
          <Canvas className="w-full h-full">
            <Suspense fallback={<CanvasLoader />}>
              <PerspectiveCamera makeDefault position={[0, 5, 20]} />
              <HeroCamera isMobile={isMobile}>
                <HackerRoom
                  position={sizes.deskPosition}
                  scale={sizes.deskScale}
                />
              </HeroCamera>
              <ambientLight intensity={1} />
              <directionalLight position={[10, 10, 10]} intensity={0.5} />
            </Suspense>
          </Canvas>
        </div>

        {/* Bottom Content */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="absolute bottom-0 left-0 right-0 z-10 pb-20"
        >
          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="justify-center items-center"
          >
            <motion.div whileHover={{ scale: 1.1 }}>
              <ReactLogo />
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
              <NodeLogo />
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
              <ExpressLogo />
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
              <MongoDbLogo />
            </motion.div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            variants={item}
            className="relative top-12 justify-center" 
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href={pdf} target="_blank" rel="noreferrer" className="w-fit">
                <Button name="Download Resume" isBeam containerClass="sm:w-60" />
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;