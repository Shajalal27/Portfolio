
import {
    createBrowserRouter,
  } from "react-router-dom";

  import Main from "../layout/Main";
  import Home from "../pages/Home/Home";
import Projects from "../pages/Projects/Projects";
import Skill from "../pages/Skills/Skill";
import Contact from "../pages/Contact/Contact";
  
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/skills',
          element: <Skill></Skill>
        },
        {
          path: 'projects',
          element: <Projects></Projects>
        },
        {
          path: 'contact',
          element: <Contact></Contact>
        }
      ]
    },
  ]);
  