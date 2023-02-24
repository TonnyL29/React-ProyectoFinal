import ItemCounter from './ItemCounter';

const ItemDetail = ({item}) =>{
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
                <ItemCounter price={price} />
        </div>
    </div>
    )
}


export default ItemDetail;