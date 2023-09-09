<template>
    <div class="card__wrapper card__wrapper">
        <p class="card__top-text">
            Мои договора
        </p>
        <div class="card__img">
            <img class="card__img-image" :src="carImage[activeCarImage]" alt="img">
        </div>
        <h1 class="card__title">
            <div class="card__title-wrapper">
                {{ carTitle }}
                <span>
                    {{ carSubTitle }}
                </span>
            </div>
            <a href="#">
                У дилера
            </a>
        </h1>
        <p class="card__price">
            Цена:
            {{ carPrice }}
            сум
        </p>
        <div class="card__contracts-info contracts-info">
            <div class="contracts-info__item">
                <p class="contracts-info__item-text">
                    Договор
                </p>
                <p class="contracts-info__item-text">
                    Номер контракта:
                    <span>
                        {{ carContractNumber }}
                    </span>
                </p>
                <p class="contracts-info__item-text">
                    Дата заказа:
                    <span>
                        {{ carOrderDate }}
                    </span>
                </p>
                <p class="contracts-info__item-text">
                    Дилер:
                    <span>
                        {{ carDealer }}
                    </span>
                </p>
            </div>
            <div class="contracts-info__item">
                <p class="contracts-info__item-text">
                    Автомобиль
                </p>
                <p class="contracts-info__item-text">
                    Модель:
                    <span>
                        {{ carModel }}
                    </span>
                </p>
                <p class="contracts-info__item-text">
                    Модификации:
                    <span>
                        {{ carModifications }}
                    </span>
                </p>
                <p class="contracts-info__item-text">
                    VIN номер:
                    <span>
                        {{ carVINNumber }}
                    </span>
                </p>
            </div>
            <div class="contracts-info__item">
                <p class="contracts-info__item-text">
                    Поставка
                </p>
                <p class="contracts-info__item-text">
                    Номер очереди:
                    <span>
                        {{ carQueueNumber }}
                    </span>
                </p>
                <p class="contracts-info__item-text">
                    Ожидаемая дата:
                    <span>
                        {{ carExpectedDate }}
                    </span>
                </p>
            </div>
            <div class="contracts-info__item">
                <p class="contracts-info__item-text">
                    Стоимость:
                    <span>
                        {{ carTotalCost }}
                    </span>
                </p>
                <p class="contracts-info__item-text">
                    Оплачен:
                    <span>
                        {{ carPaidAmount }}
                    </span>
                </p>
                <p class="contracts-info__item-text">
                    Осталось:
                    <span>
                        {{ carRemainingAmount }}
                    </span>
                </p>
            </div>
        </div>
        <a class="card__link" download="" href="#">
            Скачать договор
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

            carContractNumber: this.carsInfo.modifications[this.modification || 'modification1'].contracts[0].contractDetails.contractNumber,
            carOrderDate: this.carsInfo.modifications[this.modification || 'modification1'].contracts[0].contractDetails.orderDate,
            carDealer: this.carsInfo.modifications[this.modification || 'modification1'].contracts[0].contractDetails.dealer,

            carModel: this.carsInfo.modifications[this.modification || 'modification1'].contracts[1].contractDetails.model,
            carModifications: this.carsInfo.modifications[this.modification || 'modification1'].contracts[1].contractDetails.modifications,
            carVINNumber: this.carsInfo.modifications[this.modification || 'modification1'].contracts[1].contractDetails.VINNumber,

            carQueueNumber: this.carsInfo.modifications[this.modification || 'modification1'].contracts[2].contractDetails.queueNumber,
            carExpectedDate: this.carsInfo.modifications[this.modification || 'modification1'].contracts[2].contractDetails.expectedDate,

            carTotalCost: this.carsInfo.modifications[this.modification || 'modification1'].contracts[3].contractDetails.totalCost,
            carPaidAmount: this.carsInfo.modifications[this.modification || 'modification1'].contracts[3].contractDetails.paidAmount,
            carRemainingAmount: this.carsInfo.modifications[this.modification || 'modification1'].contracts[3].contractDetails.remainingAmount,

            activeCarImage: 1,
            activeModification: 1,
            modification: 'modification' + this.activeModification,
        }
    },
    props: ['carsInfo'],
    mounted() {

    },
    methods: {

    },
}
</script>

<style lang="scss">
.contracts-swiper {
    .card__wrapper {
        padding-top: 125px;
        padding-bottom: 95px;
    }

    .card__title {
        margin-bottom: 10px;
        font-size: 15px;
        line-height: 18px;
        display: flex;
        align-items: center;
        gap: 20px;

        span {
            font-size: 15px;
            line-height: 18px;
            display: block;
        }

        a {
            color: #FFF;
            font-size: 15px;
            line-height: 18px;
            padding: 6px 22px;
            border: 1px solid #FFF;
        }
    }

    .card__price {
        margin-bottom: 45px;
        font-size: 15px;
        line-height: 18px;
    }

    .card__link {
        padding: 14px;
        margin-bottom: 0;
    }
}


.contracts-info {
    display: flex;
    flex-direction: column;
    margin-bottom: 45px;

    &__item {
        padding: 9px;
        border-top: 1px solid #FFF;

        &:last-child {
            border-bottom: 1px solid #FFF;
        }
    }

    &__item-text {
        color: #FFF;
        font-size: 10px;
        line-height: 15px;
    }
}

.card__top-text {
    color: #FFF;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-size: 15px;
    font-weight: 600;
    line-height: 18px;
    text-align: center;
}
</style>