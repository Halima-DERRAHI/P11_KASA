import styles from './Banner.module.css';

function Banner({ image, text, altText }) {
    return (
        <div className={styles.banner}>
            <div className={styles.container}>
                <img src={image} alt={altText} className={styles.image} />
            </div>
            <h1 className={styles.title}>{text}</h1>
        </div>
    )
}

export default Banner;
