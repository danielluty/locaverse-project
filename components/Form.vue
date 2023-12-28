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
</style>