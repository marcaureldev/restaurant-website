
const favorites = ref([])

export function useFavorites() {
    const toggleFavorite = (id) => {
        // IndexOf returns the index of the first occurrence of the specified value in an array, or -1 if it is not present.
        const index = favorites.value.indexOf(id)
        if (index > -1) {
            favorites.value.splice(index, 1)
        } else {
            favorites.value.push(id)
            console.log(favorites.value)
        }
    }

    const isFavorite = (id) => {
        return favorites.value.includes(id)
    }

    return {
        favorites,
        toggleFavorite,
        isFavorite
    }
}