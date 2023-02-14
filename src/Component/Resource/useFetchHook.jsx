import { useState, useEffect } from 'react';

const useFetchHook = (a, b = 0) => {
    const URL = (a, b) =>{
        if(a === 'P'){
            return ('https://fakestoreapi.com/products/');
        }else if(a === 'C'){
            return ('https://fakestoreapi.com/products/categories');
        }else if(a === 'SP'){
            if(!b === 0){
                return ('https://fakestoreapi.com/products/categories/'+b);
            }else{
                return 'Error, el valor especificado no es el correcto'
            }
        }else if(a === 'SC'){
            if(!b === 0){
                return ('https://fakestoreapi.com/products/'+b);
            }else{
                return 'Error, el valor especificado no es el correcto'
            }
        }
    }
const [Prod, ProdData] = useState();
    let respURL = URL(a, b);
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