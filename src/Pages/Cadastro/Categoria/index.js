import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../Components/PageDefault';

function CadastroCategoria() {
    const [categorias, setCategorias] = useState(['teste']);
    
    const valores = {
        nome: 'Cat',
        descricao: 'Cat Cat dogao',
        cor: '#000',
    }

    let [values, setValues] = useState(valores);

    return (
        <PageDefault>
        <h1>Cadastro de Categoria: {values.nome}</h1>

        <form style={{background: values.cor}} onSubmit={function ahndleSubmit(infoEvento){
            infoEvento.preventDefault();
            setCategorias([
                ...categorias,
                values
            ]);
        }}>
            <div>
                <label>
                Nome da Categoria:
                <input
                    type="text"
                    value={values.nome}
                    onChange={function cadCategoria(infoEvento){
                            setValues(infoEvento.target.value)
                        }
                    }
                />
                </label>
            </div>
            <div>
                <label>
                    Descrição:
                    <input
                        type="text"
                        value={values.descricao}
                        onChange={function cadCategoria(infoEvento){
                                setValues(infoEvento.target.value)
                            }
                        }
                    />
                </label>
            </div>
            <div>
                <label>
                    Cor:
                    <input
                        type="color"
                        value={values.cor}
                        onChange={function cadCategoria(infoEvento){
                                setValues(infoEvento.target.value)
                            }
                        }
                    />
                </label>
            </div>
            <button>
            Cadastrar
            </button>
        </form>

        <ul>
            {categorias.map((categoria, indice) => {
                return(
                    <li key={`${categoria}${indice}`}>
                        {categoria}
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