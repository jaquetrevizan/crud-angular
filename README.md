<h1 align="center"> CRUD de Contatos - Angular</h1>
<p align="center">Aplicação de exemplo para gerenciamento de contatos (nome e telefone) utilizando Angular 10 e JSON Server.</p>

---

<p align="center">
  <img src="https://img.shields.io/badge/Angular-10-DD0031?logo=angular" alt="Angular">
  <img src="https://img.shields.io/badge/TypeScript-4-blue?logo=typescript" alt="TypeScript">
  <img src="https://img.shields.io/badge/JSON%20Server-mock-lightgrey" alt="JSON Server">
</p>

---

## Objetivo

Este projeto foi desenvolvido com o foco em:

- Demonstrar operações **CRUD** (Create, Read, Update, Delete) no Angular.
- Integrar o frontend com um backend fake utilizando **JSON Server**.
- Explorar Angular Material para construção de uma interface simples e funcional.

---

## Funcionalidades

- **Criar contato** → adicionar novo contato com nome e telefone.  
- **Listar contatos** → visualizar todos os contatos cadastrados.  
- **Editar contato** → atualizar informações de um contato existente.  
- **Excluir contato** → remover um contato da lista.  

---

## Tecnologias Utilizadas

- [Angular 10](https://angular.io/): framework para construção do frontend.  
- [TypeScript](https://www.typescriptlang.org/): linguagem utilizada no desenvolvimento.  
- [Angular Material](https://material.angular.io/): componentes de UI.  
- [RxJS](https://rxjs.dev/): programação reativa.  
- [JSON Server](https://github.com/typicode/json-server): backend fake para simulação de API REST.  

---

## Estrutura de Dados

Exemplo de contato armazenado no `backend.json`:

```json
{
  "id": 1,
  "name": "Rafael",
  "phone": "11 123456789"
}
````

---

## Instalação e Execução

**Pré-requisitos:**

* [Node.js](https://nodejs.org/)
* [Angular CLI](https://angular.io/cli)
* [JSON Server](https://github.com/typicode/json-server)

**Passos:**

```bash
# Clone o repositório
git clone https://github.com/jaquetrevizan/crud-angular.git

# Acesse o diretório do projeto
cd crud-angular

# Instale as dependências
npm install

# Inicie o backend fake (JSON Server)
npx json-server --watch backend.json

# Em outro terminal, execute a aplicação Angular
ng serve
```

Aplicação disponível em:
`http://localhost:4200`
API Fake disponível em:
`http://localhost:3000/contacts`

---

## Dúvidas & Sugestões

* Se tiver alguma ideia para melhorar este projeto ou encontrar algum problema, fique à vontade para abrir uma issue aqui no repositório.
* Para dúvidas mais diretas, você também pode me escrever em: **[trevizan.jaqueline@gmail.com](mailto:trevizan.jaqueline@gmail.com)**.
