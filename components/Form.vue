<template>
    <form @submit.prevent="handleSubmit" class="main-form">
        <label for="service-name">Service name:</label>
        <input v-model="formData.serviceName" id="service-name" type="text" required />

        <label for="business-name">Business name:</label>
        <input v-model="formData.businessName" id="business-name" type="text" required />

        <label for="service-rating">Service rating:</label>
        <div class="rating-input">
            <span
                v-for="n in 5"
                :key="n"
                @click="setRating(n)"
                :class="{ 'fas star': n <= formData.serviceRating, 'far star': n > formData.serviceRating }"
            ></span>
        </div>


        <button type="submit">Create Card</button>
    </form>
</template>

<script>
    export default {
        data() {
            return {
                formData: {
                    serviceName: '',
                    businessName: '',
                    serviceRating: 1
                },
            };
        },

        computed: {
            visibleStars() {
                return this.formData.serviceRating;
            },
        },

        methods: {
            handleSubmit() {
                
                const card = { 
                    serviceName: this.formData.serviceName,
                    businessName: this.formData.businessName,
                    serviceRating: this.formData.serviceRating,
                 };

                // Test Vuex Store
                console.log('Before mutation:', this.$store.state);

                // Commit a mutation
                this.$store.commit('addCard', card);
                this.$emit('createCard', { ...this.formData, visibleStars: this.visibleStars });

                // Test 2 Vuex Store
                console.log('After mutation:', this.$store.state);

            },
            setRating(rating) {
                this.formData.serviceRating = rating === this.formData.serviceRating ? 0 : rating;
                this.formData.serviceRating = rating;
            }
        },
    };
</script>

<style scoped>
    .main-form {
        max-width: 300px;
        display: flex;
        flex-direction: column;
        margin: 3rem auto;
    }

    input {
        margin-bottom: 1rem;
    }

    button {
        font-size: 1.2rem;
        padding: .5rem 0;
    }

    .rating-input {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
    }

    .rating-input span {
        font-size: 1.5em;
        margin-right: 5px;
        cursor: pointer;
    }

    .rating-input {
         font-size: 24px;
    }

    .star {
        cursor: pointer;
        display: inline-block;
        margin-right: 5px;
        font-size: 1.5em;
    }

    .star.fas::before {
        content: '\2605'; /* Filled star */
        color: gold;
    }

    .star.far::before {
        content: '\2606'; /* Empty star */
        color: gold;
    }
</style>