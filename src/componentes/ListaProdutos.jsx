import React from "react";
import { link } from "react-router-dom";
import "../globals.css"



export default function ListaProdutos({ produtos }) {

    return (
        <div className="card">
            {
                produtos.map((objeto)  (
                    <div calssName="container" key={objeto.id}>
                        <img calssName="imagem" src={objeto.imagem} alt={objeto.nome} />
                        <div className="conteudo">
                            <p className="destaque">{objeto.nome}</p>
                            <p className="money">{objeto.valor}</p>
                        </div>
                        <button className="obter">comprar</button>
                    </div>
                   ))
             }
        </div>

    );
}
