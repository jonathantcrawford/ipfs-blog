import {  NavLink } from 'react-router-dom';

import css from './Header.module.scss'

export const Header = () => {
    return (
    <div className={css['header']}>
        <NavLink to="/" className={css['title']}>
            <span className={css['title__first-name']}>J</span>
            <span className={css['title__last-name']}>Crawford</span>
        </NavLink>
    </div>

    )
}