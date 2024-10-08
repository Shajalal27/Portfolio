import React from 'react';
import { Link } from 'react-router-dom';
import Banner from './Banner';

const Home = () => {
    return (
      <div className=''>
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown font-semibold">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className=" menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow ">
                <li><a>Home</a></li>
                <li><a>Resume</a></li>
                <li><a>Skills</a></li>
                <li><a>Projects</a></li>
                <li><a>Contact me</a></li>
              </ul>
            </div>
            <a className="btn btn-ghost text-2xl text-pink-600 font-bold"><span className='text-green-500'>Web</span>Developer</a>
          </div>
          <div className="navbar-center hidden lg:flex font-semibold text-blue-500">
            <ul className="menu menu-horizontal px-1 text-xl ">
              <li className='hover:border-b-2 border-green-400 '><a>Home</a></li>
              <li className='hover:border-b-2 border-green-400'><a>Resume</a></li>
              <li className='hover:border-b-2 border-green-400'><a>Skills</a></li>
              <li  className='hover:border-b-2 border-green-400'><a>Projects</a></li>
              <li  className='hover:border-b-2 border-green-400'><a>Contact me</a></li>
            </ul>
          </div>
          <div className="navbar-end">
            <Link className="border-2 px-2 py-2 rounded-md bg-slate-200 text-green-500 text-xl font-semibold italic">Hire me</Link>
          </div>
        </div>
        <div >
          <Banner/>
        </div>
      </div>
    );
};

export default Home;