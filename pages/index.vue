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

    .container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin-bottom: 4rem;
    }

    .footer {
        text-align: center;
        font-size: 1.5rem;
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        padding: 1rem;
        background: #fff;
    }
</style>