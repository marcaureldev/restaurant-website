<template>
    <footer class="py-10">
        <!-- Newsletter Section -->
        <div class="text-center mb-10">
            <h2 class="text-2xl font-bold text-gray-800">Newsletter</h2>
            <div class="flex justify-center items-center mt-4 max-w-screen-sm mx-auto">
                <input type="email" placeholder="enter your email"
                    class="w-full bg-white p-2 border rounded-l-md outline-none focus:ring-2 focus:ring-green-500" />
                <button class="bg-green-500 text-white px-6 py-2 rounded-r-md hover:bg-green-600 transition">
                    Subscribe
                </button>
            </div>
        </div>

        <!-- Links Section -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-10 text-gray-700 md:text-left">
            <!-- Our Menu -->
            <div>
                <h3 class="text-lg font-bold text-gray-800 mb-4">Our Menu</h3>
                <ul class="text-sm space-y-6">
                    <li class="mb-2">
                        <a href="#" class="hover:text-green-500 flex items-center space-x-2 group">
                            <IconsArrowRight class="text-green-color size-5" /> <span
                                class="group-hover:px-3 duration-300">Pizza</span>
                        </a>
                    </li>
                    <li class="mb-2">
                        <a href="#" class="hover:text-green-500 flex items-center space-x-2 group">
                            <IconsArrowRight class="text-green-color size-5" /> <span
                                class="group-hover:px-3 duration-300">Burger</span>
                        </a>
                    </li>
                    <li class="mb-2">
                        <a href="#" class="hover:text-green-500 flex items-center space-x-2 group">
                            <IconsArrowRight class="text-green-color size-5" /> <span
                                class="group-hover:px-3 duration-300">Chicken</span>
                        </a>
                    </li>
                    <li class="mb-2">
                        <a href="#" class="hover:text-green-500 flex items-center space-x-2 group">
                            <IconsArrowRight class="text-green-color size-5" /> <span
                                class="group-hover:px-3 duration-300">Pasta</span>
                        </a>
                    </li>
                    <li class="mb-2">
                        <a href="#" class="hover:text-green-500 flex items-center space-x-2 group">
                            <IconsArrowRight class="text-green-color size-5" /> <span
                                class="group-hover:px-3 duration-300">And More...</span>
                        </a>
                    </li>
                </ul>
            </div>

            <!-- Quick Links -->
            <div>
                <h3 class="text-lg font-bold text-gray-800 mb-4">Quick Links</h3>
                <ul class="text-sm space-y-6">
                    <li class="mb-2">
                        <a href="#" class="hover:text-green-500 flex items-center space-x-2 group">
                            <IconsArrowRight class="text-green-color size-5" /> <span
                                class="group-hover:px-3 duration-300">Home</span>
                        </a>
                    </li>
                    <li class="mb-2">
                        <a href="#" class="hover:text-green-500 flex items-center space-x-2 group">
                            <IconsArrowRight class="text-green-color size-5" /> <span
                                class="group-hover:px-3 duration-300">About</span>
                        </a>
                    </li>
                    <li class="mb-2">
                        <a href="#" class="hover:text-green-500 flex items-center space-x-2 group">
                            <IconsArrowRight class="text-green-color size-5" /> <span
                                class="group-hover:px-3 duration-300">Popular</span>
                        </a>
                    </li>
                    <li class="mb-2">
                        <a href="#" class="hover:text-green-500 flex items-center space-x-2 group">
                            <IconsArrowRight class="text-green-color size-5" /> <span
                                class="group-hover:px-3 duration-300">Menu</span>
                        </a>
                    </li>
                    <li class="mb-2">
                        <a href="#" class="hover:text-green-500 flex items-center space-x-2 group">
                            <IconsArrowRight class="text-green-color size-5" /> <span
                                class="group-hover:px-3 duration-300">Order</span>
                        </a>
                    </li>
                    <li class="mb-2">
                        <a href="#" class="hover:text-green-500 flex items-center space-x-2 group">
                            <IconsArrowRight class="text-green-color size-5" /> <span
                                class="group-hover:px-3 duration-300">Blogs</span>
                        </a>
                    </li>
                </ul>
            </div>

            <!-- Extra Links -->
            <div>
                <h3 class="text-lg font-bold text-gray-800 mb-4">Extra Links</h3>
                <ul class="text-sm space-y-6">
                    <li class="mb-2">
                        <a href="#" class="hover:text-green-500 flex items-center space-x-2 group">
                            <IconsArrowRight class="text-green-color size-5" /> <span
                                class="group-hover:px-3 duration-300">My Order</span>
                        </a>
                    </li>
                    <li class="mb-2">
                        <a href="#" class="hover:text-green-500 flex items-center space-x-2 group">
                            <IconsArrowRight class="text-green-color size-5" /> <span
                                class="group-hover:px-3 duration-300">My Account</span>
                        </a>
                    </li>
                    <li class="mb-2">
                        <a href="#" class="hover:text-green-500 flex items-center space-x-2 group">
                            <IconsArrowRight class="text-green-color size-5" /> <span
                                class="group-hover:px-3 duration-300">My Favorite</span>
                        </a>
                    </li>
                    <li class="mb-2">
                        <a href="#" class="hover:text-green-500 flex items-center space-x-2 group">
                            <IconsArrowRight class="text-green-color size-5" /> <span
                                class="group-hover:px-3 duration-300">Terms Of Use</span>
                        </a>
                    </li>
                    <li class="mb-2">
                        <a href="#" class="hover:text-green-500 flex items-center space-x-2 group">
                            <IconsArrowRight class="text-green-color size-5" /> <span
                                class="group-hover:px-3 duration-300">Privacy Policy</span>
                        </a>
                    </li>
                </ul>
            </div>

            <!-- Opening Hours -->
            <div>
                <h3 class="text-lg font-bold text-gray-800 mb-4">Opening Hours</h3>
                <ul class="text-sm space-y-6">
                    <li class="mb-2">Monday : 7:00am To 10:00pm</li>
                    <li class="mb-2">Tuesday : 7:00am To 10:00pm</li>
                    <li class="mb-2">Wednesday : 7:00am To 10:00pm</li>
                    <li class="mb-2">Friday : 7:00am To 10:00pm</li>
                    <li class="mb-2">Saturday And Sunday Closed</li>
                </ul>
            </div>
        </div>

        <!-- Social Media Icons -->
        <div class="mt-10 text-center">
            <div class="flex justify-center space-x-4 mb-6">
                <a href="#" class="bg-green-color px-3 py-3 text-white rounded-md">
                    <!-- Icon Facebook -->
                    <IconsFacebook class="size-5" />
                </a>
                <a href="#" class="bg-green-color text-white px-3 py-3 rounded-md">
                    <!-- Icon Twitter -->
                    <IconsTwitter class="size-5" />
                </a>
                <a href="#" class="bg-green-color text-white px-3 py-3 rounded-md">
                    <!-- Icon Instagram -->
                    <IconsInstagram class="size-5" />
                </a>
                <a href="#" class="bg-green-color text-white px-3 py-3 rounded-md">
                    <!-- Icon LinkedIn -->
                    <IconsLinkedin class="size-5"/>
                </a>
                <a href="#" class="bg-green-color text-white px-3 py-3 rounded-md">
                    <!-- Icon Pinterest -->
                    <IconsPinterest class="size-5" />
                </a>
            </div>
            <p class="text-gray-600">Created by <a href="https://github.com/marcaureldev" class="text-green-500 font-satisfy text-lg">Marc-Aurel</a> | All Rights Reserved!</p>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'FooterComponent',
};
</script>