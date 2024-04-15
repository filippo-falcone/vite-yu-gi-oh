<script>
export default {
    name: 'AppLoader'
}
</script>

<template>
   <section>
    <div class="container d-flex flex-column justify-content-center align-items-center py-5">
            <h1>Loading...</h1>
            <div class="img-container">
                <img src="../assets/img/polymerization.gif" alt="polymerization">
            </div>
    </div>
   </section>
</template>

<style scoped lang="scss">
@use '../style/partials/variables' as *;

section {
    background-color: $brand-primary;

    .container {
        height: 100dvh;

        h1 {
            color: $brand-light
        }
    }
}
</style>