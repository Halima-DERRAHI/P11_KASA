//import { Link } from 'react-router-dom'
import styles from './Card.module.css'

function Card({ id, title, cover }) {
    return (
        <article className={styles.card}>
            <div className={styles.cardImage}>
                <img src={cover} alt={title} className={styles.image} />
            </div>
            <h2 className={styles.title}>{title}</h2>
        </article>
    )
}

export default Card