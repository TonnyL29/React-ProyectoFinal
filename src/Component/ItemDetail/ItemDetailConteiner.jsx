import { useParams } from 'react-router-dom';
import ItemDetail from './itemDetail';
import './ItemDetailConteiner.css'
import { useEffect, useState } from 'react';
import { getFirestore, getDoc, doc } from 'firebase/firestore';


const ItemDetailConteiner = () => {
    const { productId } = useParams();
    console.log(productId);
    const [item, setItem] = useState([]);
useEffect(() =>{
    const db = getFirestore(); 
    const document = doc(db, "item", productId);
     getDoc(document).then(element => {
        setItem({id:element.id, ...element.data()})})
}, [productId]);
    if (!item) {
        return <div className='d-flex justify-content-center'>
            <div className='spinner-border' role='status'>
                <span className='visually-hidden'>Loading...</span>
            </div>
            <div className='row gap-2'><p className='text-center fs-4 d-block'>Cargando productos...</p></div>
        </div>
    }

    return (
        <div className='conteiner mt-4'>
            <ItemDetail item = {item} />
        </div>

    );
};

export default ItemDetailConteiner;
