import './Resource/Productos.css';
import useFetchHook from './Resource/useFetchHook';

const Productos = () => {
    let Prod = useFetchHook('P');
return(
            <div className ="conteiner mt-4" id="">
                <div className ="row gap-2" id="contenedor">
                
            { !Prod ? <div className ="d-flex justify-content-center">
                            <div className ="spinner-border" role="status">
                                <span className ="visually-hidden">Loading...</span>
                            </div>
                            <div className ="row gap-2"><p className='text-center fs-4 d-block'>Cargando productos...</p></div>
                        </div> :
                Prod.map((Prod) => {
                    return <div className="mx-auto card cardConteiner" key={Prod.id}>
                        <div className='ConteinerImg'><img src={Prod.image} className="card-img-top mx-auto pt-4 imgCard" alt=""></img></div>
    		        <div className="card-body">
                        <div className='ConteinerTitle align-self-center'>
                            <h5 className="card-title fs-5 text-center align-self-center">{Prod.title}</h5>
                        </div>
                        <p className="card-text"><br></br></p>
                        <h4 className="card-subtitle mb-2 text-primary text-center">Precio: ${Prod.price}</h4>
                        <p className="card-subtitle mb-2 text-muted">{Prod.category}</p>
                        <button className="btn btn-primary">Ver producto</button>
                        <button className="btn btn-primary ms-2"><span className="material-symbols-outlined">
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