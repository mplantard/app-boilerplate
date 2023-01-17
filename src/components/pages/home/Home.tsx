import React from 'react';
import { Title } from '../../layout/title/Title';
import { ButtonGroup } from '../../ui/button-group/ButtonGroup';
import { Button } from '../../ui/buttons/Button';
import { DownloadIcon } from '../../ui/icons/DownloadIcon';
import { FilterIcon } from '../../ui/icons/FilterIcon';
import { SearchIcon } from '../../ui/icons/SearchIcon';
import { ToolBar } from '../../ui/tool-bar/ToolBar';
import * as styles from './Home.module.css';

const doNotDoAnything: EventHandler = (e: React.MouseEvent<HTMLInputElement>) => {};

export const Home = () => {
    return (
        <div className={styles.mainPane}>
            <Title>{'Welcome'}</Title>
            <ToolBar>
                <ButtonGroup>
                    <Button handleClick={doNotDoAnything}><FilterIcon/></Button>
                    <Button handleClick={doNotDoAnything}><DownloadIcon/></Button>
                    <Button handleClick={doNotDoAnything}><SearchIcon/></Button>
                </ButtonGroup>
            </ToolBar>
        </div>
    );
}

export default Home;