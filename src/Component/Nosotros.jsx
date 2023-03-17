import idea from '../Component/Resource/image/idea-hombre.png';
import mapa from '../Component/Resource/image/map.png';

const Nosotros = () => {
    return (
        <div className="conteiner bg-light mt-3">
            <div className="row d-flex justify-content-center">
                <div className="col-md-6 mt-3">
                    <h3>Historia..</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore amet maxime eligendi ipsa alias, commodi dignissimos nulla explicabo veniam laboriosam enim omnis ab voluptate delectus ducimus? Praesentium cupiditate veritatis fugiat.
                    </p>
                </div>
                <div className="col-md-4 mt-3">
                    <img src={idea} alt='Logo De Moda' width={120} className="rounded mx-auto d-block" />
                </div>
            </div>
            <div className="row d-flex justify-content-center">
                <div className="col-md-4 mt-3">
                    <h3>Donde estamos? </h3>
                </div>
            </div>
            <div className="row d-flex justify-content-center">
                <div className="col-md-12 mt-3 mb-3">
                    <img src={mapa} alt='Logo De Moda' width={420} className="rounded mx-auto d-block" />
                </div>
            </div>
        </div>
    )
}

export default Nosotros;