import styles from './Banner.module.css';

function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.container}>
                <img src='./assets/home-banner.jpg' alt='Home' className={styles.image} />
            </div>
            <h1 className={styles.title}>Chez vous, partout et ailleurs</h1>
        </div>
    )
}

export default Banner;
