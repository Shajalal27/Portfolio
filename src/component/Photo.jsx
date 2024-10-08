import React from 'react';
import { motion } from "framer-motion"
import profileImg from '../../src/assets/MD SHAJALAL.jpg'

const Photo = () => {
   
    return (
        <div className=''>
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
                className='lg:border-r-4 border-r-orange-400 lg:mt-28'>
                    <img  priority quality={100} fill src={profileImg} alt="" className=' w-[270px] h-[270px] top-12 relative rounded-[50%] left-10'/>
                </motion.div>
                <motion.svg className='absolute top-8 left-6 w-[586px] h-[586px]'
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
    );
};

export default Photo;