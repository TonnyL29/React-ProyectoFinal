import { NavLink } from "react-router-dom";
import useFetchHook from "./Resource/useFetchHook";

const Categorias = () =>{
    let Categ = useFetchHook(['C', 0]);
    return(
        <div className='navbar-nav'>
        {!Categ ? <div className ="d-flex justify-content-center">
                        <div className ="spinner-border" role="status">
                            <span className ="visually-hidden">Loading...</span>
                        </div>
                    </div> :
                Categ.map((categ) => {
                return <li className="nav-item" key={categ}><NavLink  className="nav-link" to={'/category/'+categ}>{categ[0].toUpperCase()}{categ.substring(1)}</NavLink></li>
            })
        }
        </div>
    )

}

export default Categorias;