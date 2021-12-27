import {  Route, Routes, NavLink, Outlet, useLocation } from 'react-router-dom';


import HowToHostASiteOnIPFS from '@/pages/HowToHostASiteOnIPFS.mdx';


import { AnimatePresence, motion } from 'framer-motion';

import css from './Layout.module.scss';

const MotionNavLink = motion(NavLink, {forwardMotionProps: true});


const Posts = () => {
  return (
    <div className={css['posts']}>
        <MotionNavLink 
          whileHover={{scale: 1.02}}
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
          to='/how-to-host-a-site-on-ipfs'
          className={css['post']}>
            <span className={css['post__title']}>
              How To Host A Site On IPFS
            </span>
            <span className={css['post__summary']}>
              brief summary about how to host a site on ipfs
            </span>
        </MotionNavLink>
    </div>
  )
}

const AnimatedPost = () => {
  return (
      <motion.div
      className={css['post']}
      initial="initial"
      animate="in"
      exit="out"
      variants={{
        initial: {
          opacity: 0,
        },
        in: {
          opacity: 1,
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

const Content = () => {
  const location = useLocation();
  return (
    <div className={css['content']}>
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route index element={<Posts/>}/>
          <Route path='/*' element={<AnimatedPost/>}>
            <Route path='how-to-host-a-site-on-ipfs' element={<HowToHostASiteOnIPFS/>}/>
          </Route>
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export const Layout = () => {
    return (
        <div className={css['layout']}>
            <div className={css['title']}>WEB3 CONSTRUCTION ZONE</div>
            <Content/>
        </div>
    );
}

