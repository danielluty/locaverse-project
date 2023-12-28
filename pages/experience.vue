<template>
    <div>
        <h2>How I accomplished this task:</h2>
        <p>The first approach I tried, was to finish a 6h Vue tutorial in order to finish 
            the task without help, but due to Christmas days, there was not enough time. 
            So I decided to use AI and Stackoverflow. I had some issues with implementig the 5 star 
            rating system, but after some research it was obviously pretty easy. I had some problems 
            with showing cards starting with the letter "m" on the other page. The solution will follow 
            soon. Vue seems to be a really intuitive framework and I liked to work with it :).</p><br>
            <h2>Cards with Service Name Starting with 'M'</h2>
            <div class="container">
                <div v-for="card in cardsStartingWithM" :key="card.id">
                    <!-- Display card information as needed -->
                    <div class="card">
                        <h3>Service name:</h3>
                        <span>{{ card?.serviceName }}</span>
                        <h3>Business name:</h3>
                        <span>{{ card?.businessName }}</span>
                        <h3>Service rating:</h3>
                        <div class="star-display">
                            <span
                                v-for="n in 5"
                                :key="n"
                                :class="{ 'fas star': n <= card?.serviceRating, 'far star': n > card?.serviceRating }"
                            ></span>
                        </div>
                    </div>
                </div>
            </div>
        <nuxt-link to="/">Back to index</nuxt-link>

    </div>
</template>

<script>
import Card from '../components/Card.vue';

export default {
    components: {
    Card,
    },
    computed: {
        cardsStartingWithM() {
        const cards = this.$store.getters.getCardsStartingWithM;
        return cards
        },
    },
}
</script>

<style scoped>
</style>