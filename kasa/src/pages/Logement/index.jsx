//import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Collapse from '../../components/Collapse';
import Rating from '../../components/Rating';
import Slideshow from '../../components/Slideshow';
import Tag from '../../components/Tag';
import ItemsData from '../../Datas/logements.json';
import styles from './Logement.module.css'

function Logement() {

    const { id } = useParams(); 
    const logementData = ItemsData.find((item) => item.id === id);
    //const navigate = useNavigate();
    const { pictures, rating, tags, description, equipments, title, location, host} = logementData;
    const [firstName, lastName] = host.name.split(' ');

    return (
        <main className={styles.main}>

            <Slideshow images={pictures} />
            
            <div className={styles.containterInfos}>
                <div className={styles.infos}>

                    <div className={styles.containerTitleTags}>
                        <h1 className={styles.title}>{title}</h1>
                        <h2 className={styles.location}>{location}</h2>
                    </div>

                    <div className={styles.tagsContainer}>
                        {tags.map((tag,index)=> (
                            <Tag
                                key={index}
                                tag={tag}
                            />
                        ))}
                    </div>

                </div>

                <div className={styles.containerProfileRating}>

                    <div className={styles.containerProfil}>
                        <h3 className={styles.name} ><span>{firstName} </span><span>{lastName}</span></h3>
                        <img className={styles.photo} src={host.picture} alt={host.name} />
                    </div>

                    <div>
                        <Rating rating={rating}/>
                    </div>
                </div>

            </div>

            <div className={styles.containerDescriptions}>
                <div className={styles.containerDescription}>
                    <Collapse title="Description" text={description} />
                </div>

                <div className={styles.containerEquipments}>
                    <Collapse title="Équipements" text={equipments} />
                </div>
            </div>
           
        </main>
    )
}

export default Logement