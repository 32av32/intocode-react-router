import styles from './Features.module.css';

function Features() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Features page.</h1>
            <div className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ea et expedita facere, fuga iste maiores nisi porro quidem velit?</div>
            <button className={styles.button}>Join Us</button>
        </div>
    )
}

export default Features