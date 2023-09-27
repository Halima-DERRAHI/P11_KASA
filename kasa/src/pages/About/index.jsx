import Banner from '../../components/Banner'
import styles from './About.module.css'
function About() {

    const bannerImage = './assets/about-banner.jpg';
    const bannerText = "";
    const altText = "About banner";

    return (
        <div>
            <section >
                <Banner image={bannerImage} text={bannerText} altText={altText} />
            </section>
            <div className={styles.gallery}>

            </div>
        </div>
    )
}

export default About