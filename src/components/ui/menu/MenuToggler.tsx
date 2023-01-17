import React from 'react';
import { HamburgerIcon } from '../icons/HamburgerIcon';
import * as styles from './Menu.module.css';

export const MenuToggler = (props: {menuId: string}) => {
    return (
        <button
            className={styles.navbarToggler}
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => toggleMenu(props.menuId)}
        >
            <span
                className={styles.navbarTogglerIcon}>
                    <HamburgerIcon width={24} height={24}/>
            </span>
        </button>
    );
};

const toggleMenu = (menuId: string): void => {
    document.getElementById(menuId).classList.toggle(styles.navbarCollapseShow);
};