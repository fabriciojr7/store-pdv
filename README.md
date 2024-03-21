# Store-PDV

# Sobre o projeto

https://store-pdv.vercel.app/

Store PDV é uma aplicação simples para gerenciamento de produtos, e posteriormente venda desses produtos, possuindo um ponto de venda (PDV) para realizar as mesmas, para a execução do projeto foi utilizada a api API Fake Store API para gerenciamento dos produtos, visto que não é possivel realmente realizar operações dentro do banco de dados que façam alterações, a api é chamada e então exibida mensagens de sucesso ou erro dependendo do retorno da api, porem essas alterações não seram vizualizadas em tela como a remoção, alteração e criação de novos produtos.
A aplicação é totalmente responsiva para utilização em dispositivos móveis.

## Layout web
![Screenshot from 2024-03-21 18-17-02](https://github.com/fabriciojr7/store-pdv/assets/54858776/322b0451-a1d4-4316-8b3e-d7bfeffab4aa)

![Screenshot from 2024-03-21 18-17-20](https://github.com/fabriciojr7/store-pdv/assets/54858776/b7c1ff39-0828-4768-985b-48f460a62e0a)

![Screenshot from 2024-03-21 18-17-27](https://github.com/fabriciojr7/store-pdv/assets/54858776/7c26b9d9-c0eb-4e90-bb72-c1c0ef153315)

![Screenshot from 2024-03-21 18-17-33](https://github.com/fabriciojr7/store-pdv/assets/54858776/82763853-27fd-4336-8cf1-2ff357a1416d)

![Screenshot from 2024-03-21 18-17-43](https://github.com/fabriciojr7/store-pdv/assets/54858776/c16f73c8-3f89-44d7-9069-e3093b00a45d)

# Tecnologias utilizadas

## Front end
- HTML / CSS / JS / TypeScript
- ReactJS / NextJs
- Tailwindcss
- React-hook-form
- React-Query: Utilizado para o gerencimento de estado da API
- Zod: Utilizado para validações de formulario
- Zustand: Utilizado para gerencimanto de dados dentro da aplicação.
- NextAuth.js: Utilizado para a autenticação do usuario, no caso será feita autenticação com o google
- React-toastify

## Implantação em produção
- Front end web: Vercel

# Como executar o projeto

## Front end web
Pré-requisitos: node / npm / yarn

```bash
# clonar repositório
git clone https://github.com/fabriciojr7/store-pdv

# entrar na pasta do projeto front end web
cd store-pdv

#Necessario criar uma chave secreta do google para realizar a autenticação, adicionar as chaves no .env, um exemplo das chaves necessarias está no env.exemple

# instalar dependências
yarn

# executar o projeto
yarn dev
```

# Autor

Fabrício Pereira dos Santos Júnior
