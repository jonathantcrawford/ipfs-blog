import css from "./Footer.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMediumM,
  faGithub,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

// replace with your own social media profile urls
const mediumURL = "https://medium.com/";
const githubURL = "https://github.com/";
const twitterURL = "https://twitter.com/";
const linkedinURL = "https://www.linkedin.com/in/";

export const Footer = () => {
  return (
    <div className={css["footer"]}>
      <a href={mediumURL} target="_blank">
        <FontAwesomeIcon icon={faMediumM} />
      </a>
      <a href={githubURL} target="_blank">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href={twitterURL} target="_blank">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a href={linkedinURL} target="_blank">
        <FontAwesomeIcon icon={faLinkedinIn} />
      </a>
    </div>
  );
};
