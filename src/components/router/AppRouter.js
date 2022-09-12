import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../ui/home/Home';
import Login from "../ui/login/Login";
import Recuperar from '../ui/recuperar/Recuperar';

const AppRouter = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/recuperar" element={<Recuperar/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default AppRouter;