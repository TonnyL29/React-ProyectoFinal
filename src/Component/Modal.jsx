const Modal = ({image, price, description}) =>{
    return (
        <div>
            <img class="img-fluid mx-auto" src={image} />
			<p class="text-center">{description}</p>
			<p class="text-center text-primary fs-3">Precio: ${price}</p>
			<button type="button" class="btn btn-secondary" data-bs-dismiss="modal" id="btnclose">Cerrar</button>
			<button class="btn btn-primary sticky-bottom"><span class="material-symbols-outlined">add_shopping_cart</span></button>
        </div>
    )
}

export default Modal;