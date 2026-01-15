document.addEventListener('DOMContentLoaded', () => {
    
    const loginForm = document.getElementById('loginForm');

    // CREDENCIAIS (Aqui você define a senha)
    const emailAdmin = "admin@stark.com";
    const senhaMestra = "membros2026"; 

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Impede a página de recarregar
        
        const emailDigitado = document.getElementById('email').value;
        const senhaDigitada = document.getElementById('password').value;

        // LÓGICA DE VERIFICAÇÃO
        if(emailDigitado === emailAdmin && senhaDigitada === senhaMestra) {
            
            console.log("Login Aprovado");
            
            // --- O PULO DO GATO ---
            // Essa linha manda o usuário para o arquivo que você colou na pergunta
            window.location.href = "dashboard.html"; 

        } else {
            // Se errar a senha
            console.log("Login Recusado");
            alert("ACESSO NEGADO: E-mail ou senha incorretos.");
            document.getElementById('password').value = "";
        }
    });

});