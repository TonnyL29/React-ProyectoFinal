/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from "react";

const Categorias = () => {
    const url = `https://fakestoreapi.com/products/categories`;
    const [Categ, CategData] = useState();
    const fetchApiCat = async () =>{
        const respuesta = await fetch(url)
        const respuestaJSON = await respuesta.json();
        CategData(respuestaJSON);
    }
    useEffect(() =>{
        fetchApiCat()
    }, [])

    return(
        <div className ="conteiner mt-4" id="">
            <div className ="row gap-2" id="contenedor">
            
        { !Categ ? <h3 className="text-Center">Cargando productos...</h3> :
            Categ.map((categ, index) => {
                return <button key={index} className="dropdown-item" id={index}>{categ[0].toUpperCase()}{categ.substring(1)}
                </button>
            })
        }

            </div>
        </div>
    )

}

export default Categorias;