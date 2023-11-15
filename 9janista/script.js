function updateHomeLink() {
    document.getElementById("home");
}

function createProductCard(imageSrc, productName, price) {
    const productContainer = document.getElementById("product-container");

    const productDiv = document.createElement("div");
    productDiv.classList.add("product");

    const img = document.createElement("img");
    img.src = imageSrc;
    img.alt = productName;

    const h2 = document.createElement("h2");
    h2.textContent = productName;

    const p = document.createElement("p");
    p.textContent = "Price: $" + price.toFixed(2);

    const button = document.createElement("button");
    button.classList.add("add-to-cart");
    button.textContent = "Add to Cart";
    button.setAttribute("data-product", productName);
    button.setAttribute("data-price", price.toFixed(2));
    button.addEventListener("click", addToCart);

    productDiv.appendChild(img);
    productDiv.appendChild(h2);
    productDiv.appendChild(p);
    productDiv.appendChild(button);

    productContainer.appendChild(productDiv);
}

function addToCart() {
    const product = this.getAttribute("data-product");
    const price = parseFloat(this.getAttribute("data-price"));

    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");

    const listItem = document.createElement("li");
    listItem.textContent = product + " - $" + price.toFixed(2);
    cartItems.appendChild(listItem);

    let currentTotal = parseFloat(cartTotal.textContent.replace("$", ""));
    currentTotal += price;
    cartTotal.textContent = "$" + currentTotal.toFixed(2);
}

updateHomeLink();

createProductCard("mine.png", "Ankara Bubu", 5.00);
createProductCard("shoes1.jpg", "Bata", 1.99);
createProductCard("accessory1.jpg", "Ileke", 2.99);
