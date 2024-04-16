<script>
import axios from 'axios';
import { store } from './store.js';
import AppHeader from './components/AppHeader.vue';
import AppFilter from './components/AppFilter.vue';
import AppLoader from './components/AppLoader.vue';
import CardsList from './components/CardsList.vue';

export default {
  components: {
    AppHeader,
    AppFilter,
    AppLoader,
    CardsList
  },
  data() {
    return {
      store,
      queryParams: {
        num: 24,
        offset: 0
      }
    };
  },
  methods: {
    getCardFromApi() {
      let apiUrl = 'https://db.ygoprodeck.com/api/v7/cardinfo.php';
      // Archetype filter
      if (store.filterArchetype === '') {
        this.queryParams.archetype = null;
      } else if (store.filterArchetype !== '') {
        this.queryParams.archetype = store.filterArchetype;
      }
      // Limit filter
      if (store.filterLimit === '') {
        this.queryParams.num = 24;
      } else if (store.filterLimit !== '') {
        this.queryParams.num = store.filterLimit;
      }
      axios.get(apiUrl, {
        params: this.queryParams
      })
      .then((response) => {
        store.cards = response.data.data;
        store.isLoading = false;
      });
    },
  },
  mounted() {
    this.getCardFromApi();
  }
}
</script>

<template>
  <AppHeader></AppHeader>
  <main>
    <AppFilter @filter="getCardFromApi"></AppFilter>
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