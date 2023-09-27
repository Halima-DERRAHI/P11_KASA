import styles from './Home.module.css'
import Banner from '../../components/Banner'
import data from '../../Datas/logements.json'
import Card from '../../components/Card'

function Home() {

  const bannerImage = './assets/home-banner.jpg';
  const bannerText = "Chez vous, partout et ailleurs";
  const altText = "Home banner";

  return (
    <div>
      <section>
        <Banner image={bannerImage} text={bannerText} altText={altText} />
      </section>
      <div className={styles.gallery}>
        {data.map((logement)=> (
          <Card 
            title={logement.title}
            cover={logement.cover}
          />
        ))}
      </div>
    </div>
  )
}

export default Home