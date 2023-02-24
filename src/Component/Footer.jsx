import Logo from './Resource/Logo.png';
import facebook from './Resource/image/Facebook.png';
import instagram from './Resource/image/Instagram.png';
import WhatsApp from './Resource/image/WhatsApp.png';
import Youtube from './Resource/image/Youtube.png';
import Productos from './Productos/ProducConteiner';
import useFetchHook from './Resource/useFetchHook';
import { Link } from 'react-router-dom';

const Footer = () => {

    const cargarCat = (valor) =>{
        <Productos propiedad = 'SC' value = {valor} />
    }
    let prop = 'C';
    let valor = '0';
    let Categ = useFetchHook(prop,valor)
    return (
        <div className ='container-fluid w-auto text-center mt-5' >
            <div className='row ps-5 pe-5 bg-secondary aling-item-center p-3'>
                <div className='col-sx-12 col-md-6 col-lg-3 text-white'>
                    <div>
                    <a href='/'><img src={Logo} alt='Logo De Moda' width={120} /></a>
                    </div>
                    <div><p className='h6 mt-3 mb-1 text-center'>De Moda, tu lugar siempre de moda</p></div>
                </div>
                <div className='col-sx-12 col-md-6 col-lg-3 aling-center'>
                <div><p className='h4 text-center text-white'>Categorias</p></div>
            { !Categ ? <div className ='d-flex justify-content-center'>
                        <div className ='spinner-border' role='status'>
                            <span className ='visually-hidden'>Loading...</span>
                        </div>
                    </div> :
            Categ.map((categ) => {
                    return <div key={categ} className='text-center h6 mt-3'><Link onClick={cargarCat({categ})} className='text-dark text-decoration-none' to={'/category/'+categ}>{categ[0].toUpperCase()}{categ.substring(1)}</Link></div>
                })
            }
                </div>
                <div className='col-sx-12 col-md-6 col-lg-3'>
                <div><p className='h4 text-center text-white'>Nosotros</p></div>
                    <div className='text-center h5'>Te esperamos en</div>
                    <div className='text-center mb-3'><span className='material-symbols-outlined me-2'>home_pin</span>Av. siempre viva n° 742, Springfield</div>
                    <div className='text-center h5'>Horario</div>
                    <div className='text-center'>Lunes a Viernes de</div>
                    <div className='text-center mb-3'>9:30 a 17:00 hrs</div>
                </div>
                <div className='col-sx-12 col-md-6 col-lg-3'>
                    <div><p className='h4 text-center text-white'>Contactanos</p></div>
                    <div className='text-center h6'><Link to={'https://web.whatsapp.com/'} target='_blank' className='text-decoration-none text-dark fs-6'><img className='me-2 mt-2' src={WhatsApp} alt='WhatsApp'  width={35}/> WhatsApp</Link></div>
                    <div className='text-center h6'><Link to={'https://www.instagram.com/'} target='_blank' className='text-decoration-none text-dark fs-6'><img className='me-2 mt-2' src={instagram} alt='Instagram' width={35}/>Instagram</Link></div>
                    <div className='text-center h6'><Link to={'https://www.facebook.com/'} target='_blank' className='text-decoration-none text-dark fs-6'><img className='me-2 mt-2' src={facebook} alt='WhatsApp' width={35}/>Facebook</Link></div>
                    <div className='text-center h6'><Link to={'https://www.youtube.com/'} target='_blank' className='text-decoration-none text-dark fs-6'><img className='me-2 mt-2' src={Youtube} alt='WhatsApp' width={35}/>YouTube</Link></div>
                </div>
            </div>
        </div>
    )
}

export default Footer;


