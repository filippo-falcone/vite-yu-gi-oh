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
                <img src="https://steamuserimages-a.akamaihd.net/ugc/1011565208488671455/DC0FEC4441B377442E97AF3E1AAF36D7AD41C5D2/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false" alt="">
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