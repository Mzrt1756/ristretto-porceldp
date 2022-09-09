import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {NavBar} from './components/NavBar/NavBar';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer'
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer'
import {CarouselHome} from './components/CarouselHome/CarouselHome'
import {Footer} from './components/Footer/Footer';
import { Contacto } from './components/Contacto/Contacto';
import { Carrito } from './components/Carrito/Carrito';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Tienda } from './components/Tienda/Tienda';
import { Mayorista } from './components/Mayorista/Mayorista';
import { QuienesSomos } from './components/QuienesSomos/QuienesSomos';
import { Origenes } from './components/Origenes/Origenes';
import { PaginaError } from './components/PaginaError/PaginaError';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div>
        <NavBar/>
        <CarouselHome/>
        <Routes>
          <Route exact path='/ristretto-porceldp/' element={<ItemListContainer/>}></Route>
          <Route exact path='/ristretto-porceldp/category' element={<ItemListContainer/>}></Route>
          <Route exact path='/ristretto-porceldp/category/:categoriaProd' element={<ItemListContainer/>}></Route>
          <Route exact path='/ristretto-porceldp/item/:idItem' element={<ItemDetailContainer/>}></Route>
          <Route exact path='/ristretto-porceldp/tienda' element={<Tienda/>}></Route>
          <Route exact path='/ristretto-porceldp/mayorista' element={<Mayorista/>}></Route>
          <Route exact path='/ristretto-porceldp/quienessomos' element={<QuienesSomos/>}></Route>
          <Route exact path='/ristretto-porceldp/origenes' element={<Origenes/>}></Route>
          <Route exact path='/ristretto-porceldp/contacto' element={<Contacto/>}></Route>
          <Route exact path='/ristretto-porceldp/cart' element={<Carrito/>}></Route>   
          <Route path='*' element={<PaginaError/>}></Route>       
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
