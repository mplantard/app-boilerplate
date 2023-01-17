import React from 'react';
import { serializeClassNames } from '../../../lib/styles';
import * as styles from './Spinner.module.css';

export enum ESize {
    M = 'm',
    S = 's',
    XS = 'xs'
}

export const Spinner = (props: {size?: ESize, paddingSize?: ESize}) => {

    const { size = ESize.M, paddingSize = ESize.M} = props;

    return (
        <div className={serializeClassNames(styles, ['spinner', 'p-' + paddingSize])}>
            <div className={serializeClassNames(styles, ['lds-spinner', 'lds-spinner-' + size, 'lds-spinner-black'])}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        
    );
};