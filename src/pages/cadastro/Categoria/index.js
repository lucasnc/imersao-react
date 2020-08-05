import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

function CadastroCategoria() {
  const defaultValues = {
    name: '',
    description: '',
    color: '#000',
  };

  const { handleChange, values, clearForm } = useForm(defaultValues);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const baseUrl = 'http://localhost:8080/categorias';

    fetch(baseUrl)
      .then(async (response) => {
        const res = await response.json();
        setCategories([...res]);
      });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        setCategories([...categories, values]);

        clearForm(defaultValues);
      }}
      >
        <FormField
          label="Nome"
          type="text"
          name="name"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="text"
          name="description"
          as="textarea"
          value={values.descricao}
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

        <Button className="ButtonLink">
          Salvar
        </Button>
      </form>

      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            {category.name}
          </li>
        ))}
      </ul>
      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
