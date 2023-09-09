<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import Greating from '../components/Greating.vue';
import carsData from '@/file.json';

import CustomSelect from "../components/CustomSelect.vue";
export default {
    name: 'Map',
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
            searchQuery: '',
            searchListIsActive: false,
            arrayOfRegions: [],
        }
    },
    computed: {
        filteredRegions() {
            return this.regions.filter(region =>
                region.name.toLowerCase().includes(this.searchQuery.toLowerCase())
            );
        }
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
        performSearch() {
            this.searchListIsActive = true
        },
        chooseRegion(emit) {
            this.searchListIsActive = false
            let elem = document.querySelector('.select').childNodes[1].childNodes
            for ( let item of elem ) {
                if ( item.id == emit.currentTarget.id ) {
                    item.click()
                    console.log('st,')
                }
            }
        }
    },
};
</script>

<template>
    <div class="big-wrapper">
        <Greating />
        <Header />
        <div class="main">
            <section class="main__map map">
                <div class="map__inner">
                    <div class="map__wrapper">
                        <div class="map__search search">
                            <input class="search__input" type="text" v-model="searchQuery" @input="performSearch"
                                placeholder="Поиск...." />
                            <ul class="search__list" v-if="this.searchListIsActive">
                                <li class="search__list-item" v-for="region in filteredRegions" :key="region.id"
                                    :id="region.id" @click="chooseRegion">
                                    {{ region.name }}
                                </li>
                            </ul>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <path
                                    d="M8.625 16.3125C4.3875 16.3125 0.9375 12.8625 0.9375 8.625C0.9375 4.3875 4.3875 0.9375 8.625 0.9375C12.8625 0.9375 16.3125 4.3875 16.3125 8.625C16.3125 12.8625 12.8625 16.3125 8.625 16.3125ZM8.625 2.0625C5.0025 2.0625 2.0625 5.01 2.0625 8.625C2.0625 12.24 5.0025 15.1875 8.625 15.1875C12.2475 15.1875 15.1875 12.24 15.1875 8.625C15.1875 5.01 12.2475 2.0625 8.625 2.0625Z"
                                    fill="white" />
                                <path
                                    d="M16.5 17.0626C16.3575 17.0626 16.215 17.0101 16.1025 16.8976L14.6025 15.3976C14.385 15.1801 14.385 14.8201 14.6025 14.6026C14.82 14.3851 15.18 14.3851 15.3975 14.6026L16.8975 16.1026C17.115 16.3201 17.115 16.6801 16.8975 16.8976C16.785 17.0101 16.6425 17.0626 16.5 17.0626Z"
                                    fill="white" />
                            </svg>
                        </div>
                        <CustomSelect :options="arrayOfRegions" :default="'Выберите регион'" class="select" />
                        <input class="map__input" type="text" placeholder="Бухара">
                        <div class="map__box">
                            <p class="map__box-text">
                                “BUXARA AVTO
                                MAGNAT” MCHJ
                            </p>
                            <p class="map__box-m">
                                800м
                            </p>
                        </div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49060.96211394381!2d64.38159865694182!3d39.77759498137062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f50060e65993cd5%3A0xc87beaf40e48e767!2sBukhara%2C%20Uzbekistan!5e0!3m2!1sen!2sua!4v1694174346285!5m2!1sen!2sua"
                            width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                    <button class="map__button" type="button">
                        Найти
                    </button>
                </div>
            </section>
        </div>
        <Footer />
    </div>
</template>

<style lang="scss">
.map {
    width: 100%;
    min-height: calc(100vh);
    background: linear-gradient(180deg, #010101 0%, #021C37 41.61%, #010C18 83.22%, #000 124.82%, #010101 166.43%);
    backdrop-filter: blur(50px);
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-grow: 1;

    iframe {
        width: 100%;
        height: 205px;
        margin-bottom: 30px;
    }

    &__inner {
        padding-top: 105px;
        padding-bottom: 95px;
        max-width: 265px;
        margin-left: auto;
        margin-right: auto;
        height: 100%;
        display: flex;
        flex-direction: column;
        flex-grow: 1;
    }

    &__wrapper {
        display: flex;
        flex-direction: column;
        gap: 10px;
        flex-grow: 1;
    }

    &__input {
        border: 1px solid #FFF;
        padding: 15px;
        color: #FFF;
        font-size: 12px;
        font-weight: 500;
        line-height: 15px;
        background: transparent;

        &::placeholder {
            color: #FFF;
            font-size: 12px;
            font-weight: 500;
            line-height: 15px;
        }
    }

    &__box {
        border: 1px solid #FFF;
        padding: 7px 15px;
        display: flex;
        align-items: center;
        gap: 65px;
    }

    &__box-text {
        color: #FFF;
        font-size: 12px;
        font-weight: 500;
        line-height: 15px;
    }

    &__box-m {
        padding: 2px 17px;
        color: #FFF;
        font-size: 12px;
        font-weight: 500;
        line-height: 14px;
        background: rgba(217, 217, 217, 0.30);
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

    .custom-select {
        .selected {
            justify-content: space-between;
        }

        .selected {
            &::before {
                content: unset;
            }

            &::after {
                content: '';
                width: 15px;
                height: 15px;
                background-repeat: no-repeat;
                background-size: contain;
                background-image: url(/public/img/arrow-icon.svg);
                background-position: center;
                transition: transform 0.3s;
            }
        }

        .selected.open {
            &::after {
                transform: rotate(180deg);
            }
        }
    }
}

.search {
    position: relative;

    svg {
        position: absolute;
        right: 15px;
        top: 50%;
        transform: translateY(-50%);
    }

    &__input {
        width: 100%;
        border: 1px solid #FFF;
        padding: 15px 40px 15px 15px;
        color: #FFF;
        font-size: 12px;
        font-weight: 500;
        line-height: 15px;
        background: transparent;

        &::placeholder {
            color: #FFF;
            font-size: 12px;
            font-weight: 500;
            line-height: 15px;
        }
    }

    &__list {
        position: absolute;
        top: 120%;
        left: 0;
        right: 0;
        background: linear-gradient(180deg, #010101 0%, #021C37 41.61%, #010C18 83.22%, #000 124.82%, #010101 166.43%);
        z-index: 1;
        padding: 15px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        border: 1px solid #fff;
    }

    &__list-item {
        color: #FFF;
        font-size: 12px;
        font-weight: 500;
        line-height: 15px;
    }
}
</style>