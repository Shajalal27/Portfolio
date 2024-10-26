import React from 'react';
import { MediaData } from '../../component/MediaData/MediaData';

const Contact = () => {
    return (
        <div>
            <div className='text-4xl font-bold text-pink-600 text-center underline pt-10 pb-12'>
                <h2 data-aos="fade-down" data-aos-duration='2000'>Contact Me</h2>
            </div>
            <div data-aos="zoom-in" class="grid sm:grid-cols-2 items-start gap-16 p-4 mx-auto mb-10 max-w-7xl bg-purple-200 font-[sans-serif]">
            
            <div>
                <h1 class="text-gray-800 text-3xl font-extrabold">Let's Talk</h1>
                <p class="text-lg text-gray-500 mt-4">I am avilable for Remote JOB & Freelancing Work</p>

                <div class="mt-12">
                    <h2 class="text-gray-800 text-lg font-bold">Email</h2>
                    <ul class="mt-4">
                        <li class="flex items-center">
                            <div class="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#007bff'
                                    viewBox="0 0 479.058 479.058">
                                    <path
                                        d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                                        data-original="#000000" />
                                </svg>
                            </div>
                            <a href="javascript:void(0)" class="text-[#007bff] text-sm ml-4">
                                <small class="block">Mail</small>
                                <strong>hpshajalal@gmail.com</strong>
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="mt-12">
                    <h2 class="text-gray-800 text-lg font-bold">Socials</h2>

                    <div class="flex mt-4 space-x-10">
                        {
                            MediaData.map((item, index) =>{
                                return(
                                    <div key={index}>
                                        <a href={item.href} target='_blank'>
                                            <img src={item.img} alt="media" className='h-8' />
                                        </a>
                                    </div>
                                )
                            })
                        }  
                    </div>
                </div>
            </div>

            <form class="ml-auto space-y-4">
                <input type='text' placeholder='Name'
                    class="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent" />
                <input type='email' placeholder='Email'
                    class="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent" />
                
                <textarea placeholder='Message' rows="6"
                    class="w-full rounded-md px-4 bg-gray-100 text-gray-800 text-sm pt-3 outline-blue-500 focus:bg-transparent"></textarea>
                <button type='button'
                    class="text-white bg-blue-500 hover:bg-blue-600 tracking-wide rounded-md text-sm px-4 py-3 w-full !mt-6">Send</button>
            </form>
        </div>
        </div>
        
    );
};

export default Contact;