<script>
import axios from 'axios';
import { store } from '../store.js';
import ResultsNum from './ResultsNum.vue';

export default {
    name: 'AppFilter',
    components: {
        ResultsNum
    },
    data() {
        return {
            store,
            isActive: null,
            limits: [ 30, 50, 100 ],
            types: [
                'Effect Monster',
                'Flip Effect Monster',
                'Flip Tuner Effect Monster',
                'Fusion Monster',
                'Gemini Monster',
                'Link Monster',
                'Normal Monster',
                'Normal Tuner Monster',
                'Pendulum Effect Fusion Monster',
                'Pendulum Effect Monster',
                'Pendulum Effect Ritual Monster',
                'Pendulum Flip Effect Monster',
                'Pendulum Normal Monster',
                'Pendulum Tuner Effect Monster',
                'Ritual Effect Monster',
                'Ritual Monster',
                'Skill Card',
                'Spell Card',
                'Spirit Monster',
                'Synchro Monster',
                'Synchro Pendulum Effect Monster',
                'Synchro Tuner Monster',
                'Token',
                'Toon Monster',
                'Trap Card',
                'Tuner Monster',
                'Union Effect Monster',
                'XYZ Monster',
                'XYZ Pendulum Effect Monster'
            ],
            attributes: [ 'DARK', 'DIVINE', 'EARTH', 'FIRE', 'LIGHT', 'WATER', 'WIND' ],
            races: [
                'Aqua',
                'Beast',
                'Beast-Warrior',
                'Continuous',
                'Counter',
                'Creator-God',
                'Cyberse',
                'Dinosaur',
                'Divine-Beast',
                'Dragon',
                'Equip',
                'Fairy',
                'Field',
                'Fiend',
                'Fish',
                'Insect',
                'Machine',
                'Normal',
                'Plant',
                'Psychic',
                'Pyro',
                'Quick-Play',
                'Reptile',
                'Ritual',
                'Rock',
                'Sea Serpent',
                'Spellcaster',
                'Thunder',
                'Warrior',
                'Winged Beast',
                'Wyrm',
                'Zombie'
            ],
            archetypes: [],
            formats: [ 'tcg', 'ocg', 'duel links', 'speed duel'],
            effects: [
                'Back to Hand',
                'Back to Deck',
                'Banish',
                'Change ATK or DEF',
                'Control',
                'Counter',
                'Damage LP',
                'Destroy Monster',
                'Direct Attack',
                'Draw',
                'Effect Damage',
                'Fusion-Related',
                'Gamble',
                'Graveyard',
                'Increase Level',
                'LINK-Related',
                'Negate',
                'Pendulum-Related',
                'Piercing',
                'Recover LP',
                'Repeat Attack',
                'Ritual-Related',
                'Search',
                'Select',
                'Self Burn',
                'Special Summon',
                'Synchro-Related',
                'Token',
                'Tuner-Related',
                'Win the Duel',
                'XYZ-Related'
            ]
        };
    },
    methods: {
        getArchetypesfromApi() {
            axios.get('https://db.ygoprodeck.com/api/v7/archetypes.php')
            .then((response) => {
                this.archetypes = response.data;
            })
        },
        openFilter() {
            this.isActive = 'active';
        }, 
        closeFilter() {
            this.isActive = null;
        }
    },
    mounted() {
        this.getArchetypesfromApi();
    }
}
</script>

<template>
    <div class="container py-4">
        <form class="row row-cols-3 row-cols-lg-6 justify-content-center pb-4 g-3" :class="isActive">
            <div class="col">
                <select class="filter types" name="types" v-model="store.filterType" @change="$emit('filter')">
                    <option value="">Select Type</option>
                    <option v-for="type in types" :value="type"> {{ type }}</option>
                </select>
            </div>
            <div class="col">
                <select class="filter attributes" name="attributes" v-model="store.filterAttribute" @change="$emit('filter')">
                    <option value="">Select Attributes</option>
                    <option v-for="attribute in attributes" :value="attribute"> {{ attribute }}</option>
                </select>
            </div>
            <div class="col">
                <select class="filter races" name="races" v-model="store.filterRace" @change="$emit('filter')">
                    <option value="">Select Races</option>
                    <option v-for="race in races" :value="race"> {{ race }}</option>
                </select>
            </div>
            <div class="col">
                <select class="filter archetypes" name="archetypes" v-model="store.filterArchetype" @change="$emit('filter')">
                    <option value="">Select Archetypes</option>
                    <option v-for="archetype in archetypes" :value="archetype.archetype_name">{{ archetype.archetype_name }}</option>
                </select>
            </div>
            <div class="col">
                <select class="filter formats" name="formats" v-model="store.filterFormat" @change="$emit('filter')">
                    <option value="">Select Formats</option>
                    <option v-for="format in formats" :value="format"> {{ format }}</option>
                </select>
            </div>
            <div class="col">
                <select class="filter effects" name="effects" v-model="store.filterEffect" @change="$emit('filter')">
                    <option value="">Select Effects</option>
                    <option v-for="effect in effects" :value="effect"> {{ effect }}</option>
                </select>
            </div>
        </form>
        <div class="d-flex justify-content-center mt-3 pb-3">
            <button class="open-filter btn btn-light me-3" @click="openFilter">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-funnel-fill" viewBox="0 0 16 16">
                    <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5z"/>
                </svg>
            </button>
            <div class="limit-container">
                <select class="limits" name="limits" v-model="store.filterLimit" @change="$emit('filter')">
                    <option value="">Limit: 24</option>
                    <option v-for="limit in limits" :value="limit">Limit: {{ limit }}</option>
                </select>
            </div>
            <button v-if="this.isActive === 'active'" class="close-filter btn btn-danger ms-3" @click="closeFilter">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                </svg>
            </button>
        </div>
        <ResultsNum></ResultsNum>
    </div>
</template>

<style scoped lang="scss">
@use '../style/partials/variables' as *;

.container {
    form {
        background-color: $brand-light;
        border-radius: 10px;
        display: none;
    
        &.active {
            display: flex;

            .filter {
                width: 100%;
                border-radius: 5px;
            }
        }
    }

    div {
        .open-filter{
            color: $brand-primary;
    
            &:active {
                color: $brand-primary;
            }
    
        }

        .limit-container {
            .limits {
                min-height: 100%;
                border-radius:  5px;
            }
        }
    }
}
</style>