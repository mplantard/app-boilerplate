import React, { useEffect } from 'react';
import * as styles from './NotFound.module.css';

export const NotFound = () => {

    useEffect(() => {
        const togglePosition = (): void => {
            const arms = document.getElementsByClassName(styles.arm);
            for(let i=0; i<arms.length; i++){
                arms[i].classList.toggle(styles.up);
            }
        }
        const waveArm = (): void => {
            togglePosition();
            setTimeout(togglePosition, 300);
        }
        const intervalId = setInterval(waveArm, 5000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className={styles.mainPane}>
            <div className={styles.pane}>
                <div>
                    <div className={styles.arm}> {'¯\\_'}</div>
                    <div>{'(ツ)'}</div>
                    <div className={styles.arm}> {'_/¯'}</div>
                </div>
                <p>{`Sorry! We couldn't find anything for you here!`}</p>
            </div>
        </div>
    );
}

export default NotFound;