import Item from "./Item";


const ProducDetail = ({Prod}) =>{

    return (
        <div className ='row gx-0 gy-3' id='contenedor'>
            { !Prod ? <div className ='d-flex justify-content-center'>
                                <div className ='spinner-border' role='status'>
                                    <span className ='visually-hidden'>Loading...</span>
                                </div>
                                <div className ='row gap-2'><p className='text-center fs-4 d-block'>Cargando productos...</p></div>
                            </div> :
                    Prod.map((Prod) => {
                        return (
                            <Item Item= { Prod }/>
                        )
                    })
            }
        </div>
    )
}

export default ProducDetail;