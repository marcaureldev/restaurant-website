<script setup>
const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '#about' },
    { label: 'Popular', path: '#popular' },
    { label: 'Menu', path: '#menu' },
    { label: 'Order', path: '#order' },
    { label: 'Blogs', path: '#blogs' },
]
</script>

<template>
    <nav>
        <ul class="lg:flex lg:space-x-8 space-y-4 lg:space-y-0 items-center">
            <li v-for="item in navItems" :key="item.label" class="text-lg text-gray-color hover:text-green-color">
                <NuxtLink :to="item.path">
                    {{ item.label }}
                </NuxtLink>
            </li>
        </ul>
    </nav>
</template>