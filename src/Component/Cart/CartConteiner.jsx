import { useContext } from "react";
import Carts from "./Cart";
import CartVoid from "./CardVoid";
import { CartContext } from "../Context/CartContext";

const CartConteiner = () => {
  const { cartTotal, cartSum, clear } = useContext(CartContext);
  if (cartTotal()) {
    let total = cartSum();
    return (
      <div className="conteiner bg-light mt-3">
          <div className="d-flex flex-row-reverse">
            <button type="button" onClick={() => {clear()}} className="btn btn-primary mt-3 me-3">
              Limpiar Carrito
            </button>
          </div>
          <hr />

        <Carts />
        
        <hr />
        <div class="row">
          <div class="col-12">
            <div className="row">
              <div className="col-1 d-flex justify-content-center">
                <div
                  className="border-end border-2"
                  style={{ height: "100%" }}
                ></div>
              </div>
              <div className="col-2 d-flex align-items-center"></div>
              <div className="col-1 d-flex justify-content-center">
                <div
                  className="border-end border-2"
                  style={{ height: "100%" }}
                ></div>
              </div>
              <div className="col-2 d-flex align-items-center"></div>
              <div className="col-1 d-flex justify-content-center">
                <div
                  className="border-end border-2"
                  style={{ height: "100%" }}
                ></div>
              </div>
              <div className="col-1 d-flex align-items-center">
                <p className="fs-6 text-center">
                  <strong>Total:</strong>
                </p>
              </div>
              <div className="col-1 d-flex justify-content-center">
                <div
                  className="border-end border-2"
                  style={{ height: "100%" }}
                ></div>
              </div>
              <div className="col-1 d-flex align-items-center">
                <p className="fs-6 text-center">
                  <strong>$ {total.toFixed(2)}</strong>
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
  } else {
    return (
      <div className="conteiner bg-light mt-3">
        <CartVoid />
      </div>
    );
  }
};

export default CartConteiner;
