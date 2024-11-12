<script setup>
import { useCartStore } from '~/store/useCartStore';
import { computed } from 'vue';

const props = defineProps({
    modelValue: {
        type: Boolean,
        required: true
    },
    title: {
        type: String,
        default: 'Panier'
    }
})

const emit = defineEmits(['update:modelValue'])

const closeModal = () => {
    emit('update:modelValue', false)
}

// Fermer la modale avec la touche Escape
const handleKeydown = (e) => {
    if (e.key === 'Escape') {
        closeModal()
    }
}

onMounted(() => {
    document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
    document.removeEventListener('keydown', handleKeydown)
})

const store = useCartStore()
store.initializeStore()

const cartItems = computed(() => store.cartItems)

const totalPrice = computed(() => {
    return cartItems.value.reduce((total, item) => total + item.actualPrice * item.quantity, 0)
})

const incrementQuantity = (itemId) => {
    store.incrementQuantity(itemId)
}

const decrementQuantity = (itemId) => {
    store.decrementQuantity(itemId)
}

const removeItem = (itemId) => {
    store.removeItem(itemId)
}
</script>

<template>
    <Transition name="fade">
        <div v-if="modelValue" class="fixed inset-0 bg-black/50 z-50 overflow-y-auto" @click="closeModal">
            <div class="absolute bg-white right-0 shadow-xl w-full sm:w-1/2 h-full" @click.stop>
                <div class="px-6 py-4 border-b flex justify-between items-center">
                    <h3 class="text-lg font-medium">{{ title }}</h3>
                    <button @click="closeModal" class="text-gray-400 hover:text-gray-500">
                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div class="bg-white px-6 py-4 overflow-y-auto" style="max-height: calc(100vh - 180px);">
                    <div v-if="cartItems.length === 0" class="text-center py-8">
                        <p class="text-gray-500">Votre panier est vide</p>
                    </div>
                    <div v-else>
                        <div v-for="item in cartItems" :key="item.id" class="flex items-center space-x-4 py-4 border-b">
                            <img :src="item.picture" :alt="item.name" class="w-16 h-16 object-cover rounded-md">
                            <div class="flex-grow">
                                <h4 class="font-medium">{{ item.name }}</h4>
                                <p class="text-sm text-gray-500">{{ item.actualPrice.toFixed(2) }} €</p>
                            </div>
                            <div class="flex items-center space-x-2">
                                <button @click="decrementQuantity(item.id)"
                                    class="p-1 rounded-full bg-gray-200 hover:bg-gray-300">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M20 12H4"></path>
                                    </svg>
                                </button>
                                <span class="font-medium">{{ item.quantity }}</span>
                                <button @click="incrementQuantity(item.id)"
                                    class="p-1 rounded-full bg-gray-200 hover:bg-gray-300">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                                    </svg>
                                </button>
                            </div>
                            <button @click="removeItem(item.id)" class="text-red-500 hover:text-red-600">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16">
                                    </path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div class="px-6 py-4 border-t">
                    <div class="flex justify-between items-center mb-4">
                        <span class="font-medium">Total</span>
                        <span class="font-bold text-lg">{{ totalPrice.toFixed(2) }} €</span>
                    </div>
                    <div class="flex justify-end gap-2">
                        <button @click="closeModal" class="px-4 py-2 border rounded hover:bg-gray-100">
                            Fermer
                        </button>
                        <button @click="closeModal"
                            class="px-4 py-2 bg-green-color text-white rounded duration-300 ease-in-out hover:bg-header-color">
                            Passer la commande
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </Transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>