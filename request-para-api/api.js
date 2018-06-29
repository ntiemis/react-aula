const imagem = document.querySelector ("#carta");
//GET
fetch("https://deckofcardsapi.com/api/deck/p6yx7ru5xq91/draw/").then(promessa => promessa.json()).then
(dados => {
    console.log(imagem);
    console.log(dados.cards[0].image);
    imagem.src = dados.cards[0].image;
});

//POST
fetch("http://endereçodopost.com/",{
    headers: {
        "Content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify(seu_objeto_de_body);
}).then(promessa => promessa.json()).then
(dados => {

    // Digite aqui o que vai fazer com os dados.

});
