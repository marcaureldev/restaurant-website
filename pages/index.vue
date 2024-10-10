<script setup>
import Carousel from 'primevue/carousel';
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

const popularFood = [
    {
        name: "Vegetable Gyoza",
        picture: "/images/food-1.png",
        count: 5,
        actualPrice: 40,
        oldPrice: 50,
    },

    {
        name: "Hamburger",
        picture: "/images/food-2.png",
        count: 4.5,
        actualPrice: 40,
        oldPrice: 50,
    },

    {
        name: "Pizza",
        picture: "/images/food-3.png",
        count: 4,
        actualPrice: 40,
        oldPrice: 50,
    },

    {
        name: "Burger O'Black",
        picture: "/images/food-4.png",
        count: 3.5,
        actualPrice: 40,
        oldPrice: 50,
    },

    {
        name: "Pizza Baked",
        picture: "/images/food-5.png",
        count: 5.5,
        actualPrice: 40,
        oldPrice: 50,
    },

    {
        name: "Mushroom Pizza",
        picture: "/images/food-6.png",
        count: 3.5,
        actualPrice: 40,
        oldPrice: 50,
    },

    {
        name: "Cheeseburger",
        picture: "/images/food-7.png",
        count: 4.5,
        actualPrice: 40,
        oldPrice: 50,
    },

    {
        name: "Kabab Pizza",
        picture: "/images/food-8.png",
        count: 5.5,
        actualPrice: 40,
        oldPrice: 50,
    },
]

const responsiveOptions = ref([

    {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 1
    },
    {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '640px',
        numVisible: 1,
        numScroll: 1
    }
]);
</script>

<template>
    <div class="">
        <!-- Welcome Foodies -->
        <div class="flex flex-col-reverse lg:flex-row justify-between items-center max-w-screen-xl mx-auto">
            <div class="mt-16 capitalize space-y-8 p-5">
                <p class="text-lg text-green-color">Welcome Foodies</p>
                <h1 class="text-3xl md:text-5xl font-extrabold text-header-color leading-snug md:leading-snug">
                    Different spices for the different tastes 😋
                </h1>
                <p class="text-gray-color text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis unde
                    dolores temporibus hic quam debitis tenetur harum nemo.
                </p>
                <ButtonComponent :buttonName="order"></ButtonComponent>
            </div>
            <div class="space-y-14 smartphone:space-y-20 lg:space-y-16 xl:s relative w-full">
                <img src="/images/hero-meal-parallax.png" alt="hero-meal"
                    class="absolute -top-6 md:-top-24 xl:-top-10 right-0 w-full" />
                <img src="/images/hero-meal.png" alt="hero-meal" class="w-[60%] lg:w-[80%] mx-auto" />
            </div>
        </div>

        <!-- Categories Cards -->
        <div
            class="grid grid-cols-2 smartphone:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-5 max-w-screen-xl mx-auto p-5">
            <CategoriesCard v-for="(category, i) in Categories" :key="i" :category="category" />
        </div>

        <!-- About Section -->
        <div class="bg-gray-second">
            <div class="max-w-screen-xl mx-auto md:flex justify-between items-center mt-16">
                <img src="/images/about-meal.svg" alt="About meal" class="w-full" />
                <div class="capitalize space-y-8 lg:max-w-[50%] lg:p-5">
                    <p class="text-3xl text-green-color font-satistfy">Why choose us?</p>
                    <h2 class="text-2xl md:text-3xl font-extrabold text-header-color">
                        What's make our food delicious!
                    </h2>
                    <p class="text-gray-color">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ut
                        explicabo, numquam iusto est a ipsum assumenda tempore esse corporis?
                    </p>
                    <ButtonComponent :buttonName="read"></ButtonComponent>

                    <!-- Services Cards -->
                    <div class="grid grid-cols-1 smartphone:grid-cols-2 gap-4 mt-10">
                        <ServicesCard v-for="(service, i) in Services" :key="i" :service="service" />
                    </div>
                </div>
            </div>
        </div>

        <!-- Popular Food section -->
        <div class="max-w-screen-xl mx-auto mt-16">
            <div class="text-center space-y-5">
                <p class="text-2xl text-green-color font-satistfy">Popular Food</p>
                <h2 class="text-2xl md:text-3xl font-extrabold text-header-color">
                    Our Special Dishes
                </h2>
            </div>

            <!-- Popular Cards -->
            <div class="mt-10">
                <!-- <PopularCard v-for="(food, i) in popularFood" :key="i" :food="food" /> -->
                <Carousel :value="popularFood" :numVisible="4" :numScroll="1" :circular="true" :autoplayInterval="3000"
                    :responsiveOptions="responsiveOptions">
                    <template #item="slotProps">
                        <PopularCard :food="slotProps.data" class="mx-2" />
                    </template>
                </Carousel>

            </div>
        </div>
    </div>
</template>
