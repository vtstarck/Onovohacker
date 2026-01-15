// Aguarda o carregamento completo do DOM (opcional, mas boa prática)
document.addEventListener('DOMContentLoaded', () => {
    
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Impede a página de recarregar
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Simulação de verificação
        if(email && password) {
            console.log("Tentativa de login efetuada.");
            
            // Aqui você conectaria com o banco de dados futuramente
            alert(`Tentativa de login com:\nUsuário: ${email}\n(Sistema Backend não conectado)`);
            
            // Exemplo de como seria o redirecionamento real:
            // window.location.href = "/dashboard";
        } else {
            alert("Por favor, preencha todos os campos.");
        }
    });

});