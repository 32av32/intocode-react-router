import styles from './Footer.module.css'


function Footer() {
    return (
        <div className={styles.container}>
            <span className={styles.text}>Cover template for&nbsp;</span>
            <a href='src/components/Footer/index'>Bootstrap</a>
            <span className={styles.text}>, by&nbsp;</span>
            <a href='/intocode/5 sprint/5 day/intocode-react-router/public'>@mdo</a>
            <span className={styles.text}>.</span>
        </div>
    )
}

export default Footer