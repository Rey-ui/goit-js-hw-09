const LOCAL_STORAGE_KEY = "feedback-form-state";
const formEl = document.querySelector(".feedback-form");
const inputEl = formEl.querySelector('input[name="email"]');
const textareaEl = formEl.querySelector('textarea[name="message"]');
let formData = {};
formEl.addEventListener("input", writeMasseg);
formEl.addEventListener("submit", submitForm);
function submitForm(event) {
    event.preventDefault();
    if (formData.email === "" || formData.message === "") {
        alert("Будьласка заповніть всі поля форми!");
        return;
    }
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    console.log(formData);
    event.currentTarget.reset();
}
window.addEventListener("load", () => {
    const saveLocalSotr = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || {};
    if (saveLocalSotr != null) {
        inputEl.value = saveLocalSotr.email || "";
        textareaEl.value = saveLocalSotr.message || "";
    }
})
function writeMasseg() {
    formData = {
        email: inputEl.value.trim(),
        message: textareaEl.value.trim()
    }
    if (formData.email !== "" || formData.message !== "") {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
    } else {
        localStorage.removeItem(LOCAL_STORAGE_KEY);
    }
}