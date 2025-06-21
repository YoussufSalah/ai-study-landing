import { motion } from "framer-motion";

const CTA = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="py-20 px-6 text-center bg-zinc-900 text-white flex flex-col items-center"
        >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Try it now.
                <br />
                Study smarter.
            </h2>
            <form className="flex flex-col md:flex-row gap-4 items-center w-full max-w-md">
                <input
                    type="email"
                    placeholder="name@email.com"
                    className="w-full py-3 px-4 rounded-full text-black text-lg focus:outline-none"
                />
                <motion.a
                    href="https://tally.so/r/wbXD40"
                    whileHover={{
                        scale: 1.08,
                        backgroundColor: "#e5e7eb",
                        color: "#000",
                    }}
                    className="bg-white text-black font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:bg-gray-200 transition w-full md:w-auto text-center"
                >
                    Join The Waitlist
                </motion.a>
            </form>
        </motion.section>
    );
};

export default CTA;
