<script>
export default {
    name: 'CardCard',
    props: {
        cardInfo: Object
    }
}
</script>

<template>
    <div class="ms-card col-6 col-md-4 col-lg-3 col-xl-2 d-flex flex-column">
        <div class="img-container">
            <img :src="cardInfo.card_images[0].image_url_small" :alt="cardInfo.name">
        </div>
        <div class="text-container d-flex flex-column align-items-center justify-content-between flex-grow-1">
            <div class="name">{{ cardInfo.name }}</div>
            <div class="race">{{ cardInfo.race }}</div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../style/partials/variables' as *;

.ms-card {
    .img-container {
        img {
            width: 100%;
        }
    }

    .text-container {
        background-color: $brand-primary;

        .name {
            font-size: .875rem;
        }

        .race {
            color: $brand-light;
        }
    }
}
</style>