<script setup>
import { useCartStore } from '~/store/useCartStore';

const open = ref(false)

const menuOpen = () => {
    open.value = !open.value
}

const isModalOpen = ref(false)

const store = useCartStore()
</script>

<template>
    <div class="shadow-lg fixed top-0 w-full bg-white">
        <div class="flex justify-between items-center p-5 max-w-screen-xl mx-auto">
            <!-- Logo -->
            <div class="flex space-x-2 items-center cursor-pointer">
                <img src="/icons/logo-icon.svg" alt="logo" />
                <p class="text-2xl font-bold text-header-color">Food</p>
            </div>

            <!-- Navigation bar -->
            <NavBar class="hidden lg:block" />

            <!-- Mobile Navigation bar -->
            <div class="lg:hidden absolute w-full p-8 bg-white top-16 duration-500 lg:duration-0 ease-in-out"
                :class="[open ? 'left-0' : 'left-[-100%]']">
                <NavBar />
            </div>

            <!-- Search, Shop, Profile -->
            <div class="flex space-x-2 items-center">
                <div
                    class="w-8 h-8 sm:w-10 sm:h-10 flex justify-center items-center bg-gray-100 rounded group hover:bg-green-color duration-300 ease-in-out cursor-pointer">
                    <img src="/icons/search-icon.svg" alt="Profile Icon"
                        class="w-4 sm:w-5 group-hover:invert duration-300 ease-in-out" />
                </div>
                <div @click="isModalOpen = true"
                    class="relative w-8 h-8 sm:w-10 sm:h-10 flex justify-center items-center bg-gray-100 rounded  group hover:bg-green-color duration-300 ease-in-out cursor-pointer">
                    <img src="/icons/shop-icon.svg" alt="Shop Icon"
                        class="w-4 sm:w-5 group-hover:invert duration-300 ease-in-out" />
                    <ClientOnly>
                        <p
                            class="bg-green-color rounded-full w-4 h-4 sm:w-5 sm:h-5 text-center absolute -top-2 right-0 text-sm">
                            {{ store.getCartItems }}
                        </p>
                    </ClientOnly>
                </div>
                <div
                    class="w-8 h-8 sm:w-10 sm:h-10 flex justify-center items-center bg-gray-100 rounded group hover:bg-green-color duration-300 ease-in-out cursor-pointer">
                    <img src="/icons/profile-icon.svg" alt="Profile Icon"
                        class="w-4 sm:w-5 group-hover:invert duration-300 ease-in-out" />
                </div>
                <div @click="menuOpen"
                    class="w-8 h-8 sm:w-10 sm:h-10 lg:hidden flex justify-center items-center bg-gray-100 rounded group hover:bg-green-color duration-300 ease-in-out">
                    <img src="/icons/burger-menu-icon.svg" alt="Search Icon"
                        class="w-4 sm:w-5 group-hover:invert duration-300 ease-in-out" />
                </div>
            </div>
        </div>

        <!-- Utilisation de la modale -->
        <Cart v-model="isModalOpen" title="Cart" class="text-black"></Cart>
    </div>
</template>
