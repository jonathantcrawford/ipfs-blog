import {  NavLink } from 'react-router-dom';


import css from './Posts.module.scss';





export const Posts = () => {
    return (
      <div className={css['posts']}>
          <NavLink 
            to='/how-to-host-a-site-on-ipfs'
            className={css['post']}>
              <span className={css['post__title']}>
                🔥 How To Host A Site On IPFS
              </span>
              <span className={css['post__summary']}>
                A brief walkthrough using Fleek.co to host sites on IPFS.
              </span>
          </NavLink>
      </div>
    )
  }