<script>
import { store } from '../store';

export default {
    name: 'ResultsNum',
    data() {
        return {
            store
        };
    },
    computed: {
        cardLength() {
            return store.cards.length;
        }
    }
}
</script>

<template>
    <div class="text-center">Results: {{ cardLength }} cards </div>
</template>

<style scoped lang="scss"></style>