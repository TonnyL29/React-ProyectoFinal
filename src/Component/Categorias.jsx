import useFetchHook from "./Resource/useFetchHook";

const Categorias = () =>{
    let prop = 'C';
    let valor = '0';
    let Categ = useFetchHook(prop, valor)
    return(
        <div className ="conteiner mt-4" id="">
            <div className ="row gap-2" id="contenedor">
            
        { !Categ ? <div className ="d-flex justify-content-center">
                        <div className ="spinner-border" role="status">
                            <span className ="visually-hidden">Loading...</span>
                        </div>
                    </div> :
                Categ.map((categ, index) => {
                return <button key={index} className="dropdown-item fast-2" id={index}>{categ[0].toUpperCase()}{categ.substring(1)}
                </button>
            })
        }

            </div>
        </div>
    )

}

export default Categorias;