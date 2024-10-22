<script setup>
import Carousel from 'primevue/carousel';
const order = "Order Now";
const read = "Read More";
const orderPicture1 = "/icons/calendar-icon.png";
const orderPicture2 = "/icons/phone-icon.png";
const orderPicture3 = "/icons/location-icon.png";

const responsiveOptions = ref([

    {
        breakpoint: '1185px',
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
        numScroll: 1,
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
            <div class="max-w-screen-xl mx-auto flex flex-col lg:flex-row justify-between items-center mt-16">
                <img src="/images/about-meal.svg" alt="About meal" class="w-full p-4 md:p-0" />
                <div class="capitalize space-y-8 lg:max-w-[50%] p-5">
                    <p class="text-3xl text-green-color font-satisfy">Why choose us?</p>
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
                <p class="text-2xl text-green-color font-satisfy">Popular Food</p>
                <h2 class="text-2xl md:text-3xl font-extrabold text-header-color">
                    Our Special Dishes
                </h2>
            </div>

            <!-- Popular Cards -->
            <div class="mt-10">
                <!-- <PopularCard v-for="(food, i) in popularFood" :key="i" :food="food" /> -->
                <Carousel :value="popularFood" :numVisible="4" :numScroll="1" :circular="true" :autoplayInterval="3000"
                    :responsiveOptions="responsiveOptions" :showNavigators="false" class="p-4">
                    <template #item="slotProps">
                        <PopularCard :food="slotProps.data" class="mx-2" />
                    </template>
                </Carousel>
            </div>
        </div>

        <!-- Call to action section -->
        <div class="p-5 max-w-screen-xl mx-auto">
            <div class="bg-row-banner bg-center bg-cover bg-no-repeat h-[20em] flex justify-start items-center">
                <div class="space-y-4 mx-5 lg:p-8">
                    <p class="font-satisfy text-4xl text-cheese-color">Double Cheese</p>
                    <h2 class="text-2xl md:text-5xl font-extrabold text-burger-color">BURGER</h2>
                    <p class="text-black text-xl">With Coca-Cola and fries</p>
                    <ButtonComponent :buttonName="order"></ButtonComponent>
                </div>
            </div>
        </div>

        <!-- Offers section -->
        <div class="max-w-screen-xl mx-auto mt-12 p-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <OfferCard v-for="(offer, i) in offers" :key="i" :offer="offer"></OfferCard>
        </div>

        <!-- Menu section -->
        <div class="max-w-screen-xl mx-auto mt-12 p-5 cursor-pointer">
            <div class="text-center space-y-4">
                <p class="text-2xl text-green-color font-satisfy capitalize">Our menu</p>
                <h2 class="capitalize font-bold text-2xl text-header-color">Our top dishes</h2>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                <MenuCard v-for="(menu, i ) in menus" :key="i" :menu="menu"></MenuCard>
            </div>
        </div>

        <!-- Order now section -->
        <div class="max-w-screen-xl mx-auto mt-12 p-5">
            <div class="text-center space-y-4">
                <p class="text-2xl text-green-color font-satisfy capitalize">Order now</p>
                <h2 class="capitalize font-bold text-2xl text-header-color">Fastest home delivery</h2>
            </div>
            <div class="mt-8 flex flex-wrap justify-center items-center space-y-4 lg:space-y-0 cursor-pointer">
                <OrderCard :picture="orderPicture1" title="7:00am to 10:30pm"></OrderCard>
                <OrderCard :picture="orderPicture2" title="+123-456-7890"></OrderCard>
                <OrderCard :picture="orderPicture3" title="Sénegal - Dakar"></OrderCard>
            </div>

            <div class="mt-8 p-2 max-w-screen-xl mx-auto">
                <FormComponent></FormComponent>
            </div>
        </div>

        <!-- Blog section -->
        <div class="max-w-screen-xl mx-auto p-5">
            <div class="text-center space-y-4">
                <p class="text-2xl text-green-color font-satisfy capitalize">Our blog</p>
                <h2 class="capitalize font-bold text-2xl text-header-color">Our daily stories</h2>
            </div>
            <div class="flex flex-wrap mt-8 justify-center items-center space-y-4 lg:space-y-0 cursor-pointer">
                <BlogCard picture="/images/blog-1.jpg"></BlogCard>
                <BlogCard picture="/images/blog-2.jpg"></BlogCard>
                <BlogCard picture="/images/blog-3.jpg"></BlogCard>
            </div>
        </div>
    </div>
</template>

<style>
@media (max-width: 820px) and (min-width: 820px) {
    .carousel-item {
        margin: 0 5px;
    }
}
</style>
