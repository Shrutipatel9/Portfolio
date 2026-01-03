//next-image
import Image from "next/image";
import Link from "next/link";

//components
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";
import { RiMailFill, RiDownloadCloud2Line } from "react-icons/ri";

//framer motion
import { motion } from "framer-motion";

//variants
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-primary/60 min-h-[100vh] relative">
      <div className="w-full min-h-[100vh] bg-gradient-to-r from-primary/10 via-black/30 to-black-10">
        <div className="text-center flex flex-col justify-center pt-28 xl:pt-40 xl:text-left h-full container mx-auto">
          <motion.h1
            variants={fadeIn("down", 0.1)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1 text-xl xl:text-5xl leading-[160%]"
          >
            Turning Technical <br></br>Debt into<br></br><span className="text-accent">Scalable Solutions.</span><br />
          </motion.h1>
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 text-white/60"
          >
            Turning ambitious ideas into production-ready reality. I thrive on solving architectural challenges and building reliable systems that scale alongside growing business needs.
          </motion.p>
          <div className="flex justify-center xl:hidden relative mb-8">
            <ProjectBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-col xl:flex-row gap-4 justify-center xl:justify-start items-center"
          >
            <Link href="/contact" className="btn h-[48px] rounded-full border border-white/50 px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group bg-accent hover:bg-transparent relative z-20">
              <span className="flex items-center gap-x-2 group-hover:-translate-y-[120%] transition-all duration-300">
                <RiMailFill /> Get in Touch
              </span>
              <span className="flex items-center gap-x-2 translate-y-[120%] group-hover:translate-y-0 transition-all duration-300 absolute">
                <RiMailFill /> Get in Touch
              </span>
            </Link>
            <a href="https://drive.google.com/file/d/16MbBRMEZH_MWJYk_-da0S0_st1xSjTRH/view?usp=sharing" target="_blank" className="btn h-[48px] rounded-full border border-white/50 px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group relative z-20">
              <span className="flex items-center gap-x-2 group-hover:-translate-y-[120%] transition-all duration-300">
                <RiDownloadCloud2Line /> Download CV
              </span>
              <span className="flex items-center gap-x-2 translate-y-[120%] group-hover:translate-y-0 transition-all duration-300 absolute">
                <RiDownloadCloud2Line /> Download CV
              </span>
            </a>
          </motion.div>

          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mt-12 flex items-center gap-x-2 text-white/50 mx-auto xl:mx-0 justify-center xl:justify-start"
          >
            {/* Simple Location Indicator */}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
              <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
              <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            </svg>
            <span>Rajkot, India</span>
          </motion.div>
        </div>
      </div>
      <div className="w-[1200px] h-full absolute right-0 bottom-0 pointer-events-none">
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0 opacity-50"></div>
        <ParticlesContainer />
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-[600px] max-h-[600px] absolute -bottom-32 lg:bottom-10 lg:right-[15%] hidden xl:block pointer-events-auto"
        >
          {/* Placeholder for Profile Image */}
          <div className="w-full h-full relative group">
            {/* Frame */}
            {/* <div className="absolute inset-0 bg-accent/20 rounded-lg transform rotate-3 transition-transform duration-500 group-hover:rotate-6"></div> */}
            <div className="w-[400px] h-[500px] relative ml-auto mt-20">
              {/* Image Container with Overflow Hidden */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/9 to-white/5 rounded-full overflow-hidden border border-white/10 shadow-2xl backdrop-blur-sm">
                <div className="w-full h-full flex items-center justify-center bg-transparent">
                  <Avatar />
                </div>
              </div>

              {/* Tag Floating Outside */}
              <div className="absolute -bottom-6 -left-14 bg-[#1e293b]/80 backdrop-blur-md py-4 px-6 rounded-full border border-white/10 flex items-center gap-4 shadow-xl z-30 min-w-[300px] group cursor-default hover:bg-[#1e293b] transition-all duration-300">
                <div className="relative">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse relative z-10"></div>
                  <div className="absolute inset-0 bg-green-500 blur-sm animate-pulse"></div>
                </div>
                <div className="text-sm font-medium text-white/90">Available for new opportunities</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
