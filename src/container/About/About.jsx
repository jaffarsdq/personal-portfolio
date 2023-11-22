import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
import { images } from '../../constants';
import { BsDownload } from "react-icons/bs";

const abouts = [{title:'Creative Coder', description:'Turning ideas into captivating websites.', imgUrl:images.about01 },
                {title:'Continuous Learner', description:'Embracing new tech to stay ahead.', imgUrl:images.about02 },
                {title:'Effective Communicator', description:'Clear communication for seamless collaboration.', imgUrl:images.about04 },
]

const About = () => {

  return (
    <>
      <p className="about-text"><span>Frontend developer</span> with expertise in HTML, CSS, JavaScript, and <span>React</span>. Proficient in Git and focused on responsive design. Eager to innovate and explore additional frameworks for dynamic web development. Let&#39;s transform ideas into captivating websites together<span>!</span></p>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>

      <a 
        href={images.resume} 
        target="_blank"         
        className="app__work-filter-item app__flex"
        rel="noreferrer">
             <BsDownload/> Download Resume
      </a>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);
