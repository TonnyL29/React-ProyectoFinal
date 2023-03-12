import { useContext } from "react";
import { CartContext } from "./Context/CartContext";
import "../index.css";
import "./Productos/Productos.css";

const Cart = () => {
  const { cartTotal, Cart } = useContext(CartContext);

  console.log(cartTotal());
  console.log(Cart);
  if (cartTotal()) {
    return Cart.map((item) => {
      return (
        <div className="conteiner bg-light mt-3">
          <div class="row" key={item}>
            <div class="col-12">
              <div className="row">
                <div className="col-1 d-flex justify-content-center">
                  <div
                    className="border-end border-2"
                    style={{ height: "100%" }}
                  ></div>
                </div>
                <div className="col-3 d-flex align-items-center">
                  <div className="ConteinerImg p-2">
                    <img
                      src={item.image}
                      className="card-img-top mx-auto pt-4 imgCard text-center"
                      alt=""
                    ></img>
                  </div>
                </div>
                <div className="col-1 d-flex justify-content-center">
                  <div
                    className="border-end border-2"
                    style={{ height: "100%" }}
                  ></div>
                </div>
                <div className="col-2 d-flex align-items-center">
                  <p className="fs-6 text-center">
                    <strong>{item.title}</strong>
                  </p>
                </div>
                <div className="col-1 d-flex justify-content-center">
                  <div
                    className="border-end border-2"
                    style={{ height: "100%" }}
                  ></div>
                </div>
                <div className="col-1 d-flex align-items-center justify-content-center">
                  <button className="btn btn-primary itemDetail-btn">
                    <span className="material-symbols-outlined align-middle text-center">
                      remove
                    </span>
                  </button>
                  <input
                    className="itemDetail-input text-center"
                    value={item.cantidad}
                  />
                  <button className="btn btn-primary itemDetail-btn">
                    <span className="material-symbols-outlined align-middle text-center">
                      add
                    </span>
                  </button>
                </div>
                <div className="col-1 d-flex justify-content-center">
                  <div
                    className="border-end border-2"
                    style={{ height: "100%" }}
                  ></div>
                </div>
                <div className="col-1 d-flex align-items-center justify-content-center">
                  <p className="fs-6 text-center"></p>
                  <p className="fs-6 text-center">
                    <strong>$ {item.price * item.cantidad}</strong>
                  </p>
                </div>
                <div className="col-1 d-flex justify-content-center">
                  <div
                    className="border-end border-2"
                    style={{ height: "100%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }
  return <p>El carrito esta vacio</p>;
};

export default Cart;
