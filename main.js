// 1. Seletores
const postForm = document.querySelector('#post-form');
const inputTitulo = document.querySelector('#titulo');
const inputConteudo = document.querySelector('#conteudo');

// Seletores para renderização
const tituloRenderizar = document.querySelector('#renderizador-titulo');
const conteudoRenderizar = document.querySelector('#renderizador-conteudo');
const statusEnvio = document.querySelector('#status-envio');

// 2. Evento de Submit
postForm.addEventListener('submit', (event) => {
    // 2.3 Prevenir comportamento padrão
    event.preventDefault();

    // 2.4 Montagem do Objeto (conforme especificação)
    const data = {
        title: inputTitulo.value,
        body: inputConteudo.value,
        userId: 1
    };

    // 2.5 Chamada Fetch com API
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => {
        if (!response.ok) throw new Error("Erro na requisição");
        return response.json();
    })
    .then(jsonRetornado => {
        // Mágica da Renderização
        console.log("Sucesso:", jsonRetornado);
        
        // Atribuindo os valores retornados aos elementos HTML
        tituloRenderizar.innerHTML = jsonRetornado.title;
        conteudoRenderizar.innerHTML = jsonRetornado.body;
        
        statusEnvio.innerHTML = "✅ Post enviado com sucesso para a API!";
        
        // Limpar os campos do formulário após o post
        postForm.reset();
    })
    .catch(error => {
        console.error("Erro:", error);
        statusEnvio.innerHTML = "❌ Erro ao enviar post.";
    });
});