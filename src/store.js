import { reactive } from "vue";

export const store = reactive({
    cards: [],
    isLoading: true,
    filterSearch: '',
    filterLimit: '',
    filterType: '',
    filterAttribute: '',
    filterRace: '',
    filterArchetype: '',
    filterFormat: '',
    filterEffect: ''
});