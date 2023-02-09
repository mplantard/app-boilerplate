import React from 'react';
import * as styles from './Menu.module.css';

//09:06

export const Menu = () => {
    return(
        <nav className={styles.sidebar}>
            <div className={styles.logoDetails}>
                <i className="bx bxl-c-plus-plus"></i>
                <span className={styles.logoName}>{'My Company'}</span>
            </div>
            <ul className={styles.navLinks}>
                <li>
                    <a href="#">
                        <i className="bx bx-grid-alt"></i>
                        <span className={styles.linkName}>{'Dashboard'}</span>
                    </a>
                </li>
                <li>
                    <div className={styles.iconLink}>
                        <a href="#">
                            <i className="bx bx-collection"></i>
                            <span className={styles.linkName}>{'Category'}</span>
                        </a>
                        <i className="bx bx-chevron-down arrow"></i>
                    </div>
                </li>
                <li>
                    <div className={styles.iconLink}>
                        <a href="#">
                            <i className="bx bx-book-alt"></i>
                            <span className={styles.linkName}>{'Posts'}</span>
                        </a>
                        <i className="bx bx-chevron-down arrow"></i>
                    </div>
                </li>
            </ul>
        </nav>
    );
};