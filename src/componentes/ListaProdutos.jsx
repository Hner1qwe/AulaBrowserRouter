

export default function ListaProdutos({ produtos }) {

    return (
        <div className="card">
            {
                produtos.map((objeto) => (
                    <div calssName="container" key={objeto.id}>
                        <img calssName="imagem" src={objeto.image}/>
                        <div className="conteudo">
                            <h1 className="destaque">{objeto.nome}</h1>
                            <p className="money">{objeto.valor}</p>
                        </div>
                        <button className="obter">comprar</button>
                    </div>
                   ))
             }
        </div>

    );
}
