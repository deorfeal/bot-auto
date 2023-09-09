<template>
    <div class="card__wrapper card__wrapper">
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
            <CustomSelect :options="['Первый регион', 'Второй регион', 'Третий регион']" :default="'Ваш регион'"
                class="select" />
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
            В наличии
            {{ carAavailability }}
            шт./В очереди
            {{ carQueue }}
            шт.
        </a>
    </div>
</template>

<script>
import { watch } from 'vue'
import CustomSelect from "../components/CustomSelect.vue";
export default {
    components: {
        CustomSelect
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
.info-swiper {
    .card__wrapper {
        padding-top: 120px;
        padding-bottom: 95px;
    }

    .card__link {
        padding: 15px;
        font-size: 13px;
    }

    .card__title {
        font-size: 15px;
        line-height: 20px;
    }

    .card__price {
        font-size: 15px;
        line-height: 20px;
        margin-bottom: 20px;
    }

    .card__img {
        max-width: 245px;
        max-height: 182px;

        width: 245px;
        height: 182px;
    }

    .colors {
        margin-bottom: 25px;
    }
}

.card {

    &__info {}
}

.modif {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 11px;
    margin-bottom: 15px;
    &__button {
        color: #FFF;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 15px;
        font-weight: 600;
        line-height: 18px;
        padding: 6px;
        min-width: 72px;
        border: 1px solid #FFF;
    }
}

.card-info {
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-bottom: 25px;
}

.card-info-item {
    border: 1px solid #FFF;
    padding: 11px 20px;

    &__text {
        color: #FFF;
        font-size: 12px;
        line-height: 15px;
    }
}
</style>