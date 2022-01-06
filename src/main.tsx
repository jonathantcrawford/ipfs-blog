import React from 'react';
import ReactDOM from 'react-dom';


import { HashRouter, Routes, Route, Outlet, useLocation } from 'react-router-dom';

import { AnimatePresence, motion } from 'framer-motion';


import Home from '@/pages/Home.mdx';
import HowToHostASiteOnIPFS from '@/pages/HowToHostASiteOnIPFS.mdx';

import { Header } from '@/components/Header/Header';

import { Footer } from '@/components/Footer/Footer';

import '@/styles/index.scss';



const AnimatedLayout = () => {

  return (
    <div className='layout'>
      <div className='layout__header'>
        <Header/>
      </div>
      <motion.div
      className='layout__content'
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
        type: "tween",
        duration: 0.8
      }}
    >
      <Outlet/>
    </motion.div>
    <motion.div
      className='layout__footer'
      initial="initial"
      animate="in"
      exit="out"
      variants={{
        initial: {
          y: '100%',
        },
        in: {
          y: '0%',
        },
        out: {
          y: '100%'
        }
      }}
      transition={{
        type: "spring",
        duration: 0.6
      }}
    >
      <Footer/>
    </motion.div>
  </div>
  )
}


export const AnimatedRoutes = () => {
    const location = useLocation();
    return (
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}> 
          <Route path='/*' element={<AnimatedLayout/>}>
            <Route index element={<Home/>}/>
            <Route path='how-to-host-a-site-on-ipfs' element={<HowToHostASiteOnIPFS/>}/>
          </Route>
        </Routes>
      </AnimatePresence>
    );
}

ReactDOM.render(
  <React.StrictMode>
      <HashRouter basename='/'>
        <Routes >
          <Route path='/*' element={<AnimatedRoutes/>}/>
        </Routes>
      </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
