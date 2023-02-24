import React from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './itemDetail';
import './ItemDetailConteiner.css'
import useFetchHook from '../Resource/useFetchHook';



const ItemDetailConteiner = () => {
    const { productId } = useParams();

    let product = useFetchHook(['SP', productId]);
    if (!product) {
        return <div className='d-flex justify-content-center'>
            <div className='spinner-border' role='status'>
                <span className='visually-hidden'>Loading...</span>
            </div>
            <div className='row gap-2'><p className='text-center fs-4 d-block'>Cargando productos...</p></div>
        </div>
    }

    return (
        <div className='conteiner mt-4'>
            <ItemDetail item = {product} />
        </div>

    );
};

export default ItemDetailConteiner;
