import { useState, useEffect } from 'react';

const useFetchHook = ([useProp, useValue]) => {
    const URL = () =>{
        switch (useProp) {
            case 'P':
                return ('https://fakestoreapi.com/products/')
            case 'C':
                return ('https://fakestoreapi.com/products/categories') 
            case 'SP':
                return (`https://fakestoreapi.com/products/${useValue}`)   
            case 'SC':
                return (`https://fakestoreapi.com/products/category/${useValue}`)
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