import React, {useRef, useEffect, userState}   from "react";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import "../pages/styles/facilities.css";
import "../components/styles/buttons.css";
import {  TweenMax, Power3 } from 'gsap';
////images
// import image1 from './media/gallery1';
// import image2 from './media/gallery2';
// import image3 from './media/gallery3';
// import image4 from './media/gallery4';
// import image5 from './media/gallery5';
// import image6 from './media/gallery6';
// import image7 from './media/gallery7';


const Facilities = ()=> {
    let title = useRef(null); 
    useEffect(() => {
        TweenMax.to(
            title,
            2,
            {
                opacity: 1,
                y:-30,
                ease: Power3.easeOut,
                delay: 0.2
            }
        )
        
    })
    //Changing backgrond header

    const changeBg = {
        bg1 : () => {
            document.getElementById('header-fa').style.backgroundImage = `url(https://i.imgur.com/SlUpw9e.jpg)`
        },
        bg2 : () => {
            document.getElementById('header-fa').style.backgroundImage = `url(https://i.imgur.com/auB0347.jpg)`
        },
        bg3 : () => {
            document.getElementById('header-fa').style.backgroundImage = `url(https://i.imgur.com/2Qv4m9X.jpg)`
        },
        bg4 : () => {
            document.getElementById('header-fa').style.backgroundImage = `url(https://i.imgur.com/C5KBxhF.jpg)`
        },
        bg5 : () => {
            document.getElementById('header-fa').style.backgroundImage = `url(https://i.imgur.com/0WtDwfF.jpg)`
        },
        bg6 : () => {
            document.getElementById('header-fa').style.backgroundImage = `url(https://i.imgur.com/0WtDwfF.jpg)`
        },
        bg7 : () => {
            document.getElementById('header-fa').style.backgroundImage = `url(https://i.imgur.com/agkUaKG.jpg)`
        },
    }
    

    return (
        <React.Fragment >
        <Helmet>
          <title>Instalaciones</title>
        </Helmet>
            <Navbar></Navbar>
                <div id='header-fa' className='header-fa'>
                    <div ref={selector =>{title = selector}}  className="header-info-fa">
                    <h2  className='title-fa'>Nuestras instalaciones</h2>
                    <hr/>
                    <p className='paragraph-fa'>Contamos con cubículos y equipos 
                    altamente equipados. <br/>
                    Haz click en las diferentes imagenes para conocer más.</p>
                    </div>
                    <div className="wrapper-carrusel">
                    <div  className="carrusel-img">
                        
                        <div onClick={changeBg.bg1} className="image1 img"></div>
                        <div onClick={changeBg.bg2} className="image2 img"></div>
                        <div onClick={changeBg.bg3} className="image3 img"></div>
                        <div onClick={changeBg.bg4} className="image4 img"></div>
                        <div onClick={changeBg.bg5} className="image5 img"></div>
                        <div onClick={changeBg.bg6} className="image6 img"></div>
                        <div onClick={changeBg.bg7} className="image7 img"></div>
                    </div>    
                    </div>
                </div>
            <Footer></Footer>
        </React.Fragment>
    ) 
    }



export default Facilities;