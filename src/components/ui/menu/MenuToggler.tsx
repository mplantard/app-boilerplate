import React from 'react';
import { HamburgerIcon } from '../icons/HamburgerIcon';
import * as styles from './Menu.module.css';

export const MenuToggler = () => {
    return (
        <button
            className={styles.navbarToggler}
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <HamburgerIcon width={24} height={24}/>
        </button>
    );
};