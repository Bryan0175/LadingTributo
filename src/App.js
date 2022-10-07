import React from 'react';


import Home from "./pages/Home";
import History from "./pages/History";
import Features from "./pages/Features";
import Genealogy from "./pages/Genealogy";
import Legend from "./pages/Legend";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NoFound from "./pages/NoFound";

function App() {
    return (
        <div className="App">

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/Home" element={<Home/>}/>
                    <Route path="/History" element={<History/>}/>
                    <Route path="/Features" element={<Features/>}/>
                    <Route path="/Genealogy" element={<Genealogy/>}/>
                    <Route path="/Legend" element={<Legend/>}/>
                    <Route path="*" element={<NoFound/>}/>
                </Routes>
            </BrowserRouter>

            {/*<NoFound/>*/}
            {/*<Home/>*/}
            {/*<History/>*/}
            {/*<Features/>*/}
            {/*<Genealogy/>*/}
            {/*<Legend/>*/}
        </div>
    );
}

export default App;
