import './index.scss'
import React, { useState } from 'react';

import logo from '../promounico/img/logo.png'
import carrinho from '../promounico/img/carrinho.png'
import bigc from '../bigcheddar/img/chedar1.png'
import master from '../promounico/img/master.png'
import pix from '../promounico/img/pix.png'
import visa from '../promounico/img/visa.png'
import elo from '../promounico/img/elo.png'


export default function ProdutoPage() {
    const [quantidade, setQuantidade] = useState(1);
  
    function diminuirQuantidade() {
      if (quantidade > 1) {
        setQuantidade(quantidade - 1);
      }
    }
  
    function aumentarQuantidade() {
      setQuantidade(quantidade + 1);
    }
  
    return (
      <div className='maezona'>
        <div className='color'>
          <div className='cabecalhoo'>
          <div className='cabecudo'>
                <img src={logo} />
                <a href='http://localhost:3000/'> HOME</a>
                <a>CARDÁPIO</a>
                <a>COMBOS</a>
                <a href='http://localhost:3000/contato'> CONTATO</a>
                <button >Cadastre-se</button>
            </div>
                    
          </div>

  
          <div className='promo12'>
            <img className='bigc' src={bigc} alt='Hamburguer' />
            <div className='textos'>
              <h1><span> Big Cheddar (Tipo - Carne)</span></h1><br />
              <h2>"Big Vegano: uma deliciosa opção vegana com nosso hambúrguer à base de plantas, queijo vegano derretido, vegetais frescos, e nosso molho especial exclusivo. Uma experiência vegana tão saborosa quanto ousada!"
                (Obs: Nosso hamburguer contém derivados de porco.)</h2>
            
              <h1><span>Total:</span> <span id="precoTotal">{(quantidade * 37.90).toFixed(2)}</span></h1>
            </div>
          </div>
  
          <div className='butoess'>
            <h1>Quantidade</h1>
            <button className='branco'>
              <button className='menos' onClick={diminuirQuantidade}>-</button>
              <input type="text" id="quantidade" value={quantidade} readOnly />
              <button className='mais' onClick={aumentarQuantidade}>+</button>
            </button>
            <button>Comprar</button>
            <h1 className='amanho'>Frete grátis a partir de R$49,99</h1>
            <div className='pagamentos'>
                <img src={ master} />
                <img src={ pix} />
                <img src={ visa} />
                <img src={ elo} />

            </div>
          </div>
        </div>
      </div>
    );
  }

