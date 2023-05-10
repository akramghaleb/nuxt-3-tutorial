<template>
    <div>
        <p>Product details for {{ id }}</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi necessitatibus molestiae est. Id expedita a provident, quis numquam, possimus ipsam accusamus minima accusantium ratione repellendus voluptas nam modi deleniti exercitationem?</p>
    </div>
</template>

<script setup>
    const { id } = useRoute().params
</script>

<style scoped>

</style>