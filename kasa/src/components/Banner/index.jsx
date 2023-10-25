import { useState, useEffect } from 'react';
import styles from './Banner.module.css';

function Banner({ image, altText, page }) {
    
    const [showText, setShowText] = useState(true);

    useEffect(() => {
        if (page === 'about') {
            setShowText(false);
        } else {
            setShowText(true);
        }
      }, [page]);

    return (
        <div className={styles.banner}>
            <div className={styles.container}>
                <img src={image} alt={altText} className={styles.image} />
            </div>
            {showText && (
                <div className={styles.titleContainer}>
                    <h1 className={styles.title}>
                        Chez vous,&nbsp;
                        <span>partout et ailleurs</span>
                    </h1>
                </div>
            )}
        </div>
    )
}

export default Banner;
