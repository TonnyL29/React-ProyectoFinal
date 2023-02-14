import React, { useState, useEffect } from 'react';

const useFetchHook = () => {
    const url = `https://fakestoreapi.com/products/`;
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
        Prod
    )}

    export default useFetchHook;  