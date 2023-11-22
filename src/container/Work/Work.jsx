import { useState } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './Work.scss';
import { images } from '../../constants';

const works = [
                {imgUrl:images.shoppy, tags:['All', 'React JS'], title:'E Commerce App', name:'Shoppy', projectLink:'https://e-commerce-react-app-jaffarsdq.vercel.app', codeLink: 'https://github.com/jaffarsdq/E-commerce-react-app.git'},

                {imgUrl:images.movieQuest, tags:['All', 'React JS'], title:'Movie Searching App', name:'Movie Quest', projectLink:'https://movie-searching-app-ten.vercel.app', codeLink: 'https://github.com/jaffarsdq/Movie_Searching_App'},

                {imgUrl:images.imageFinder, tags:['React JS','All', ], title:'Image Finder App', name:'Shoppy', projectLink:'https://e-commerce-react-app-jaffarsdq.vercel.app', codeLink: 'https://github.com/jaffarsdq/Image-search-app'},

                {imgUrl:images.crm, tags:['All', 'React JS'], title:'Customer Relationship Management', name:'CRM', projectLink:'https://crm-web-app-one.vercel.app/', codeLink: 'https://github.com/jaffarsdq/crm-frontend.git'}
              ]

const Work = () => {
  // const [filterWork, setFilterWork] = useState([]);
  // const [activeFilter, setActiveFilter] = useState('All');
  // eslint-disable-next-line no-unused-vars
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  // const handleWorkFilter = (item) => {
  //   setActiveFilter(item);
  //   setAnimateCard([{ y: 100, opacity: 0 }]);

  //   setTimeout(() => {
  //     setAnimateCard([{ y: 0, opacity: 1 }]);

  //     if (item === 'All') {
  //       setFilterWork(works);
  //     } else {
  //       setFilterWork(works.filter((work) => work.tags.includes(item)));
  //     }
  //   }, 500);
  // };

  return (
    <>
      <h2 className="head-text">My <span>Projects</span> Section</h2>
{/* 
      <div className="app__work-filter">
        {['UI/UX', 'Web App', 'Mobile App', 'React JS', 'All'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div> */}

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {works.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div
              className="app__work-img app__flex"
            >
              <img src={(work.imgUrl)} alt={work.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">

                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>

              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, 'app__works'),
  'projects',
  'app__primarybg',
);
