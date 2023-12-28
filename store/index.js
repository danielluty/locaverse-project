// Initial state
export const state = () => ({
    cards: [],
});

// Mutations
export const mutations = {
    addCard(state, card) {
        state.cards.push(card);
    },
};


// Getters
export const getters = {
    getCards: (state) => state.cards,
    getCardsStartingWithM: (state) => {
        return state.cards.filter((card) =>
          card.serviceName.toLowerCase().startsWith('m')
        );
    },
};

export default {
    state,
    mutations,
    getters,
};




