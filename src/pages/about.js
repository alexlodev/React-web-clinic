import React, { useRef, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import "../pages/styles/about.css";
import Media from "react-media";
import { Link } from "react-router-dom";
import "../components/styles/buttons.css";
import { TweenMax, Power3 } from "gsap";
import doctor1 from './media/doctor1.svg'
import doctor2 from './media/doctor2.svg'
import doctor3 from './media/doctor3.png'
import doctor4 from './media/doctor4.png'
import doctor5 from './media/doctor5.png'
import doctor6 from './media/doctor6.png'
import Slider from 'infinite-react-carousel';


const About = () => {

    const settings =  {
        adaptiveHeight: true,
        centerMode: true,
        arrows: true,
        shift: 100,
        duration: 300,
        slidesPerRow: 3
      };

    const doctorContein1 = {
        name: 'Dra. Ericka Madrigal Romero',
        info: `Odontologia General.
        Cirujana dentista, Universidad Latina  de Costa Rica, 2002
        Experiencia profesional en odontología general y\
        estética dental desde el año 2003.\
        Atención a niños y adultos.`
    }
    const doctorContein2 = {
        name: 'Dr. Oscar Soto Chacon',
        info: `Endodoncista.
        Cirujana dentista, Universidad Latina de Costa Rica, 2002 
        Especialidad en endodoncia, Universidad Latina de Costa Rica, 2013
        Experiencia profesional en odontologia general desde el 2003 y como especialista en. 
        endodoncia desde el 2013. 
        Miembro activo de la Academia Costarricense de Endodoncia.`
    }
    const doctorContein3 = {
        name: 'Dr. Victor Sanchez Venegas',
        info: `Ortodoncista. 
        Cirujano dentista, Universidad de Costa Rica, 1985 
        Especialidad en ortodoncia y ortopedia funcional.
        Universidad Veritas de Costa Rica 2001. `
    }
    const doctorContein4 = {
        name: 'Dr. Andres Fernandez Rodriguez',
        info: `Cirujano maxilofacial. 
        Cirujano dentista, Universidad Latina de Costa Rica, 2001 
        Especialidad en cirugia oral y maxilofacial, Pontificia Universidad Javeriana 2005 
        Experiencia profesional con dedicacion exclusiva en cirugia oral y maxilofacial desde el 2006. 
        `
    }
    const doctorContein5 = {
        name: 'Dr. Alejandro Mora Lasso',
        info: `Estetica dental.
        Cirujana dentista, Universidad Latina de Costa Rica, 2001 
        Especialidad en prostodoncia (rehabilitacion oral y estetica), Universidad de Chile 2005 
        estética 
        Experiencia profesional con dedicacion exclusiva en prostodoncia desde el 2006. 
        `
    }
    const doctorContein6 = {
        name: 'Dra. Tatiana Madrigal Gutierrez ',
        info: `Periodoncia. 
        Cirujana dentista, Universidad de Costa Rica, 1993

        Especialista en periodoncia, Universidad Autonoma de Nuevo Leon, Mexico, 1998
        Experiencia profesional con dedicacion exclusiva en periodoncia desde 1999.
        `
    }
    const [useInfo, setInfo] = useState({
        name: doctorContein1.name,
        info: doctorContein1.info,
        image: doctor2
    })
    const changeInfo = {
        doctor1: ()=> {
          setInfo({
              name: doctorContein2.name,
              info: doctorContein2.info,
              image: doctor1
          })  
        },
        doctor2: ()=> {
              setInfo({
                name: doctorContein1.name,
                info: doctorContein1.info,
                image: doctor2
              })
        },
        doctor3: ()=> {
            setInfo({
                name: doctorContein3.name,
                info: doctorContein3.info,
                image: doctor3
              })
        },
        doctor4: ()=> {
            setInfo({
                name: doctorContein4.name,
                info: doctorContein5.info,
                image: doctor4
              })
            
        },
        doctor5: ()=> {
            setInfo({
                name: doctorContein5.name,
                info: doctorContein5.info,
                image: doctor5
              })
            
        },
        doctor6: ()=> {
            setInfo({
                name: doctorContein6.name,
                info: doctorContein6.info,
                image: doctor6
              })
            
        }

    }

  return (
    <React.Fragment>
        <Helmet>
            <title>Sobre nosotros</title>
        </Helmet>
      <Navbar></Navbar>
      <header className="header-home about">
        <div className="header-info about">
          <h1>Quienes somos.</h1>
          <hr />
          <p className="heroText">
            La <b> Clínica Dental Sol Oeste </b> abrió sus puertas <br />
            en el año 2003, al mando de los{" "}
            <b> drs. Ericka Madrigal y Oscar Soto. </b>
          </p>
          <br />
        </div>
        <div className="header-img"></div>
      </header>
      <section className="section-about">
        <h2>Equipo multidiciplinar</h2>
        <hr />
        <p>
          Equipo compuesto de 6 doctores altamente experimentados. <br />
          Todos ellos trabajan juntos de manera coordinada <br />
          para conseguir el mejor rendimiento de cada tratamiento.
        </p>
        <br />
        <div className="wrapper-doctors conteiner">
            <div className="doctor-img">
            <img id='img' src={useInfo.image} alt=""/>
            <img src="" alt=""/>
            </div>
            <div className="doctor-info">
                <h2 id='name'>{useInfo.name}</h2> 
                <hr/> 
                <p id='info'>{useInfo.info}</p>
            </div>
        </div>
      </section>
      <section className='wrapper-carrusel conteiner '>
            <Slider {...settings}>
            <div onClick={changeInfo.doctor1} className='box-carrusel doctor-about-1'>
                <br/>
                <p>Dr. Oscar Soto</p>
            </div>
            <div onClick={changeInfo.doctor2} className='box-carrusel doctor-about-2'>
            <br/>
            <p>Dra. Ericka Madrigal Soto</p>

            </div>
            <div onClick={changeInfo.doctor3} className='box-carrusel doctor-about-3'>
            <br/>
            <p>Dr. Victor Sanchez </p>

            </div>
            <div onClick={changeInfo.doctor4} className='box-carrusel doctor-about-4'>
            <br/>
            <p>Dr. Andres Fernandez</p>

            </div>
            <div onClick={changeInfo.doctor5} className='box-carrusel doctor-about-5'>
            <br/>
            <p>Dr. Alejandro Mora </p>

            </div>
            <div onClick={changeInfo.doctor6} className='box-carrusel doctor-about-6'>
            <br/>
            <p>Dra. Tatiana Madrigal </p>

            </div>
        </Slider>
      </section>
      <Footer></Footer>
    </React.Fragment>
  );
};

export default About;
