import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
    const defaultValues = {
        name: '',
        description: '',
        color: '#000',
    }

    const [categories, setCategories] = useState([]);
    const [values, setValues] = useState(defaultValues);

    function setValue(key, value) {
        setValues({
            ...values,
            [key]: value,
        })
    }

    function handleChange(e) {
        setValue(e.target.getAttribute('name'), e.target.value)
    }

    return (
        <PageDefault>
            <h1>Cadastro de Categoria</h1>
            <form onSubmit={(e) => {
                e.preventDefault()
                setCategories([...categories, values])

                setValues(defaultValues)
            }}>
                <FormField 
                    label="Nome"
                    type="text"
                    name="name"
                    value={values.nome}
                    onChange={handleChange}
                />

                <FormField 
                    label="Descrição"
                    type="textarea"
                    name="description"
                    value={values.description}
                    onChange={handleChange}
                />
                {/* <div>
                    <label>
                        Descrição
                        <textarea 
                            type="text"
                            name="description"
                            value={values.description}
                            onChange={(e) => {
                                setValue(e.target.getAttribute('name'), e.target.value)
                            }}

                        />
                    </label> */}

                <FormField 
                    label="Cor"
                    type="color"
                    name="color"
                    value={values.color}
                    onChange={handleChange}
                />


                <button>
                    Salvar
                </button>
            </form>

            <ul>
                {categories.map((category, index) => {
                    return (
                        <li key={`${category}${index}`}>
                            {category.name}
                        </li>
                    );
                })}
            </ul>
            <Link to="/">
                Ir para home
            </Link>
        </PageDefault>
    );
}

export default CadastroCategoria;