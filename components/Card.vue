<template>
    <div class="card">
        <h3>Service name:</h3>
        <span>{{ formData.serviceName }}</span>
        <h3>Business name:</h3>
        <span>{{ formData.businessName }}</span>
        <h3>Service rating:</h3>
        <div class="star-display">
            <span
                v-for="n in 5"
                :key="n"
                :class="{ 'fas star': n <= formData.serviceRating, 'far star': n > formData.serviceRating }"
            ></span>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            formData: Object,
        },
    };
</script>

<style scoped>
</style>