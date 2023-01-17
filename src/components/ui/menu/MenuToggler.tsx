import React from 'react';
import { HamburgerIcon } from '../icons/HamburgerIcon';
import * as styles from './Menu.module.css';

export const MenuToggler = () => {
    return (
        <button
            className={styles.navbarToggler}
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span
                className={styles.navbarTogglerIcon}>
                    <HamburgerIcon width={24} height={24}/>
            </span>
        </button>
    );
};