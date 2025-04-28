import { defineStore } from "pinia";

export const useListStore = defineStore("board", {
    state: () => ({
        overlay: false,
        lastListId: 3,
        lastCardId: 5,
        currentData: null,
        lists: [
            {id: 1, name: "list #1"},
            {id: 2, name: "list #2"},
            {id: 3, name: "list #3"},
        ],
        cards: [
            {id: 1, name: "card 1"},
            {id: 2, name: "card 2"},
            {id: 3, name: "card 3"},
        ]
    }),
    actions: {
        // Action to create new list
        createList(payload){
            // Increment lastListId
            this.lastListId++;
            // Create new list object with new id and name from payload
            const list = { id: this.lastListId, name: payload };
            // Add to the array of lists
            this.lists.push(list);
        },
        // Action to create a new card
        createCard(payload) {
            // Increment lastCardId
            this.lastCardId++;
            // Create new card object using the listId, id and name from the payload
            const card = { listId: payload.listId, id: this.lastCardId, name: payload.name };
            // Push to the array of cards
            this.cards.push(card);
        },
        // Action to toggle the overlay
        toggleOverlay() {
            // Flip boolean value of overlay
            this.overlay = !this.overlay;
        },
        // Action to set form data
        openForm(payload) {
            // Set currentData to the payload
            this.currentData = payload;
        },
        // Action to save updated card
        saveCard(payload) {
            // Iterate over the cards array and update the card with the matching id by merging the payload into the existing card
            this.cards = this.cards.map(card => 
            card.id === payload.id ? { ...card, ...payload } : card
            );
        },
        // Action to delete a card
        deleteCard(payload) {
            // Filter the cards array to remove the card with the matching id
            this.cards = this.cards.filter(card => card.id !== payload.id);
        },
    },
    getters: {
        // Get the last listId from the state
        lastListId: (state) => state.lastListId,
        // Get the last cardId from the state
        lastCardId: (state) => state.lastCardId,
        // Get the lists from the state
        lists: (state) => state.lists,
        // Get the cards from the state
        cards: (state) => state.cards,
        // Get the overlay from the state
        overlay: (state) => state.overlay,
        // Get the current data from the state
        currentData: (state) => state.currentData
    }
}) 