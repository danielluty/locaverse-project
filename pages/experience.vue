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
    p {
        line-height: 1.5;
        font-size: 1.2rem;
        max-width: 800px;
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