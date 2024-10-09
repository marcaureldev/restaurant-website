<script setup>
const order = "Order Now";
const read = "Read More";
const Categories = [
    {
        picture: "/images/combo.svg",
        name: "Combo",
    },
    {
        picture: "/images/pizza.svg",
        name: "Pizza",
    },
    {
        picture: "/images/burger.svg",
        name: "Burger",
    },
    {
        picture: "/images/chicken.svg",
        name: "Chicken",
    },
    {
        picture: "/images/dinner.svg",
        name: "Dinner",
    },
    {
        picture: "/images/coffee.svg",
        name: "Coffee",
    },
];

const Services = [
    {
        picture: "/icons/delivery-icon.png",
        name: "Fast Delivery",
    },
    {
        picture: "/icons/fresh-food-icon.png",
        name: "Fresh Food",
    },
    {
        picture: "/icons/quality-icon.png",
        name: "Burger",
    },
    {
        picture: "/icons/support-icon.png",
        name: "Chicken",
    },
];
</script>

<template>
    <div class="">
        <!-- Welcome Foodies -->
        <div class="flex flex-col-reverse lg:flex-row justify-between items-center max-w-screen-xl mx-auto p-5">
            <div class="mt-16 capitalize space-y-8">
                <p class="text-lg text-green-color">Welcome Foodies</p>
                <h1 class="text-3xl md:text-5xl font-extrabold text-header-color leading-snug md:leading-snug">
                    Different spices for the different tastes 😋
                </h1>
                <p class="text-gray-color text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis unde
                    dolores temporibus hic quam debitis tenetur harum nemo.
                </p>
                <Button :buttonName="order"></Button>
            </div>
            <div class="space-y-14 smartphone:space-y-20 md:space-y-20 lg:space-y-5 xl:space-y-32">
                <img src="/images/hero-meal-parallax.png" alt="hero-meal"
                    class="absolute lg:top-0 right-0 md:w-[70%]" />
                <img src="/images/hero-meal.png" alt="hero-meal" class="w-[70%] lg:w-full mx-auto" />
            </div>
        </div>

        <!-- Categories Cards -->
        <div
            class="grid grid-cols-2 smartphone:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-5 max-w-screen-xl mx-auto p-5">
            <CategoriesCard v-for="(category, i) in Categories" :key="i" :category="category" />
        </div>

        <!-- About Section -->
        <div class="md:flex justify-between items-center mt-16 bg-gray-second p-5">
            <img src="/images/about-meal.svg" alt="About meal" class="w-full" />
            <div class="capitalize space-y-8 lg:max-w-[50%] lg:p-8">
                <p class="text-3xl text-green-color font-satistfy">Why choose us?</p>
                <h2 class="text-2xl md:text-3xl font-extrabold text-header-color">
                    What's make our food delicious!
                </h2>
                <p class="text-gray-color">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ut
                    explicabo, numquam iusto est a ipsum assumenda tempore esse corporis?
                </p>
                <Button :buttonName="read"></Button>

                <!-- Services Cards -->
                <div class="grid grid-cols-1 smartphone:grid-cols-2 gap-4 mt-10">
                    <ServicesCard v-for="(service, i) in Services" :key="i" :service="service" />
                </div>
            </div>
        </div>
    </div>
</template>
