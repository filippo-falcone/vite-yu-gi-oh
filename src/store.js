import { reactive } from "vue";

export const store = reactive({
    cards: [],
    isLoading: true,
    filterLimit: '',
    filterType: '',
    filterAttribute: '',
    filterRace: '',
    filterArchetype: '',
    filterFormat: '',
    filterEffect: ''
});