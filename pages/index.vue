<template>
  <div>
    <Form @createCard="createCard" />
        <div class="container">
            <div v-for="(card, index) in createdCards" :key="index">
            <Card :formData="card" />
        </div>
        <div class="footer">
            <nuxt-link to="/experience">My experience/challenges coding this task.</nuxt-link>
        </div>
      </div>
      
  </div>
</template>

<script>
import Card from '../components/Card.vue';
import Form from '../components/Form.vue';

export default {
    components: {
        Card,
        Form,
    },
    data() {
        return {
        createdCards: [],
        };
    },
    methods: {
        createCard(formData) {    
        // Add the new card to the array
        this.createdCards.push(formData);
        },
    },
};
</script>

<style scoped>
</style>