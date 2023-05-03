import Songs from "./Songs";
import styles from './Main.module.scss'; 
import sections from '../sections.json'; 


export default function Main() {
    return (
        <div className={styles.main}>
            {sections.map((secao) => (
                <section className={styles.main_section}>
                    <h3>{secao.category}</h3>
                    <div className={styles.main_song}>
                        <Songs />
                    </div>
                </section>
            ))}
        </div>
    );
}