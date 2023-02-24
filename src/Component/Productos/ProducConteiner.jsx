import { useParams } from 'react-router-dom';
import './Productos.css';
import ProducDetail from './ProducDetail'
import useFetchHook from '../Resource/useFetchHook';

const Productos = () => {
    const {categoryId} = useParams();
    let value = categoryId;
    let prod = 'P';
    (!value) ? prod = 'P': prod = 'SC';
    let Prod = useFetchHook([prod, value]);
return(
        <div className ='conteiner mt-4' id=''>
            <ProducDetail Prod={Prod}/>
       </div>
    )
}

export default Productos;