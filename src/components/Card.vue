<template>
    <div>
        <input class="input-card" type="text" placeholder="Create a Card" v-model="cardName" @keyup.enter="createCard">
    </div>
</template>

<script>
import { useListStore } from "@/stores/index";
import { mapStores } from "pinia";
    export default {
        data() {
            return {
                cardName: "",
            }
        },
        props: {
            listId: {
                type: Number,
            },
        },
        computed: {
            ...mapStores(useListStore),
        },
        methods: {
            createCard() {
                if(this.cardName !== ""){
                    const card = {
                        listId: this.listId,
                        name: this.cardName,
                    };
                    this.boardStore.createCard(card);
                    this.cardName = "";
                }
            },
        },
    }
</script>

<style scoped>

.input-card{
    position: relative;
    background-color: white;
    min-height: 30px;
    width: 100%;
    display: flex;
    align-items: center;
    border-radius: 5px;
    padding: 10px;
    word-break: break-all;
    font-size: 16px;
}

</style>