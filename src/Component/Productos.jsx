import { Link, useParams } from 'react-router-dom';
import './Resource/Productos.css';
import useFetchHook from './Resource/useFetchHook';

const Productos = () => {
    const {categoryId} = useParams();
    let value = categoryId;
    let prod = 'P';
    (!value) ? prod = 'P': prod = 'SC';
    let Prod = useFetchHook([prod, value]);
return(
            <div className ='conteiner mt-4' id=''>
                <div className ='row gx-0 gy-3' id='contenedor'>
                
            { !Prod ? <div className ='d-flex justify-content-center'>
                            <div className ='spinner-border' role='status'>
                                <span className ='visually-hidden'>Loading...</span>
                            </div>
                            <div className ='row gap-2'><p className='text-center fs-4 d-block'>Cargando productos...</p></div>
                        </div> :
                Prod.map((Prod) => {
                    return <div className='mx-auto card cardConteiner' key={Prod.id}>
                        <div className='ConteinerImg'><img src={Prod.image} className='card-img-top mx-auto pt-4 imgCard' alt=''></img></div>
    		        <div className='card-body'>
                        <div className='ConteinerTitle align-self-center'>
                            <h5 className='card-title fs-5 text-center align-self-center'>{Prod.title}</h5>
                        </div>
                        <p className='card-text'><br></br></p>
                        <h4 className='card-subtitle mb-2 text-primary text-center'>Precio: ${Prod.price}</h4>
                        <p className='card-subtitle mb-2 text-muted'>{Prod.category}</p>
                        <button className='btn btn-primary'><Link className='text-decoration-none text-white fs-6' to={'products/'+Prod.id}>Ver producto</Link></button>
                        <button className='btn btn-primary ms-2'><span className='material-symbols-outlined'>
                        add_shopping_cart</span></button>
    		        </div>
    	        </div>
                })
            }
           </div>
       </div>
    )
}

export default Productos;