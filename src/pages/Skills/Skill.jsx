import React from 'react';
import SkillItem from './SkillItem';
import skills from './skills';


export default function Skill() {
    return (
        <section id='skills' className='relative py-5 bg-gradient-to-t to-slate-100 from-fuchsia-300 min-h-svh'>
            <h2 data-aos="fade-down" data-aos-duration='1000' className='text-4xl text-center py-6 mb-8'><span className='border-b-4 border-fuchsia-400 inline-block px-4 py-2 font-sans cursor-pointer hover:px-8 duration-300'>Skills</span></h2>
            <div className='flex justify-center items-center pb-16 -space-x-6'>
                <div className='space-y-24'>
                    {skills.slice(0, 1).map((props) =>(
                        <SkillItem key={props.title} {...props}/>
                    ))}
                </div>
                <div className='space-y-24'>
                    {skills.slice(1, 3).map((props) =>(
                        <SkillItem key={props.title} {...props}/>
                    ))}
                </div>
                <div className='space-y-24'>
                    {skills.slice(3, 6).map((props) =>(
                        <SkillItem key={props.title} {...props}/>
                    ))}
                </div>
                <div className='space-y-24'>
                    {skills.slice(6, 8).map((props) =>(
                        <SkillItem key={props.title} {...props}/>
                    ))}
                </div>
                <div className='space-y-24'>
                    {skills.slice(8, 9).map((props) =>(
                        <SkillItem key={props.title} {...props}/>
                    ))}
                </div>
            </div>
            <div id='skill-anchor' className='absolute right-0 bottom-[50%]'></div>
        </section>
    );
};

