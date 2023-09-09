<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import Greating from '../components/Greating.vue';
export default {
    name: 'Contacts',
    components: {
        Header,
        Footer,
        Greating
    },
    data() {
        return {
        }
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
            <section class="main__contacts contacts">
                <div class="contacts__inner">
                    <div class="contacts__wrap">
                        <h1 class="contacts__title">
                            Карточка дилера
                        </h1>
                        <div class="contacts__wrapper">
                            <a class="contacts__link" href="#">
                                Адрес: Адрес: Узбекистан, Бухарская область,
                                Бухара, ул. САНОАТЧИЛАР, А
                            </a>
                            <a class="contacts__link" href="tel:+998909999999">
                                Телефон: +998 90 999 99 99
                            </a>
                            <a class="contacts__link" href="mailto:123456@gmail.com">
                                E-mail: 123456@gmail.com
                            </a>
                            <a class="contacts__link" href="savdo.uzavtosanoat.uz">
                                Наш сайт: savdo.uzavtosanoat.uz
                            </a>
                        </div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49060.96211394381!2d64.38159865694182!3d39.77759498137062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f50060e65993cd5%3A0xc87beaf40e48e767!2sBukhara%2C%20Uzbekistan!5e0!3m2!1sen!2sua!4v1694174346285!5m2!1sen!2sua"
                            width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                    <div class="contacts__buttons">
                        <a class="contacts__buttons-link" href="tel:+998909999999">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M17.45 22.75C16.32 22.75 15.13 22.48 13.9 21.96C12.7 21.45 11.49 20.75 10.31 19.9C9.14 19.04 8.01 18.08 6.94 17.03C5.88 15.96 4.92 14.83 4.07 13.67C3.21 12.47 2.52 11.27 2.03 10.11C1.51 8.87 1.25 7.67 1.25 6.54C1.25 5.76 1.39 5.02 1.66 4.33C1.94 3.62 2.39 2.96 3 2.39C3.77 1.63 4.65 1.25 5.59 1.25C5.98 1.25 6.38 1.34 6.72 1.5C7.11 1.68 7.44 1.95 7.68 2.31L10 5.58C10.21 5.87 10.37 6.15 10.48 6.43C10.61 6.73 10.68 7.03 10.68 7.32C10.68 7.7 10.57 8.07 10.36 8.42C10.21 8.69 9.98 8.98 9.69 9.27L9.01 9.98C9.02 10.01 9.03 10.03 9.04 10.05C9.16 10.26 9.4 10.62 9.86 11.16C10.35 11.72 10.81 12.23 11.27 12.7C11.86 13.28 12.35 13.74 12.81 14.12C13.38 14.6 13.75 14.84 13.97 14.95L13.95 15L14.68 14.28C14.99 13.97 15.29 13.74 15.58 13.59C16.13 13.25 16.83 13.19 17.53 13.48C17.79 13.59 18.07 13.74 18.37 13.95L21.69 16.31C22.06 16.56 22.33 16.88 22.49 17.26C22.64 17.64 22.71 17.99 22.71 18.34C22.71 18.82 22.6 19.3 22.39 19.75C22.18 20.2 21.92 20.59 21.59 20.95C21.02 21.58 20.4 22.03 19.68 22.32C18.99 22.6 18.24 22.75 17.45 22.75ZM5.59 2.75C5.04 2.75 4.53 2.99 4.04 3.47C3.58 3.9 3.26 4.37 3.06 4.88C2.85 5.4 2.75 5.95 2.75 6.54C2.75 7.47 2.97 8.48 3.41 9.52C3.86 10.58 4.49 11.68 5.29 12.78C6.09 13.88 7 14.95 8 15.96C9 16.95 10.08 17.87 11.19 18.68C12.27 19.47 13.38 20.11 14.48 20.57C16.19 21.3 17.79 21.47 19.11 20.92C19.62 20.71 20.07 20.39 20.48 19.93C20.71 19.68 20.89 19.41 21.04 19.09C21.16 18.84 21.22 18.58 21.22 18.32C21.22 18.16 21.19 18 21.11 17.82C21.08 17.76 21.02 17.65 20.83 17.52L17.51 15.16C17.31 15.02 17.13 14.92 16.96 14.85C16.74 14.76 16.65 14.67 16.31 14.88C16.11 14.98 15.93 15.13 15.73 15.33L14.97 16.08C14.58 16.46 13.98 16.55 13.52 16.38L13.25 16.26C12.84 16.04 12.36 15.7 11.83 15.25C11.35 14.84 10.83 14.36 10.2 13.74C9.71 13.24 9.22 12.71 8.71 12.12C8.24 11.57 7.9 11.1 7.69 10.71L7.57 10.41C7.51 10.18 7.49 10.05 7.49 9.91C7.49 9.55 7.62 9.23 7.87 8.98L8.62 8.2C8.82 8 8.97 7.81 9.07 7.64C9.15 7.51 9.18 7.4 9.18 7.3C9.18 7.22 9.15 7.1 9.1 6.98C9.03 6.82 8.92 6.64 8.78 6.45L6.46 3.17C6.36 3.03 6.24 2.93 6.09 2.86C5.93 2.79 5.76 2.75 5.59 2.75ZM13.95 15.01L13.79 15.69L14.06 14.99C14.01 14.98 13.97 14.99 13.95 15.01Z"
                                    fill="white" />
                                <path
                                    d="M18.5 9.75C18.09 9.75 17.75 9.41 17.75 9C17.75 8.64 17.39 7.89 16.79 7.25C16.2 6.62 15.55 6.25 15 6.25C14.59 6.25 14.25 5.91 14.25 5.5C14.25 5.09 14.59 4.75 15 4.75C15.97 4.75 16.99 5.27 17.88 6.22C18.71 7.11 19.25 8.2 19.25 9C19.25 9.41 18.91 9.75 18.5 9.75Z"
                                    fill="white" />
                                <path
                                    d="M22 9.75C21.59 9.75 21.25 9.41 21.25 9C21.25 5.55 18.45 2.75 15 2.75C14.59 2.75 14.25 2.41 14.25 2C14.25 1.59 14.59 1.25 15 1.25C19.27 1.25 22.75 4.73 22.75 9C22.75 9.41 22.41 9.75 22 9.75Z"
                                    fill="white" />
                            </svg>
                            <span>
                                Позвонить
                            </span>
                        </a>
                        <a class="contacts__buttons-link" href="#">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z"
                                    fill="white" />
                                <path
                                    d="M13.9501 22.7502C13.6101 22.7502 13.31 22.5202 13.22 22.1802L8.2701 2.18018C8.1701 1.78018 8.42009 1.37019 8.82009 1.27019C9.22009 1.17019 9.63006 1.41019 9.73006 1.82019L14.6801 21.8202C14.7801 22.2202 14.5301 22.6302 14.1301 22.7302C14.0701 22.7402 14.0101 22.7502 13.9501 22.7502Z"
                                    fill="white" />
                                <path
                                    d="M1.99985 15.7501C1.66985 15.7501 1.37988 15.5401 1.27988 15.2101C1.15988 14.8101 1.38983 14.4001 1.78983 14.2801L11.3199 11.5001C11.7199 11.3801 12.1299 11.6101 12.2499 12.0101C12.3699 12.4101 12.1398 12.8201 11.7398 12.9401L2.20987 15.7201C2.13987 15.7401 2.06985 15.7501 1.99985 15.7501Z"
                                    fill="white" />
                            </svg>
                            <span>
                                Маршрут
                            </span>
                        </a>
                    </div>
                </div>
            </section>
        </div>
        <Footer />
    </div>
</template>

<style lang="scss">
.contacts {
    background: linear-gradient(180deg, #010101 0%, #021C37 41.61%, #010C18 83.22%, #000 124.82%, #010101 166.43%);
    backdrop-filter: blur(50px);
    width: 100%;
    min-height: calc(100vh);
    padding-top: 85px;
    padding-bottom: 145px;
    display: flex;
    flex-direction: column;

    iframe {
        width: 100%;
        height: 205px;
        margin-bottom: 30px;
    }

    &__inner {
        max-width: 320px;
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        flex-grow: 1;
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    &__wrap {
        flex-grow: 1;
        height: 100%;
    }

    &__title {
        padding-left: 6px;
        color: #FFF;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        font-size: 12px;
        font-weight: 600;
        line-height: 15px;
        position: relative;
        margin-left: 5px;
        margin-right: 5px;
        margin-bottom: 25px;

        &::before {
            content: '';
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            background: #61B3FF;
            height: 100%;
            width: 1px;
        }
    }

    &__wrapper {
        padding-left: 5px;
        padding-right: 5px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-bottom: 20px;
    }

    &__link {
        color: #FFF;
        font-size: 12px;
        font-weight: 500;
        line-height: 20px;
    }

    &__buttons {
        padding: 0 15px;
        display: flex;
        align-items: center;
        gap: 10px;
    }

    &__buttons-link {
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(255, 255, 255, 0.30);
        backdrop-filter: blur(2px);
        color: #FFF;
        font-size: 13px;
        font-weight: 600;
        line-height: 12px;
        gap: 10px;
        min-width: 140px;
        padding: 10px 15px;
    }
}
</style>