const CartWidget = () => {
    return (
        <form className='d-flex me-3 mt-2' id='carItem'>
            <button type='button' className='btn btn-primary position-relative' id='btncar'>
                <span className='material-symbols-outlined'>shopping_cart</span>
                <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger' id='numerCar'>99+
                </span>
            </button>
        </form>
    )
}
export default CartWidget;