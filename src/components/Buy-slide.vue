<template>
    <div class="card__wrapper card__wrapper">
        <div class="card__categories categories">
            <button class="categories__button" ref="categoriesButton" v-for="item of carsInfo.modifications"
                :key="item.modificationId" type="button" :id="item.modificationId" @click="changeModification">
                {{ item.modificationName }}
            </button>
        </div>
        <div class="card__img">
            <img class="card__img-image" :src="carImage[activeCarImage]" alt="img">
        </div>
        <h1 class="card__title">
            {{ carTitle }}
            <span>
                {{ carSubTitle }}
            </span>
        </h1>
        <p class="card__price">
            Цена:
            {{ carPrice }}
            сум
        </p>
        <div class="card__colors colors">
            <button class="colors__button" ref="colorsButton" v-for="item of carColors" :key="carColors.indexOf(item)"
                type="button" :id="carColors.indexOf(item)" :style="{ backgroundColor: item }" @click="changeColor">
            </button>
        </div>
        <div class="card__accordions accordions">
            <div class="accordions__accordion accordion" @click="toggleAccordion1"
                :class="{ 'accordion--active': accordionsIsActive1 }">
                <div class="accordion__top">
                    <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 9.375L15.5 0.625L0.5 0.625L8 9.375Z" fill="white" />
                    </svg>
                    <h3 class="accordion__top-title">
                        Общая информация
                    </h3>
                </div>
                <div class="accordion__inner">
                    <ul class="accordion__list">
                        <li class="accordion__list-item" v-for="item of carGeneralInformation[0].someGeneralInformation"
                            :key="item">
                            {{ item }}
                        </li>
                    </ul>
                </div>
            </div>
            <div class="accordions__accordion accordion" @click="toggleAccordion2"
                :class="{ 'accordion--active': accordionsIsActive2 }">
                <div class="accordion__top">
                    <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 9.375L15.5 0.625L0.5 0.625L8 9.375Z" fill="white" />
                    </svg>
                    <h3 class="accordion__top-title">
                        Модификация
                    </h3>
                </div>
                <div class="accordion__inner">
                    <p class="accordion__text">
                        {{ carGeneralInformation[0].modification }}
                    </p>
                </div>
            </div>
            <div class="accordions__accordion accordion" @click="toggleAccordion3"
                :class="{ 'accordion--active': accordionsIsActive3 }">
                <div class="accordion__top">
                    <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 9.375L15.5 0.625L0.5 0.625L8 9.375Z" fill="white" />
                    </svg>
                    <h3 class="accordion__top-title">
                        Подробнее о модели
                    </h3>
                </div>
                <div class="accordion__inner">
                    <p class="accordion__text">
                        {{ carGeneralInformation[0].moreAboutModel }}
                    </p>
                </div>
            </div>
        </div>
        <a class="card__link" href="#">
            Купить
            <span>
                {{ carInStock }}
            </span>
        </a>
        <p class="card__subtext">
            Срок поставки: {{ carDeliveryTime }}
        </p>
    </div>
</template>

<script>
import { watch } from 'vue'
export default {
    data() {
        return {
            carImage: this.carsInfo.modifications[this.modification || 'modification1'].colors.imageForColor,
            carTitle: this.carsInfo.modifications[this.modification || 'modification1'].carName.name,
            carSubTitle: this.carsInfo.modifications[this.modification || 'modification1'].carName.subName,
            carPrice: this.carsInfo.modifications[this.modification || 'modification1'].price,
            carColors: this.carsInfo.modifications[this.modification || 'modification1'].colors.colorsNames,
            carGeneralInformation: this.carsInfo.modifications[this.modification || 'modification1'].selects.generalInformation,
            carInStock: this.carsInfo.modifications[this.modification || 'modification1'].inStock,
            carDeliveryTime: this.carsInfo.modifications[this.modification || 'modification1'].selects.generalInformation[0].deliveryTime,
            accordionsIsActive1: false,
            accordionsIsActive2: false,
            accordionsIsActive3: false,
            activeCarImage: 1,
            activeCarColor: 1,
            activeCarModification: 0,
            activeModification: 1,
            modification: 'modification' + this.activeModification,
        }
    },
    props: ['carsInfo'],
    mounted() {
        for (let item of this.$refs.categoriesButton) {
            if (item.id == this.activeCarModification) {
                item.classList.add('categories__button--active')
            }
        }
        for (let item of this.$refs.colorsButton) {
            if (item.id == this.activeCarColor) {
                item.classList.add('colors__button--active')
            }
        }
    },
    methods: {
        toggleAccordion1() {
            this.accordionsIsActive1 = !this.accordionsIsActive1;
        },
        toggleAccordion2() {
            this.accordionsIsActive2 = !this.accordionsIsActive2;
        },
        toggleAccordion3() {
            this.accordionsIsActive3 = !this.accordionsIsActive3;
        },
        changeColor(emit) {
            for (let item of this.$refs.colorsButton) {
                item.classList.remove('colors__button--active')
            }
            emit.currentTarget.classList.add('colors__button--active')
            this.activeCarColor = emit.currentTarget.id
            this.activeCarImage = emit.currentTarget.id
        },
        changeModification(emit) {
            for (let item of this.$refs.categoriesButton) {
                item.classList.remove('categories__button--active')
            }
            emit.currentTarget.classList.add('categories__button--active')
            this.activeModification = +emit.currentTarget.id + 1
            this.modification = 'modification' + this.activeModification
        }
    },
    watch: {
        modification: {
            handler() {
                this.carImage = this.carsInfo.modifications[this.modification || 'modification1'].colors.imageForColor,
                    this.carTitle = this.carsInfo.modifications[this.modification].carName.name,
                    this.carSubTitle = this.carsInfo.modifications[this.modification].carName.subName,
                    this.carPrice = this.carsInfo.modifications[this.modification].price,
                    this.carColors = this.carsInfo.modifications[this.modification].colors.colorsNames,
                    this.carGeneralInformation = this.carsInfo.modifications[this.modification].selects.generalInformation,
                    this.carInStock = this.carsInfo.modifications[this.modification].inStock,
                    this.carDeliveryTime = this.carsInfo.modifications[this.modification].selects.generalInformation[0].deliveryTime
            },
            deep: true
        }
    }
}
</script>

