import { defineStore } from "pinia"
import { ref } from 'vue'
import { useNuxtApp } from '#app'


/* La vérification `typeof window !== 'undefined'` est une façon standard 
de vérifier si le code s'exécute dans un environnement de navigateur.*/
function isClient() {
    const nuxtApp = useNuxtApp()
    return typeof window !== 'undefined' && !nuxtApp.ssrContext
}

export const useCartStore = defineStore('cartStore', {
    state: () => ({
        quantity: ref(0),
        cartItems: ref([])
    }),

    getters: {
        getCartItems: (state) => state.cartItems.length,
    },

    actions: {
        initializeStore() {
            if (isClient()) {
                const savedCart = localStorage.getItem('cart')
                if (savedCart) {
                    this.cartItems = JSON.parse(savedCart)
                    this.quantity = this.cartItems.reduce((sum, item) => sum + item.quantity, 0)
                }
            }
        },

        saveCart() {
            if (isClient()) {
                localStorage.setItem('cart', JSON.stringify(this.cartItems))
            }
        },

        incrementQuantity(id) {
            const cartItem = this.cartItems.find(i => i.id === id)
            if (cartItem) {
                cartItem.quantity++
                this.quantity++
                this.saveCart()
            }
        },

        decrementQuantity(id) {
            const cartItem = this.cartItems.find(i => i.id === id)
            if (cartItem) {
                if (cartItem.quantity > 1) {
                    cartItem.quantity--
                    this.quantity--
                } else {
                    this.removeItem(id)
                }
                this.saveCart()
            }
        },

        removeItem(id) {
            const index = this.cartItems.findIndex(i => i.id === id)
            if (index !== -1) {
                this.quantity -= this.cartItems[index].quantity
                this.cartItems.splice(index, 1)
                this.saveCart()
            }
        },

        addToCart(food) {
            const cartItem = this.cartItems.find(i => i.id === food.id)
            if (cartItem) {
                cartItem.quantity++
                this.quantity++
            } else {
                this.cartItems.push({ ...food, quantity: 1 })
                this.quantity++
            }
            this.saveCart()
        },
    }
})