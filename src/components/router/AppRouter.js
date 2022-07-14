import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../ui/home/Home';
import Login from "../ui/login/Login";
import Main from '../ui/main/Main';
import Recuperar from '../ui/recuperar/Recuperar';

const AppRouter = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/recuperar" element={<Recuperar/>}/>
                    <Route path="/main" element={<Main/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default AppRouter;