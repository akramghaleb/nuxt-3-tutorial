<template>
    <div>
        <div class="grid grid-cols-1 gap-5 md:grid-cols-4 sm:grid-cols-2">
            <div v-for="p in products">
                <product-card :product="p" />
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout:'products'
})

//fetch the products
const {data:products} =  await useFetch('https://fakestoreapi.com/products')

</script>

<style scoped>

</style>