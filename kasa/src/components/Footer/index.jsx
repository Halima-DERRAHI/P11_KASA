import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

function Footer() {
    const currentYear = (new Date()).getFullYear()
    return (
        <footer className={styles.footer}>
            <div>
                <Link to='/'>
                    <img src='/assets/logo-footer.svg' alt='Logo kasa'/>
                </Link>
            </div>
            <p className={styles.copyright}>© {currentYear} Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer