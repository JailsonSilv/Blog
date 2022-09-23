import { NavLink } from "react-router-dom";

import { useAuthentication } from "../hooks/useAuthentication";

import { useAuthValeu } from "../context/AuthContext";

import styles from './Navbar.module.css';


const Navbar = () => {
    const { user } = useAuthValeu();
    const { logout } = useAuthentication();

    return (
        <div>
            <nav className={styles.navbar}>
                <NavLink to='/' className={styles.brand}>
                    Blog <span>nft</span>
                </NavLink>
                <ul className={styles.links_list}>
                    <li>
                        <NavLink to='/' className={({isActive}) => (isActive ? styles.active : "")}>  {/*Exibindo de forma condicional*/}
                            Início
                        </NavLink>
                    </li>
                    {!user && (
                        <>
                            <li>
                                <NavLink to='/login' className={({isActive}) => (isActive ? styles.active : "")}>
                                    Entrar 
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/register' className={({isActive}) => (isActive ? styles.active : "")}>
                                    Cadastrar 
                                </NavLink>
                            </li>
                        </>
                    )}
                    {user && (
                        <>
                            <li>
                                <NavLink to='/posts/create' className={({isActive}) => (isActive ? styles.active : "")}>
                                    Novo post
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard' className={({isActive}) => (isActive ? styles.active : "")}>
                                    Dashboard
                                </NavLink>
                            </li>
                        </>
                    )}
                    <li>
                        <NavLink to='/about' className={({isActive}) => (isActive ? styles.active : "")}>
                            Sobre
                        </NavLink>
                    </li>
                    {user && (
                        <li>
                            <button onClick={logout}>Sair</button>
                        </li>
                    )}
                </ul>
            </nav>
        </div>
    )
}

export default Navbar