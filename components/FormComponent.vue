<template>
    <div class="bg-gray-100 p-5 rounded-lg mx-auto">
        <form class="grid grid-cols-2 gap-6 text-black">
            <!-- Nom du client -->
            <div class="col-span-2 sm:col-span-1">
                <label class="block text-gray-600 mb-2">Your Name</label>
                <input type="text" placeholder="customer's name"
                    class="w-full p-3 border rounded-lg focus:outline-none bg-white" />
            </div>

            <!-- Numéro du client -->
            <div class="col-span-2 sm:col-span-1">
                <label class="block text-gray-600 mb-2">Your Number</label>
                <input type="text" placeholder="customer's number"
                    class="w-full p-3 border rounded-lg focus:outline-none bg-white" />
            </div>

            <!-- Commande -->
            <div class="col-span-2 sm:col-span-1">
                <label class="block text-gray-600 mb-2">Your Order</label>
                <input type="text" placeholder="food you want"
                    class="w-full p-3 border rounded-lg focus:outline-none bg-white" />
            </div>

            <!-- Quantité -->
            <div class="col-span-2 sm:col-span-1">
                <label class="block text-gray-600 mb-2">How Much</label>
                <input type="text" placeholder="number or orders"
                    class="w-full p-3 border rounded-lg focus:outline-none bg-white" />
            </div>

            <!-- Your Details -->
            <div class="col-span-2 sm:col-span-1">
                <label class="block text-gray-600 mb-2">Your Details</label>
                <input type="text" placeholder="number or orders"
                    class="w-full p-3 border rounded-lg focus:outline-none bg-white" />
            </div>

            <!-- Adresse du client -->
            <div class="col-span-2 sm:col-span-1">
                <label class="block text-gray-600 mb-2">Pick up time</label>
                <input type="date" min="2024-10-18" max="2024-12-31" class="w-full p-3 border rounded-lg focus:outline-none bg-gray-200 text-black" />
            </div>

            <!-- Carte Google -->
            <div class="col-span-2">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609923543!2d72.74109862051086!3d19.082197839558583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b61ad682b379%3A0x4f8e7a77a1cf4c4a!2sJogeshwari%20West%2C%20Mumbai%2C%20Maharashtra%20400047%2C%20India!5e0!3m2!1sen!2sus!4v1618828655693!5m2!1sen!2sus"
                    width="100%" height="300" class="border-0 rounded-lg" allowfullscreen="" loading="lazy"></iframe>
            </div>

            <ButtonComponent buttonName="Proceed To Order" ></ButtonComponent >
        </form>
    </div>
</template>

<script setup>
// Pas de logique spécifique pour l'instant, tu peux ajouter ta logique ici si nécessaire
</script>

<style scoped>
/* Personnalisation supplémentaire si nécessaire */
</style>