const inputPassword = document.getElementById("input-password");
const sandi = document.getElementById("sandi");
const submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", () => {
    const password = inputPassword.value;

    if (password.length > 7) {
        sandi.textContent = password;
        sandi.style.color = "green";
    } else {
        erorMessage.textContent = "Password Terlalu Pendek";
        erorMessage.style.color = "red";
    }
});