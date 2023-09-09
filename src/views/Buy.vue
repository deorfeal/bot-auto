<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import BuySlide from '../components/Buy-slide.vue';
import Greating from '../components/Greating.vue';
import carsData from '@/file.json';

import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/pagination';

export default {
    name: 'Buy',
    components: {
        Swiper,
        SwiperSlide,
        Header,
        BuySlide,
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
            modules: [Pagination],
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
            <swiper class="buy-swiper" :direction="'horizontal'" :modules="modules" :loop="true" :speed="750"  :pagination="{ clickable: true }"
                :slides-per-view="1" :space-between="0" @swiper="onSwiper" @slideChange="onSlideChange">
                <swiper-slide class="buy-swiper__slide buy-slide card" v-for="item of this.carsData.cars" :key="item.carId">
                    <BuySlide :carsInfo="item" />
                </swiper-slide>
            </swiper>
        </div>
        <Footer />
    </div>
</template>

<style lang="scss">
.buy-swiper {
    width: 100%;
    min-height: calc(100vh - 73px);
    background: linear-gradient(180deg, #010101 0%, #021C37 41.61%, #010C18 83.22%, #000 124.82%, #010101 166.43%);
    backdrop-filter: blur(50px);
    .swiper-pagination {
        bottom: 125px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;
    }

    .swiper-pagination-bullet {
        border-radius: 11px;
        border: 1px solid #FFF;
        width: 11px;
        height: 11px;
        opacity: 1;
        margin-left: 0 !important;
        margin-right: 0 !important;
    }
    .swiper-pagination-bullet-active {
        background: #fff;
    }
}
</style>