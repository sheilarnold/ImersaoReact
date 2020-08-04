import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../Components/PageDefault';
import FormField from '../../../Components/FormField';
import Button from '../../../Components/Button';

function CadastroCategoria() {
    const valores = {
        nome: '',
        descricao: '',
        cor: '',
    }
    const [categorias, setCategorias] = useState([]);
    const [values, setValues] = useState(valores);

    function setValue(chave, valor) {
        setValues({
            ...values,
            [chave]: valor,
        })        
    }

    function capturarMudancas(infoEvento){
        setValue(
            infoEvento.target.getAttribute('name'),
            infoEvento.target.value
        );
    }

    useEffect(() => {
        if(window.location.href.includes('localhost')) {
          const URL = 'https://sheila-imersao-react.herokuapp.com/categorias'; 
          fetch(URL)
           .then(async (respostaDoServer) =>{
            if(respostaDoServer.ok) {
              const resposta = await respostaDoServer.json();
              setCategorias(resposta);
              return; 
            }
            throw new Error('Tivemos problemas técnicos ao acessar os dados referente à categorias :( Por favor, tente novamente mais tarde :)');
           })
        }    
      }, []);

    return (
        <PageDefault>
        <h1>Cadastro de Categoria: {values.nome}</h1>

        <form onSubmit={function handleSubmit(infoEvento){
            infoEvento.preventDefault();
            setCategorias([
                ...categorias,
                values
            ]);
            setValues({valores});
        }}>
            <FormField
                titulo="Nome da Categoria: "
                type="text"
                name="nome"
                value={values.nome}
                onChange={capturarMudancas}
            />
            
            <FormField
                titulo="Descricao: "
                type="textarea"
                name="descricao"
                value={values.descricao}
                onChange={capturarMudancas}
            />

            {/*<div>
                <label>
                    Descrição:
                    <input
                        type="text"
                        name="descricao"
                        value={values.descricao}
                        onChange={capturarMudancas}
                    />
                </label>
            </div>*/}

            <FormField
                titulo="Cor: "
                type="color"
                name="cor"
                value={values.cor}
                onChange={capturarMudancas}
            />
            {/*<div>
                <label>
                    Cor:
                    <input
                        type="color"
                        value={values.cor}
                        onChange={capturarMudancas}
                    />
                </label>
            </div>*/}
            <Button style={{background: '#000000'}}>
            Cadastrar
            </Button>
        </form>

        <ul>
            {categorias.map((categoria, indice) => {
                return(
                    <li key={`${categoria}${indice}`}>
                        {categoria.titulo}
                    </li>
                )
            })}
        </ul>

        <Link to="/">
            Ir para home
        </Link>
        </PageDefault>
    )
}

export default CadastroCategoria;