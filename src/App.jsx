import './index.css';
import NavBar from './Component/NavBar';
import Productos from './Component/Productos';
import Footer from './Component/Footer';
import ContenedorModal from './Component/ContenedorModal';

function App() {
    return(
        <div>
            <NavBar />
            <Productos propiedad = 'P' value = '0'/>
            <ContenedorModal />
            <Footer />
        </div>
    )
};

export default App;