import styles from './Header.module.scss'
import { RiArrowDownSFill } from 'react-icons/ri';
import profile from '../../assets/icon-profile.jpg';
import users from '../users.json';

export default function Header() {

    return (

        <nav className={styles.header}>
            <div className={styles.header_actions}>
                <div className={styles.upgrade}>
                    Faça upgrade
                </div>
                <div className={styles.profile}>
                    <div className={styles.profile_pics}>
                        <img src={profile} alt="My Profile Icon" />
                    </div>
                    <p
                        className={styles.profile_username}
                    >
                        {users.map(user => user.username)}
                        <RiArrowDownSFill />
                    </p>
                </div>
            </div>
        </nav>

    );
}