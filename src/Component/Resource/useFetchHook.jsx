import { useState, useEffect } from 'react';

const useFetchHook = (useProp, useValue) => {
    const URL = () =>{
        if(useProp === 'P'){
            return ('https://fakestoreapi.com/products/');
        }else if(useProp === 'C'){
            return ('https://fakestoreapi.com/products/categories');
        }else if(useProp === 'SC'){
            if(!useValue === '0'){
                return ('https://fakestoreapi.com/products/categories/'+useValue);
            }else{
                return 'Error, el valor especificado no es el correcto'
            }
        }else if(useProp === 'SP'){
            if(!useValue === '0'){
                return ('https://fakestoreapi.com/products/'+useValue);
            }else{
                return 'Error, el valor especificado no es el correcto'
            }
        }else{
            return ('https://fakestoreapi.com/products/');
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
    console.log(Prod)
    return( 
        Prod
    )}

    export default useFetchHook;  