import { motion } from 'framer-motion';
// import ReactTooltip from 'react-tooltip';

import { AppWrap, MotionWrap } from '../../wrapper';
import './Skills.scss';
import { images } from '../../constants';

const skills = [
  {icon:images.html, name:'HTML'},
  {icon:images.css, name:'CSS'},
  {icon:images.javascript, name:'Javascript'},
  {icon:images.react, name:'React'},
  {icon:images.redux, name:'Redux'},
  {icon:images.tailwind, name:'Tailwind'},
  {icon:images.git, name:'Git'},
  {icon:images.typescript, name:'Typescript'}
]

const education = [
  {works:[{name:'M.I.E.T. Engineering College'}, {detail:'B.E. Computer Science (7.59 CGPA)'}], year:'2018 - 2022'},
  {works:[{name:'S.D.A. Matric. Hr. Sec. School'}, {detail:'12th (60%)'}], year:'2017 - 2018'},
  {works:[{name:'S.D.A. Matric. Hr. Sec. School'}, {detail:'10th (84%)'}], year:'2015 - 2016'}
]

const Skills = () => {

  return (
    <>
      <h2 className="head-text">Skills & Education</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {education && education.map((experience) => (
            <motion.div
              className="app__skills-exp-item"
              key={experience.year}
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.detail}</p>
                    </motion.div>
                    {/* <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </ReactTooltip> */}
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg',
);
