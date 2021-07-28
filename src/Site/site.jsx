import React from 'react';
import Header from './Components/header'
import Banner from './Components/banner'
import Features from './Components/features';
import Testemunho from './Components/testemunho';
import Precos from './Components/precos';
import Footer from './Components/footer'

function Site(){
    return <div>
        <Header/>
        <Banner/>
        <Features/>
        <Testemunho/>
        <Precos/>
        <Footer/>
    </div>;
}

export default Site;