import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Resource/ItemDetailConteiner.css'

const ItemDetailConteiner = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [Cant, setCant] = useState(1);
  const handleAdd = () => setCant(Cant +1)
  const handleRemove = () => {
    if (Cant > 1) {
      setCant(Cant -1)
    }
  }

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [productId]);
  if (!product) {
    return <div className ='d-flex justify-content-center'>
    <div className ='spinner-border' role='status'>
        <span className ='visually-hidden'>Loading...</span>
    </div>
    <div className ='row gap-2'><p className='text-center fs-4 d-block'>Cargando productos...</p></div>
</div>
  }
  const {id, title, description, price, image} = product;
  let total = price*Cant;
  return (
    <div className='conteiner mt-4'>
        <div className='row bg-white p-4 text-center '>
            <div key= {id} className='col-2 itemDetail-conteinerImg mx-auto'><img className='itemDetail-img' src={image} alt='Esta es la imagen del prodcuto' /></div>
            <div className='col-4 mx-auto'>
                <p className='h2'>{title}</p>
                <hr />
                <p className='fs-6'>{description}</p>
                <hr />
                <div>
                    <button className='btn btn-primary itemDetail-btn' onClick={handleRemove}><span className="material-symbols-outlined align-middle text-center">remove</span></button><input className='itemDetail-input text-center' value={Cant} type="text" /><button className='btn btn-primary itemDetail-btn'><span className="material-symbols-outlined align-middle text-center" onClick={handleAdd}>add</span></button>
                    <button className='btn btn-primary ms-2'><span className='material-symbols-outlined'>add_shopping_cart</span></button>
                </div>
                <div><p className='fs-2 mt-4'>Total ${total.toFixed(2)}</p></div>
            </div>
        </div>     
    </div>
  );
};

export default ItemDetailConteiner;
