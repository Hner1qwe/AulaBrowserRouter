import "../globals.css" 

export default function ListaProdutos({ produtos }) {

    return (
        <div className="card">
            {
                produtos.map((objeto) => (
                    <div className="container" key={objeto.id}>
                        <img className="imagem" src={objeto.image}/>
                        <div className="conteudo">
                            <h1 className="destaque">{objeto.nome}</h1>
                            <p className="money">{objeto.valor}</p>
                        </div>
                        <button className="botao">comprar</button>
                    </div>
                   ))
             }
        </div>

    );
}
