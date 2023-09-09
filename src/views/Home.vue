<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import CarsSlide from '../components/Cars-slide.vue';
import Greating from '../components/Greating.vue';
import carsData from '@/file.json';

import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/navigation';

export default {
    name: 'Home',
    components: {
        Swiper,
        SwiperSlide,
        Header,
        CarsSlide,
        Footer,
        Greating
    },
    data() {
        return {
            carsData: carsData,
        }
    },
    setup() {
        const onSwiper = (swiper) => {
            // console.log(swiper);
        };
        const onSlideChange = () => {
            // console.log('slide change');
        };
        return {
            onSwiper,
            onSlideChange,
        };
    },
    mounted() {
    }
};
</script>

<template>
    <div class="big-wrapper">
        <Greating/>
        <Header />
        <div class="main">
            <swiper class="cars-swiper" :direction="'vertical'" :modules="modules" :loop="true" :speed="750"
                :slides-per-view="1" :space-between="0" @swiper="onSwiper" @slideChange="onSlideChange">
                <swiper-slide class="cars-swiper__slide cars-slide" v-for="item of this.carsData.cars" :key="item.carId">
                    <CarsSlide :carsInfo="item"/>
                </swiper-slide>
            </swiper>
        </div>
        <Footer />
    </div>
</template>

<style lang="scss">
.cars-swiper {
    height: 100vh;
    max-height: 100vh;
    width: 100%;
}
.cars-slide {
    width: 100%;
    height: 100vh;
    max-height: 100vh;
}
</style>