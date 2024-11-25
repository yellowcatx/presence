function login() {
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;
    var modal = document.getElementById('loadingModal');

    if (login === 'admin' && senha === 'admin') {
        // Exibe o modal de carregamento
        modal.style.display = 'flex';

        // Simula um carregamento com setTimeout
        setTimeout(function () {
            modal.style.display = 'none'; // Esconde o modal
            window.location.href = 'home.html';

 
            // Aqui você pode redirecionar para outra página, se quiser:
            // window.location.href = "pagina.html";
        }, 2000); // Tempo de 2 segundos para simular processamento
    } else {

    }
}
