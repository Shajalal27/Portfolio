import React from 'react';
import { Outlet } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css'; 

import Navbar from '../pages/Home/Navbar';
import Skill from '../pages/Skills/Skill';
import Projects from '../pages/Projects/Projects';
import Contact from '../pages/Contact/Contact';
AOS.init();

const Main = () => {
    return (
        <div className=' container mx-auto h-full '>
            <Navbar/>
            <Outlet>
                <Skill/>
                <Projects/>
                <Contact/>
            </Outlet>
            
            

        </div>
    );
};

export default Main;