//import { Link } from 'react-router-dom'
//import styles from './Card.module.css'

function Card({title , cover}) {
    return (
        <article>
            <img src={cover} alt={title}/>
            <h2>{title}</h2>
        </article>
    )
}

export default Card