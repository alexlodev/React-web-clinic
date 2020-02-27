import React, { useRef, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import Data_treatments from "../components/Data-treatments";
import "../pages/styles/treatments.css";
import "../components/styles/buttons.css";
import { Link } from "react-router-dom";
import { TweenMax, Power3 } from "gsap";
import Media from "react-media";
import { Controller, Scene } from "react-scrollmagic";

function Treatments() {
  let image = useRef(null);
  let title = useRef(null);

  useEffect(() => {
    TweenMax.to(image, 2, {
      opacity: 1,
      y: -30,
      ease: Power3.easeOut
    });
    TweenMax.to(title, 2, {
      opacity: 1,
      y: -30,
      ease: Power3.easeOut,
      delay: 0.2
    });
  });

  return (
    <React.Fragment>
      <Helmet>
        <title>Tratamientos</title>
        <meta name="description" content="Conozca nuestras mordernas instalaciones, donde encontrara el mejor equipo para todos los tratamientos." />
      </Helmet>
      <Navbar />
      <header id="scrollStarts" className="header-tra">
        <div
          ref={selector => {
            title = selector;
          }}
          id="wrapper"
          className="header-info-tra"
        >
          <h1 className="title-tra">Conozca nuestros tratamientos</h1>
          <hr />
          <p className="p-tra">
            Contamos con una gran variedad de tratamientos ,
            {Data_treatments.dataTest}
          </p>
        </div>
        <div className="header-img-tra">
          <img
            ref={selector => {
              image = selector;
            }}
            className="entry"
            src={require("./media/handpiece.svg")}
            alt=""
          />
        </div>
      </header>
      <Controller>
        <div></div>
        <Scene classToggle="fade">
          <section className="treamentsConteiner conteiner tra">
            <h2>
              Obten una sonrisa hermosa y <br /> funcional con nosotros.
            </h2>
            <p>
              Renueva y rejuvenece el aspecto de tus dientes y encias con
              nuestros tratamientos.
            </p>
            <hr />
            <br />
            <div className="boxConteiner">
              <div className=" box treat">
                <img src={require("./media/dental-care.svg")} alt="" />
                <h4>Endodoncia</h4>
                <hr />
                <p className="textContein">
                  Tratamiento de nervio, elimina el tejido afectado y vuelve a
                  la "vida" a la pieza{" "}
                </p>
                <Link className="buttonGreen" to="/">
                  Ver más
                </Link>
              </div>
              <div className=" box treat">
                <img src={require("../assents-img/stetic.svg")} alt="" />
                <h4>Estética Dental</h4>
                <hr />
                <p className="textContein">
                Especialidad relacionada con la salud bucal y la armonía estética de la boca en su totalidad.
                </p>
                <Link className="buttonGreen" to="#">
                  Ver más
                </Link>
              </div>
              <div className=" box treat">
                <img src={require("../assents-img/braces.svg")} alt="" />
                <h4>Ortodoncia</h4>
                <hr />
                <p className="textContein">
                Tratamiento encargado de corregir la mala posición de las piezas dentales. 
                </p>
                <Link className="buttonGreen" to="#">
                  Ver más
                </Link>
              </div>
              <div className=" box treat">
                <img src={require("../assents-img/implant.svg")} alt="" />
                <h4>Implantes dentales</h4>
                <hr />
                <p className="textContein">
                    Consiste en el reemplazo de una o varias piezas dentales utilizando materiales biocampatibles.
                </p>
                <br/>
                <Link className="buttonGreen" to="#">
                  Ver más
                </Link>
              </div>
              <div className=" box treat">
                <img src={require("../assents-img/ciru.svg")} alt="" />
                <h4>Cirugía dental</h4>
                <hr />
                <p className="textContein">
                    Especialidad dental encargada de realizar multiples tratamientos quirujicos.
                </p>
                <br/>
                <br/>
                <Link className="buttonGreen" to="#">
                  Ver más
                </Link>
              </div>
              <div className=" box treat">
                <img src={require("../assents-img/perio.svg")} alt="" />
                <h4>Periodoncia</h4>
                <hr />
                <p className="textContein">
                    Especialidad dental encargada del cuidado y prevencion del tejido periodontal(tejido encargado de la sujecion de la pieza dental)
                </p>
                <Link className="buttonGreen" to="#">
                  Ver más
                </Link>
              </div>
            </div>
          </section>
        </Scene>
      </Controller>
      <Footer />
    </React.Fragment>
  );
}

export default Treatments;
