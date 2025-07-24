import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative flex h-screen text-center py-24 px-4 overflow-hidden">
            <div className='flex flex-col justify-center items-start text-start max-w-3xl p-12'>
                <motion.h1
                className="text-5xl font-bold text-gray-800 mb-6 z-10 relative tracking-wide"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                >
                    Analyze Excel Files Visually in Seconds.
                </motion.h1>
                <p className="text-lg text-gray-600  mx-auto z-10 relative">
                    Upload your Excel data, visualize it with interactive 2D/3D charts, and download insights instantly.
                </p>
            
                <motion.button
                    className="mt-8 px-10 py-3 cursor-pointer ease-in-out duration-300  hover:scale-105 hover:shadow-lg bg-zinc-200/10 shadow-md shadow-zinc-300 ring-1 ring-zinc-200 text-black rounded-lg font-semibold hover:bg-zinc-300/10 transition z-10 relative"
                    whileTap={{ scale: 0.95 }}
                >
                    Get Started
                </motion.button>
            </div>
            

            {/* SVG Wave */}
            <div className="">
                
            </div>
        </section>
    );
};

export default Hero;
