import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { collection, getFirestore, addDoc } from "firebase/firestore";

const Finish = () => {
  const { cartTotal, Cart } = useContext(CartContext);
  const [Nombre, setNombre] = useState("");
  const [Email, setEmail] = useState("");
  const [Telefono, setTelefono] = useState("");
  const [orderId, setOrderId] = useState("");

  const generarOrden = () => {
    const buyer = { nome: Nombre, email: Email, phone: Telefono };
    const fecha = new Date();
    const date = `${fecha.getFullYear()}-${
      fecha.getMonth() + 1
    }-${fecha.getDate()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`;
    const order = { buyer: buyer, items: Cart, date: date, total: cartTotal() };

    const db = getFirestore();
    const orderCollection = collection(db, "orders");
    addDoc(orderCollection, order).then((data) => {
      setOrderId(data.id);
    });
  };

  return (
    <div>
      <div className="mb-3">
        <label htmlFor="Nombre" className="form-label">
          Nombre
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="Jose Lopez"
          onInput={(e) => {
            setNombre(e.target.value);
          }}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="Email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          placeholder="name@example.com"
          onInput={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="Telefono" className="form-label">
          Telefono
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="1122334455"
          onInput={(e) => {
            setTelefono(e.target.value);
          }}
        />
      </div>
      <div className="d-flex flex-row-reverse">
        <button
          type="button"
          className="btn btn-primary mb-3 mt-2"
          onClick={generarOrden}
        >
          Enviar pedido
        </button>
      </div>
      {orderId ? <div className="alert alert-warning" role="alert">
        <h3>Gracias por tu order</h3>
        <p>Se genero correctamente la orden numero: {orderId}</p>
      </div> : ""}
    </div>
  );
};

export default Finish;
