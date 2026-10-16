
document.addEventListener("DOMContentLoaded", function () {

    // 1. Seleciona os elementos do HTML
    const pesquisa = document.getElementById("pesquisa");
    const categoria = document.getElementById("categoria");
    const produtos = document.querySelectorAll(".produto");
    const mensagemVazia = document.getElementById("mensagemVazia");

    // 2. Pesquisa e filtro de produtos
    function filtrarDoces() {

        const termoPesquisa = pesquisa.value
            .trim()
            .toLocaleLowerCase("pt-BR");

        const categoriaSelecionada = categoria.value;

        let quantidadeVisivel = 0;

        produtos.forEach(function (produto) {

            const nome = produto.dataset.nome
                .toLocaleLowerCase("pt-BR");

            const categoriaProduto = produto.dataset.categoria;

            // Verifica se o nome corresponde à pesquisa
            const correspondePesquisa =
                nome.includes(termoPesquisa);

            // Verifica se corresponde à categoria selecionada
            const correspondeCategoria =
                categoriaSelecionada === "todos" ||
                categoriaProduto === categoriaSelecionada;

            // O produto precisa atender aos dois critérios
            const mostrarProduto =
                correspondePesquisa && correspondeCategoria;

            // Mostra ou esconde o card
            produto.classList.toggle(
                "d-none",
                !mostrarProduto
            );

            if (mostrarProduto) {
                quantidadeVisivel++;
            }
        });

        // Exibe uma mensagem caso nenhum produto seja encontrado
        mensagemVazia.classList.toggle(
            "d-none",
            quantidadeVisivel > 0
        );
    }

    // 3. Ativa a pesquisa enquanto o usuário digita
    pesquisa.addEventListener("input", filtrarDoces);

    // 4. Ativa o filtro quando a categoria muda
    categoria.addEventListener("change", filtrarDoces);

    // 5. Configura o modal de detalhes
    const modalDoce = document.getElementById("modalDoce");

    modalDoce.addEventListener("show.bs.modal", function (evento) {

        const botao = evento.relatedTarget;
        const produto = botao.closest(".produto");

        // Obtém os dados do produto selecionado
        const nome = produto.dataset.nome;
        const descricao = produto.dataset.descricao;
        const preco = produto.dataset.preco;

        // Atualiza o conteúdo do modal
        document.getElementById("tituloModal").textContent = nome;

        document.getElementById("descricaoModal").textContent =
            descricao;

        document.getElementById("precoModal").textContent =
            "R$ " + preco;
    });

});
