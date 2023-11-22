import { BsGithub } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from "react-icons/si";
const SocialMedia = () => (
  <div className="app__social">
    <a target='blank' href='https://github.com/jaffarsdq'>
      <BsGithub />
    </a>
    <a target='blank' href='https://www.linkedin.com/in/jaffar-sadhiq/'>
      <FaLinkedin />
    </a>
    <a target='blank' href='https://leetcode.com/jaffarsdq/'>
      <SiLeetcode />
    </a>
  </div>
);

export default SocialMedia;
