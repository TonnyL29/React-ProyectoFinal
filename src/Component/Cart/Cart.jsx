import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const { Cart, removeItem, addItem, restItem, addOneItem } = useContext(CartContext);
  return (
    <div>
      {Cart.map((item) => {
        let total = item.price * item.cantidad;
        return (
        <div className="row" key={item.id}>
          <div className="col-12">
            <div className="row">
              <div className="col-1 d-flex justify-content-center">
                <div
                  className="border-end border-2"
                  style={{ height: "100%" }}
                ></div>
              </div>
              <div className="col-2 d-flex align-items-center">
                <div className="ConteinerImgCart p-2">
                  <img
                    src={item.image}
                    className="card-img-top mx-auto imgCardCart text-center"
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
              <div className="col-1 px-auto">
              <div className="row">
                    <div className="col-12 d-flex align-items-center justify-content-center px-auto">
                      Stock: {item.stock}
                    </div>
                  </div>
                  <div className="row mb-4">
                    <div className="col-12 d-flex align-items-center justify-content-center px-auto">
                     
                    </div>
                  </div>
                <div className="row">
                  <div className="col-12 d-flex align-items-center justify-content-center px-auto">
                  <Link
                  onClick={() => {
                    restItem(item, 1);
                  }}
                  className="btn btn-primary itemDetail-btn"
                >
                  <span className="material-symbols-outlined align-middle text-center">
                    remove
                  </span>
                </Link>
                <input
                  className="itemDetail-input text-center"
                  value={item.cantidad}
                  onChange={(e) => {
                    const newQuantity = parseInt(e.target.value);
                    if (newQuantity !== item.cantidad) {
                      if (newQuantity > item.cantidad) {
                        addItem(item, newQuantity - item.cantidad);
                      } else {
                        restItem(item, item.cantidad - newQuantity);
                      }
                    }
                  }}
                />
                <Link
                  onClick={() => {
                    addOneItem(item, 1, item.cantidad);
                  }}
                  className="btn btn-primary itemDetail-btn"
                >
                  <span className="material-symbols-outlined align-middle text-center">
                    add
                  </span>
                </Link>
                  </div>
                </div>
                
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
                  <strong>$ {total.toFixed(2)}</strong>
                </p>
              </div>
              <div className="col-1 d-flex justify-content-center">
                <div
                  className="border-end border-2"
                  style={{ height: "100%" }}
                ></div>
              </div>
              <div className="col-1 d-flex align-items-center justify-content-center">
                <Link
                  onClick={() => {
                    removeItem(item.id);
                  }}
                >
                  <span className="material-symbols-outlined">delete</span>
                </Link>
              </div>
            </div>
          </div>        
          <hr />
        </div>
        );
    })}
  </div>
);
}

export default Cart;
