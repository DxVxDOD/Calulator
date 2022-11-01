const buttons = Array.from(document.querySelectorAll(".button-item"));
buttons.forEach(button => button.addEventListener("click", getInfo))

function getInfo (e) {
    return console.log(e.target.id);
}