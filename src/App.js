import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Project from "./pages/Projects";
import CreateProject from "./components/CreateProject";


function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    {/* <Route path="/*" element={<CommonRoutes/>}></Route> */}
                </Routes>
            </BrowserRouter>
            {/* <Navbar /> */}
            {/* <Sidebar /> */}
            <Project/>
            <CreateProject/>
        </>
    );
}

export default App;
