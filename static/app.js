document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");
    const successMessage = document.getElementById("success-message");
    const errorMessage = document.getElementById("error-message");

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Simular envio
        setTimeout(function () {
            // Verifica se o formulário é válido (adicione verificações personalizadas se necessário)
            if (contactForm.checkValidity()) {
                // Exibir mensagem de sucesso e recarregar a página
                successMessage.style.display = "block";
                errorMessage.style.display = "none";

                // Você pode adicionar aqui ações adicionais, como enviar os dados para um servidor ou salvá-los localmente.

                setTimeout(function () {
                    window.location.reload();
                }, 3000); // Recarregar após 3 segundos
            } else {
                // Exibir mensagem de erro (se o formulário não for válido)
                successMessage.style.display = "none";
                errorMessage.style.display = "block";
            }
        }, 1000); // Simula o envio por 1 segundo (você pode ajustar esse tempo conforme necessário)
    });
});


