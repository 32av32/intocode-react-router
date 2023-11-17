import styles from './Home.module.css';

function Home() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Cover your page.</h1>
            <div className={styles.text}>Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</div>
            <button className={styles.button}>Learn more</button>
        </div>
    )
}

export default Home