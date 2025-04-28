<template>
    <div>
        <draggable :options="{ group: 'cards' }" ghostClass="ghost">
            <span 
                class="element-card"
                v-for="(card, index) in cards"
                :key="card.id"
                @click="togglePopup(card)"
            >
                {{ card.name }}
            </span>
        </draggable>
    </div>
</template>

<script>
import { VueDraggableNext } from "vue-draggable-next";
import { useListStore } from "@/stores/index";
import { mapStores } from "pinia";

    export default {
        components: {
            draggable: VueDraggableNext,
        },
        props: {
            listId: {
                type: Number,
            },
            listName: {
                type: String,
            },
        },
        computed: {
            ...mapStores(useListStore),
            cards(){
                const cardFilteredByListId = this.boardStore.getCards;
                return cardFilteredByListId.filter((card) => {
                    if(card.listId === this.listId){
                        return true;
                    }else{
                        return false;
                    }
                });
            },
            overlayIsActive(){
                return this.boardStore.getOverlay;
            },
        },
        methods: {
            togglePopup(data) {
                const currentData = {
                    listId: this.listId,
                    listName: this.listName,
                    id: data.id,
                    name: data.name,
                };
                this.boardStore.toggleOverlay();
                this.boardStore.openForm(currentData);
            },
        },
    }
</script>

<style scoped>

.element-card{
    position: relative;
    background-color: white;
    height: auto;
    display: flex;
    align-items: center;
    padding: 10px;
    border-radius: 5px;
    min-height: 30px;
    margin-bottom: 10px;
    word-break: break-all;
    text-align: left;
}
</style>