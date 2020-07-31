import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../Components/PageDefault';
import FormField from '../../../Components/FormField';

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

    return (
        <PageDefault>
        <h1>Cadastro de Categoria: {values.nome}</h1>

        <form style={{background: values.cor}} onSubmit={function handleSubmit(infoEvento){
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
                type="text"
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
            <button>
            Cadastrar
            </button>
        </form>

        <ul>
            {categorias.map((categoria, indice) => {
                return(
                    <li key={`${categoria}${indice}`}>
                        {categoria.nome}
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