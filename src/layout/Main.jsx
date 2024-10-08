import React from 'react';
import { Outlet } from 'react-router-dom';
import Skill from '../pages/Skills/Skill';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const Main = () => {
    return (
        <div className='container mx-auto h-full '>
            <Outlet/>
            <Skill/>
        </div>
    );
};

export default Main;