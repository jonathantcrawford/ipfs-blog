import { NavLink } from "react-router-dom";

import css from "./Header.module.scss";

// replace with your own name
const firstName = 'first';
const lastName = 'last';

export const Header = () => {
  return (
    <div className={css["header"]}>
      <NavLink to="/" className={css["title"]}>
        <span className={css["title__first-name"]}>{firstName}</span>
        <span className={css["title__last-name"]}>{lastName}</span>
      </NavLink>
    </div>
  );
};
