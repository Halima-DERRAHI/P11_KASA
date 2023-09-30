import styles from './Tag.module.css'

function Tag({ tag }) {

    return (
        < div className={styles.tag}>
            <p className={styles.text}>{tag}</p>
        </div >
    )
}

export default Tag