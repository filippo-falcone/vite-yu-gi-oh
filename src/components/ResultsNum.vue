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
    <div class="results-num d-flex justify-content-center align-items-center">Results: {{ cardLength }} cards </div>
</template>

<style scoped lang="scss">
@use '../style/partials/variables' as *;

.results-num {
    color: $brand-light;
    font-weight: 500;
}
</style>