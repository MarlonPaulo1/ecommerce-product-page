const cart = document.querySelector('.cart-img')
const toogleCart = document.querySelector('.modal-cart')

cart.addEventListener('click', () => {
    toogleCart.classList.toggle('active-modal')
})



let countProduct = 0

const amountProduct = document.querySelector('.amount-product')
const btnsAmount = document.querySelectorAll('.btn-amount')

btnsAmount.forEach(function(btn) {
    btn.addEventListener('click', e => {
        const amount = e.currentTarget.classList
        if(amount.contains('plus')) {
            countProduct++
        }
        if(amount.contains('minus')) {
            countProduct--
        }
        if(countProduct < 0) {
            countProduct = 0
        }

        amountProduct.textContent = countProduct
    })
})

const addButton = document.querySelector('.btn-add-cart')
const notProduct = document.querySelector('.not-product')
const products = document.querySelector('.products')
const countainerProduct = document.querySelector('.countainer-product')
const amountProductCart = document.querySelector('.amount-product-cart')
const valueProduct = document.querySelector('.value-product')
const deleteContentProduct = document.querySelector('.delete-content-product')


addButton.addEventListener('click', (e) => {
    e.preventDefault()
    const value = Number(countProduct) * 125
    products.removeChild(notProduct)
    countainerProduct.classList.add('active-countainer-product')
    amountProductCart.textContent = countProduct
    valueProduct.textContent = `$${value.toFixed(2)}`
})

deleteContentProduct.addEventListener('click', () => {
    countainerProduct.classList.remove('active-countainer-product')
    products.appendChild(notProduct)
})