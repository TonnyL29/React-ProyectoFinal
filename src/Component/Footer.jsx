import Logo from './Resource/Logo.png';
import facebook from './Resource/image/Facebook.png';
import instagram from './Resource/image/Instagram.png';
import WhatsApp from './Resource/image/WhatsApp.png';
import Youtube from './Resource/image/Youtube.png';

const Footer = () => {
    return (
        <div className ="container-fluid w-auto text-center" >
            <div className="row p-5 bg-secondary aling-item-center">
                <div className="col-sx-12 col-md-6 col-lg-3 text-white">
                    <div>
                    <a href="/"><img src={Logo} alt="Logo De Moda" width={120} /></a>
                    </div>
                    <div><p className='h6 mt-3 mb-1 text-center'>De Moda, tu lugar siempre de moda</p></div>
                </div>
                <div className="col-sx-12 col-md-6 col-lg-3 aling-center">
                    <div><p className='h4 text-center text-white'>Categorias</p></div>
                    <div className='text-center h6 mt-3'><a className='text-dark text-decoration-none' href='/'>Electronics</a></div>
                    <div className='text-center h6 mt-3'><a className='text-dark text-decoration-none' href='/'>Jewelery</a></div>
                    <div className='text-center h6 mt-3'><a className='text-dark text-decoration-none' href='/'>Men's clothing</a></div>
                    <div className='text-center h6 mt-3'><a className='text-dark text-decoration-none' href='/'>Women's clothing</a></div>
                </div>
                <div className="col-sx-12 col-md-6 col-lg-3">
                <div><p className='h4 text-center text-white'>Nosotros</p></div>
                    <div className='text-center h5'>Te esperamos en</div>
                    <div className='text-center mb-3'><span class="material-symbols-outlined me-2">home_pin</span>Av. Calle publica n° 911 Local 4</div>
                    <div className='text-center h5'>Horario</div>
                    <div className='text-center'>Lunes a Viernes de</div>
                    <div className='text-center mb-3'>9:30 a 17:00 hrs</div>
                </div>
                <div className="col-sx-12 col-md-6 col-lg-3">
                    <div><p className='h4 text-center text-white'>Contactanos</p></div>
                    <div className='text-center h6'><img className='me-2 mt-2' src={WhatsApp} alt="WhatsApp" srcset="" width={35}/> WhatsApp</div>
                    <div className='text-center h6'><img className='me-2 mt-2' src={instagram} alt="Instagram" srcset="" width={35}/>Instagram</div>
                    <div className='text-center h6'><img className='me-2 mt-2' src={facebook} alt="WhatsApp" srcset="" width={35}/>Facebook</div>
                    <div className='text-center h6'><img className='me-2 mt-2' src={Youtube} alt="WhatsApp" srcset="" width={35}/>YouTube</div>
                </div>
            </div>
        </div>
    )
}

export default Footer;


