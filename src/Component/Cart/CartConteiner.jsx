import { useContext } from 'react';
import Carts from './Cart';
import CartVoid from './CardVoid';
import { CartContext } from '../Context/CartContext';

const CartConteiner = () => {
    const { cartTotal, cartSum } = useContext(CartContext);
    console.log(cartSum);
    if (cartTotal()) {
        return (
            <div className='conteiner bg-light mt-3'>
                <Carts />
                < hr/>
                <div class='row'>
                    <div class='col-12'>
                        <div className='row'>
                            <div className='col-1 d-flex justify-content-center'>
                                <div className='border-end border-2' style={{ height: '100%' }}></div>
                            </div>
                            <div className='col-3 d-flex align-items-center'>
                            </div>
                            <div className='col-1 d-flex justify-content-center'>
                                <div className='border-end border-2' style={{ height: '100%' }}></div>
                            </div>
                            <div className='col-2 d-flex align-items-center'>
                            </div>
                            <div className='col-1 d-flex justify-content-center'>
                                <div className='border-end border-2' style={{ height: '100%' }}></div>
                            </div>
                            <div className='col-1 d-flex align-items-center'>
                            <p className='fs-6 text-center'><strong>Total:</strong></p>
                            </div>
                            <div className='col-1 d-flex justify-content-center'>
                                <div className='border-end border-2' style={{ height: '100%' }}></div>
                            </div>
                            <div className='col-1 d-flex align-items-center'>
                            <p className='fs-6 text-center'><strong>$ {cartSum()}</strong></p>
                            </div>
                            <div className='col-1 d-flex justify-content-center'>
                                <div className='border-end border-2' style={{ height: '100%' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className='conteiner bg-light mt-3'>
                <CartVoid />
            </div>
        );
    }
};

export default CartConteiner;
