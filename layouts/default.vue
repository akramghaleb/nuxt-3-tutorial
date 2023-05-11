<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4 flex justify-between">
                <nuxt-link to="/" class="font-bold">Akram Nuxt</nuxt-link>
                <ul class="flex gap-4">
                    <li><NuxtLink to="/">Home</NuxtLink></li>
                    <li><NuxtLink to="/about">About</NuxtLink></li>
                    <li><NuxtLink to="/products" class="btn">Products</NuxtLink></li>
                    <li><NuxtLink to="/products/abc">abc</NuxtLink></li>
                </ul>
            </nav>
        </header>

        <!-- output the page content -->
        <div class="container mx-auto p-4">
            <slot />
        </div>
    </div>
  </template>
  
  <script setup>

</script>

<style  scoped>
    .router-link-exact-active {
        color: #12b488;
    }
</style>