import useFetchHook from "./Resource/useFetchHook";

const Categorias = () =>{
    let Categ = useFetchHook('C');
    return(
        <div className ="conteiner mt-4" id="">
            <div className ="row gap-2" id="contenedor">
            
        { !Categ ? <h5 className="text-Center">Cargando productos...</h5> :
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