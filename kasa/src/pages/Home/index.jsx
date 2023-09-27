import styles from './Home.module.css'
import Banner from '../../components/Banner'
import data from '../../Datas/logements.json'
import Card from '../../components/Card'

function Home() {

  const bannerImage = './assets/home-banner.jpg';
  const bannerText = "Chez vous, partout et ailleurs";
  const altText = "Home banner";

  return (
    <main>
      <section>
        <Banner image={bannerImage} text={bannerText} altText={altText} />
      </section>
      <div className={styles.gallery}>
        {data.map((logement)=> (
          <Card 
            key={logement.id}
            id={logement.id}
            title={logement.title}
            cover={logement.cover}
          />
        ))}
      </div>
    </main>
  )
}

export default Home