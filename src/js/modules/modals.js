const modals = () => {
    function windowModal(modalBtnOpenSelector, modalBtnCloseSelector, modalSelector) {
        let modalBtnOpen = document.querySelectorAll(modalBtnOpenSelector),
            modalBtnClose = document.querySelector(modalBtnCloseSelector),
            modal = document.querySelector(modalSelector);

        modalBtnOpen.forEach((item) => {
            item.addEventListener("click", function(e) {
                e.preventDefault();
                modal.style.display = "block";

            });
        });
        modal.addEventListener("click", function() {
            modal.style.display = "";
        });
        modalBtnClose.addEventListener("click", function() {
            modal.style.display = "";
        });
    }

    function modalDefault(modalSelector, time) {
        setTimeout(function() {
            document.querySelector(modalSelector).style.display = "block";
        }, time);
    }

    windowModal(".popup_engineer_btn", ".popup_engineer .popup_close", ".popup_engineer");
    windowModal(".phone_link", ".popup .popup_close", ".popup");

    modalDefault(".popup", 60000)

};

export default modals;