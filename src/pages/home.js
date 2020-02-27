import React from "react";
import Navbar from "../components/Navbar";
import Media from "react-media";
import { Helmet } from "react-helmet";
import "../pages/styles/home.css";
import {Link} from 'react-router-dom'
import "../components/styles/buttons.css";
import Map from "../components/Google-maps";
import Form from "../components/Form";
import Footer from "../components/Footer";
import Loader from '../components/Loader';


const Home = ()=> {
  return (
    <React.Fragment>
      <Helmet>
        <title>Clínica Dental Sol Oeste</title>
        <meta name="keywords" content="clinica,dental,santa ana,muelas, dientes, san jose, costa rica, dental care, teeth."/>
        <meta name="description" content="Especialistas en el cuidado de su sonrisa, estamos ubicados en Santa Ana, Costa Rica."/>
      </Helmet>
      <Navbar />
      <main className="mainContent">
        <header className="header-home">
          <div className="header-info">
            <h2>VUELVE A SONREIR CON CONFIANZA</h2>
            <br />
            <h1>
              Clínica Dental <span>Sol Oeste</span>
            </h1>
            <h1>Odontología general y especialidades.</h1>
            <hr />
            <p className="heroText">
              A lo largo de los años, han sido miles de pacientes <br />
              que han confiando en nosotros para{" "}
              <b>
                {" "}
                mejorar la salud <br />y estética de su sonrisa.
              </b>{" "}
            </p>
            <br />
            <Media query={{ maxWidth: 839 }}>
              <Link className="buttonGhost" href="">
                Realizar cita
              </Link>
            </Media>
            <Media query={{ minWidth: 839 }}>
              <Link className="buttonGreen" href="">
                Realizar cita
              </Link>
            </Media>
          </div>
          <div className="header-img">
          </div>
        </header>
        <section className="treamentsConteiner conteiner">
          <h2>
            Obten una sonrisa hermosa y <br /> funcional con nosotros.
          </h2>
          <p>
            Renueva y rejuvenece el aspecto de tus dientes y encias con nuestros
            tratamientos.
          </p>
          <hr />
          <div className="boxConteiner">
            <div className="box">
              <img src={require("./media/dental-care.svg")} alt="" />
              <h4>Endodoncia</h4>
              <hr />
              <p className="textContein">
                Tratamiento de nervio, elimina el tejido afectado y vuelve a la
                "vida" a la pieza{" "} 
              </p>
              <br/>
              <Link className="buttonGreen" href="#">
                Ver más
              </Link>
            </div>
            <div className="box">
              <img src={require("../assents-img/stetic.svg")} alt="" />
              <h4>Estética dental</h4>
              <hr />
              <p className="textContein">
              Especialidad relacionada con la salud bucal y la armonía estética de la boca en su totalidad.
              </p>
              <Link href='#' className="buttonGreen" >
                Ver más
              </Link>
            </div>
            <div className="box">
              <img src={require("../assents-img/braces.svg")} alt="" />
              <h4>Ortodoncia</h4>
              <hr />
              <p className="textContein">
                Tratamiento encargado de corregir la mala posición de las piezas dentales. 
              </p>
              <br/>
              <Link className="buttonGreen" href="#">
                Ver más
              </Link>
            </div>
          </div>
          <Link className="buttonGhost2" to="/tratamientos">
            Conocer más tratamientos
          </Link>
        </section>
        <section className="aboutConteiner conteiner">
          <h2>¿Quienes somos?</h2>
          <hr />
          <img src={require("./media/header.jpg")} alt="" />
          <div className="boxText">
            <p>
              La clínica dental Sol Oeste abrió sus puertas en el año 2003, al
              mando de los drs. Ericka Madrigal y Oscar Soto, en un pequeño
              local en Santa Ana. Gracias al apoyo de nuestros pacientes, hemos
              crecido y hoy contamos con modernas y espaciosas instalaciones,
              equipos de última tecnología y la colaboración de odontólogos
              especialistas en diversas áreas, para brindarle al paciente un
              ambiente confortable y apacible, un servicio completo y
              tratamientos de la más alta calidad. Nos preocupamos día a día en
              ofrecer un trato amable y personalizado. Nos renovamos
              constantemente con modernas tecnologías y las últimas tendencias.
              Queremos que su visita sea una experiencia placentera. <br />{" "}
              <br />
              Clínica Sol Oeste
            </p>
          </div>
        </section>
        <section className="sectionMap">
          <div className="map conteiner">
            <div className="textMap">
              <h2>Encuentranos</h2>
              <hr />
              <p>
                {" "}
                <b> Estamos Ubicados </b>en Pozos de Santa Ana. De la Iglesia
                Católica 300m norte y 100m este. Sobre Calle Miramontes.
                <br />
                <br />
                <b> Desde la ruta 27:</b>
                Tomar la salida de Santa Ana hacia Belén, sobre la radial de
                Lindora. Del Lagar 400m este, 500m norte y 100m este. Calle
                Miramontes.
              </p>
            </div>
            <div className="GoogleMaps">
              <Map />
            </div>
          </div>
        </section>
        <section className="ourTeam conteiner">
          <h2>Nuestro equipo</h2>
          <div className="doctor1">
            <img
              className="doctorImg"
              src={require("./media/doctor1.svg")}
              alt=""
            />
            <div className="doctorInfo">
              <h4>Dr. Oscar Soto Chacon</h4>
              <hr />
              <p>
                <b> Endodoncista</b> <br />
                Cirujano dentista, Universidad Latina de Costa Rica, 2002
                Especialidad en endodoncia, Universidad Latina de Costa Rica,
                2013 Experiencia profesional en odontología general desde el
                2003 y como especialista en endodoncia desde el 2013. Miembro
                activo de la Academia Costarricense de Endodoncia.
              </p>
            </div>
          </div>
          <Media query={{ maxWidth: 666 }}>
            <div className="doctor2">
              <img
                className="doctorImg"
                src={require("./media/doctor2.svg")}
                alt=""
              />
              <div className="doctorInfo">
                <h4>Dra. Ericka Madrigal Romero</h4>
                <hr />
                <p>
                  <b>Odontología General</b> <br /> Cirujana dentista,
                  Universidad Latina de Costa Rica, 2002 Experiencia profesional
                  en odontología general y estética dental desde el año 2003.
                  Atención a niños y adultos
                </p>
              </div>
            </div>
          </Media>
          <Media query={{ minWidth: 667 }}>
            <div className="doctor2">
              <div className="doctorInfo">
                <h4>Dra. Ericka Madrigal Romero</h4>
                <hr />
                <p>
                  <b>Odontología General</b> <br /> Cirujana dentista,
                  Universidad Latina de Costa Rica, 2002 Experiencia profesional
                  en odontología general y estética dental desde el año 2003.
                  Atención a niños y adultos
                </p>
              </div>
              <img
                className="doctorImg"
                src={require("./media/doctor2.svg")}
                alt=""
              />
            </div>
          </Media>
          <Link className="buttonGhost2" to='/nosotros'>
            Conocer todo el equipo
          </Link>
        </section>
        <br />
        <br />
        <Form />
        <Footer />
      </main>
    </React.Fragment>
  );
}

export default Home;
