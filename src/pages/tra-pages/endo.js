import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from "../../components/Footer";
import HeaderTra from '../../components/Hero-treatments'
import imgBg from '../media/Endodoncia.png'

export default function endo() {
    return (
        <>
            <Navbar></Navbar>
            <HeaderTra 
            backgroud = {imgBg}
            title = "Conozca la Endodoncia (tratamiento de nervio)."
            paragraph = "Endodoncias con la mayor tecnologìa" 
             >

            </HeaderTra>
            <Footer></Footer>
        </>
    )
}
