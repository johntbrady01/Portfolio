import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../components/Home";



export default function ApplicationViews() {
    return (
        <main>
            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="*" element={<p>Whoops, nothing here...</p>} />

            </Routes>
        </main>
    );
};