// Находим элементы
const input = document.querySelector(".input");
const addButton = document.querySelector(".add");
const listItems = document.querySelector(".list-items");

addButton.addEventListener("click", function () {

const listItem = document.createElement("li");

listItem.textContent = input.value;

const deleteButton = document.createElement("button");
deleteButton.innerHTML = "Выполнено";

//удалить элемент списка по клику на кнопку
deleteButton.onclick = () => {
listItems.removeChild(listItem);

};

listItems.append(listItem);
listItem.append(deleteButton);
input.value = "";
});


listItems.addEventListener("click", function (evt) {
if (evt.target.tagName === "LI") {
evt.target.classList.toggle('completed'); // переключение класса
}
});
