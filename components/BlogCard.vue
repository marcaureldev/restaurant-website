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
    <div class="max-w-96 mx-auto">
        <div class="relative h-64 rounded-t-md overflow-hidden group">
            <!-- Background image with cover -->
            <div class="w-full h-full bg-center bg-no-repeat transition-transform duration-300 ease-out group-hover:scale-110"
                :style="{ backgroundImage: `url(${changebackground})`, backgroundSize: 'cover' }" @mouseover="isHover"
                @mouseleave="isHover">
                <!-- Floating calendar icon and date -->
                <div class="absolute top-7 left-7 flex space-x-2 items-center p-2 bg-white text-black w-36 text-xs rounded-md transition-transform duration-300"
                    :class="[hover ? 'translate-x-0' : '-translate-x-64']">
                    <IconsCalendar class="size-5 text-green-color" />
                    <p>21st May, 2024</p>
                </div>
            </div>
        </div>

        <!-- Blog content -->
        <div class="bg-gray-second text-black p-4 space-y-4 rounded-b-md">
            <div class="flex space-x-2 items-center text-sm">
                <p class="flex space-x-2 items-center">
                    <img src="/icons/etiquette-icon.svg" alt="Etiquette" />
                    <span>Food /</span>
                </p>
                <p class="flex space-x-2 items-center">
                    <img src="/icons/etiquette-icon.svg" alt="Etiquette" />
                    <span>Burger /</span>
                </p>
                <p class="flex space-x-2 items-center">
                    <img src="/icons/etiquette-icon.svg" alt="Etiquette" />
                    <span>Pizza</span>
                </p>
            </div>
            <h2 class="text-2xl text-black font-bold">Blog title goes here</h2>
            <p class="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <ButtonComponent buttonName="Read More"></ButtonComponent>
        </div>
    </div>
</template>