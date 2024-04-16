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
            archetypes: [],
            isActive: null
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
            if(this.isActive === null) {
                this.isActive = 'active';
            } else {
                this.isActive = null;
            }
        }, 
    },
    mounted() {
        this.getArchetypesfromApi();
    }
}
</script>

<template>
    <div class="container py-4">
        <div class="archetypes-container" :class="isActive">
            <select class="archetypes" name="archetypes" @change="$emit('filter')" v-model="store.filterArchetype">
                <option value="">Archetypes</option>
                <option v-for="archetype in archetypes" :value="archetype.archetype_name">{{ archetype.archetype_name }}</option>
            </select>
        </div>
        <div class="d-flex justify-content-center pb-3">
            <button class="btn btn-light me-3" @click="openFilter">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-funnel-fill" viewBox="0 0 16 16">
                    <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5z"/>
                </svg>
            </button>
            <ResultsNum></ResultsNum>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../style/partials/variables' as *;

.container {
    .archetypes-container {
        display: none;

        &.active {
            display: block;
            .archetypes {
                border-radius: 5px;
            }
        }
    }

    div {
        .btn {
            color: $brand-primary;
    
            &:active {
                color: $brand-primary;
            }
    
        }
    }
}
</style>