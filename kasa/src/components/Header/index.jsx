import { Link, NavLink } from 'react-router-dom'
import styles from './Header.module.css'

function Header() {
    return (
        <header>
            <div className={styles.headerContainer}>
                <div>
                    <Link to='/'>
                        <img src='/assets/logo-header.svg' alt='Logo kasa' className={styles.logo} />
                    </Link>
                </div>
                <nav>
                    <NavLink to='/' className={styles.home}
                        style={({ isActive }) => {
                            return {
                                textDecoration: isActive ? "underline" : "none",
                            };
                        }}
                    >
                        Accueil
                    </NavLink>
                    <NavLink to='/About' className={styles.about}
                        style={({ isActive }) => {
                            return {
                                textDecoration: isActive ? "underline" : "none",
                            };
                        }}
                    >
                        À propos
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}

export default Header