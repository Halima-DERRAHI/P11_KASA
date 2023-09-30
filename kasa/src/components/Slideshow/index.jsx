import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import styles from './Slideshow.module.css';

const Slideshow = ({ images }) => {

    const [current, setCurrent] = useState(0);
    const length = images.length;

    const nextImage = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevImage = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    return (
        <div className={styles.slideshowContainer}>

            {images.map((image, index) => {
                return <div key={index}>
                            {index === current && <img className={styles.housingImg} src={image} alt="housing" />}
                        </div>;
            })}

            {length > 1 && ( 
                <div className={styles.slideControls}>
                    <FontAwesomeIcon 
                        icon={faChevronLeft}
                        onClick={prevImage}
                        className={styles.arrow}
                    />
                    <FontAwesomeIcon 
                        icon={faChevronRight}
                        onClick={nextImage}
                        className={styles.arrow}
                    />

                    <div className={styles.slideshowCounter}>
                        <p>
                            {current + 1}/{length}
                        </p>
                    </div>

                </div>
            )}

          
        </div>
    );
};

export default Slideshow;