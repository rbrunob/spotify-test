import anos2000 from '../../../assets/anos-200.jpg';
import brazilianRock from '../../../assets/brazilian-rock-card.jpg';
import classicRock from '../../../assets/classic-rock-card.jpg';
import hits from '../../../assets/hists.jpg';
import mix01 from '../../../assets/default.jpg';
import mix02 from '../../../assets/mix-sc.jpg';
import cardRock from '../../../assets/rock-card.jpg';
import hitsToday from '../../../assets/today-hits.jpg';
import brazilTop from '../../../assets/top-brazil.jpg';
import { GiPlayButton } from 'react-icons/gi';
import styles from './Songs.module.scss';



const songList = [
    {

        bannerAlbum: anos2000,
        titleSong: 'Rock',
        description: 'Description'
    },
    {

        bannerAlbum: brazilianRock,
        titleSong: 'Brazilian Rock',
        description: 'Description'
    },
    {

        bannerAlbum: classicRock,
        titleSong: 'Classic Rock',
        description: 'Description'
    },
    {

        bannerAlbum: hits,
        titleSong: 'Rock',
        description: 'Description'
    },
    {

        bannerAlbum: mix01,
        titleSong: 'Brazilian Rock',
        description: 'Description'
    },
    {

        bannerAlbum: mix02,
        titleSong: 'Classic Rock',
        description: 'Description'
    },
    {

        bannerAlbum: cardRock,
        titleSong: 'Rock',
        description: 'Description'
    },
    {

        bannerAlbum: hitsToday,
        titleSong: 'Brazilian Rock',
        description: 'Description'
    },
    {

        bannerAlbum: brazilTop,
        titleSong: 'Classic Rock',
        description: 'Description'
    },
];

export default function Songs() {

    return (
        <div className={styles.container_songs}>
            {songList.map((song) => (
                <div className={styles.song}>
                    <div className={styles.song_banner}>
                        <img

                            src={song.bannerAlbum}
                            alt={song.titleSong}
                        />
                        <div className={styles.song_banner_play}>
                            <GiPlayButton />
                        </div>
                    </div>
                    <div className={styles.song_info}>
                        <h3>
                            {song.titleSong}
                        </h3>
                        <p>
                            {song.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}