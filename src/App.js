import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import './assets-css/global.css'
import Home from './pages/home'
import Treatments from './pages/treatments'
import About from './pages/about'
import Contact from './pages/contact'
import Facilities from './pages/facilities'
import ScrollTop from './components/ScrollTop'

/////// Pages treatments ///////

import endo from './pages/tra-pages/endo'
function App() {
    window.scrollTo(0, 0);
  return (
    <BrowserRouter>
    <ScrollTop>
    <Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/tratamientos' component={Treatments}/>
    <Route path='/Nosotros' component={About}/>
    <Route path='/Contacto' component={Contact}/>
    <Route path='/Instalaciones' component={Facilities}/>
    <Route path='/Endodoncia' component={endo}/>
    </Switch>
    </ScrollTop> 
    </BrowserRouter>
  );
}

export default App;
