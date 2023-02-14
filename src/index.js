import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavBar from './Component/NavBar';
import Productos from './Component/Productos';
import Footer from './Component/Footer';
import ContenedorModal from './Component/ContenedorModal';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<div>
  <NavBar />
  <Productos propiedad = 'P' value = '0'/>
  <ContenedorModal />
  <Footer />
</div>
);
