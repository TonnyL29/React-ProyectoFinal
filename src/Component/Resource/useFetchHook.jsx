import { useState, useEffect } from 'react';

const useFetchHook = ([useProp, useValue]) => {
    const URL = () =>{
        switch (useProp) {
            case 'P':
                return ('https://fakestoreapi.com/products/')
              //break;
            case 'C':
                return ('https://fakestoreapi.com/products/categories')
                //break; 
            case 'SP':
                return (`https://fakestoreapi.com/products/${useValue}`)
                //break;   
            case 'SC':
                return (`https://fakestoreapi.com/products/category/${useValue}`)
                //break;
            default:
                return ('https://fakestoreapi.com/products/')
        }
    }
const [Prod, ProdData] = useState();
    let respURL = URL();
    useEffect(() =>{
        const fetchApi = async () =>{
            const respuesta = await fetch(respURL)
            const respuestaJSON = await respuesta.json();
            ProdData(respuestaJSON);
        }
        fetchApi()
    }, [respURL])
    return( 
        Prod
    )}

    export default useFetchHook;  