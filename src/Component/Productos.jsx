
import React, {useState, useEffect} from "react";
import './Resource/Productos.css';

const Productos = ({product}) => {
    const url = `https://fakestoreapi.com/${product}`;
    const [Prod, ProdData] = useState();
    useEffect(() =>{
        const fetchApi = async () =>{
            const respuesta = await fetch(url)
            const respuestaJSON = await respuesta.json();
            ProdData(respuestaJSON);
        }
        fetchApi()
    }, [url])
    return(
        <div className ="conteiner mt-4" id="">
            <div className ="row gap-2" id="contenedor">
            
        { !Prod ? <h3 className="text-Center">Cargando productos...</h3> :
            Prod.map((Prod, index) => {
                return <div className="mx-auto card cardConteiner" key={Prod.id}>
		        <img src={Prod.image} className="card-img-top mx-auto pt-4 imgCard" alt=""></img>
		        <div className="card-body">
		        <h5 className="card-title">{Prod.title}</h5>
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