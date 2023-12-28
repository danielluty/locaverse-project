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

    h3 {
        margin: .5rem 0 0;
    }
    .card { 
        display: flex;
        flex-direction: column;
        padding: 1rem;
        margin: .5rem;
        width: 200px;
        border: 1px solid darkgray;
    }

    span {
        margin-bottom: .5rem;
    }

    .star {
        color: gold;
        font-size: 1.8rem;
    }

    .star-display {
        text-align: center;
        padding-top: 1rem;
    }

    .star.fas::before {
        content: '\2605'; /* Unicode character for a filled star */
        color: gold;
    }

    .star.far::before {
        content: '\2606'; /* Unicode character for an empty star */
        color: gold;
    }

</style>