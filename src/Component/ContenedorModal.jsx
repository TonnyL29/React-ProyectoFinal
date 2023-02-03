import Modal from "./Modal";

const ContenedorModal = () =>{
    return (
        <div class="modal fade" id="modal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <Modal />
            </div>
        </div>
    )
}

export default ContenedorModal;