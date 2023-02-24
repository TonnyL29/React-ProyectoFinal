import { Link } from 'react-router-dom';

const Item = ({Item}) => {

    const { id, image, title, price, category} =  Item;
    return (
        <div className='mx-auto card cardConteiner' key={id}>
            <div className='ConteinerImg p-2'><img src={image} className='card-img-top mx-auto pt-4 imgCard' alt=''></img></div>
            <div className='card-body' style={{ textAlign: 'center' }}>
                <div className='ConteinerTitle'>
                    <h5 className='card-title fs-5 text-center'>{title}</h5>
                </div>
                <p className='card-subtitle mb-2 text-muted' style={{ textAlign: 'start' }}>{category}</p>
                <p className='card-text'></p>
                <h4 className='card-subtitle mb-2 text-primary text-center'>Precio: ${price}</h4>
                <hr />
                <button className='btn btn-primary'><Link className='text-decoration-none text-white fs-6' to={'products/' + id}>Ver producto</Link></button>
            </div>
        </div>
    )
}

export default Item;