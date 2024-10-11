<script setup>
const props = defineProps({
  food: {
    type: Object
  }
})

if (props.food.count > 5) {
  props.food.count = 5;
}

const emptyStar = 5 - Math.ceil(props.food.count)

// Gestion des favoris
const favorite = ref(false)

const isfavorite = () => {
  favorite.value = !favorite.value
}

</script>

<template>

  <div class="bg-gray-second p-5 sm:max-w-72 md:mx-auto carousel-item rounded-md space-y-3 text-center relative">

    <IconsOutlineFavorite @click="isfavorite" :class="[favorite ? 'text-green-color' : 'text-gray-color']"
      class="w-8 h-8 absolute text-gray-color right-5"></IconsOutlineFavorite>

    <img :src="food.picture" alt="Popular food" class="w-[75%] mx-auto" />

    <p class="text-xl text-black font-bold">{{ food.name }}</p>

    <div class="flex items-center justify-center text-black">

      <IconsFullStar v-for="i in Math.floor(food.count)" class="size-5 text-stars-color"></IconsFullStar>

      <!-- Dans tous les cas le  composant HalfStar(étoile à moitié pleine) ne sera affiché que si le nombre de vote est supérieur à la partie entière de ce même nombre   -->

      <IconsHalfStar v-if="food.count - Math.floor(props.food.count) > 0" class="size-5 text-stars-color"></IconsHalfStar>

      <IconsEmptyStar v-for="i in emptyStar" class="size-5 text-stars-color"></IconsEmptyStar>

      ({{ food.count }})

    </div>

    <p class="text-lg text-black">${{ food.actualPrice }} <del class="text-gray-color text-sm">${{ food.oldPrice
        }}</del></p>

    <ButtonComponent buttonName="Add to Cart"></ButtonComponent>

  </div>

</template>
