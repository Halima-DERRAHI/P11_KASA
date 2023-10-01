import { Link } from 'react-router-dom'
import styles from './Card.module.css'

function Card({ id, title, cover }) {
    const scrollTop = () =>{ window.scrollTo({ top: 0, left: 0 })}

    return (
        <article className={styles.card}>
            <Link to={`/logement/${id}`}  onClick ={scrollTop}>
                <div className={styles.cardImage}>
                    <img src={cover} alt={title} className={styles.image} />
                </div>
                <h2 className={styles.title}>{title}</h2>
            </Link>
        </article>
    )
}

export default Card