import React, {useRef, useEffect} from "react";
import Navbar from "../components/Navbar";
import "../components/styles/buttons.css";
import Map from "../components/Google-maps";
import Form from "../components/Form";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import {  TweenMax, Power3 } from 'gsap';
import './styles/contact.css'





const Contact = ()=> {
    let image = useRef(null);
    let title = useRef(null);
    
    useEffect(()=>{
        TweenMax.to(
            image,
            2,
            {
                opacity: 1,
                y:-30,
                ease: Power3.easeOut
            }
        )
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
    return (
        <React.Fragment>
            <Helmet> 
                <title>Contacto</title>
                <meta name="description" content="Realiza tu cita!"/>
                <meta name="keywords" content="clinica,dental,santa ana,muelas, dientes, san jose, costa rica, dental care, teeth."/>
            </Helmet>
            <Navbar></Navbar>
            <div ref={selector =>{title = selector}} className="animation1">
            <Form  ></Form>
            </div>
            <div  ref={selector =>{image = selector}} className="animation2">
            <Footer></Footer>
            </div>
        </React.Fragment>
    )
}


export default Contact;

