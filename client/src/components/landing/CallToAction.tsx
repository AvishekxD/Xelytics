"use client";
import { motion } from "framer-motion";

const CallToAction = () => {
  return (
    <section className="relative mt-20 mb-10 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10 mx-auto max-w-6xl rounded-3xl ring ring-zinc-100 bg-white shadow-xl  overflow-hidden flex flex-col md:flex-row items-center justify-between p-10"
      >
        <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-semibold text-black mb-4">
                Analyze smarter, <br /> launch faster
            </h2>
            <p className="text-gray-700 mb-6">
                Upload Excel files and transform them into stunning charts instantly. <strong>Free</strong> for early users – no setup, no credit card, just clean insights at your fingertips.
            </p>
            <a
                href="#"
                className="inline-block px-6 py-3 bg-white shadow-md text-black font-semibold rounded-lg hover:bg-gray-200/20 ring ring-zinc-200 hover:ring-gray-200/20 hover:scale-105 duration-300 transition hover:shadow-lg"
            >
                Try Xelytics →
            </a>
        </div>

        <div className="absolute inset-y-0 right-0 w-1/2 hidden md:block opacity-90 pointer-events-none">
          <img
            src="src/assets/favicons/android-chrome-512x512.png"
            alt="Abstract"
            className="h-full w-full object-contain "
          />
        </div>
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-white to-purple-100 blur-3xl opacity-20 z-0 pointer-events-none" />
    </section>
  );
};

export default CallToAction;
