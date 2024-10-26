import React from 'react';
import project1Img from '../../assets/project1.png'
import bookImg from '../../assets/book.png'
import homeServiceImg from '../../assets/home_service.png'
import donationImg from '../../assets/donation.png'
import { FaGithub } from "react-icons/fa6";
import { FaGlobeAsia } from "react-icons/fa";
import { RiCheckboxCircleFill } from 'react-icons/ri';
const Projects = () => {
    return (
        <div className='pb-10'>
            <div className='text-4xl font-bold text-pink-600 text-center underline pt-10 pb-12'>
                <h2 data-aos="fade-down" data-aos-duration='2000'>Projects</h2>
            </div>
            <div  data-aos="fade-right"  className=' max-w-7xl mx-auto flex lg:gap-10 lg:flex-row flex-col bg-pink-100 border-4 border-gray-400 justify-center items-center'>
                <div className='w-[38rem] h-[400px]  rounded-md p-3'>
                    <img className='w-[38rem] h-[350px]' src={homeServiceImg} alt="" />
                </div>
                <div className='w-[38rem] h-[400px] items-center lg:pl-0 pl-20' >
                    <h2 className='text-3xl font-bold lg:pt-4 '>Home Service</h2>
                    <div className='flex gap-10 pt-4'>
                        <div className='flex gap-3 items-center'><FaGithub /><span>Repository</span></div>
                        <div className='flex gap-3 items-center'><FaGlobeAsia /><span>Live site</span></div>
                    </div>
                    <div className='text-2xl font-bold pt-2'>Features</div>
                    <div className='pt-3'>
                        <h3 className='flex items-center gap-2'><RiCheckboxCircleFill/>Login and Dashbboard</h3>
                        <h3 className='flex items-center gap-2'><RiCheckboxCircleFill/>100% Responsive</h3>
                        <h3 className='flex items-center gap-2'><RiCheckboxCircleFill/>Book Now to Service</h3>
                        <h3 className='flex items-center gap-2'><RiCheckboxCircleFill/>Add, Delete and Update Options</h3>
                    </div>
                    <div className='pt-3'>
                        <h2 className='text-2xl font-bold'>Descriptions</h2>
                        <p>Home service website uses edit, delete, update, login system, and private route so the user can see the full picture of the website after logging in.</p>
                    </div>
                </div>
            </div>
            <div data-aos="fade-left"  className=' max-w-7xl mx-auto flex lg:gap-10 lg:flex-row flex-col bg-blue-100 border-4 border-gray-400 justify-center items-center'>
                <div className='w-[38rem] h-[400px]  rounded-md p-3'>
                    <img className='w-[38rem] h-[350px]' src={bookImg} alt="" />
                </div>
                <div className='w-[38rem] h-[400px] items-center lg:pl-0 pl-20' >
                    <h2 className='text-3xl font-bold lg:pt-4 '>Book Self</h2>
                    <div className='flex gap-10 pt-4'>
                        <div className='flex gap-3 items-center'><FaGithub /><span>Repository</span></div>
                        <div className='flex gap-3 items-center'><FaGlobeAsia /><span><a href='https://starlit-treacle-d57e58.netlify.app/'>Live site</a></span></div>
                    </div>
                    <div className='text-2xl font-bold pt-2'>Features</div>
                    <div className='pt-3'>
                        <h3 className='flex items-center gap-2'><RiCheckboxCircleFill/>Simple Ecommerce Website</h3>
                        <h3 className='flex items-center gap-2'><RiCheckboxCircleFill/>100% Responsive</h3>
                        <h3 className='flex items-center gap-2'><RiCheckboxCircleFill/>Send to Email option</h3>
                        <h3 className='flex items-center gap-2'><RiCheckboxCircleFill/>All summer product collection</h3>
                    </div>
                    <div className='pt-3'>
                        <h2 className='text-2xl font-bold'>Descriptions</h2>
                        <p>Welcome to our simple e-commerce website, where shopping meets convenience.</p>
                    </div>
                </div>
            </div>
            <div data-aos="fade-right" className=' max-w-7xl mx-auto flex lg:gap-10 lg:flex-row flex-col bg-pink-100 border-4 border-gray-400 justify-center items-center'>
                <div className='w-[38rem] h-[400px]  rounded-md p-3'>
                    <img className='w-[38rem] h-[350px]' src={donationImg} alt="" />
                </div>
                <div className='w-[38rem] h-[400px] items-center lg:pl-0 pl-20' >
                    <h2 className='text-3xl font-bold lg:pt-4 '>Donation</h2>
                    <div className='flex gap-10 pt-4'>
                        <div className='flex gap-3 items-center'><FaGithub /><span>Repository</span></div>
                        <div className='flex gap-3 items-center'><FaGlobeAsia /><span><a href='https://thunderous-kelpie-6232b8.netlify.app/'>Live site</a></span></div>
                    </div>
                    <div className='text-2xl font-bold pt-2'>Features</div>
                    <div className='pt-3'>
                        <h3 className='flex items-center gap-2'><RiCheckboxCircleFill/>All the donate cards will show on the home page</h3>
                        <h3 className='flex items-center gap-2'><RiCheckboxCircleFill/>100% Responsive</h3>
                        <h3 className='flex items-center gap-2'><RiCheckboxCircleFill/>Donate Button  Click Show and Successful Toast</h3>
                        <h3 className='flex items-center gap-2'><RiCheckboxCircleFill/>Clicking the donate button will display a success toast</h3>
                    </div>
                    <div className='pt-3'>
                        <h2 className='text-2xl font-bold'>Descriptions</h2>
                        <p>A donation website is an online platform designed to facilitate the process of contributing funds to various causes, organizations, or individuals in need.</p>
                    </div>
                </div>
            </div>
            <div data-aos="fade-left" className=' max-w-7xl mx-auto flex lg:gap-10 lg:flex-row flex-col bg-blue-100 border-4 border-gray-400 justify-center items-center'>
                <div className='w-[38rem] h-[400px]  rounded-md p-3'>
                    <img className='w-[38rem] h-[350px]' src={project1Img} alt="" />
                </div>
                <div className='w-[38rem] h-[400px] items-center lg:pl-0 pl-20' >
                    <h2 className='text-3xl font-bold lg:pt-4 '>Summer Collection</h2>
                    <div className='flex gap-10 pt-4'>
                        <div className='flex gap-3 items-center'><FaGithub /><span>Repository</span></div>
                        <div className='flex gap-3 items-center'><FaGlobeAsia /><span>Live site</span></div>
                    </div>
                    <div className='text-2xl font-bold pt-2'>Features</div>
                    <div className='pt-3'>
                        <h3 className='flex items-center gap-2'><RiCheckboxCircleFill/>Simple Ecommerce Website</h3>
                        <h3 className='flex items-center gap-2'><RiCheckboxCircleFill/>100% Responsive</h3>
                        <h3 className='flex items-center gap-2'><RiCheckboxCircleFill/>Send to Email option</h3>
                        <h3 className='flex items-center gap-2'><RiCheckboxCircleFill/>All summer product collection</h3>
                    </div>
                    <div className='pt-3'>
                        <h2 className='text-2xl font-bold'>Descriptions</h2>
                        <p>Welcome to our simple e-commerce website, where shopping meets convenience.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;