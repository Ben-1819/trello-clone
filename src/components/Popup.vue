<template>
    <div>
        <Transition>
            <div v-if="this.boardStore.getOverlay" class="modal">
                <h1>List Name : {{ currentData.listName }}</h1>
                <input :placeholder="currentData.name" v-model="cardName">
                <div class="container-button">
                    <button class="blue" @click="saveElement">save</button>
                    <button class="red" @click="deleteElement">delete</button>
                </div>
            </div>
        </Transition>
    </div>
</template>

<script>
import { useListStore } from "@/stores/index";
import { mapStores } from "pinia";
    export default {
        data() {
            return {
                cardName: null,
            }
        },
        computed: {
            ...mapStores(useListStore),
        },
        methods: {
            saveElement() {
                if(this.cardName === null){
                    this.cardName = this.currentData.name;
                }
                const card = {
                    listId: this.currentData.listId,
                    id: this.currentData.id,
                    name: this.cardName,
                };
                this.boardStore.saveCard(card);
                this.cardName = null;
                this.boardStore.toggleOverlay();
            },
            deleteElement(){
                this.boardStore.deleteCard(this.currentData);
                this.boardStore.toggleOverlay();
            },
        },
    }
</script>

<style scoped>

.v-enter-from{
    opacity: 0;
}

.v-enter-active{
    transition: all 0.3s ease-out;
}

.v-enter-to{
    opacity: 1;
}

.v-leave-from{
    opacity: 1;
}

.v-least-active{
    transition: all 0.3s ease-in;
}

.v-leave-to{
    opacity: 0;
}

.modal {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    position: absolute;
    height: 500px;
    width: 500px;
    border-radius: 10px;
    background-color: rgba(235, 236, 240, 1);
    z-index: 550;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

input {
    width: 250px;
    height: 50px;
    padding: 10px 20px 10px 20px;
    border: 1px solid rgba(60, 60, 60, 0.2);
    border-radius: 15px;
}

button {
    display: flex;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 15px;
    cursor: pointer;
    transition-duration: 0.4s;
}

button:hover {
    color: white;
}

.blue {
    background-color: rgba(1, 100, 255, 1);
}

.blue:hover {
    background-color: rgba(1, 100, 255, 0.8);
}

.red {
    background-color: rgba(250, 52, 75, 1);
}
.red:hover {
    background-color: rgba(250, 52, 75, 0.8);
}

.container-button {
    display: flex;
    flex-direction: row;
    gap: 30px;
}

</style>