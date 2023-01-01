import React from 'react';
import { ButtonGroup } from '../ui/button-group/ButtonGroup';
import { Button } from '../ui/buttons/Button';
import { DownloadIcon } from '../ui/icons/DownloadIcon';
import { FilterIcon } from '../ui/icons/FilterIcon';
import { ToolBar } from '../ui/tool-bar/ToolBar';
import * as styles from './Home.module.css';

const doNotDoAnything = (e: React.MouseEvent<HTMLInputElement>) => {};

export const Home = () => {
    return (
        <div className={styles.mainPane}>
            <h1>Welcome!</h1>
            <ToolBar>
                <ButtonGroup>
                    <Button handleClick={doNotDoAnything}><FilterIcon/></Button>
                    <Button handleClick={doNotDoAnything}><DownloadIcon/></Button>
                    <Button handleClick={doNotDoAnything}><FilterIcon/></Button>
                </ButtonGroup>
            </ToolBar>
        </div>
    );
}

export default Home;