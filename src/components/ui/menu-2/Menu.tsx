import React from 'react';
import { Chevrons } from '../icons/Chevrons';
import { Home } from '../icons/Home';
import { Package } from '../icons/Package';
import { ShoppingCart } from '../icons/ShoppingCart';
import { Tool } from '../icons/Tool';
import * as styles from './Menu.module.css';
import { MenuLink } from './MenuLink';
import { Toggler } from './Toggler';

export const Menu = (props: {isVertical?: boolean, children: JSX.Element | JSX.Element[]}) => {

    const { isVertical, children} = props;

    return(
        <nav className={`${styles.navbar}`}>
            <Toggler icon={<Chevrons settings={{width: 30, height: 30, strokeWidth: 1}}/>}/>
            <ul className={styles.navLinks}>
                <MenuLink label='Home' icon={<Home settings={{width: 24, height: 24, strokeWidth: 1}}/>}></MenuLink>
                <MenuLink label='Inventory' icon={<Package settings={{width: 24, height: 24, strokeWidth: 1}}/>}>{[]}</MenuLink>
                <MenuLink label='Procurement' icon={<ShoppingCart settings={{width: 24, height: 24, strokeWidth: 1}}/>}>{[]}</MenuLink>
                <MenuLink label='Production' icon={<Tool settings={{width: 24, height: 24, strokeWidth: 1}}/>}></MenuLink>
            </ul>
        </nav>
    );
};