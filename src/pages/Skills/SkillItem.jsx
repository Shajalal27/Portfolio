import React from 'react';

export default function SkillItem({title, icon, animation, delay, duration, easing}) {
    return (
        <div
            data-aos={animation}
            data-aos-delay={delay}
            data-aos-duration={duration}
            data-aos-easing={easing}
            data-aos-anchor="#skill-anchor"
        >
            <div
                className='shadow-lg bg-gradient-to-t to-slate-100 from-fuchsia-100 rounded-2xl p-1 rotate-45 size-36 flex justify-center items-center '>
                <div className='-rotate-45 size-32 origin-center flex flex-col justify-center items-center p-7 relative'>
                    <img className='object-cover' src={icon} alt={title} />
                    <h3 className='absolute bottom-2'>{title}</h3>
                </div>
            </div>
        </div>
    );
};

