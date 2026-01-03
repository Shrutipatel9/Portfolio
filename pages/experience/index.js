import Circles from "../../components/Circles";
import Bulb from "../../components/Bulb";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Services = () => {
  return (
    <div className="h-full bg-primary/30 py-40 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-8"
            >
              My Experience <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
              Detailed timeline of my professional journey, highlighting key roles, achievements, and technical growth.
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            {/* <ExperienceSlider /> */}
            {/* Timeline Container */}
            <div className="relative py-2">

              {/* Vertical Connecting Line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-white/10 h-full"></div>

              <div className="flex flex-col gap-y-12">

                {/* Experience Card 1 - Current */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="relative pl-12 sm:pl-16 group"
                >
                  {/* Timeline Dot/Number */}
                  <div className="absolute left-[9px] top-2 w-4 h-4 bg-accent rounded-full z-10 shadow-[0_0_10px_rgba(241,48,36,0.5)] group-hover:scale-125 transition-all duration-300"></div>

                  {/* Connection Line Horizontal */}
                  <div className="absolute left-[25px] top-[15px] w-6 sm:w-10 h-0.5 bg-accent/30 group-hover:w-8 transition-all duration-500"></div>

                  {/* Card */}
                  <div className="bg-[#1e293b]/40 hover:bg-[#1e293b]/70 p-6 sm:p-8 rounded-2xl border border-white/5 transition-all duration-500 hover:border-accent/40 shadow-lg hover:shadow-accent/5 group-hover:-translate-y-1">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-2">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-accent transition-colors duration-300">Software Developer - L2</h3>
                        <p className="text-white/60 text-sm sm:text-base mt-1">Crest Infosystems Pvt. Ltd. | Surat, India</p>
                      </div>
                      <div className="text-accent text-xs sm:text-sm font-bold bg-accent/10 px-3 py-1 sm:px-4 sm:py-2 rounded-full border border-accent/20 shadow-[0_0_10px_rgba(241,48,36,0.1)] whitespace-nowrap">
                        01/2024 - Present
                      </div>
                    </div>
                    <ul className="space-y-3 text-white/70 text-sm leading-relaxed text-left">
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1.5 text-xs">●</span>
                        <span>Built and delivered core frontend features for <strong>AIREA Studio</strong>, an AI-powered marketing platform, using Vue.js, Pinia, and Supabase.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1.5 text-xs">●</span>
                        <span>Earned full-time role after a 6-month internship based on performance.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1.5 text-xs">●</span>
                        <span>Took ownership of tasks across multiple projects, adapting quickly to new technologies.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1.5 text-xs">●</span>
                        <span>Learned to leverage AI tools to increase development productivity by 20-30%.</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>

                {/* Experience Card 2 - Past */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="relative pl-12 sm:pl-16 group"
                >
                  {/* Timeline Dot/Number */}
                  <div className="absolute left-[9px] top-2 w-4 h-4 bg-white/20 rounded-full z-10 group-hover:bg-white transition-all duration-300"></div>

                  {/* Connection Line Horizontal */}
                  <div className="absolute left-[25px] top-[15px] w-6 sm:w-10 h-0.5 bg-white/5 group-hover:w-8 transition-all duration-500"></div>

                  {/* Card */}
                  <div className="bg-[#1e293b]/40 hover:bg-[#1e293b]/70 p-6 sm:p-8 rounded-2xl border border-white/5 transition-all duration-500 hover:border-white/20 shadow-lg group-hover:-translate-y-1">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-2">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-white transition-colors duration-300">React Developer Intern</h3>
                        <p className="text-white/60 text-sm sm:text-base mt-1">Digital For Humanity | London, UK (Remote)</p>
                      </div>
                      <div className="text-white/40 text-xs sm:text-sm font-bold bg-white/5 px-3 py-1 sm:px-4 sm:py-2 rounded-full border border-white/10 whitespace-nowrap">
                        05/2023 - 06/2023
                      </div>
                    </div>
                    <ul className="space-y-3 text-white/70 text-sm leading-relaxed text-left">
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1.5 text-xs">●</span>
                        <span>Built frontend pages and components to enhance user experience and platform usability.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1.5 text-xs">●</span>
                        <span>Led and coordinated tasks within the intern team, ensuring smooth progress.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1.5 text-xs">●</span>
                        <span>Handled bug fixes and optimized React code to enhance performance.</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>

                {/* Experience Card 3 - Celebal Technologies */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="relative pl-12 sm:pl-16 group"
                >
                  {/* Timeline Dot/Number */}
                  <div className="absolute left-[9px] top-2 w-4 h-4 bg-white/20 rounded-full z-10 group-hover:bg-white transition-all duration-300"></div>

                  {/* Connection Line Horizontal */}
                  <div className="absolute left-[25px] top-[15px] w-6 sm:w-10 h-0.5 bg-white/5 group-hover:w-8 transition-all duration-500"></div>

                  {/* Card */}
                  <div className="bg-[#1e293b]/40 hover:bg-[#1e293b]/70 p-6 sm:p-8 rounded-2xl border border-white/5 transition-all duration-500 hover:border-white/20 shadow-lg group-hover:-translate-y-1">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-2">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-white transition-colors duration-300">Web Developer Intern</h3>
                        <p className="text-white/60 text-sm sm:text-base mt-1">Celebal Technologies | Jaipur, Rajasthan</p>
                      </div>
                      <div className="text-white/40 text-xs sm:text-sm font-bold bg-white/5 px-3 py-1 sm:px-4 sm:py-2 rounded-full border border-white/10 whitespace-nowrap">
                        05/2023 - 07/2023
                      </div>
                    </div>
                    <ul className="space-y-3 text-white/70 text-sm leading-relaxed text-left">
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1.5 text-xs">●</span>
                        <span>Completed training and worked on mini projects such as an E-learning app to learn basic concepts of React.js.</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>

              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Services;
