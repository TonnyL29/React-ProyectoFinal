import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./Context/CartContext";

const CartWidget = () => {
    const {cartTotal} = useContext(CartContext)
    return (
        <form className='d-flex me-3 mt-2' id='carItem'>
            <Link to={'/Cart'} className='btn btn-primary position-relative' id='btncar'>
                <span className='material-symbols-outlined'>shopping_cart</span>
                <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger' id='numerCar'>{cartTotal() ? cartTotal() : ''}
                </span>
            </Link>
        </form>
    )
}
export default CartWidget;