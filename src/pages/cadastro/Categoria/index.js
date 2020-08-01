import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const defaultValues = {
    name: '',
    description: '',
    color: '#000',
  };

  const [categories, setCategories] = useState([]);
  const [values, setValues] = useState(defaultValues);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handleChange(e) {
    setValue(e.target.getAttribute('name'), e.target.value);
  }

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

        setValues(defaultValues);
      }}
      >
        <FormField
          label="Nome"
          type="text"
          name="name"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="text"
          name="description"
          as="textarea"
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

        <Button>
          Salvar
        </Button>
      </form>

      <ul>
        {categories.map((category, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={`${category}${index}`}>
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
