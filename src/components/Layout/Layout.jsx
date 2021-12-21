import {  Route, Routes, NavLink, Outlet, useLocation } from 'react-router-dom';

import About from '@/pages/About.mdx';
import Hello from '@/pages/Hello.mdx';
import Hello2 from '@/pages/Hello2.mdx';





import { AnimatePresence, motion } from 'framer-motion';

import css from './Layout.module.scss';



export const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path='/*' element={<AnimatedRoute />}>
            <Route index element={<About/>}/>
            <Route path='hello' element={<Hello/>}/>
            <Route path='hello2' element={<Hello2/>}/>
        </Route>
      </Routes>
    </AnimatePresence>
  );
};



const AnimatedRoute = () => {
    return (
        <motion.div
        className={css['content']}
        initial="initial"
        animate="in"
        exit="out"
        variants={{
          initial: {
            opacity: 0
          },
          in: {
            opacity: 1
          },
          out: {
            opacity: 0
          }
        }}
        transition={{
          type: "spring",
          damping: 10,
          stiffness: 50
        }}
      >
        <Outlet />
      </motion.div>
    )
}

export const Layout = () => {

    return (


        <div className={css['layout']}>
            <div className={css['title']}>WEB3 CONSTRUCTION ZONE</div>
            <div className={css['side-nav']}>
                <NavLink 
                    to='/'
                    className={({ isActive }) => isActive ? css['nav-link--active'] : css['nav-link']}>
                        About
                </NavLink>
                <NavLink
                    to='hello'
                    className={({ isActive }) => isActive ? css['nav-link--active'] : css['nav-link']}>
                        hello
                </NavLink>
                <NavLink
                    to='hello2'
                    className={({ isActive }) => isActive ? css['nav-link--active'] : css['nav-link']}>
                        hello2
                </NavLink>
            </div>
            <AnimatedRoutes/>
        </div>
    );
}

