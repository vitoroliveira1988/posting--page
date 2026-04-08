# 📝 Posting Page - Integração com API

Este projeto simula a funcionalidade de criação de postagens de redes sociais (como Facebook ou LinkedIn), permitindo que o usuário insira um título e um conteúdo e visualize a renderização do post após uma comunicação real com uma API externa.

## 🚀 Sobre o Projeto

O objetivo principal deste desafio foi aplicar os conceitos fundamentais do Front-end:
1.  **HTML5**: Estrutura semântica para formulários e exibição de dados.
2.  **CSS3**: Estilização moderna e feedback visual para o usuário.
3.  **JavaScript (ES6+)**: Manipulação do DOM, eventos e consumo de API via `fetch`.

## 🛠️ Tecnologias Utilizadas

* [HTML5](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
* [CSS3](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
* [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
* [JSONPlaceholder API](https://jsonplaceholder.typicode.com/) - API falsa gratuita para testes e prototipagem.

## ⚙️ Funcionalidades

- **Captura de Dados**: O usuário preenche o título e o corpo do texto.
- **Prevenção de Recarregamento**: Uso de `preventDefault()` para uma experiência Single Page Application (SPA).
- **Comunicação Assíncrona**: Envio de uma requisição `POST` para a API.
- **Renderização Dinâmica**: Assim que a API retorna o sucesso da operação, o conteúdo é exibido na tela sem recarregar a página.

## 📂 Como executar o projeto

1.  Clone este repositório:
    ```bash
    git clone [https://github.com/SEU-USUARIO/posting--page.git](https://github.com/SEU-USUARIO/posting--page.git)
    ```
2.  Navegue até a pasta do projeto.
3.  Abra o arquivo `index.html` no seu navegador ou utilize a extensão **Live Server** no VS Code para uma melhor experiência.

## 🧠 Aprendizados Técnicos

Neste projeto, pude praticar:
- O uso do método `fetch()` com configurações de `method`, `body` e `headers`.
- A conversão de objetos JavaScript para strings JSON através do `JSON.stringify()`.
- O tratamento de promessas com `.then()` e `.catch()`.

---
Desenvolvido por [Seu Nome] - 2026
