import './index.scss'

import logo from '../promo/img/logo.svg'
import chedar1 from '../promo/img/chedar1.png'
import onion from '../promo/img/onion.png'
import file from '../promo/img/file.png'
import vegan from '../promo/img/vegan.png'
import Cadastro from '../cadastro'
import { useNavigate } from 'react-router-dom'




export default function () {
 
    const navigate = useNavigate();



     function cadastrocliente (){
        navigate('/cadastro')
     }





    return (

        <div className='maezovsk'>
               <div className='cabecudo'>
                <img src={logo} />
                <a> QUEM SOMOS</a>
                <a>CARDÁPIO</a>
                <a>COMBOS</a>
                <a href='http://localhost:3000/contato'> CONTATO</a>
                <button onClick={cadastrocliente}>Cadastre-se</button>
            </div>
            <div className='promo'>
                <div className='primeiro'>
                    <div className='chedar1'>
                        <div className='sombra'>
                            <div className='ffora'>
                                <div className='teste'>
                                    <img src={chedar1} />
                                    <h1>R$ 37,90</h1>
                                </div>
                                <div className='fazer'>
                                    <h1><span>BIG CHEDDAR</span></h1>
                                    <h2>Pão especial,<br /> Bacon,Cheddar,<br /> Verduras</h2>
                                    <div className='azin'>
                                        <a href='http://localhost:3000/unico'>Fazer pedido </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='onion'>
                        <div className='sombra'>
                            <div className='ffora'>
                                <div className='teste'>
                                    <img src={onion} />
                                    <h1>R$ 34,90</h1>
                                </div>
                                <div className='fazer'>
                                    <h1><span>BIG ONION</span></h1>
                                    <h2>Pão especial, <br />Bacon, Cebola,<br /> chadder</h2>
                                    <div className='azin'>
                                        <a href='http://localhost:3000/bigcheddar'>Fazer pedido </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='segundo'>
                    <div className='file'>
                        <div className='sombra'>
                            <div className='ffora'>
                                <div className='teste'>
                                    <img src={file} />
                                    <h1>R$ 38,90</h1>
                                </div>
                                <div className='fazer'>
                                    <h1><span>FILÉ DUPLO</span></h1>
                                    <h2>Pão especial, <br /> Cebola, Maionese,<br />2 Carnes</h2>
                                    <div className='azin'>
                                        <a    href='http://localhost:3000/bigonion'>Fazer Pedido </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='vegano'>
                        <div className='sombra'>
                            <div className='ffora'>
                                <div className='teste'>
                                    <img src={vegan} />
                                    <h1>R$ 33,90</h1>
                                </div>
                                <div className='fazer'>
                                    <h1><span>BIG VEGANO</span></h1>
                                    <h2>Carne Vegana, <br />Alface, Cebola,<br />Roxa, Picles</h2>
                                    <div className='azin'>
                                        <a  href='http://localhost:3000/fileduplo'>Fazer Pedido </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}