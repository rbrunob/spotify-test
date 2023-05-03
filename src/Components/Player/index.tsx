import styles from './Player.module.scss';
import teste from '../../assets/brazilian-rock-card.jpg'
import { HiOutlineHeart } from 'react-icons/hi';
import { CgMiniPlayer } from 'react-icons/cg';
import { GiPauseButton } from 'react-icons/gi';
import { GiPlayButton } from 'react-icons/gi';
import { RxShuffle } from 'react-icons/rx';
import { TbRepeat } from 'react-icons/tb';
import { AiFillStepBackward } from 'react-icons/ai';
import { AiFillStepForward } from 'react-icons/ai';
import { TbMicrophone2 } from 'react-icons/tb';
import { HiQueueList } from 'react-icons/hi2';
import { TbDevices2 } from 'react-icons/tb';
import { RiVolumeDownFill } from 'react-icons/ri';

export default function Player() {

    function switchPLay(e: any) {
        console.log(e.target.path)
    }

    return (
        <div className={styles.container_player}>
            <div className={styles.player}>
                <div className={styles.player_songinfo}>
                    <div className={styles.songinfo_picture}>
                        <img src={teste} alt="" />
                    </div>
                    <div className={styles.songinfo_infos}>
                        <h3>nome musica</h3>
                        <p>artistas</p>
                    </div>
                    <div className={styles.songinfo_icons}>
                        <span>
                            <HiOutlineHeart />
                        </span>
                        <span>
                            <CgMiniPlayer />
                        </span>
                    </div>
                </div>
                <div className={styles.player_controls}>
                    <div className={styles.controls}>
                        <div className={styles.controls_icons}><RxShuffle /></div>
                        <div className={styles.controls_icons}><AiFillStepBackward /></div>
                        <div
                            className={styles.controls_icons}
                            onClick={switchPLay}
                        >
                            <GiPlayButton />
                        </div>
                        <div className={styles.controls_icons}><AiFillStepForward /></div>
                        <div className={styles.controls_icons}><TbRepeat /></div>
                    </div>
                    <div className={styles.timer}>
                        <span className={styles.timer_time}>0:00</span>
                        <div className={styles.timer_progress}>
                            <div className={styles['progress--active']}>
                                <div className={styles.button_action}></div>
                            </div>
                        </div>
                        <span className={styles.timer_time}>3:35</span>
                    </div>
                </div>
                <div className={styles.player_othercontrols}>
                    <div className={styles.player_othercontrols_icons}><TbMicrophone2 /></div>
                    <div className={styles.player_othercontrols_icons}><HiQueueList /></div>
                    <div className={styles.player_othercontrols_icons}><TbDevices2 /></div>
                    <div className={styles.player_othercontrols_volum}>
                        <div className={styles.volum_icon}><RiVolumeDownFill /></div>
                        <div className={styles.volum_bar}>
                            <div className={styles['volum_bar--active']}>
                                <div className={styles.button_action}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}