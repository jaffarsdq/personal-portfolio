import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Footer.scss';

const Footer = () => {
    return (
        <>
            <h2 className='head-text'>Contact me</h2>

            <div className='app__footer-cards'>
                <div className='app__footer-card '>
                    <img
                        src={images.email}
                        alt='email'
                    />
                    <a
                        href='mailto:jaffarsdq5@gmail.com'
                        className='p-text'
                    >
                        jaffarsdq5@gmail.com
                    </a>
                </div>
                <div className='app__footer-card'>
                    <img
                        src={images.mobile}
                        alt='phone'
                    />
                    <a
                        href='tel:+91 7010836264'
                        className='p-text'
                    >
                        +91 7010836264
                    </a>
                </div>
            </div>
        </>
    );
};

export default AppWrap(
    MotionWrap(Footer, 'app__footer'),
    'contact',
    'app__whitebg'
);
