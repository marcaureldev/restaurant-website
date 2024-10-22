<script setup>
const props = defineProps({
    picture: {
        type: String,
        required: true,
    }
})

const hover = ref(false)

const isHover = () => {
    hover.value = !hover.value
}

const changebackground = computed(() => props.picture)
</script>

<template>
    <div class="max-w-96 mx-auto overflow-hidden">
        <div class="w-96 h-64 blog-card bg-center bg-no-repeat rounded-t-md relative" @mouseover="isHover"
            @mouseleave="isHover" :style="{ backgroundImage: `url(${changebackground})` }">
            <div class="absolute top-4 left-4 flex space-x-2 justify-center items-center p-2 bg-white text-black w-36 text-xs rounded-md transition-transform"
                :class="[hover ? 'translate-x-0' : '-translate-x-64']">
                <IconsCalendar class="size-5 text-green-color" />
                <p> 21st May, 2024</p>
            </div>
        </div>
        <div class="bg-gray-second text-black p-4 space-y-4 rounded-b-md">
            <div class="flex space-x-2 items-center text-sm">
                <p class="flex space-x-2 items-center"> <img src="/icons/etiquette-icon.svg" alt="Etiquette">
                    <span>
                        Food /
                    </span>
                </p>
                <p class="flex space-x-2 items-center"> <img src="/icons/etiquette-icon.svg" alt="Etiquette">
                    <span>
                        Burger /
                    </span>
                </p>
                <p class="flex space-x-2 items-center"> <img src="/icons/etiquette-icon.svg" alt="Etiquette">
                    <span>
                        Pizza
                    </span>
                </p>
            </div>
            <h2 class="text-2xl text-black font-bold">Blog title goes here</h2>
            <p class="text-sm text-gray-color">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <ButtonComponent buttonName="Read More"></ButtonComponent>
        </div>
    </div>
</template>

<style>
.blog-card {
    background-size: 100%;
    transition: background-size 0.3s ease-out;
}

.blog-card:hover {
    background-size: 115%;
}
</style>