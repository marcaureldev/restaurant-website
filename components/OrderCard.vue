<script setup>
const props = defineProps({
    picture: {
        type: String
    },
    title: {
        type: String
    }
})

</script>

<template>
    <div class="w-96 mx-auto h-48 rounded-md flex justify-center items-center p-2 bg-gray-second ">
        <div>
            <img :src="picture" alt="" class="mx-auto">
            <p class="text-header-color text-lg font-bold">{{ title}}</p>
        </div>
    </div>
</template>