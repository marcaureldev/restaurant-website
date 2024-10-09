<script setup>
const props = defineProps({
    category: {
        type: Object
    }
})

</script>

<template>
    <div>
        <div
            class="max-w-48 mx-auto h-36 bg-gray-second group hover:bg-green-color rounded-md flex justify-center items-center duration-500 ease-out">
            <div class="text-center">
                <img :src="category.picture" :alt="category.name" />
                <p class="text-lg font-semibold text-header-color group-hover:text-white">{{ category.name }}</p>
            </div>
        </div>
    </div>
</template>