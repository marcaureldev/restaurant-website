import { ref, onMounted } from 'vue'
import { useNuxtApp } from '#app'

export function useFavorites() {
    const favorites = useState('favorites', () => [])

    onMounted(() => {
        if (typeof window !== 'undefined' && localStorage.getItem('favorites')) {
            favorites.value = JSON.parse(localStorage.getItem('favorites'))
        }
    })

    const toggleFavorites = (food) => {
        const favorite = favorites.value.find(i => i.id === food.id)
        if (favorite) {
            favorites.value = favorites.value.filter(fav => fav.id !== food.id)
        } else {
            favorites.value.push(food)
        }

        if (typeof window !== 'undefined') {
            localStorage.setItem('favorites', JSON.stringify(favorites.value))
        }
    }

    const isFavorite = (id) => {
        return favorites.value.some(fav => fav.id === id);
    }

    return {
        favorites,
        toggleFavorites,
        isFavorite
    }
}
