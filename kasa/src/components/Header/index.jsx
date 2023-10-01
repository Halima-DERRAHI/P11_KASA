import { Link } from 'react-router-dom'
import styles from './Header.module.css'

function Header() {
    return (
        <header className={styles.header}>
             <div>
                <Link to='/'>
                    <img src='/assets/logo-header.svg' alt='Logo kasa' className={styles.logo} />
                </Link>
            </div>
            <nav>
                <Link to='/' className={styles.home}>
                    Accueil
                </Link>
                <Link to='/About' className={styles.about}>
                    À propos
                </Link>
            </nav>
        </header>
    )
}

export default Header