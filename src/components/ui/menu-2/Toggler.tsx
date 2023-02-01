import React from 'react';
import * as styles from './Menu.module.css';

export const Toggler = (props: {icon: JSX.Element}) => {

    const toggleNav = () => {
        const nav = document.getElementsByClassName(styles.navbar)[0];
        if(nav) nav.classList.toggle(styles.collapsed);
        const toogler = document.getElementsByClassName(styles.togglerIcon)[0];
        if(toogler) toogler.classList.toggle(styles.collapsed);
    };

    return(
        <div className={styles.togglerIcon} onClick={() => toggleNav()}>
            {props.icon}
        </div>
    );
};