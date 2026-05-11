function mostrarNotificacao() {

    const notificacao =
        document.getElementById("notificacao");

    notificacao.classList.add("mostrar");

    setTimeout(() => {

        notificacao.classList.remove("mostrar");

    }, 3000);
}
document.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", function(event) {

        const destino = this.href;

        if (destino.includes(".html")) {

            event.preventDefault();

            document.body.classList.add("saindo");

            setTimeout(() => {

                window.location.href = destino;

            }, 500);
        }
    });
});