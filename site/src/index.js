import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter, Routes, Route} from 'react-router-dom'

import Cadastro from './pages/cadastro'
import Promo from './pages/promo'
import Login from './pages/login'
import Promounico from './pages/promounico'
import Historico from './pages/historico'
import Home from './pages/home'
import Batata from './pages/batata'
import LoginCliente from './pages/loginCliente'
import CadastroProduto from './pages/cadastroProduto'
import Passando from './pages/passando';
import Contato from './pages/contato';
import Fogo from './pages/fogo'
import Roda from './pages/rodape'
import Somos from './pages/somos'
import EntradaS from './pages/entradaS';
import Comentarios from './pages/comentarios';
import Bigcheddar from './pages/bigcheddar';
import Bigonion from './pages/bigonion';
import Fileduplo from './pages/fileduplo';
import Bigvegano from './pages/bigvegano';
import Promocoes from './pages/promocoes';
import Frango from './pages/frango';
import Vegano from './pages/vegano';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='login'  element={<Login/>} />
      <Route path='/promo' element={<Promo/>} />
      <Route path='cadastro' element={<Cadastro/>} />
      <Route path='unico' element={<Promounico/>} />
      <Route path='hisc' element={<Historico/>} />
      <Route path='/' element={ <Home/>} />
      <Route path='batata' element={< Batata/>} />
      <Route path='LoginCliente' element={<LoginCliente/>} />
      <Route path='cadastroProduto' element={<CadastroProduto/>}  />
      <Route path='passando' element={<Passando/>} />
      <Route path='contato' element={<Contato/>} />
      <Route path='fogo' element={<Fogo/>} />
      <Route path='roda' element={<Roda/>} />
      <Route path='entra' element={<EntradaS/>} />
      <Route path='somos' element={<Somos/>} />
      <Route path='comentarios' element={<Comentarios/>} />
      <Route path='bigcheddar' element={<Bigcheddar/>} />
      <Route path='bigonion' element={<Bigonion/>} />
      <Route path='fileduplo' element={<Fileduplo/>} />
      <Route path='bigvegano' element={<Bigvegano/>} />
      <Route path='promocoes' element={<Promocoes/>} />
      <Route path='frango' element={<Frango/>} />
      <Route path='vegano' element={<Vegano/>} />
      




    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


