import { Link } from "react-router-dom/dist";
import "../globals.css"

export default function Header(){

return(
    <div className="cabeca">
 <h1 class="title">Nintendo</h1>
        <nav>
            <ul>
            <Link to="/">
                    <li className="Home">Home</li>
                </Link>
                
                <Link to="/produto">
                    <li className="produtos"> Produtos </li>
                </Link>

                <Link to="/oferta">
                    <li className="oferta">Ofertas</li>
                </Link>
            </ul>
        </nav>
  
    </div>

)

}