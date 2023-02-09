import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { MenuDropDown } from "./components/ui/menu/MenuDropDown";
import { MenuDropDownItem } from "./components/ui/menu/MenuDropDownItem";
import { Menu } from "./components/ui/menu-2/Menu";
import { AppRoute } from "./navigation/AppRoute.class";
import { MenuButton } from "./components/ui/menu/MenuButton";
import { ERoute } from "./navigation/ERoute.enum";
import { Spinner } from "./components/ui/spinner/Spinner";
import './reboot.css';

// Lazy loading of pages
const Home = lazy(() => import("./components/pages/home/Home"));
const DummyPage = lazy(() => import("./components/pages/dummy-page/DummyPage"));
const NotFound = lazy(() => import("./components/pages/not-found/NotFound"));

export const App = () => {
    return (
        <>
            <Menu/>
            <Suspense fallback={<Spinner/>}>
                <Routes>
                    <Route path={ERoute.Home} element={<Home/>}/>
                    <Route path={ERoute.Page + '/:id'} element={<DummyPage/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </Suspense>
        </>
    );
};

/*
<Menu isVertical={true}>
                <MenuButton label="Home" to={new AppRoute(ERoutes.Home)}/>
                <MenuDropDown label="Dropdown 1">
                    <MenuDropDownItem label="Page 1" to={new AppRoute(ERoute.Page, '1')}/>
                    <MenuDropDownItem label="Page 2" to={new AppRoute(ERoute.Page, '2')}/>
                    <MenuDropDownItem label="Page 3" to={new AppRoute(ERoute.Page, '3')}/>
                </MenuDropDown>
                <MenuDropDown label="Dropdown 2">
                    <MenuDropDownItem label="Page 4" to={new AppRoute(ERoute.Page, '4')}/>
                    <MenuDropDownItem label="Page 5" to={new AppRoute(ERoute.Page, '5')}/>
                    <MenuDropDownItem label="Page 6" to={new AppRoute(ERoute.Page, '6')}/>
                </MenuDropDown>
            </Menu>
            <Suspense fallback={<Spinner/>}>
                <Routes>
                    <Route path={ERoutes.Home} element={<Home/>}/>
                    <Route path={ERoutes.Page + '/:id'} element={<DummyPage/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </Suspense>
        </>
        
    );
};*/