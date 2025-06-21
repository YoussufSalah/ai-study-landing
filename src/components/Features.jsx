import { motion } from "framer-motion";

const features = [
    {
        icon: (
            <div className="w-16 h-16 rounded-full bg-zinc-800 flex items-center justify-center mx-auto mb-6 group-hover:bg-zinc-700 transition-colors">
                <span className="text-3xl">●</span>
            </div>
        ),
        title: "Summarize lectures.",
        desc: "Instantly generate concise notes from long YouTube or audio lectures, skip the overwhelming content.",
    },
    {
        icon: (
            <div className="w-16 h-16 rounded-full bg-zinc-800 flex items-center justify-center mx-auto mb-6 group-hover:bg-zinc-700 transition-colors">
                <span className="text-3xl">▲</span>
            </div>
        ),
        title: "Learning for you.",
        desc: "Adaptive question practice and personalized mock tests that reflect your unique strengths and weaknesses.",
    },
    {
        icon: (
            <div className="w-16 h-16 rounded-full bg-zinc-800 flex items-center justify-center mx-auto mb-6 group-hover:bg-zinc-700 transition-colors">
                <span className="text-3xl">■</span>
            </div>
        ),
        title: "Stay on track.",
        desc: "Built-in routines and focus boosts help students with ADHD and busy schedules avoid procrastination and get things done.",
    },
];

const Features = () => {
    return (
        <section className="py-24 px-6 bg-black text-white text-center">
            <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                {features.map((f, i) => (
                    <motion.div
                        key={i}
                        className="p-10 bg-zinc-900 rounded-3xl shadow-lg flex flex-col items-center group cursor-pointer hover:scale-105 hover:bg-zinc-800 transition-transform duration-300"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7, delay: i * 0.15 }}
                    >
                        {f.icon}
                        <h3 className="text-2xl font-bold mb-2 group-hover:text-white transition-colors">
                            {f.title}
                        </h3>
                        <p className="text-lg text-gray-400 group-hover:text-gray-200 transition-colors">
                            {f.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Features;
