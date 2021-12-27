import React from 'react';
import ReactDOM from 'react-dom';

import { Layout } from '@/components/Layout/Layout';


import { HashRouter, Routes, Route } from 'react-router-dom';


import '@/styles/index.scss';



ReactDOM.render(
  <React.StrictMode>
      <HashRouter basename='/'>
        <Routes >
          <Route path='/*' element={<Layout/>}/>
          </Routes>
      </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
