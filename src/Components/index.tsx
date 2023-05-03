import Header from "./Header";
import Main from "./Main";
import MenuSide from "./MenuSide";
import styles from './MusicApp.module.scss';
import Player from "./Player";


export default function MusicApp() {
    return (
        <>
            <header>
                <Header />
            </header>

            <main className={styles.main_container}>
                <MenuSide />
                <Main />
            </main>
            <div>
                <Player /> 
            </div>
        </>
    );
}