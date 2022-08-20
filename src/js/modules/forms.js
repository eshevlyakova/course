const forms = () => {
    const form = document.querySelectorAll("form"),
        input = document.querySelectorAll("input"),
        phoneInputs = document.querySelectorAll('input[name="user_phone"');

    phoneInputs.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/\D/, '');
        });
    });

    const message = {
        loading: "Загрузка...",
        success: "Форма отправлена! Мы скоро свяжемся с вами.",
        mistake: "Упс, ошибка!"
    };

    const postData = async(url, data) => {
        document.querySelector(".status").textContent = message.loading;
        let res = await fetch(url, {
            method: "POST",
            body: data
        });

        return await res.text();
    };

    const clearInputs = () => {
        input.forEach(item => {
            item.value = "";
        })
    };

    form.forEach(item => {
        item.addEventListener("submit", (e) => {
            e.preventDefault();

            let statusForm = document.createElement("div");
            statusForm.classList.add("status");
            item.appendChild(statusForm);

            const formData = new FormData(item);

            postData('assets/server.php', formData)
                .then(res => {
                    console.group(res);
                    statusForm.textContent = message.success;
                })
                .catch(() => statusForm.textContent = message.mistake)
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        statusForm.remove();
                    }, 5000);
                });
        });
    });
};

export default forms;