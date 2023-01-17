import React from 'react';
import * as styles from './Menu.module.css';

export const MenuDropDown = (props: {label: string, children: JSX.Element | JSX.Element[]}) => {

    const itemId = crypto.randomUUID();

    return (
        <li className={'nav-item'}>
            <div className={styles.dropdown}>
                <button
                    className={styles.navLink + ' ' + styles.dropdownToggle}
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    onClick={e => toggle(e, itemId)}
                >
                    <span className='nav-item'>{props.label}</span>
                </button>
                <div
                    id={itemId}
                    className={styles.dropdownMenu + ' ' + styles.dropdownMenuRight}
                    aria-labelledby={'dd-' + props.label}
                >
                    {props.children}
                </div>
            </div>
        </li>
    );
};

const toggle = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, itemId: string): void => {
    const itemClassList = document.getElementById(itemId).classList;

    // Remove 'show' from other dropdown (not a simple classList.toggle())
    if(itemClassList.contains(styles.dropdownMenuShow)){
        itemClassList.remove(styles.dropdownMenuShow)
    } else {
        const elements = document.getElementsByClassName(styles.dropdownMenuShow); 
        for (let i = 0; i < elements.length; i++) {
            elements[i].classList.remove(styles.dropdownMenuShow);
        }
        itemClassList.add(styles.dropdownMenuShow)
    }
};