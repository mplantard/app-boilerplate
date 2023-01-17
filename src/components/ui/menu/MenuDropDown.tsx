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

    // Needs to superceed and prevent the "random location" click listener
    e.preventDefault();
    e.stopPropagation();

    const itemClassList = document.getElementById(itemId).classList;

    // Record the dropdown last known state
    const isDropdownDisplayed = itemClassList.contains(styles.dropdownMenuShow);

    // Remove 'show' from all dropdowns (not a simple classList.toggle())
    hideAllDropdown();

    // Display the dropdown if it wasn't and
    // Add a "random location" click listener to hide the dropdown(s) after a click on the page
    if(!isDropdownDisplayed){
        itemClassList.add(styles.dropdownMenuShow)
        document.addEventListener('click', hideAllDropdown);
    }
};

const hideAllDropdown = (): void => {
    const elements = document.getElementsByClassName(styles.dropdownMenuShow); 
    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.remove(styles.dropdownMenuShow);
    }
    // Removes the "random location" click listener as dropdowns are now all hidden
    document.removeEventListener('click', hideAllDropdown);
}