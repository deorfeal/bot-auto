<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import Greating from '../components/Greating.vue';
import carsData from '@/file.json';

import CustomSelect from "../components/CustomSelect.vue";
export default {
    name: 'region',
    components: {
        Header,
        Footer,
        CustomSelect,
        Greating
    },
    data() {
        return {
            carsData: carsData,
            regions: [],
            searchText: "",
            searchListIsActive: false,
            arrayOfRegions: [],
        }
    },
    computed: {
    },
    mounted() {
        this.regions = this.carsData.regions
        
        let newArrayOfRegions = []
        for ( let item of this.carsData.regions ) {
            newArrayOfRegions.push(item.name)
        }
        this.arrayOfRegions = newArrayOfRegions
    },
    methods: {
    },
};
</script>

<template>
    <div class="big-wrapper">
        <Greating/>
        <Header />
        <div class="main">
            <section class="main__region region">
                <div class="region__inner">
                    <div class="region__wrapper">
                        <CustomSelect :options="arrayOfRegions" :default="'Ваш регион'" class="select" />
                        <ul class="region__list">
                            <li class="region__list-item">
                                <p class="region__list-text">
                                    “BUXARA AVTO
                                    MAGNAT” MCHJ
                                </p>
                                <p class="region__list-info">
                                    Осталость <span>3</span>
                                </p>
                            </li>
                            <li class="region__list-item">
                                <p class="region__list-text">
                                    “BUXARA AVTO
                                    MAGNAT” MCHJ
                                </p>
                                <p class="region__list-info">
                                    Осталость <span>3</span>
                                </p>
                            </li>
                            <li class="region__list-item">
                                <p class="region__list-text">
                                    “BUXARA AVTO
                                    MAGNAT” MCHJ
                                </p>
                                <p class="region__list-info">
                                    Осталость <span>3</span>
                                </p>
                            </li>
                            <li class="region__list-item">
                                <p class="region__list-text">
                                    “BUXARA AVTO
                                    MAGNAT” MCHJ
                                </p>
                                <p class="region__list-info">
                                    Осталость <span>3</span>
                                </p>
                            </li>
                            <li class="region__list-item">
                                <p class="region__list-text">
                                    “BUXARA AVTO
                                    MAGNAT” MCHJ
                                </p>
                                <p class="region__list-info">
                                    Осталость <span>3</span>
                                </p>
                            </li>
                            <li class="region__list-item">
                                <p class="region__list-text">
                                    “BUXARA AVTO
                                    MAGNAT” MCHJ
                                </p>
                                <p class="region__list-info">
                                    Осталость <span>3</span>
                                </p>
                            </li>
                            <li class="region__list-item">
                                <p class="region__list-text">
                                    “BUXARA AVTO
                                    MAGNAT” MCHJ
                                </p>
                                <p class="region__list-info">
                                    Осталость <span>3</span>
                                </p>
                            </li>
                            <li class="region__list-item">
                                <p class="region__list-text">
                                    “BUXARA AVTO
                                    MAGNAT” MCHJ
                                </p>
                                <p class="region__list-info">
                                    Осталость <span>3</span>
                                </p>
                            </li>
                        </ul>
                    </div>
                    <button class="region__button" type="button">
                        Найти
                    </button>
                </div>
            </section>
        </div>
        <Footer />
    </div>
</template>

<style lang="scss">
.region {
    width: 100%;
    min-height: calc(100vh);
    background: linear-gradient(180deg, #010101 0%, #021C37 41.61%, #010C18 83.22%, #000 124.82%, #010101 166.43%);
    backdrop-filter: blur(50px);
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-grow: 1;

    &__inner {
        max-width: 265px;
        margin-left: auto;
        margin-right: auto;
        height: 100%;
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        padding-top: 120px;
        padding-bottom: 95px;
    }

    &__wrapper {
        height: 100%;
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        gap: 10px;
        margin-bottom: 30px;
    }

    &__list {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    &__list-item {
        border: 1px solid #FFF;
        padding: 7px 15px;
        display: flex;
        align-items: center;
        gap: 15px;
    }

    &__list-text {
        color: #FFF;
        font-size: 12px;
        font-weight: 500;
        line-height: 15px;
    }

    &__list-info {
        padding: 2px 10px;
        color: #FFF;
        font-size: 12px;
        font-weight: 500;
        line-height: 14px;
        background: rgba(217, 217, 217, 0.30);
        min-width: 115px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    &__button {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #FFF;
        text-align: center;
        font-size: 15px;
        font-weight: 600;
        line-height: 14px;
        padding: 15px;
        background: rgba(255, 255, 255, 0.30);
        backdrop-filter: blur(2px);
        width: 100%;
    }
}
</style>