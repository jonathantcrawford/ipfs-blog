import {  NavLink } from 'react-router-dom';


import css from './Posts.module.scss';





export const Posts = () => {
    return (
      <div className={css['posts']}>
        <div className={css['posts__heading']}>POSTS</div>
        <div className={css['posts__list']}>
          <NavLink 
            to='/how-to-host-a-site-on-ipfs'
            className={css['post']}>
              <span className={css['post__title']}>
                🔥 How To Host A Site On IPFS
              </span>
              <span className={css['post__summary']}>
                A brief walkthrough on how to use Fleek.co to host a static site on IPFS.
              </span>
          </NavLink>
        </div>
      </div>
    )
  }