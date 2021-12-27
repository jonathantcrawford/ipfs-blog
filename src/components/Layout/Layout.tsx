import {  Route, Routes, NavLink, Outlet, useLocation } from 'react-router-dom';


import HowToHostASiteOnIPFS from '@/pages/HowToHostASiteOnIPFS.mdx';


import { AnimatePresence, motion } from 'framer-motion';

import css from './Layout.module.scss';


const Post = ({children}: any) => {
  return (
    <div className={css['post']}>
      {children}
    </div>
  )
}

const Posts = () => {
  return (
    <div className={css['posts']}>
      <div className={css['post-link']}>
        <NavLink 
            to='/how-to-host-a-site-on-ipfs'
            className={css['post-link__title']}>
                How To Host A Site On IPFS
        </NavLink>
        <div className={css['post-link__summary']}>
          brief summary about how to host a site on ipfs
        </div>
        <div className={css['post-link__image']}>
          this could be an image
        </div>
      </div>
    </div>
  )
}

const AnimatedRoute = () => {
  return (
      <motion.div
      className={css['card']}
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
          <Route path='/*' element={<AnimatedRoute />}>
            <Route index element={<Posts/>}/>
            <Route path='how-to-host-a-site-on-ipfs' element={<Post><HowToHostASiteOnIPFS/></Post>}/>
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

