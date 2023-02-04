import './Resource/Productos.css';

const Productos = ({product}) => {
    return(
        <div className="row gap-2" id="contenedor">
            <div className='text-center m-3 h3'><p>{product}</p></div>
            <div className="mx-auto card cardConteiner">
		        <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" className="card-img-top mx-auto pt-4 imgCard" alt="" />
		        <div className="card-body">
		            <h5 className="card-title">Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h5>
		            <p className="card-text"><br /></p>
		            <h4 className="card-subtitle mb-2 text-primary text-center">Precio: $109.95</h4>
		            <p className="card-subtitle mb-2 text-muted">men's clothing</p>
		            <button onclick="VerProducto(1)" className="btn btn-primary">Ver producto</button>
		            <button onclick="AddCar(1)" className="btn btn-primary"><span className="material-symbols-outlined">
		            add_shopping_cart</span></button>
		        </div>
	        </div>
            <div className="mx-auto card cardConteiner">
		        <img src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" className="card-img-top mx-auto pt-4 imgCard" alt="" />
		        <div className="card-body">
		            <h5 className="card-title">Mens Casual Premium Slim Fit T-Shirts </h5>
		            <p className="card-text"><br /></p>
		            <h4 className="card-subtitle mb-2 text-primary text-center">Precio: $22.3</h4>
		            <p className="card-subtitle mb-2 text-muted">men's clothing</p>
		            <button onclick="VerProducto(2)" className="btn btn-primary">Ver producto</button>
		            <button onclick="AddCar(2)" className="btn btn-primary"><span className="material-symbols-outlined">
		            add_shopping_cart</span></button>
		        </div>
	        </div>
        <div className="mx-auto card cardConteiner">
		    <img src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" className="card-img-top mx-auto pt-4 imgCard" alt="" />
		    <div className="card-body">
		        <h5 className="card-title">Mens Cotton Jacket</h5>
		        <p className="card-text"><br /></p>
		        <h4 className="card-subtitle mb-2 text-primary text-center">Precio: $55.99</h4>
		        <p className="card-subtitle mb-2 text-muted">men's clothing</p>
		        <button onclick="VerProducto(3)" className="btn btn-primary">Ver producto</button>
		        <button onclick="AddCar(3)" className="btn btn-primary"><span className="material-symbols-outlined">
		        add_shopping_cart</span></button>
		    </div>
	    </div>
    </div>
    )

}

export default Productos;