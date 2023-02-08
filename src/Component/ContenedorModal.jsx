import Modal from "./Modal";

const ContenedorModal = (state) =>{
    return (
        <div className="modal fade" id="modal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <Modal />
            </div>
        </div>
    )
}

export default ContenedorModal;