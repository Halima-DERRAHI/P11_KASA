import { useState } from "react";
import styles from './Collapse.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

function Collapse({title , text}) {

    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    const textContent = Array.isArray(text)
    ? text.map((item, index) => <p key={index}>{item}</p>)
    : text;

    return (
        <div className={styles.container}>
            <button className={styles.button} onClick={toggleCollapse}>
                {title}
                <FontAwesomeIcon 
                    icon={faChevronDown}
                    className={isOpen ? styles.rotateClose : styles.rotateOpen}
                />
            </button>
            <div className={`${styles.text} ${isOpen ? '' : styles.close }`}>{textContent}</div>
        </div>
    )
}

export default Collapse