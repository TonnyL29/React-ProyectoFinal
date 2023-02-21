import Logo from './Resource/Logo.png' 

const Error404 = () => {
    return (
        <div className ='conteiner mt-4 bg-primary-subtle' id=''>
            <div className ='row gap-2' id='contenedor'>
                <div className='col fs-2 text-danger text-center'>
                    <h2>Error 404</h2>
                    <p className='fs-3'>La direccion a la que quiere acceder no existe.</p>
                </div>    
            </div>
            <div className ='row gap-2 mt-4' id='contenedor'>
                <div className='col text-center'>
                    <img src={Logo} alt='' srcset='' />
                </div>   
            </div>
        </div>
    )
}

export default Error404;