//show modal

function abrirModal(){
    const headerModalButton = document.querySelector(".header__button");
    const modal = document.querySelector(".modalBox");
    const faqButton = document.querySelector(".leftButton");

    headerModalButton.addEventListener("click", function(){
        modal.showModal();
    });

    faqButton.addEventListener("click", function(){
        modal.showModal();
    });
   

    fecharModal();
}

abrirModal();

//fechar modal
function fecharModal(){
    const modalCloseButton = document.querySelector(".modal__closeButton");
    const modal = document.querySelector(".modalBox");

    modalCloseButton.addEventListener("click", function(){
    modal.close();
    });
}