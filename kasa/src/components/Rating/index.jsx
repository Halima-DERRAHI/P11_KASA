import styles from './Rating.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function Rating({rating}) {

    const stars = Array.from({ length: 5 }).map((_, index) => (
        <FontAwesomeIcon
          key={index}
          icon={faStar}
          className={index < rating ? styles.starOrange : styles.starGray}
        />
      ));

    return (
        <div>{stars}</div>
    )
}

export default Rating