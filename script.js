document.addEventListener('DOMContentLoaded', () => {
    
    const loginForm = document.getElementById('loginForm');

    // CREDENCIAIS
    const emailAdmin = "admin@stark.com";
    const senhaMestra = "membros2026"; 

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Impede a página de recarregar
        
        const emailDigitado = document.getElementById('email').value;
        const senhaDigitada = document.getElementById('password').value;

        // LÓGICA DE VERIFICAÇÃO
        if(emailDigitado === emailAdmin && senhaDigitada === senhaMestra) {
            
            // Sucesso
            console.log("Login Aprovado");
            
            // Opcional: Você pode remover o alert abaixo se quiser que entre direto sem avisar
            alert("ACESSO PERMITIDO! Redirecionando...");
            
            // --- AQUI ESTÁ A MUDANÇA ---
            // O comando abaixo diz ao navegador: "Vá para a página dashboard.html"
            window.location.href = "dashboard.html";

        } else {
            
            // Erro
            console.log("Login Recusado");
            alert("ACESSO NEGADO: E-mail ou senha incorretos.");
            
            // Limpa o campo de senha
            document.getElementById('password').value = "";
        }
    });

});