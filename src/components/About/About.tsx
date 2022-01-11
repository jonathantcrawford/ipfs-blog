import css from "./About.module.scss";

export const About = () => {
  return (
    <div className={css["about"]}>
      <div>
        I work at Lunchbox Inc. as a Software Engineer on the Innovation Team.
      </div>
      <div>I am interested in design systems, web3 and user experiences.</div>
      <div>I am currently living in Austin, TX.</div>
    </div>
  );
};
