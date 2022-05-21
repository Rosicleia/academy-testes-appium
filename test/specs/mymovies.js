describe("Primeiro teste", () => {
    it("Verifica se o título do app é MyMoviesApp", async () => {
        const textoTitulo = await $("android.widget.TextView").getText();
        expect(textoTitulo).toBe("MyMoviesApp");
    });

    xit("Verificar se o botão de filtro funciona", async () => {
       await $("id=filter_image_button").click();
       const visibilidadeBotao = await $("id=clear_button").isDisplayed();
       expect(visibilidadeBotao).toBe(true);
       // Testar se o texto do botão de limpar filtro está correto - Feito por Rosicléia, Amanda, Anna Clara e Mateus Godoi
       const textoBotao = await $("id=clear_button").getText();
       expect(textoBotao).toBe("CLEAR");       
    });

    xit("Deve ser possível selecionar o gênero 'Action'", async () => {
        await $("id=filter_image_button").click();
        await $('android=new UiSelector().text("Action").className("android.widget.TextView")').click();
        await $("id=poster_image_view").click();
        //verificar se um filme de ação foi exibido na tela de detalhe de filme - Feito por Rosicléia, Amanda, Anna Clara e Mateus Godoi
        const nomeFilme = await $("id=title_text_view").getText();
        expect(nomeFilme).toBe("Top Gun: Maverick");
        
    });

    it("Deve ser possível verificar se a tela exibe a quantidade de estrelas do filme", async () => {
        //verificar se após exibir o detalhe de um filme, a quantidade de estrelas é exibida.
        const qtdEstrelas = await $("id=vote_average_rating_bar")

        expect(qtdEstrelas).toBe(true);
    });

});