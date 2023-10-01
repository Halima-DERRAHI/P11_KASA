import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

function Footer() {
    const currentYear = (new Date()).getFullYear()
    return (
        <footer className={styles.footer}>
            <div className={styles.logo}>
                <Link to='/'>
                    <img src='/assets/logo-footer.svg' alt='Logo kasa'/>
                </Link>
            </div>
            <div className={styles.copyrightContainer}>
                <p className={styles.copyright}>© {currentYear} Kasa. All </p><p className={styles.copyright}>rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer