<script setup>
const buttonName = "Order Now";
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

        
    </div>
</template>
