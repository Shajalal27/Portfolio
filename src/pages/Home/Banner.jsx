
import profileImg from '../../assets/MD SHAJALAL.jpg'
import { motion } from "framer-motion"
import { Typewriter } from 'react-simple-typewriter'
import { FaDownload } from "react-icons/fa";

const Banner = () => {
    const handleDone = () => {
    console.log(`Done after 5 loops!`)
    }
    return (
        <section className='max-w-7xl mx-auto min-h-screen border-2 border-red-300] bg-fuchsia-100 rounded-md '>
                <div className='pb-10 row lg:flex gap-32 items-center  fle-col lg:flex-row'>
                    <div className=' '>
                        <motion.div 
                        className='relative'
                        initial={{opacity: 0}}
                        animate={{
                        opacity: 1,
                        transition:{delay: 2, duration: 0.4, ease: "easeIn" },
                        }}
            >
                        <motion.div 
                        initial={{opacity: 0}}
                        animate={{
                            opacity: 1,
                            transition:{delay: 2.4, duration: 0.4, ease: "easeOut" },
                        }}
                        className='pl-36  lg:mt-28 '>
                            <img  priority quality={100} fill src={profileImg} alt="" className=' w-[300px] h-[300px] lg:top-14 top-20 relative rounded-[50%] lg:left-8 -left-8'/>
                        </motion.div>
                        <motion.svg className='lg:left-36 left-20 absolute lg:top-6 top-12  w-[700px] h-[700px]'
                        fill="transparent"
                        viewBox="0 0 586 586"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <motion.circle
                                cx="153"
                                cy="153"
                                r="150"
                                stroke="#4ade80"
                                strokeWidth="4"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                initial={{strokeDasharray: "24 10 0 0"}}
                                animate={{
                                    strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 150 22 22"],
                                    rotate: [120 , 360],
                                }}
                                transition={{
                                    duration: 10,
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                }}
                            />
                        </motion.svg>
                        </motion.div>
                    </div> 
                    <div className='right '>
                        <div className='content '>
                            <div className=' relative  space-y-6 lg:top-20 top-36 left-6 '>
                
                <h2 data-aos="fade-left" data-aos-delay="1000" className='text-3xl font-bold'>Hello! I'm</h2>
                <h1 data-aos="fade-left" data-aos-delay="2000" className='text-5xl font-bold text-pink-600 uppercase'>MD Shajalal</h1>
                <h2 className='text-3xl font-bold'>I am -
                    <span style={{ color: 'orange', fontWeight: 'bold' }}>
                        {/* Style will be inherited from the parent element */}
                        <Typewriter
                            words={['Front End Developer', 'Mern Stack Developer']}
                            loop={Infinity}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                            onLoopDone={handleDone}
                                
                        />
                    </span>
                            
                </h2>
                <button className='flex items-center gap-2 py-3 px-4  bg-green-400 font-semibold rounded-md'>Download Resume <FaDownload/>
                </button>
                            </div>
                        </div>
                    </div>    
                </div>
                
        </section>
    );
};

export default Banner;