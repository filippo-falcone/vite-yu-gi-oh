<script>
import axios from 'axios';
import { store } from './store.js';
import AppHeader from './components/AppHeader.vue';
import CardsList from './components/CardsList.vue';
import AppLoader from './components/AppLoader.vue';

export default {
  components: {
    AppHeader,
    CardsList,
    AppLoader
  },
  data() {
    return {
      store
    };
  },
  methods: {
    getCardFromApi() {
      const queryParams = {
        num: 24,
        offset: 0
      }
      axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php', {
        params: queryParams
      })
      .then((response) => {
        store.cards = response.data.data;
        store.isLoading = false;
      });
    }
  },
  mounted() {
    this.getCardFromApi();
  }
}
</script>

<template>
  <AppHeader></AppHeader>
  <main>
    <AppLoader v-if="store.isLoading"></AppLoader>
    <CardsList v-else></CardsList>
  </main>
</template>

<style lang="scss">
@use './style/generic.scss';
@use './style/partials/variables' as *;

body {
    background-color: $brand-primary;
}
</style>