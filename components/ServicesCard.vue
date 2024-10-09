<script setup>
const props = defineProps({
    service: {
        type: Object
    }
})
</script>

<template>
    <div class="bg-white p-5 rounded-md shadow-lg">
        <div class="flex space-x-2 items-center text-header-color font-bold">
            <img :src="service.picture" :alt="service.name" />
            <p>{{ service.name }}</p>
        </div>
    </div>
</template>