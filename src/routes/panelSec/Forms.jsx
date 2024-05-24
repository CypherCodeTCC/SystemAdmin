import { useState } from "react";
import axios from "axios";

import { Button, Card, CardPublishing, Input } from "./panelStyle";

export default function Forms({ selectedForm }) {
  const [formData, setFormData] = useState({
    genre: {
      name: "",
      description: "",
    },
    publisher: {
      name: "",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [selectedForm === 2 ? "genre" : "publisher"]: {
        ...prevData[selectedForm === 2 ? "genre" : "publisher"],
        [name]: value,
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataToSubmit =
      selectedForm === 2 ? formData.genre : { name: formData.publisher.name };

    try {
      console.log(dataToSubmit);

      const url =
        selectedForm === 2
          ? "http://localhost:8081/genre"
          : "http://localhost:8081/publishingcompany";

      await axios.post(url, dataToSubmit);

      if (selectedForm === 2) alert("Gênero cadastrado com sucesso!");
      else alert("Editora cadastrada com sucesso!");

      location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  //RENDERIZA O COMPONENTE DE ACORDO COM O QUE ESTÁ SELECIONADO
  const renderForm = () => {
    switch (selectedForm) {
      case 1:
        return (
          <>
            <Card>
              <h3>Nome do autor</h3>
              <Input type="text" placeholder="Apenas letras" />
            </Card>
            <Card>
              <h3>Descrição</h3>
              <Input type="text" placeholder="Apenas letras" />
            </Card>
            <Card>
              <h3>Título do livro</h3>
              <Input type="text" placeholder="Apenas letras" />
            </Card>
            <Card>
              <h3>Editora</h3>
              <Input type="text" placeholder="Apenas letras" />
            </Card>
            <Button>Adicionar</Button>
          </>
        );
      case 2:
        return (
          <>
            <Card>
              <h3>Nome do gênero</h3>
              <Input
                type="text"
                placeholder="Apenas letras"
                onChange={handleChange}
                name="name"
                value={formData.genre.name}
              />
            </Card>
            <Card>
              <h3>Descrição</h3>
              <Input
                type="text"
                placeholder="Apenas letras"
                onChange={handleChange}
                name="description"
                value={formData.genre.description}
              />
            </Card>
            <Button onClick={handleSubmit}>Adicionar</Button>
          </>
        );
      case 3:
        return (
          <>
            <CardPublishing>
              <h3>Nome da editora</h3>
              <Input
                type="text"
                placeholder="Apenas letras"
                onChange={handleChange}
                name="name"
                value={formData.publisher.name}
              />
            </CardPublishing>
            <Button onClick={handleSubmit}>Adicionar</Button>
          </>
        );
      default:
        return null;
    }
  };

  return <>{renderForm()}</>;
}
