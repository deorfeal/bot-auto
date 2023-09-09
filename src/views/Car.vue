<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import Greating from '../components/Greating.vue';
import carsData from '@/file.json';

import CarInfo from '../components/CarInfo.vue';

export default {
    name: 'Buy',
    components: {
        Header,
        Footer,
        CarInfo,
        Greating
    },
    data() {
        return {
            carsData: carsData,
        }
    },
    mounted() {
    }
};
</script>

<template>
    <div class="big-wrapper">
        <Greating />
        <Header />
        <div class="main">
            <section class="main__car car">
                <div class="car__card card">
                    <CarInfo :carsInfo="this.carsData.cars[0]" />
                </div>
            </section>
        </div>
        <Footer />
    </div>
</template>

<style lang="scss">
.car {
    width: 100%;
    min-height: calc(100vh);
    background: linear-gradient(180deg, #010101 0%, #021C37 41.61%, #010C18 83.22%, #000 124.82%, #010101 166.43%);
    backdrop-filter: blur(50px);
}
</style>