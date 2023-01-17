import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/home/Home";
import NotFound from "./components/not-found/NotFound";
import { MenuDropDown } from "./components/ui/menu/MenuDropDown";
import { MenuDropDownItem } from "./components/ui/menu/MenuDropDownItem";
import { Menu } from "./components/ui/menu/Menu";
import { AppRoutes } from "./navigation/AppRoutes.enum";
import { MenuButton } from "./components/ui/menu/MenuButton";

export const App = () => {
    return (
        <>
            <Menu>
                <MenuButton label="Home" to={AppRoutes.Home}/>
                <MenuDropDown label="Dropdown 1">
                    <MenuDropDownItem label="Page 1" to={AppRoutes.Page1}/>
                    <MenuDropDownItem label="Page 2" to={AppRoutes.Page2}/>
                    <MenuDropDownItem label="Page 3" to={AppRoutes.Page3}/>
                </MenuDropDown>
                <MenuDropDown label="Dropdown 2">
                    <MenuDropDownItem label="Page 4" to={AppRoutes.Page4}/>
                    <MenuDropDownItem label="Page 5" to={AppRoutes.Page5}/>
                    <MenuDropDownItem label="Page 6" to={AppRoutes.Page6}/>
                </MenuDropDown>
            </Menu>
            <Routes>
                <Route path={AppRoutes.Home} element={<Home/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </>
        
    );
};