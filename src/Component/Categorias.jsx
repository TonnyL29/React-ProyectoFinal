import { NavLink } from "react-router-dom";
import useFetchHook from "./Resource/useFetchHook";

const Categorias = () =>{
    let prop = 'C';
    let valor = '0';
    let Categ = useFetchHook(prop, valor);
    return(
        <div className='navbar-nav'>
        {!Categ ? <div className ="d-flex justify-content-center">
                        <div className ="spinner-border" role="status">
                            <span className ="visually-hidden">Loading...</span>
                        </div>
                    </div> :
                Categ.map((categ, index) => {
                    console.log(categ)
                return <li className="nav-item"><NavLink key={index} className="nav-link" to={'/category/:'+categ}>{categ[0].toUpperCase()}{categ.substring(1)}</NavLink></li>
            })
        }
        </div>
    )

}

export default Categorias;