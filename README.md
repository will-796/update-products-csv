# Atualização de Preços - Teste Técnico da Shopper

Bem-vindo ao repositório do teste técnico de atualização de preços da Shopper.com.br.

## Índice

- [Atualização de Preços - Teste Técnico da Shopper](#atualização-de-preços---teste-técnico-da-shopper)
  - [Índice](#índice)
  - [Visão Geral](#visão-geral)
  - [Requisitos](#requisitos)
    - [Dependências Frontend](#dependências-frontend)
    - [Dependências Backend](#dependências-backend)
  - [Uso](#uso)
    - [Configuração do Banco de Dados (MySQL)](#configuração-do-banco-de-dados-mysql)
    - [Scripts](#scripts)
      - [Frontend](#frontend)
      - [Backend](#backend)
  - [APIs e Endpoints](#apis-e-endpoints)
  - [Contato](#contato)

## Visão Geral

Este projeto é parte do teste técnico da Shopper.com.br e tem como objetivo criar uma ferramenta para atualização massiva de preços de produtos em um cenário de e-commerce.

## Requisitos

- **Frontend**: Desenvolvido em React.
- **Backend**: Desenvolvido em Node.js com Express.

### Dependências Frontend

- **React**: Biblioteca de JavaScript para construir interfaces de usuário.
- **React DOM**: Biblioteca React para manipulação do DOM.
- **Axios**: Biblioteca para realizar requisições HTTP.
- **React Dropzone**: Componente React para uploads de arquivos.
- **React Modal**: Biblioteca para criar modais em React.
- **Styled Components**: Biblioteca para estilização de componentes em React.

### Dependências Backend

- **Node.js com Express**: Plataforma de aplicação backend.
- **Cors**: Middleware para habilitar o acesso a recursos de origens diferentes.
- **Csv-parse**: Biblioteca para análise de arquivos CSV.
- **Dotenv**: Biblioteca para carregar variáveis de ambiente a partir de um arquivo `.env`.
- **Multer**: Middleware para lidar com o upload de arquivos.
- **MySQL2**: Driver de banco de dados para MySQL.
- **Sequelize**: ORM (Object-Relational Mapping) para Node.js.
- **Sequelize-Typescript**: Extensão do Sequelize que suporta TypeScript.

## Uso

Este projeto consiste em uma página onde você pode fazer upload de um arquivo CSV, seja arrastando o arquivo ou selecionando-o no sistema. Após o upload, clique no botão "Validar". O backend executará as regras de negócios e exibirá um modal com os produtos processados. Se houver erros, eles serão exibidos junto com cada produto em relação à sua validação.

### Configuração do Banco de Dados (MySQL)

Para executar este projeto localmente, você pode optar por configurar um banco de dados MySQL usando um container Docker. Siga os passos abaixo para criar e configurar o banco de dados:

**Passo 1: Instalação do Docker**

Certifique-se de ter o Docker instalado na sua máquina. Se ainda não o tiver, você pode baixá-lo e instalá-lo a partir do [site oficial do Docker](https://www.docker.com/get-started).

**Passo 2: Criação do Container MySQL**

Execute o seguinte comando para criar um container Docker MySQL:

```bash
docker run --name mysql-container -e MYSQL_ROOT_PASSWORD=password -e MYSQL_DATABASE=development_database -p 3306:3306 -d mysql:5.7
```

- `--name mysql-container`: Define o nome do container como `mysql-container`. Você pode escolher um nome diferente, se desejar.
- `-e MYSQL_ROOT_PASSWORD=password`: Define a senha do root como `password`. Certifique-se de escolher uma senha segura.
- `-e MYSQL_DATABASE=development_database`: Define o nome do banco de dados como `development_database`. Você pode escolher um nome diferente, se desejar.
- `-p 3306:3306`: Mapeia a porta 3306 do host para a porta 3306 do container, permitindo que você se conecte ao MySQL.
- `-d mysql:5.7`: Usa a imagem do MySQL versão 5.7 para criar o container.

Agora que o banco de dados MySQL está configurado e as variáveis de ambiente estão atualizadas, você pode seguir as instruções abaixo para executar o projeto localmente:

**Passo a Passo para Rodar o Projeto Localmente**

1. **Clone o Repositório:**

   Clone este repositório Git para a sua máquina local usando o seguinte comando:
   com https:

   ```bash
   git clone https://github.com/will-796/update-products-csv.git
   ```

   ou com ssh:

   ```bash
    git clone git@github.com:will-796/update-products-csv.git
   ```
2. **Configuração das Variáveis de Ambiente (Backend):**

   No diretório `backend`, crie um arquivo `.env` se ele ainda não existir. Abra o arquivo `.env` com um editor de texto e adicione as seguintes variáveis de ambiente com os valores apropriados para o seu ambiente de desenvolvimento:

   ```env
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=password
   DB_DATABASE=development_database
   DB_PORT=3306
   PORT=3000
   ```

   Certifique-se de substituir os valores pelas configurações corretas do seu ambiente.
3. **Instalação das Dependências:**

   No diretório `frontend`, execute o seguinte comando para instalar as dependências do frontend:

   ```bash
   cd frontend
   npm install
   ```

   No diretório `backend`, execute o seguinte comando para instalar as dependências do backend:

   ```bash
   cd backend
   npm install
   npm run resetdb #comando para criar as tabelas e inserir os dados de seed
   ```
4. **Execução do Projeto:**

   - No diretório `frontend`, execute o seguinte comando para iniciar o frontend:

     ```bash
     npm run dev
     ```
   - No diretório `backend`, execute o seguinte comando para iniciar o backend:

     ```bash
     npm run dev
     ```

Agora, o projeto frontend e backend deve estar rodando localmente e você pode acessá-lo em seu navegador. O frontend estará disponível em [http://localhost:5173/](http://localhost:5173/) e o backend estará disponível em [http://localhost:3000/](http://localhost:3000/).

### Scripts

para executar os scripts, você deve estar no diretório `frontend` ou `backend`. E então, execute o comando `npm run <script>`. Os scripts disponíveis são:

#### Frontend

- `dev`: Inicia o ambiente de desenvolvimento usando Vite.
- `build`: Compila o projeto TypeScript e cria uma versão de produção usando Vite.
- `lint`: Executa a análise estática de código com ESLint.
- `preview`: Inicia um servidor de visualização de produção com Vite.

#### Backend

- `dev`: Inicia o servidor de desenvolvimento usando `ts-node-dev`.
- `build-config`: Compila o arquivo de configuração TypeScript para JavaScript.
- `cleanup-config`: Remove o arquivo de configuração JavaScript gerado.
- `migrate`: Compila o arquivo de configuração, executa as migrações do banco de dados e remove o arquivo de configuração JavaScript.
- `drop`: Compila o arquivo de configuração, remove o banco de dados e remove o arquivo de configuração JavaScript.
- `resetdb`: Executa as etapas de redefinição do banco de dados, incluindo a criação de tabelas e a inserção de dados de seed.

Certifique-se de executar esses comandos conforme necessário ao desenvolver e implantar o projeto frontend e backend.

## APIs e Endpoints

- API: O backend utiliza o endpoint [localhost:3000](http://localhost:3000/)
- Frontend: O frontend utiliza o endpoint padrão do Vite [http://localhost:5173/](http://localhost:5173/)
- Backend:
  - `/validation`: Endpoint para validar os dados do arquivo CSV.
  - `/update`: Endpoint para atualizar os preços dos produtos.

## Contato

Se você tiver alguma dúvida ou precisar de assistência com o projeto frontend ou backend, entre em contato:

- Nome: Willian Portela Cruz
- Email: <willianportela1@gmail.com>
- GitHub: [will-796](https://github.com/will-796)
- LinkedIn: [Willian Portela](https://www.linkedin.com/in/willian-portela)
