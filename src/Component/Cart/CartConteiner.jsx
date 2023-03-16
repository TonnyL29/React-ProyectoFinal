import { useContext } from 'react'
import Carts from './Cart'
import CartVoid from './CardVoid'
import { CartContext } from '../Context/CartContext'
import Finish from './Finish'
import Total from './Total'

const CartConteiner = () => {
  const { cartTotal, clear } = useContext(CartContext)
  if (cartTotal()) {

    return (
      <div className="conteiner bg-light mt-3">
        <div className="d-flex flex-row-reverse">
          <button
            type="button"
            onClick={() => {
              clear()
            }}
            className="btn btn-primary mt-3 me-3">
            Limpiar Carrito
          </button>
        </div>
        <hr />
        <Carts />
        <hr />
          <Total />
        <hr />
        <div className="row mt-5 d-flex justify-content-center">
          <div className="col-md-4">
            <Finish />
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="conteiner bg-light mt-3">
        <CartVoid />
      </div>
    )
  }
}

export default CartConteiner
