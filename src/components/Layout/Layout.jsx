import { HashRouter, Routes, Route, Outlet, NavLink } from 'react-router-dom';

import css from './Layout.module.scss';

export const Layout = () => {
    return (
        <div className={css['layout']}>
        <div className={css['title']}>WEB3 CONSTRUCTION ZONE</div>
        <div className={css['side-nav']}>
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
        <div className={css['content']}>
            <Outlet/>
        </div>
        </div>
    );
}

