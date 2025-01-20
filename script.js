const addBanana = document.getElementById("add-banana");
const addApple = document.getElementById("add-apple");

function addFruit(fruit, fruitImage) {  
    const list = document.querySelector(".list");
    const product = document.createElement("div");
    product.className = "product";
    const item = document.createElement("li");
    const img = document.createElement("img");
    list.appendChild(product);
    product.appendChild(item);
    product.appendChild(img);
    item.textContent = fruit;
    img.src = fruitImage;
}

addBanana.addEventListener("click", () => {
    addFruit("Banana", "./img/banana.png");
})

addApple.addEventListener("click", () => {
    addFruit("Maçã", "./img/apple.png");
})
