<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import InfoSlide from '../components/Info-slide.vue';
import Greating from '../components/Greating.vue';
import carsData from '@/file.json';

import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


export default {
    name: 'Buy',
    components: {
        Swiper,
        SwiperSlide,
        Header,
        InfoSlide,
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
            modules: [Pagination, Navigation],
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
            <swiper class="info-swiper" :direction="'horizontal'" :modules="modules" :loop="true" :speed="750" navigation
                :pagination="{ clickable: true }" :slides-per-view="1" :space-between="0" @swiper="onSwiper"
                @slideChange="onSlideChange">
                <swiper-slide class="info-swiper__slide buy-slide card" v-for="item of this.carsData.cars"
                    :key="item.carId">
                    <InfoSlide :carsInfo="item" />
                </swiper-slide>
            </swiper>
        </div>
        <Footer />
    </div>
</template>

<style lang="scss">
.info-swiper {
    width: 100%;
    min-height: calc(100vh - 73px);
    background: linear-gradient(180deg, #010101 0%, #021C37 41.61%, #010C18 83.22%, #000 124.82%, #010101 166.43%);
    backdrop-filter: blur(50px);

    .swiper-pagination {
        top: 95px;
        display: flex;
        justify-content: center;
        gap: 8px;
        height: 11px;
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

    .swiper-button-prev {
        width: 36px;
        height: 42px;
        display: flex;
        justify-content: center;
        align-content: center;
        top: 200px;
        transform: translate(unset);
        &::before {
            content: '';
            width: 15px;
            height: 15px;
            background-repeat: no-repeat;
            background-size: contain;
            background-image: url(../../public/img/arrow-icon.svg);
            background-position: center;
            transform: rotate(90deg);
        }
    }

    .swiper-button-next {
        width: 36px;
        height: 42px;
        display: flex;
        justify-content: center;
        align-content: center;
        top: 200px;
        transform: translate(unset);
        &::before {
            content: '';
            width: 15px;
            height: 15px;
            background-repeat: no-repeat;
            background-size: contain;
            background-image: url(../../public/img/arrow-icon.svg);
            background-position: center;
            transform: rotate(-90deg);
        }
    }

    .swiper-button-prev:after,
    .swiper-rtl .swiper-button-next:after {
        content: unset;
    }

    .swiper-button-next:after,
    .swiper-rtl .swiper-button-prev:after {
        content: unset;
    }
}
</style>