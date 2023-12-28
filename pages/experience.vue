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
            <p>Coming soon.</p>
            <div v-for="card in cardsStartingWithM" :key="card.id">
            <!-- Display card information as needed -->
            <Card :card="card" />
            </div>
        <nuxt-link to="/">Back to index</nuxt-link>

    </div>
</template>

<script>
import Card from '@/components/Card.vue';

export default {
    components: {
    Card,
    },
/*     computed: {
        cardsStartingWithM() {
        return this.$store.getters.getCardsStartingWithM;
        },
    }, */
}
</script>

<style scoped>
    p {
        line-height: 1.5;
        font-size: 1.2rem;
        max-width: 800px;
    }
</style>