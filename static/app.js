class FormSubmit {
    constructor(settings) {
        this.settings = settings;
        this.form = document.querySelector(settings.form);
        if (this.form) {
            this.url = this.form.getAttribute("action");
        }
    }

    displaySuccess() {
        const successMessage = document.getElementById("success-message");
        successMessage.style.display = "block";

        // Rolando para o início após 1 segundos
        setTimeout(() => {
            window.scrollTo(0, 0);
            // Recarregando a página após 1 segundos
            setTimeout(() => {
                location.reload();
            }, 1000); // Ajuste o tempo conforme necessário
        }, 1000); // Ajuste o tempo conforme necessário
    }

    displayError() {
        const errorMessage = document.getElementById("error-message");
        errorMessage.style.display = "block";
        setTimeout(() => {
            errorMessage.style.display = "none";
        }, 1000); // Oculta a mensagem de erro após 1 segundos
    }

    init() {
        if (this.form) {
            this.form.addEventListener("submit", async (event) => {
                event.preventDefault();
                const formData = new FormData(this.form);

                try {
                    const response = await fetch(this.url, {
                        method: "POST",
                        body: formData,
                    });

                    if (response.ok) {
                        this.displaySuccess();
                    } else {
                        this.displayError();
                    }
                } catch (error) {
                    this.displayError();
                }
            });
        }
    }
}

const formSubmit = new FormSubmit({
    form: "[data-form]",
    button: "[data-button]",
});
formSubmit.init();

