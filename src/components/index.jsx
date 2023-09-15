import React, { useState, useEffect } from 'react';
import './style.css';

function Gato() {
  const [dados, setData] = useState([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/marioeduardo12/api-gatos//main/Gatos.json')
      .then((response) => response.json())
      .then((dados) => setData(dados));
  }, []);

  return (
    <div className="alinhar">
      <div>
        {dados.map((gato, index) => (
          <li key={index}>
                <div><strong>Origem:</strong>{gato.Origem}</div>
                <div><strong>Nome:</strong>{gato.Nome}</div>
                <div><strong>Expectativa de vida:</strong>{gato.Expectativa_de_vida}</div>
                <div><strong>Doenças:</strong>{gato.Doencas}</div>
                <div><strong>Preço estimado:</strong>{gato.Preco_estimado}</div>
            <img src={gato.img} />
          </li>
        ))}
      </div>
    </div>
  );
}

export default Gato;