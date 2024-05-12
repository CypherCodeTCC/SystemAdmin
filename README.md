Guia de Instruções para Iniciar o Projeto 🚀
Pré-requisitos
Antes de começar, certifique-se de ter o Node.js instalado em seu sistema. Se você ainda não o tem, pode baixá-lo e instalá-lo a partir do site oficial do Node.js.

Instalação

Clone este repositório para o seu ambiente local:
git clone https://github.com/CypherCodeTCC/SystemAdmin
Use o seguinte comando:
cd SystemAdmin
Instalando Dependências
Antes de iniciar o projeto, instale as dependências necessárias.

No terminal, execute o seguinte comando:
npm install
Rodando o Projeto
Após a instalação das dependências, você pode iniciar o servidor de desenvolvimento.

No terminal, execute o seguinte comando:

npm run dev
Isso iniciará o servidor de desenvolvimento e abrirá automaticamente o seu navegador padrão com o projeto em execução. Qualquer alteração feita nos arquivos será refletida no navegador. 😊

Estrutura de Pasta do Projeto
Este projeto segue uma estrutura de pasta organizada para facilitar o desenvolvimento, manutenção e escalabilidade do código. Abaixo está a descrição da estrutura de pasta e o propósito de cada diretório:

public
O diretório public contém todas as imagens usadas no projeto.

src
O diretório src contém todo o código-fonte do projeto.

components
O diretório components contém todos os componentes que serão renderizados independentemente da rota acessada. Cada componente presente nesta pasta tem seu próprio diretorio e sua própria estilização.

routes
O diretório routes contém todos os componentes que são renderizados a partir de uma rota, ou seja, eles não são renderizados de forma integral em todas as áreas. Cada componente presente nesta pasta tem seu próprio diretório e sua própria estilização.

Esta estrutura de pasta foi projetada para oferecer uma organização clara e escalável do código, facilitando a manutenção e o desenvolvimento contínuo do projeto.
