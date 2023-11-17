import React from 'react';
import {Routes, Route} from "react-router-dom";
import styles from './App.module.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Features from "./components/Features";
import Contact from "./components/Contact";

function App() {
    return (
        <div className={styles.container}>
            <header><Header /></header>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/features' element={<Features />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
            <footer><Footer /></footer>
        </div>
    );
}

export default App;