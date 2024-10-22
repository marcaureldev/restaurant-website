<script setup>
const props = defineProps({
    offer: {
        type: Object,
        required: true
    }
})


const changeBackground = computed(() => props.offer.picture)
</script>

<template>
    <div class="bg-no-repeat bg-cover bg-center mx-auto rounded-lg card relative "
        :style="{ backgroundImage: `url(${changeBackground})` }">
        <div class="absolute inset-0 bg-black bg-opacity-60 rounded-lg space-y-5 p-5">
            <p class="text-2xl text-white">{{ offer.title }}</p>
            <p class="text-white text-3xl font-bold">{{ offer.percentage }}</p>
            <ButtonComponent buttonName="Order Now"></ButtonComponent>
        </div>
    </div>
</template>

<style scoped>
.card {
    width: 100%;
    height: 30em;
    background-size: 100vb;
    transition: background-size 0.5s ease-out;
}

.card:hover {
    background-size: 115vb;
}

@media (min-width: 425px) and (max-width: 640px) {
    .card {
        width: 70%;
        margin: 0 auto;
    }
}

@media (min-width: 800px) and (max-width: 1024px) {
    .card {
        width: 90%;
        margin: 0 auto;
    }
}
</style>