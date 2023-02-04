import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavBar from './Component/NavBar';
import Productos from './Component/Productos';
import Footer from './Component/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<div>
  <NavBar />
  <Productos product = 'Bienvenidos a DeModa, tu lugar siempre de moda'/>
  <Footer />
</div>
);
