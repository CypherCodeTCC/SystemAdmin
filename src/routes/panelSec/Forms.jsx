import { useState } from "react";
import axios from "axios";

import { Button, Card, CardPublishing, Input } from "./panelStyle";

export default function Forms({ selectedForm }) {
  const [formData, setFormData] = useState({
    book: {
      name: "",
      synopsis: "",
      price: "",
      qtd: "",
      author: "",
      publishingCompany: "",
      genre: "",
      image: null,
    },
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
      [selectedForm === 1 ? "book" : selectedForm === 2 ? "genre" : "publisher"]: {
        ...prevData[selectedForm === 1 ? "book" : selectedForm === 2 ? "genre" : "publisher"],
        [name]: value,
      },
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      book: {
        ...prevData.book,
        image: file,
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataToSubmit =
      selectedForm === 1 ? { ...formData.book } :
        selectedForm === 2 ? formData.genre : { name: formData.publisher.name };

    try {
      if (selectedForm === 1) {

        const publishingResponse = await axios.get("https://node-routes-mysql.vercel.app/publishingcompany");
        const publishingCompanies = publishingResponse.data;
        const publishingCompany = publishingCompanies.find(
          (company) => company.name.toLowerCase() === formData.book.publishingCompany.toLowerCase()
        );

        if (!publishingCompany) {
          alert("Editora não encontrada.");
          return;
        }
        dataToSubmit.id_publishing_company = publishingCompany.id;

        const authorResponse = await axios.get("https://node-routes-mysql.vercel.app/author");
        const authors = authorResponse.data;
        const author = authors.find(
          (author) => author.name.toLowerCase() === formData.book.author.toLowerCase()
        );

        if (!author) {
          alert("Autor não encontrado.");
          return;
        }
        dataToSubmit.id_author = author.id

        const genreResponse = await axios.get("https://node-routes-mysql.vercel.app/genre");
        const genres = genreResponse.data;
        const genre = genres.find(
          (genre) => genre.name.toLowerCase() === formData.book.genre.toLowerCase()
        );

        if (!genre) {
          alert("Gênero não encontrado.");
          return;
        }
        dataToSubmit.id_genre = genre.id;

        delete dataToSubmit.publishingCompany;
        delete dataToSubmit.author;
        delete dataToSubmit.genre;

        const formDataToSend = new FormData();
        formDataToSend.append("image", formData.book.image);

        const imageResponse = await axios.post("https://node-routes-mysql.vercel.app/book/images", formDataToSend);

        delete dataToSubmit.image;
        dataToSubmit.name_image = imageResponse.data;

        const url = "https://node-routes-mysql.vercel.app/book";

        await axios.post(url, dataToSubmit);

        alert("Livro cadastrado com sucesso!");
        window.location.reload();
      }

      const url =
        selectedForm === 2
          ? "https://node-routes-mysql.vercel.app/genre"
          : "https://node-routes-mysql.vercel.app/publishingcompany";

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
              <h2>
                Adicione um livro ao sistema!
              </h2>
            <Card>
              <h3>Titulo do Livro</h3>
              <Input type="text" placeholder="Apenas letras" onChange={handleChange} name="name" value={formData.book.name} />
            </Card>
            <Card>
              <h3>Sinopse</h3>
              <Input type="text" placeholder="Apenas letras" onChange={handleChange} name="synopsis" value={formData.book.synopsis} />
            </Card>
            <Card>
              <h3>Preço</h3>
              <Input type="text" placeholder="Apenas letras" onChange={handleChange} name="price" value={formData.book.price} />
            </Card>
            <Card>
              <h3>Quantidade</h3>
              <Input type="number" placeholder="Apenas letras" onChange={handleChange} name="qtd" value={formData.book.qtd} />
            </Card>
            <Card>
              <h3>Nome do Autor</h3>
              <Input type="text" placeholder="Apenas letras" onChange={handleChange} name="author" value={formData.book.author} />
            </Card>
            <Card>
              <h3>Editora</h3>
              <Input type="text" placeholder="Apenas letras" onChange={handleChange} name="publishingCompany" value={formData.book.publishingCompany} />
            </Card>
            <Card>
              <h3>Gênero</h3>
              <Input type="text" placeholder="Apenas letras" onChange={handleChange} name="genre" value={formData.book.genre} />
            </Card>
            <Card>
              <h3>Imagem</h3>
              <Input type="file" onChange={handleFileChange} name="image" />
            </Card>
            <Button onClick={handleSubmit}>Adicionar</Button>
          </>
        );
      case 2:
        return (
          <>
              <h2>
                Adicione um gênero ao sistema!
              </h2>
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
              <h2>
                Adicione uma editora ao sistema!
              </h2>
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
