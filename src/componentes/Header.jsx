import { Link } from "react-router-dom/dist";

export default function Header(){

return(
    <div className="cabeca">
    <header>
        <nav>
            <ul>
            <Link to="./Home">
                    <li>Home</li>
                </Link>
                <Link to="./produto">
                    <li>Produtos</li>
                </Link>
                <Link to="./Oferta">
                    <li>Ofertas</li>
                </Link>
            </ul>
        </nav>
    </header>
    </div>

)

}