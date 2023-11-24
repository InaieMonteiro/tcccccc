import './index.scss';

import start from '../comentarios/imgs/start.svg'
import vino from '../comentarios/imgs/vino.jpg'
import tue from '../comentarios/imgs/tue.jpg'
import derek from '../comentarios/imgs/derek.jpg'





function Comentarios() {
    return (


        <div className='container'>
            <h1>Comentarios dos nossos Clientes</h1>

            <section className='cards'>

                <div className='card'>
                    <img className='user' src={tue}></img>
                    <h3>Matuê</h3>
                    <div className='start'>
                        <img className='star' src={start}></img>
                        <img className='star' src={start}></img>
                        <img className='star' src={start}></img>
                        <img className='star' src={start}></img>
                        <img className='star' src={start}></img>
                    </div>

                    <p>Os hambúrgueres da The Runners Burger são uma verdadeira experiência gastronômica! Cada mordida é como uma viagem pelos sabores, com ingredientes frescos e combinações únicas. O 'Runner Supreme' é meu favorito absoluto, com a suculência da carne e o toque especial do molho secreto. E o atendimento é sempre amigável, fazendo com que cada visita seja memorável. Parabéns à equipe pela dedicação à qualidade! </p>


                </div>


                <div className='card'>
                    <img className='user' src={vino}></img>
                    <h3>Yunk Vino</h3>
                    <div className='start'>
                        <img className='star' src={start}></img>
                        <img className='star' src={start}></img>
                        <img className='star' src={start}></img>
                        <img className='star' src={start}></img>
                        <img className='star' src={start}></img>
                    </div>

                    <p>Não há lugar que se compare à The Runners Burger quando se trata de hambúrgueres excepcionais! Os sabores são cuidadosamente equilibrados, proporcionando uma explosão de delícias a cada mordida. O ambiente descontraído e a equipe atenciosa criam uma experiência acolhedora. Recomendo experimentar o 'Double Joy' - uma dupla de sabor que vai conquistar seu paladar. A The Runners Burger se tornou meu refúgio gastronômico! </p>

                    
                </div>



                <div className='card'>
                    <img className='user' src={derek}></img>
                    <h3>Derek</h3>
                    <div className='start'>
                        <img className='star' src={start}></img>
                        <img className='star' src={start}></img>
                        <img className='star' src={start}></img>
                        <img className='star' src={start}></img>
                        <img className='star' src={start}></img>
                    </div>

                    <p> A The Runners Burger é um verdadeiro tesouro culinário! Cada detalhe, desde a seleção dos ingredientes até a apresentação dos pratos, reflete um compromisso inigualável com a excelência. Os hambúrgueres são tão incríveis que é difícil escolher um favorito. A variedade de opções atende a todos os gostos. A equipe sempre demonstra paixão pelo que faz, proporcionando uma experiência autêntica. Se você procura um lugar onde sabor e qualidade se encontram, a The Runners Burger é o destino certo!</p>

                    
                </div>



            </section>

        </div>




    );
}

export default Comentarios;
