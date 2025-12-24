let cart_list = document.querySelector('.cart-items-list')
let cart_total = document.querySelector('.cart-total')
let orderBtn = document.querySelector("#orderBtn")
let orderSection = document.querySelector(".order")

let order_form = document.querySelector("#order-form")

function get_item(item) {
    return `<div class = "cart-item">
                <h4 class="cart-item-title">${item.title}</h4>
                <div class="cart-item-quantity">Кількість: ${item.quantity}</div>
                <div class="cart-item-price" data-price="${item.price}">${item.price * item.quantity} $</div>
            </div>`
}

function showCartList() {
    cart_list.innerHTML = ''
    for (let key in cart.items) { // проходимося по всіх ключах об'єкта cart.items
        cart_list.innerHTML += get_item(cart.items[key])
    }
    cart_total.innerHTML = cart.calculateTotal()
}

showCartList()

orderBtn.addEventListener("click", function (event) {
    orderBtn.style.display = "none"
    orderSection.style.display = "block"
    anime({
        targets: '.order',
        opacity: 1, // Кінцева прозорість (1 - повністю видимий)
        duration: 1000, // Тривалість анімації в мілісекундах
        easing: 'easeInOutQuad'
    })
})


order_form.addEventListener("submit", function (event) {
    event.preventDefault(); // Запобігає перезавантаженню сторінки при відправці форми
    alert("Дякуємо за ваше замовлення! Ми зв'яжемося з вами найближчим часом.");
    cart.items = {} // очищуємо кошик
    cart.saveCartToCookies() // зберігаємо порожній кошик у кукі
    showCartList() // оновлюємо відображення кошика
    order_form.reset() // скидаємо форму
    orderSection.style.display = "none" // ховаємо секцію оформлення замовлення
    orderBtn.style.display = "block" // показуємо кнопку "Оформити замовлення"
})