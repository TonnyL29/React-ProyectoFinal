const Modal = ({image, title, price, description}) =>{
    return (
        <div className="modal-content">
            <div className="modal-header">
                <h1 className="modal-title fs-5" id="modal-title">{title}</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body" id="modal-body">
                <img className="img-fluid mx-auto" src={image} alt='Imagen del producto' />
		    	<p className="text-center">{description}</p>
		    	<p className="text-center text-primary fs-3">Precio: ${price}</p>
            </div>
                <div className="modal-footer" id="modal-footer">
		    	    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" id="btnclose">Cerrar</button>
		    	    <button className="btn btn-primary sticky-bottom"><span className="material-symbols-outlined">add_shopping_cart</span></button>
                </div>
        </div>
    )
}

export default Modal;