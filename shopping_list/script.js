function createRowElements() {
    return {
        shoppingCart: document.getElementsByTagName("tbody")[0],
        newRow: document.createElement("tr"),
        newItem: document.createElement("td"),
        itemPrice: document.createElement("td")
    };
}

function getUserInput() {
    let item = document.getElementById("item");
    let price = document.getElementById("price");
    return {
        item,
        price
    };
}

function addToCart() {
    let { item, price } = getUserInput();
    if (item.value !== "" && price.value !== "") {
        let { newRow, shoppingCart, newItem, itemPrice, removeFromCart } = createRowElements();
        newItem.innerText = item.value;
        itemPrice.innerText = price.value;

        newRow.appendChild(newItem);
        newRow.appendChild(itemPrice);
        shoppingCart.appendChild(newRow);

        item.value = "";
        price.value = "";
    }
}

function removeFromCart() {
    const shoppingCart = document.getElementsByTagName("tbody")[0];
    document.getElementsByTagName("tbody")[0];
    const rows = shoppingCart.getElementsByTagName("tr");

    if (rows.length > 0) {
        shoppingCart.removeChild(rows[rows.length - 1]);
    }
}
