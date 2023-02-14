import { useState, useEffect } from 'react';

const useFetchHook = (props) => {
    const URL = () =>{
        if(props.prop === 'P'){
            return ('https://fakestoreapi.com/products/');
        }else if(props.prop === 'C'){
            return ('https://fakestoreapi.com/products/categories');
        }else if(props.prop === 'SC'){
            if(!props.valor === '0'){
                return ('https://fakestoreapi.com/products/categories/'+props.valor);
            }else{
                return 'Error, el valor especificado no es el correcto'
            }
        }else if(props.prop === 'SP'){
            if(!props.valor === '0'){
                return ('https://fakestoreapi.com/products/'+props.valor);
            }else{
                return 'Error, el valor especificado no es el correcto'
            }
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