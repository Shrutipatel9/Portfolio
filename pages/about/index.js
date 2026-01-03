import React from "react";
import Circles from "../../components/Circles";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import SkillChart from "../../components/SkillChart";

const About = () => {
  return (
    <div className="min-h-[100vh] bg-primary/30 py-40 text-center xl:text-left">
      <Circles />
      <div className="container mx-auto h-full flex flex-col justify-start">
        {/* Header Section - Full Width */}
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col text-center mb-8 xl:mb-12 w-full pt-16 xl:pt-0"
        >
          <h2 className="h2 mx-auto">
            Technical <span className="text-accent">Proficiency</span>
          </h2>
          <motion.p
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[700px] mx-auto text-white/80"
          >
            I specialize in full-stack development with a deep focus on the JavaScript ecosystem. From building interactive UIs to scalable backends, I deliver production-grade solutions. I&apos;m also expanding my skillset into Python for data-driven applications.
          </motion.p>
        </motion.div>

        <div className="flex flex-col xl:flex-row gap-x-12 items-start justify-center">
          {/* Left Side: Cards */}
          <div className="flex-1 w-full">
            <motion.div
              variants={fadeIn("right", 0.6)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {/* Card 1 */}
              <div className="bg-white/5 p-4 rounded-lg border border-white/10 hover:border-accent/50 transition-colors">
                <h3 className="font-bold text-lg mb-2 text-white">Frontend & UI</h3>
                <p className="text-sm text-white/60">Expertise in Vue.js and React.js. Proficient with Tailwind CSS, Vuetify, and modern CSS architectures.</p>
              </div>
              {/* Card 2 */}
              <div className="bg-white/5 p-4 rounded-lg border border-white/10 hover:border-accent/50 transition-colors">
                <h3 className="font-bold text-lg mb-2 text-white">Backend & DB</h3>
                <p className="text-sm text-white/60">Building scalable APIs with Node.js. Experience with Supabase, MongoDB, and SQL databases.</p>
              </div>
              {/* Card 3 */}
              <div className="bg-white/5 p-4 rounded-lg border border-white/10 hover:border-accent/50 transition-colors">
                <h3 className="font-bold text-lg mb-2 text-white">State & Architecture</h3>
                <p className="text-sm text-white/60">Complex state management using Pinia and Redux. Focus on clean code and performance optimization.</p>
              </div>
              {/* Card 4 */}
              <div className="bg-white/5 p-4 rounded-lg border border-white/10 hover:border-accent/50 transition-colors">
                <h3 className="font-bold text-lg mb-2 text-white">Current Learning</h3>
                <p className="text-sm text-white/60">Actively learning Python to broaden backend capabilities and explore data science integrations.</p>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Graph */}
          <motion.div
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-col w-full xl:max-w-[40%] h-[400px] justify-center items-center mt-8 xl:mt-0"
          >
            <SkillChart />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
