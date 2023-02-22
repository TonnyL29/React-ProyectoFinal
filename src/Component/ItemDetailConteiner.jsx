import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './Resource/ItemDetailConteiner.css'
import useFetchHook from './Resource/useFetchHook';
const ItemDetailConteiner = () => {
  const { productId } = useParams();
  const [Cant, setCant] = useState(1);
  const handleAdd = () => setCant(Cant +1)
  const handleRemove = () => {
    if (Cant > 1) {
      setCant(Cant -1)
    }
  }
  
  // const [product, setProduct] = useState(null);
  // useEffect(() => {
  //   fetch(`https://fakestoreapi.com/products/${productId}`)
  //     .then(res => res.json())
  //     .then(data => setProduct(data));
  // }, [productId]);

  let product = useFetchHook(['SP', productId]);
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
  <div className='row bg-white p-4 text-center align-items-center justify-content-center'>
    <div key={id} className='col-4 itemDetail-conteinerImg d-flex justify-content-center align-items-center'>
      <img className='itemDetail-img w-100' src={image} alt='Esta es la imagen del prodcuto' />
    </div>
    <div className='col-4'>
      <p className='h2'>{title}</p>
      <hr />
      <p className='fs-6'>{description}</p>
      <hr />
      <div>
        <button className='btn btn-primary itemDetail-btn' onClick={handleRemove}><span className="material-symbols-outlined align-middle text-center">remove</span></button>
        <input className='itemDetail-input text-center' value={Cant} type="text" />
        <button className='btn btn-primary itemDetail-btn' onClick={handleAdd}><span className="material-symbols-outlined align-middle text-center">add</span></button>
        <button className='btn btn-primary ms-2'><span className='material-symbols-outlined'>add_shopping_cart</span></button>
      </div>
      <div><p className='fs-2 mt-4'>Total ${total.toFixed(2)}</p></div>
    </div>
  </div>
</div>

  );
};

export default ItemDetailConteiner;
