import React, { useState } from 'react';

const ItemCounter = ({ price, stock }) => {

    console.log(stock)
    const [ItemStock, setItemStock] = useState(stock)
    const [Cant, setCant] = useState(1);
    const handleAdd = () => {
        if (Cant < ItemStock) {
            setCant(Cant + 1)
        }
    }
    const handleRemove = () => {
        if (Cant > 1) {
            setCant(Cant - 1)
        }
    }
    let total = price * Cant;

    const onAdd = () => {
        if (ItemStock >= Cant) {
            setItemStock(ItemStock - Cant)
            setCant(1)
            console.log(`Agregaste ${Cant} al carrito`);
        }
    }

    return (
        <>
            <p className="text-end text-muted"> Stock disponible: {stock}</p>
            <button className='btn btn-primary itemDetail-btn' onClick={handleRemove}><span className="material-symbols-outlined align-middle text-center">remove</span></button>
            <input className='itemDetail-input text-center' value={Cant} type="text" onChange={(e) => setCant(parseInt(e.target.value) || 0)} />
            <button className='btn btn-primary itemDetail-btn' onClick={handleAdd}><span className="material-symbols-outlined align-middle text-center">add</span></button>
            <button className='btn btn-primary ms-2' onClick={onAdd}><span className='material-symbols-outlined'>add_shopping_cart</span></button>
            <div><p className='fs-2 mt-4'>Total ${total.toFixed(2)}</p></div>

        </>
    )
}

export default ItemCounter