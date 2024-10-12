<script setup>
const props = defineProps({
    menu: {
        type: Object,
        required: true,
    }
})

</script>

<template>
    <div>
        <div
            class="max-w-96 mx-auto h-36 bg-gray-second group hover:bg-header-color rounded-md flex space-x-5 items-center p-5 duration-500 ease-out">
            <div class="w-24 h-24 rounded-full bg-center bg-cover" :style="{ backgroundImage: `url(${menu.picture})` }">
            </div>
            <div class="space-y-2">
                <p class="text-lg font-semibold text-header-color group-hover:text-white">{{ menu.name }}</p>
                <p class="text-lg text-green-color">${{ menu.price }}</p>
            </div>
        </div>
    </div>
</template>