<style lang="scss">
.card {
    min-height: calc(100vh);
    width: 100%;

    &__wrapper {
        padding-top: 85px;
        padding-bottom: 160px;
        min-height: calc(100vh);
        width: 100%;
        max-width: 265px;
        margin-left: auto;
        margin-right: auto;
    }

    &__img {
        width: 275px;
        height: 206px;
        margin-left: auto;
        margin-right: auto;
    }

    &__img-image {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    &__title {
        color: #FFF;
        font-size: 20px;
        line-height: 24px;
        margin-bottom: 5px;

        span {
            font-weight: 700;
            display: block;
        }
    }

    &__price {
        color: #FFF;
        font-size: 20px;
        line-height: 24px;
        margin-bottom: 30px;
    }

    &__link {
        padding: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        background: rgba(255, 255, 255, 0.30);
        backdrop-filter: blur(2px);
        color: #FFF;
        font-size: 15px;
        font-weight: 600;
        line-height: 14.5px;
        flex-direction: column;
        margin-bottom: 7px;

        span {
            display: block;
            font-size: 10px;
            line-height: 10px;
            font-weight: 400;
        }
    }

    &__subtext {
        color: #FFF;
        font-size: 12px;
        line-height: 15px;
        text-align: center;
    }
}

.categories {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-left: -20px;
    overflow-x: scroll;
    width: 300px;

    /* width */
    &::-webkit-scrollbar {
        width: 0px;
        height: 0;
    }

    /* Track */
    &::-webkit-scrollbar-track {
        background: #f1f1f1;
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
        background: #888;
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
        background: #555;
    }

    &__button {
        padding-left: 5px;
        border-left: 1px solid #61B3FF;
        color: #FFF;
        font-size: 11px;
        font-weight: 600;
        line-height: 15px;
        white-space: nowrap;
        text-align: left;
    }

    &__button--active {
        text-shadow: -1px 0px 11px #FFF626, 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px #000;
    }
}

.colors {
    display: flex;
    justify-content: center;
    align-content: center;
    gap: 17px;
    margin-bottom: 30px;

    &__button {
        border-radius: 5px;
        width: 37px;
        height: 39px;
    }

    &__button--active {
        border: 1px solid #8F8F8F;
        box-shadow: -1px 0px 14px 4px #61B3FF;
    }
}

.accordions {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 12px;
}

.accordion {
    border: 1px solid #FFF;

    &__top {
        display: flex;
        align-items: center;
        gap: 18px;
        padding: 12px 12px 12px 13.5px;
    }

    &__top-title {
        color: #FFF;
        font-size: 15px;
        line-height: 18px;
    }

    &__inner {}

    &__list {
        padding-left: 49px;
        padding-right: 45px;
        opacity: 0;
        height: 0;
        transition: opacity 0.3s, height 0.3s, padding-bottom 0.3s;
        counter-reset: list-item-counter
    }

    &__list-item {
        color: #FFF;
        font-size: 9px;
        line-height: 14px;

        &::before {
            content: counter(list-item-counter)'. '; // Используем счетчик для вставки числа
            counter-increment: list-item-counter; // Увеличиваем счетчик на каждом элементе
            color: #FFF;
            font-size: 9px;
            line-height: 14px;
        }
    }

    &__text {
        opacity: 0;
        height: 0;
        color: #FFF;
        font-size: 9px;
        line-height: 14px;
        padding-left: 49px;
        padding-right: 45px;
        transition: opacity 0.3s, height 0.3s, padding-bottom 0.3s;
    }
}

.accordion--active {
    .accordion__list {
        padding-bottom: 9px;
        opacity: 1;
        height: unset;
    }

    .accordion__text {
        padding-bottom: 9px;
        opacity: 1;
        height: unset;
    }
}
</style>