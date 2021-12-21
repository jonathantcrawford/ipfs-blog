import React from 'react';
import ReactDOM from 'react-dom';

import { Layout } from '@/components/Layout/Layout';
import Hello from '@/pages/Hello.mdx';
import Hello2 from '@/pages/Hello2.mdx';


import { HashRouter, Routes, Route } from 'react-router-dom';

import '@/styles/index.scss';

ReactDOM.render(
  <React.StrictMode>
      <HashRouter basename='/'>
          <Routes>
              <Route path='/' element={<Layout/>}>
                  <Route path='hello' element={<Hello/>}/>
                  <Route path='hello2' element={<Hello2/>}/>
              </Route>
          </Routes>
      </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
