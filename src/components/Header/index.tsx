import { Link, useLocation  } from "react-router-dom";
import styles from './Header.module.css'
import React from "react";

interface IMenuList {
    Home: string,
    Features: string,
    Contact: string
}

const menuList:IMenuList = {
    Home: '/',
    Features: '/features',
    Contact: '/contact'
}

function Header() {
    const location = useLocation()
    const [activeLink, setActiveLink] = React.useState(location.pathname)

    return (
        <div className={styles.container}>
            <Link className={styles.logo} to={'/'}>Cover</Link>
            <ul className={styles.menu}>
                {Object.keys(menuList).map((key, index) => {
                    return <li onClick={() => setActiveLink(menuList[key as keyof IMenuList])} className={`${styles.link} ${activeLink===menuList[key as keyof IMenuList] && styles.active}`}>
                        <Link to={`${menuList[key as keyof IMenuList]}`}>{key}</Link></li>
                })}
            </ul>
        </div>
    )
}

export default Header