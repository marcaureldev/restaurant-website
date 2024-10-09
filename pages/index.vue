<script setup>
const buttonName = "Order Now";
const Categories = [
    {
        picture: '/images/combo.svg',
        name: 'Combo'
    },
    {
        picture: '/images/pizza.svg',
        name: 'Pizza'
    },
    {
        picture: '/images/burger.svg',
        name: 'Burger'
    },
    {
        picture: '/images/chicken.svg',
        name: 'Chicken'
    },
    {
        picture: '/images/dinner.svg',
        name: 'Dinner'
    },
    {
        picture: '/images/coffee.svg',
        name: 'Coffee'
    },
]
</script>

<template>
    <div class="">
        <!-- Welcome Foodies -->
        <div class="flex flex-col-reverse lg:flex-row justify-between items-center">
            <div class="mt-16 capitalize space-y-8">
                <p class="text-lg text-green-color">Welcome Foodies</p>
                <h1 class="text-3xl md:text-5xl font-extrabold text-header-color leading-snug md:leading-snug">
                    Different spices for the different tastes 😋
                </h1>
                <p class="text-gray-color text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis unde
                    dolores temporibus hic quam debitis tenetur harum nemo.
                </p>
                <Button :buttonName="buttonName"></Button>
            </div>
            <div class="space-y-14 smartphone:space-y-20 md:space-y-20 lg:space-y-5 xl:space-y-32">
                <img src="/images/hero-meal-parallax.png" alt="hero-meal" class="absolute lg:top-0 right-0 md:w-[70%]" />
                <img src="/images/hero-meal.png" alt="hero-meal" class="w-[70%] lg:w-full mx-auto" />
            </div>
        </div>

        <div class="grid grid-cols-2 smartphone:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-20">
            <CategoriesCard v-for="(category, i) in Categories" :key="i" :category="category" />
        </div>
    </div>
</template>
