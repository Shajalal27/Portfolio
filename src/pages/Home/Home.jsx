import React from 'react';

import Banner from './Banner';
import Skill from '../Skills/Skill';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
      <div className=''>
        <div >
          <Banner/>
          <Skill/>
          <Projects/>
          <Contact/>
        </div>
      </div>
    );
};

export default Home;