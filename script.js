document.addEventListener('DOMContentLoaded', () => {
    
    const loginForm = document.getElementById('loginForm');

    // DEFININDO AS CREDENCIAIS PADRÃO (HARDCODED)
    // Você pode alterar esses valores para o que quiser
    const emailAdmin = "admin@stark.com";
    const senhaMestra = "membros2026"; 

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Impede a página de recarregar
        
        const emailDigitado = document.getElementById('email').value;
        const senhaDigitada = document.getElementById('password').value;

        // LÓGICA DE VERIFICAÇÃO
        // Verifica se o E-mail E (&&) a Senha batem com o padrão
        if(emailDigitado === emailAdmin && senhaDigitada === senhaMestra) {
            
            // Sucesso
            console.log("Login Aprovado");
            alert("ACESSO PERMITIDO! Bem-vindo à área de membros.");
            
            // Aqui seria o redirecionamento:
            // window.location.href = "dashboard.html";

        } else {
            
            // Erro
            console.log("Login Recusado");
            alert("ACESSO NEGADO: E-mail ou senha incorretos.");
            
            // Limpa o campo de senha para a pessoa tentar de novo
            document.getElementById('password').value = "";
        }
    });

});