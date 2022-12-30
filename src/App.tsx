import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/home/Home";
import NotFound from "./components/not-found/NotFound";

export const App = () => {
    return (
        <Routes>
            <Route path="" element={<Home/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    );
};