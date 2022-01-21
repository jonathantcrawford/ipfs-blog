import css from "./About.module.scss";

export const About = () => {
  return (
    <div className={css["about"]}>
      <div>
        Enter a brief description about yourself.
      </div>
      <div>Include some of your interests and passions.</div>
      <div>Maybe add something funny or charming.</div>
    </div>
  );
};
