import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import ItemCounter from './ItemCounter';

const ItemDetail = ({item}) =>{

    const {addItem} = useContext(CartContext);

    const onAdd = (cantidad) =>{
        addItem (item, cantidad)
    }

    let Stock;
    const stock = () => {
        Stock = Math.floor(Math.random() * 10);
        if(Stock === 0){
            Stock = Math.floor(Math.random() * 10);
        } else {
            return Stock 
        }

    }
    stock();

    const { id, title, description, price, image } = item;
    return(
        <div className='row bg-white p-4 text-center align-items-center justify-content-center'>
        <div key={id} className='col-4 itemDetail-conteinerImg d-flex justify-content-center align-items-center'>
            <img className='itemDetail-img w-100' src={image} alt='Esta es la imagen del producto' />
        </div>
        <div className='col-4'>
            <p className='h2'>{title}</p>
            <hr />
            <p className='fs-6'>{description}</p>
            <hr />
                <ItemCounter price={price} stock = {Stock} onAdd = {onAdd}/>
        </div>
    </div>
    )
}


export default ItemDetail;