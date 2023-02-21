import './index.css';
import NavBar from './Component/NavBar';
import Productos from './Component/Productos';
import Footer from './Component/Footer';
import ItemDetailConteiner from './Component/ItemDetailConteiner';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error404 from './Component/Error404';

function App() {
    return(
    <BrowserRouter>
        <div>
            <NavBar /> 
            <Routes>    
                <Route path='/' element={<Productos />} />
                <Route path='/category/:categoryId' element={<Productos />} />
                <Route path='/products/:productId' element={<ItemDetailConteiner />} />
                <Route path='*' element={<Error404 />} />
            </Routes>
            <Footer />
        </div>            
    </BrowserRouter>        
    )
};

export default App;