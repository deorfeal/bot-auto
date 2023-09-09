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
        <div class="card__info card-info">
            <div class="card-info__item card-info-item">
                <p class="card-info-item__text">
                    {{ carPower }} <br>
                    макс. мощность
                </p>
            </div>
            <div class="card-info__item card-info-item">
                <p class="card-info-item__text">
                    {{ carTransmission }}
                    трансмиссия
                </p>
            </div>
            <div class="card-info__item card-info-item">
                <p class="card-info-item__text">
                    {{ carFuelConsumption }}
                    расход топлива
                </p>
            </div>
            <div class="card-info__item card-info-item">
                <p class="card-info-item__text">
                    {{ carAcceleration }}
                </p>
            </div>
        </div>
        <div class="card__colors colors">
            <button class="colors__button" ref="colorsButton" v-for="item of carColors" :key="carColors.indexOf(item)"
                type="button" :id="carColors.indexOf(item)" :style="{ backgroundColor: item }" @click="changeColor">
            </button>
        </div>
        <div class="card__modif modif">
            <button class="modif__button" type="button">
                RT
            </button>
            <button class="modif__button" type="button">
                5.3L
            </button>
        </div>
        <a class="card__link" href="#">
            В наличии:
            {{ carAavailability }}
            автомобиля
        </a>
    </div>
</template>

<script>
import { watch } from 'vue'
export default {
    components: {
    },
    data() {
        return {
            carImage: this.carsInfo.modifications[this.modification || 'modification1'].colors.imageForColor,
            carTitle: this.carsInfo.modifications[this.modification || 'modification1'].carName.name,
            carSubTitle: this.carsInfo.modifications[this.modification || 'modification1'].carName.subName,
            carPrice: this.carsInfo.modifications[this.modification || 'modification1'].price,
            carColors: this.carsInfo.modifications[this.modification || 'modification1'].colors.colorsNames,
            carGeneralInformation: this.carsInfo.modifications[this.modification || 'modification1'].selects.generalInformation,

            carAavailability: this.carsInfo.modifications[this.modification || 'modification1'].selects.generalInformation[0].availability,
            carQueue: this.carsInfo.modifications[this.modification || 'modification1'].selects.generalInformation[0].queue,
            carPower: this.carsInfo.modifications[this.modification || 'modification1'].selects.generalInformation[0].power,
            carTransmission: this.carsInfo.modifications[this.modification || 'modification1'].selects.generalInformation[0].transmission,
            carFuelConsumption: this.carsInfo.modifications[this.modification || 'modification1'].selects.generalInformation[0].fuelConsumption,
            carAcceleration: this.carsInfo.modifications[this.modification || 'modification1'].selects.generalInformation[0].acceleration,
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
            this.modification = 'modification' + this.activeModification,
                console.log(this.carsInfo.modifications[this.modification || 'modification1'].price)
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

                    this.carAavailability = this.carsInfo.modifications[this.modification || 'modification1'].selects.generalInformation[0].availability,
                    this.carQueue = this.carsInfo.modifications[this.modification || 'modification1'].selects.generalInformation[0].queue,
                    this.carPower = this.carsInfo.modifications[this.modification || 'modification1'].selects.generalInformation[0].power,
                    this.carTransmission = this.carsInfo.modifications[this.modification || 'modification1'].selects.generalInformation[0].transmission,
                    this.carFuelConsumption = this.carsInfo.modifications[this.modification || 'modification1'].selects.generalInformation[0].fuelConsumption,
                    this.carAcceleration = this.carsInfo.modifications[this.modification || 'modification1'].selects.generalInformation[0].acceleration
            },
            deep: true
        }
    }
}
</script>

<style lang="scss">
.car {
    .card__title {
        font-size: 15px;
        line-height: 18px;
    }
    .card__price {
        font-size: 15px;
        line-height: 18px;
        margin-bottom: 10px;
    }
    .card__link {
        padding: 15px;
    }
    .card__wrapper {
        padding-bottom: 95px;

    }
}
</style>