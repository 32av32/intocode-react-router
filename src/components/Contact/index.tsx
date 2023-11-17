import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import styles from './Contact.module.css';

function Contact() {
    return (
        <YMaps>
            <div className={styles.container}>
                <h1 className={styles.title}>Our address:</h1>
                <div className={styles.text}>ул. Г Н Трошева, 7, Грозный, Чеченская Респ., 364051</div>
                <Map height={400} width={600} defaultState={{ center: [43.324675, 45.692376], zoom: 17 }}>
                    <Placemark geometry={[43.324675, 45.692376]} />
                </Map>
            </div>
        </YMaps>
    )
}

export default Contact