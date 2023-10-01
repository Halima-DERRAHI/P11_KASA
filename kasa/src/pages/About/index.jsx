import Banner from '../../components/Banner'
import styles from './About.module.css'
import data from '../../Datas/collapse-about.json'
import Collapse from '../../components/Collapse';

function About() {

    const bannerImage = './assets/about-banner.jpg';
    const altText = "About banner";

    return (
        <main>
            <section className={styles.main}>
                <Banner image={bannerImage} altText={altText} page={'about'} />
            </section>
            <section className={styles.section}>
                {data.map((about)=> (
                    <Collapse
                        key={about.title} 
                        title={about.title}
                        text={about.text}
                    />
                ))}
            </section>
        </main>
    )
}

export default About