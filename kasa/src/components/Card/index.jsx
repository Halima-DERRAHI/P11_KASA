import { Link } from 'react-router-dom'
import styles from './Card.module.css'

function Card({ id, title, cover }) {
    return (
        <article className={styles.card}>
            <Link to={`/logement/${id}`}>
                <div className={styles.cardImage}>
                    <img src={cover} alt={title} className={styles.image} />
                </div>
                <h2 className={styles.title}>{title}</h2>
            </Link>
        </article>
    )
}

export default Card