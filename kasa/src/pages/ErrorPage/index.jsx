import { Link } from 'react-router-dom'
import styles from './ErrorPage.module.css'

function ErrorPage() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>404</h1>
            <p className={styles.text}>Oups! La page quevous demandez n'existe pas.</p>
            <Link to="/" className={styles.link}>Retourner sur la page d’accueil</Link>
        </div>
    )
}

export default ErrorPage