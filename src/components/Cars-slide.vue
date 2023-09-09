<template>
    <div class="cars-slide__wrapper">
        <img class="cars-slide__img" :src="carImage" alt="img">
        <div class="cars-slide__inner">
            <div class="cars-slide__info">
                <h3 class="cars-slide__info-title">
                    {{ carTitle }}
                    <span>
                        {{ carSubTitle }}
                    </span>
                </h3>
                <p class="cars-slide__info-price">
                    Цена:
                    <span>
                        {{ carPrice }}
                        сум
                    </span>
                </p>
            </div>
            <a class="cars-slide__link" href="#">
                Узнать подробнее
            </a>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            carImage: this.carsInfo.modifications.modification1.image,
            carTitle: this.carsInfo.modifications.modification1.carName.name,
            carSubTitle: this.carsInfo.modifications.modification1.carName.subName,
            carPrice: this.carsInfo.modifications.modification1.price
        }
    },
    mounted() {

    },
    props: ['carsInfo'],
}
</script>

<style lang="scss">
.cars-slide {
    &__wrapper {
        position: relative;
        width: 100%;
        height: 100vh;
        max-height: 100vh;
        display: flex;
        &::before {
            content: '';
            width: 100%;
            height: 445px;
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            background: linear-gradient(360deg, rgba(0, 0, 0, 0.00) 0%, #000 108.86%);
        }
    }

    &__img {
        width: 100%;
        object-fit: cover;
    }

    &__inner {
        position: absolute;
        padding-top: 135px;
        top: 0;
        left: 0;
        right: 0;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        text-align: center;
        padding-bottom: 110px;
        height: 100vh;
        max-height: 100vh;
    }

    &__info {
        flex-grow: 1;
    }

    &__info-title {
        color: #FFF;
        font-size: 25px;
        line-height: 30px;
        margin-bottom: 5px;

        span {
            font-weight: 700;
            display: block;
        }
    }

    &__info-price {
        color: #FFF;
        font-size: 20px;
        line-height: 24px;
    }

    &__link {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        background: rgba(255, 255, 255, 0.30);
        backdrop-filter: blur(2px);
        padding: 13px 44px;
        color: #FFF;
        font-size: 15px;
        font-weight: 600;
        line-height: 15px;
    }
}
</style>