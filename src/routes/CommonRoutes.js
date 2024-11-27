import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login/Login";

const CommonRoutes = () => {
    return(
        <Routes>
            <Route exact path="/" >
                <Route index element={<Login/>} />
                <Route path="*" element={<h1>Not Found</h1>} />
            </Route>
        </Routes>
    )
};

export default CommonRoutes;
