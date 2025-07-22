import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative flex h-screen text-center py-24 px-4 overflow-hidden">
            <div className='flex flex-col justify-center items-start text-start max-w-3xl p-12'>
                <motion.h1
                className="text-5xl font-bold text-gray-800 mb-6 z-10 relative"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                >
                    Analyze Excel Files Visually in Seconds
                </motion.h1>
                <p className="text-lg text-gray-600  mx-auto z-10 relative">
                    Upload your Excel data, visualize it with interactive 2D/3D charts, and download insights instantly.
                </p>
            
                <motion.button
                    className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition z-10 relative"
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
