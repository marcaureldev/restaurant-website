<script setup>
const props = defineProps({
    buttonName: {
        type: String
    },
})

</script>

<template>
    <div>
        <button class="bg-green-color hover:bg-header-color duration-300 ease-out text-white px-4 py-2 rounded-lg">
            {{ buttonName }}
        </button>
    </div>
</template>