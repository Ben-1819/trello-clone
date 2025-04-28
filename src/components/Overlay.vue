<template>
    <div>
        <Transition>
            <div v-if="overlayIsActive" class="overlay" @click="closeOverlay">

            </div>
        </Transition>
    </div>
</template>

<script>
import { useListStore } from "@/stores/index";
import { mapStores } from "pinia";
    export default {
        computed: {
            ...mapStores(useListStore),
            overlayIsActive() {
                return this.boardStore.overlay
            },
        },
        methods: {
            closeOverlay() {
                this.boardStore.toggleOverlay();
            },
        },
    }
</script>

<style scoped>

.overlay{
    background-color: rgba(11, 26, 168, 0.5);
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 500;
}

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

.v-leave-active{
    transition: all 0.3s ease-in;
}

.v-leave-to{
    opacity: 0;
}
</style>