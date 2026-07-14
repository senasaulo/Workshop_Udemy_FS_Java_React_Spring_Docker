# ImageLite - Full Stack Java + React + Docker

Projeto desenvolvido durante o workshop **"Spring Boot + ReactJS: Fullstack do Zero ao Deploy no Docker"**, ministrado pelo professor **Dougllas Sousa** (Udemy).

Além de acompanhar as aulas, realizei diversas adaptações para modernizar o projeto e reorganizar sua estrutura, utilizando versões mais recentes das tecnologias e uma organização mais modular dos arquivos.

## 🚀 Tecnologias

### Backend

* Java 25
* Spring Boot 4.1
* Maven 3.15.0
* Spring Security
* Spring Data JPA
* JWT
* PostgreSQL

### Frontend

* Next.js
* React
* TypeScript
* Axios
* Formik

### DevOps

* Docker
* Docker Compose

## 📂 Estrutura do Projeto

```text
imagelite/          -> Frontend
imageliteapi/       -> Backend
imagelitedb/        -> Dados persistentes do PostgreSQL
start_imagelite/    -> Docker Compose e inicialização do ambiente
```

## 🔨 Modificações realizadas

Em relação ao projeto desenvolvido no workshop, foram realizadas as seguintes alterações:

* Atualização do **Java para a versão 25**;
* Atualização para **Spring Boot 4.1**;
* Atualização para **Maven 3.15.0**;
* Atualização das dependências do frontend;
* Separação do banco de dados em uma pasta exclusiva (`imagelitedb`) para manter a persistência dos dados, e para salvar possiveis futuros backups(não implementado);
* Criação de uma pasta dedicada (`start_imagelite`) para centralizar o `docker-compose.yml`;
* Reorganização da estrutura do projeto para facilitar manutenção e escalabilidade;
* Adequação dos arquivos Docker para funcionar com as versões mais recentes das ferramentas.

## ▶️ Como executar

Clone o repositório:

```bash
git clone https://github.com/senasaulo/Workshop_Udemy_FS_Java_React_Spring_Docker.git
```

Acesse a pasta do Docker Compose:

```bash
cd start_imagelite
```

Inicie os containers:

```bash
docker compose up --build
```

ou em segundo plano:

```bash
docker compose up -d --build
```

## 🙏 Créditos

Este projeto foi desenvolvido com base no workshop **Spring Boot + ReactJS: Fullstack do Zero ao Deploy no Docker**, do professor **Dougllas Sousa**, disponível na Udemy.

As adaptações e reorganizações presentes neste repositório foram realizadas por mim com o objetivo de atualizar o projeto para versões mais recentes das tecnologias e aprimorar sua organização.
