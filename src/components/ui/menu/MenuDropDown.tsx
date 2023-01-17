import React from 'react';
import * as styles from './Menu.module.css';

export const MenuDropDown = (props: {label: string, children: JSX.Element | JSX.Element[]}) => {
    return (
        <li className={'nav-item'}>
            <div className={styles.dropdown}>
                <button
                    className="nav-link dropdown-toggle menu-btn"
                    id={'dd-' + props.label}
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    style={{color: 'rgba(255, 255, 255, 0.55)'}}
                >
                    <span className='nav-item'>{props.label}</span>
                </button>
                <div
                    className="dropdown-menu dropdown-menu-right"
                    aria-labelledby={'dd-' + props.label}
                >
                    {props.children}
                </div>
            </div>
        </li>
    );
};