import React from "react";
import "./style.css";
import whatssap from "../../assets/images/icons/whatsapp.svg";
import giveClasseIcon from "../../assets/images/icons/rocket.svg";


const PrecoItem = ({ dados }) => {
  function currencyFormat(num) {
    return 'AOA ' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
 }

  return (
    <article className="teacher-item">
      <header>
        <img src={giveClasseIcon} alt="Logo Produto" />
        <div>
          <strong>
           Produto: {dados.nome_produto}
          </strong>
          <span>{dados.nome_produto}</span>
        </div>
      </header>

      <p>{dados.descricao}</p>

      <footer>
        <p>
          Preço do Produto :
          <strong>{currencyFormat(dados.preco_produto)}</strong>
        </p>

        <a href={null} onClick={null}>
          <img src={whatssap} alt="Ligar" />
          Entrar Em Contato
        </a>
      </footer>
    </article>
  );
};

export default PrecoItem;
