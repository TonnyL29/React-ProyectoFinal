import { Link } from "react-router-dom";

const CartVoid = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="alert alert-warning text-center fs-4" role="alert">
            <div>Tu carrito esta vacio</div>
            <span className="material-symbols-outlined">
              production_quantity_limits
            </span>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center mx-auto">
        <button className="btn btn-primary mb-3">
          <Link className="text-decoration-none text-white fs-6" to={"/"}>
            Ver productos
          </Link>
        </button>
      </div>
    </>
  );
};

export default CartVoid;
