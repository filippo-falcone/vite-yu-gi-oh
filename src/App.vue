<script>
import axios from 'axios';
import { store } from './store.js';
import AppHeader from './components/AppHeader.vue';
import CardsList from './components/CardsList.vue';

export default {
  components: {
    AppHeader,
    CardsList
  },
  data() {
    return {
      store
    };
  },
  methods: {
    getCardFromApi() {
      axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?=&startdate=2000-01-01&enddate=2002-08-23&dateregion=tcg')
      .then((response) => {
        store.cards = response.data.data;
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
    <CardsList></CardsList>
  </main>
</template>

<style lang="scss">
@use './style/generic.scss';
</style>