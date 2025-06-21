import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const Hero = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-gradient-to-b from-black via-zinc-900 to-black"
        >
            <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-white drop-shadow-lg">
                AI for your studies.
            </h1>
            <div className="text-2xl md:text-3xl mb-8 text-gray-400 font-medium min-h-[2.5rem]">
                <Typewriter
                    options={{
                        strings: [
                            "Personal notes. Real clarity.",
                            "Summarize lectures instantly.",
                            "Adaptive learning for you.",
                            "Stay on track, always.",
                        ],
                        autoStart: true,
                        loop: true,
                        delay: 40,
                        deleteSpeed: 20,
                        pauseFor: 1800,
                    }}
                />
            </div>
            <motion.a
                href="https://tally.so/r/wbXD40"
                whileHover={{
                    scale: 1.08,
                    backgroundColor: "#e5e7eb",
                    color: "#000",
                }}
                className="bg-white text-black font-bold py-3 px-8 rounded-full text-lg shadow-lg transition-colors duration-200 hover:bg-gray-200 hover:scale-105"
            >
                Join The Waitlist
            </motion.a>
        </motion.section>
    );
};

export default Hero;
