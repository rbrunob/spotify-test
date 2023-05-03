import styles from './Menu.module.scss';
import { ReactComponent as Logo } from '../../assets/Logo.svg';
import { GrHomeRounded } from 'react-icons/gr';
import { FiSearch } from 'react-icons/fi';
import { BiLibrary } from 'react-icons/bi';
import { AiOutlinePlus } from 'react-icons/ai';
import { HiHeart } from 'react-icons/hi';
import { SlArrowDownCircle } from 'react-icons/sl';

const menuItens = [
    {
        svg: <GrHomeRounded />,
        sectionName: 'Início'
    },
    {
        svg: <FiSearch />,
        sectionName: 'Buscar'
    },
    {
        svg: <BiLibrary />,
        sectionName: 'Sua Biblioteca'
    },
    {
        svg: <AiOutlinePlus />,
        sectionName: 'Criar playlist'
    },
    {
        svg: <HiHeart />,
        sectionName: 'Músicas Curtidas'
    },
];

export default function MenuSide() {
    return (
        <div className={styles.menu}>
            <div className={styles.menu_container}>
                <div className={styles.menu_container_itens}>
                    <Logo />
                    <ul>
                        {menuItens.map((itens) => (
                            <li>
                                <div className={styles.icons}>
                                    {itens.svg}
                                </div>
                                {itens.sectionName}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={styles.menu_container_download}>
                    <p><SlArrowDownCircle /> Instalar aplicativo</p>
                </div>
            </div>
        </div>
    );
}