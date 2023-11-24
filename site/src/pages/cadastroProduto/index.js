import './index.scss';
import { useState } from 'react';
import axios from 'axios'
export default function () {
    const [nome, setNome] = useState('');
    const [ingre, setIgre] = useState('');
    const [preco, setPreço] = useState('');


    const [disponivel, setDisponivel] = useState(false);
    const [bebida, setBebida] = useState(false);
    const [Vegano, setVegano] = useState(false);
    const [frango, setFrango] = useState(false);
    const [carne, setCarne] = useState(false);

    const api = axios.create({
        baseURL: 'http://localhost:5000'
    })

    const handleBebidaChange = () => setBebida(!bebida); // Inverte o estado atual de bebida para true/false
    const handleVeganoChange = () => setVegano(!Vegano);
    const handleFrangoChange = () => setFrango(!frango);
    const handleCarneChange = () => setCarne(!carne);
    const handleDisponivelChange = () => setDisponivel(!disponivel);

    async function cadastrarproduto() {
        const cadastrar = {
            NOME: nome,
            PRECO: preco,
            DISPONIVEL: disponivel,
            BEBIDA: bebida,
            VEGANO: Vegano,
            TIPO_FRANGO: frango,
            TIPO_CARNE: carne,
            INGREDIENTES: ingre,
        };
        alert(JSON.stringify(cadastrar));

        try {
            const r = await api.post('/produtos', cadastrar); // Usando a instância 'api'
            console.log(r.data);
            const productId = r.data.id;
            alert('Produto cadastrado com sucesso!');
        } catch (error) {
            console.error('Erro ao cadastrar o produto:', error);
            alert(`Erro ao cadastrar o produto: ${error.message}`);
        }
    }




    return (
        <div className='mak'>

            <div className='tudao'>

                <div className='imagem'>
                    <div>
                        <input type='file' />
                    </div>
                </div>
                <div className='produto'>

                    <h1 className='um'>Seu Produto É:</h1>
                    <div className='porra1'>
                        <div className='tipo'>
                            <input type='checkbox' checked={bebida} onChange={handleBebidaChange} />
                            <h2>Bebida</h2>
                            <input type='checkbox' checked={Vegano} onChange={handleVeganoChange} />
                            <h2>Vegano</h2>
                            <input type='checkbox' checked={frango} onChange={handleFrangoChange} />
                            <h2>Tipo-Frango</h2>
                            <input type='checkbox' checked={carne} onChange={handleCarneChange} />
                            <h2>Tipo-Carne</h2>
                            <input type='checkbox' checked={disponivel} onChange={handleDisponivelChange} />
                            <h2>Disponivel</h2>
                            <div className='Acor'></div>
                        </div>

                    </div>


                    <div className='sobre'>
                        <div className='nome'>
                            <h1>Adicionar Nome Do Produto</h1>
                            <input type='text' placeholder='  Escreva Aqui...' value={nome} onChange={e => setNome(e.target.value)} />
                        </div>
                        <div className='ingre'>
                            <h1>Informe Os Ingredientes</h1>
                            <input type='text' placeholder='Informe...' value={ingre} onChange={e => setIgre(e.target.value)} />
                        </div>
                        <div className='valor'>
                            <h1>Valor Do Seu Produto</h1>
                            <input type='number' placeholder='R$' value={preco} onChange={e => setPreço(e.target.value)} />
                        </div>
                        <div className='butai'><button onClick={cadastrarproduto}>salvar</button></div>

                    </div>
                </div>
            </div>
        </div>

    )
}