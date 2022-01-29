import React from 'react';

import Navigation from './Components/Landing/Navigation/Navigation';
import Title from './Components/Landing/Title/Title';
import About from './Components/Landing/About/About';
import Community from './Components/Landing/Community/Community';
import Event from './Components/Landing/Event/Event';
import Product from './Components/Landing/Product/Product';
import Footer from './Components/Landing/Footer/Footer';


function App(){
    return <>
        <Navigation />
        <Title />
        <About />
        <Community />
        <Event />
        <Product />
        <Footer />
    </>
}

export default App;
