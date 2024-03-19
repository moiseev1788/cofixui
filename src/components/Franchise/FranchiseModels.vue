<script setup>
import Button from '../Button/Button.vue'
</script>

<template>
    <div class="franchise-models">
        <div class="franchise-models-item">
            <div class="franchise-models-banner">
                <div class="franchise-models-head">
                    <div class="franchise-models-title">Мастер-франшиза</div>
                    <div class="franchise-models-description">Эксклюзивные права на развитие сети в регионе.</div>
                </div>
                <div class="franchise-models-images"><img src="../../assets/img/illustration/MasterFranchise.svg" alt=""></div>
            </div>
            <div class="franchise-models-card">
                <div class="models-card">
                    <div class="models-card-head">
                        <span class="models-card-title">Количество кофеен и центральная кухня</span>
                        <span class="models-card-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="31" height="32" viewBox="0 0 31 32" fill="none">
                                <path d="M6.27325 22.0897C9.69796 22.0897 12.4742 19.3133 12.4742 15.8886C12.4742 12.4638 9.69796 9.6875 6.27325 9.6875C2.84854 9.6875 0.0722656 12.4638 0.0722656 15.8886C0.0722656 19.3133 2.84854 22.0897 6.27325 22.0897Z" fill="#F05633"/>
                                <path d="M15.3982 12.9734C18.823 12.9734 21.5992 10.1971 21.5992 6.77237C21.5992 3.34761 18.823 0.571289 15.3982 0.571289C11.9735 0.571289 9.19727 3.34761 9.19727 6.77237C9.19727 10.1971 11.9735 12.9734 15.3982 12.9734Z" fill="#F05633"/>
                                <path d="M15.4295 31.2537C18.8542 31.2537 21.6305 28.4774 21.6305 25.0526C21.6305 21.6279 18.8542 18.8516 15.4295 18.8516C12.0048 18.8516 9.22852 21.6279 9.22852 25.0526C9.22852 28.4774 12.0048 31.2537 15.4295 31.2537Z" fill="#F05633"/>
                                <path d="M24.5525 22.1297C27.9773 22.1297 30.7535 19.3534 30.7535 15.9286C30.7535 12.5039 27.9773 9.72754 24.5525 9.72754C21.1278 9.72754 18.3516 12.5039 18.3516 15.9286C18.3516 19.3534 21.1278 22.1297 24.5525 22.1297Z" fill="#F05633"/>
                            </svg>
                        </span>
                    </div>
                    <div class="models-card-info"><span class="big">5 + 1</span></div>
                </div>
                <div class="models-card">
                    <div class="models-card-head">
                        <span class="models-card-title">Инвестиции</span>
                        <span class="models-card-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="31" height="32" viewBox="0 0 31 32" fill="none">
                                <path d="M6.27325 22.0897C9.69796 22.0897 12.4742 19.3133 12.4742 15.8886C12.4742 12.4638 9.69796 9.6875 6.27325 9.6875C2.84854 9.6875 0.0722656 12.4638 0.0722656 15.8886C0.0722656 19.3133 2.84854 22.0897 6.27325 22.0897Z" fill="#F05633"/>
                                <path d="M15.3982 12.9734C18.823 12.9734 21.5992 10.1971 21.5992 6.77237C21.5992 3.34761 18.823 0.571289 15.3982 0.571289C11.9735 0.571289 9.19727 3.34761 9.19727 6.77237C9.19727 10.1971 11.9735 12.9734 15.3982 12.9734Z" fill="#F05633"/>
                                <path d="M15.4295 31.2537C18.8542 31.2537 21.6305 28.4774 21.6305 25.0526C21.6305 21.6279 18.8542 18.8516 15.4295 18.8516C12.0048 18.8516 9.22852 21.6279 9.22852 25.0526C9.22852 28.4774 12.0048 31.2537 15.4295 31.2537Z" fill="#F05633"/>
                                <path d="M24.5525 22.1297C27.9773 22.1297 30.7535 19.3534 30.7535 15.9286C30.7535 12.5039 27.9773 9.72754 24.5525 9.72754C21.1278 9.72754 18.3516 12.5039 18.3516 15.9286C18.3516 19.3534 21.1278 22.1297 24.5525 22.1297Z" fill="#F05633"/>
                            </svg>
                        </span>
                    </div>
                    <div class="models-card-info">от <span class="big">60 млн ₽</span></div>
                </div>
                <div class="models-card">
                    <div class="models-card-head">
                        <span class="models-card-title">Доходность</span>
                        <span class="models-card-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="31" height="32" viewBox="0 0 31 32" fill="none">
                                <path d="M6.27325 22.0897C9.69796 22.0897 12.4742 19.3133 12.4742 15.8886C12.4742 12.4638 9.69796 9.6875 6.27325 9.6875C2.84854 9.6875 0.0722656 12.4638 0.0722656 15.8886C0.0722656 19.3133 2.84854 22.0897 6.27325 22.0897Z" fill="#F05633"/>
                                <path d="M15.3982 12.9734C18.823 12.9734 21.5992 10.1971 21.5992 6.77237C21.5992 3.34761 18.823 0.571289 15.3982 0.571289C11.9735 0.571289 9.19727 3.34761 9.19727 6.77237C9.19727 10.1971 11.9735 12.9734 15.3982 12.9734Z" fill="#F05633"/>
                                <path d="M15.4295 31.2537C18.8542 31.2537 21.6305 28.4774 21.6305 25.0526C21.6305 21.6279 18.8542 18.8516 15.4295 18.8516C12.0048 18.8516 9.22852 21.6279 9.22852 25.0526C9.22852 28.4774 12.0048 31.2537 15.4295 31.2537Z" fill="#F05633"/>
                                <path d="M24.5525 22.1297C27.9773 22.1297 30.7535 19.3534 30.7535 15.9286C30.7535 12.5039 27.9773 9.72754 24.5525 9.72754C21.1278 9.72754 18.3516 12.5039 18.3516 15.9286C18.3516 19.3534 21.1278 22.1297 24.5525 22.1297Z" fill="#F05633"/>
                            </svg>
                        </span>
                    </div>
                    <div class="models-card-info">от <span class="big">35% годовых</span></div>
                </div>
                <Button color="primary" rounded="rounded-medium" label="оставить заявку"/>
            </div>
        </div>
        <div class="franchise-models-item">
            <div class="franchise-models-banner">
                <div class="franchise-models-head">
                    <div class="franchise-models-title">Ребрендинг</div>
                    <div class="franchise-models-description">Подключение к инфраструктуре известного бренда,<br>для владельцев действующих кофеен.</div>
                </div>
                <div class="franchise-models-images"><img src="../../assets/img/illustration/Rebranding.svg" alt=""></div>
            </div>
            <div class="franchise-models-card">
                <div class="models-card">
                    <div class="models-card-head">
                        <span class="models-card-title">Паушальный взнос</span>
                        <span class="models-card-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="41" height="40" viewBox="0 0 41 40" fill="none">
                                <path d="M20.4132 15.6024C22.7927 15.6024 24.7232 17.5329 24.7232 19.9125C24.7232 22.292 22.7927 24.2225 20.4132 24.2225C18.0337 24.2225 16.1032 22.292 16.1032 19.9125C16.1032 17.5329 18.0337 15.6024 20.4132 15.6024ZM20.4132 4.57129C11.943 4.57129 5.07227 11.4421 5.07227 19.9125C5.07227 28.3828 11.943 35.2536 20.4132 35.2536C28.8834 35.2536 35.7541 28.3828 35.7541 19.9125C35.7541 11.4421 28.8913 4.57129 20.4132 4.57129Z" fill="#F05633"/>
                            </svg>
                        </span>
                    </div>
                    <div class="models-card-info"><span class="big">0₽</span></div>
                </div>
                <div class="models-card">
                    <div class="models-card-head">
                        <span class="models-card-title">Роялти первые полгода (далее 6%)</span>
                        <span class="models-card-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="41" height="40" viewBox="0 0 41 40" fill="none">
                                <path d="M20.4132 15.6024C22.7927 15.6024 24.7232 17.5329 24.7232 19.9125C24.7232 22.292 22.7927 24.2225 20.4132 24.2225C18.0337 24.2225 16.1032 22.292 16.1032 19.9125C16.1032 17.5329 18.0337 15.6024 20.4132 15.6024ZM20.4132 4.57129C11.943 4.57129 5.07227 11.4421 5.07227 19.9125C5.07227 28.3828 11.943 35.2536 20.4132 35.2536C28.8834 35.2536 35.7541 28.3828 35.7541 19.9125C35.7541 11.4421 28.8913 4.57129 20.4132 4.57129Z" fill="#F05633"/>
                            </svg>
                        </span>
                    </div>
                    <div class="models-card-info"><span class="big">0₽</span></div>
                </div>
                <div class="models-card">
                    <div class="models-card-head">
                        <span class="models-card-title">Рост выручки</span>
                        <span class="models-card-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="41" height="40" viewBox="0 0 41 40" fill="none">
                                <path d="M20.4132 15.6024C22.7927 15.6024 24.7232 17.5329 24.7232 19.9125C24.7232 22.292 22.7927 24.2225 20.4132 24.2225C18.0337 24.2225 16.1032 22.292 16.1032 19.9125C16.1032 17.5329 18.0337 15.6024 20.4132 15.6024ZM20.4132 4.57129C11.943 4.57129 5.07227 11.4421 5.07227 19.9125C5.07227 28.3828 11.943 35.2536 20.4132 35.2536C28.8834 35.2536 35.7541 28.3828 35.7541 19.9125C35.7541 11.4421 28.8913 4.57129 20.4132 4.57129Z" fill="#F05633"/>
                            </svg>
                        </span>
                    </div>
                    <div class="models-card-info"><span class="big">30%</span> вместе с Cofix!</div>
                </div>
                <Button color="primary" rounded="rounded-medium" label="оставить заявку"/>
            </div>
        </div>
        <div class="franchise-models-item">
            <div class="franchise-models-banner">
                <div class="franchise-models-head">
                    <div class="franchise-models-title">Инвестиционная франшиза</div>
                    <div class="franchise-models-description">Инвестиции в бизнес, которыми эффективно<br>управляет опытная команда Cofix</div>
                </div>
                <div class="franchise-models-images"><img src="../../assets/img/illustration/InvestmentFranchise.svg" alt=""></div>
            </div>
            <div class="franchise-models-card">
                <div class="models-card">
                    <div class="models-card-head">
                        <span class="models-card-title">Количество кофеен</span>
                        <span class="models-card-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="41" height="40" viewBox="0 0 41 40" fill="none">
                                <path d="M11.3176 4.57129C6.54273 4.57129 3.71406 9.18861 5.7863 13.081C6.99183 15.3424 9.07985 16.6031 11.3885 17.5329C13.4292 18.3602 15.5487 18.9433 17.7707 19.156C18.3301 19.2112 19.1653 19.1482 19.1968 19.8337C19.2362 20.6925 18.4562 20.6058 17.7155 20.6768C17.2979 20.7162 17.1876 20.7162 16.7149 20.7949C13.2874 21.3386 10.1908 22.2526 7.52764 24.5534C5.5657 26.2475 4.56503 28.3276 5.32932 30.9593C5.99117 33.2365 7.49611 34.6075 9.87565 35.1039C12.6176 35.6712 14.5165 34.379 16.0609 32.4249C17.2979 30.8648 18.0543 29.0525 18.6374 27.1772C19.1968 25.365 19.5514 23.5133 19.7878 21.6459C19.8272 21.3386 19.8902 20.984 20.292 20.9368C20.82 20.8659 20.9381 21.2677 20.9854 21.6459C21.0248 21.9926 21.0327 22.2763 21.0879 22.5836C21.7655 26.3499 22.577 30.1478 25.3505 33.1419C26.9264 34.8439 28.8962 35.6791 31.2994 35.0487C33.671 34.4263 34.9948 32.811 35.5936 30.5969C36.2318 28.2646 34.8845 25.5226 32.3395 23.8521C29.4241 21.9375 26.1385 21.0156 22.6873 20.5822C21.9625 20.4876 21.3085 20.5743 21.403 19.7706C21.4661 19.1954 22.1988 19.2506 22.711 19.1875C22.971 19.156 23.231 19.1718 23.491 19.1245C27.1628 18.4626 30.7557 17.5802 33.5529 14.9878C35.2942 13.3726 36.2161 11.3948 35.5463 9.03102C34.916 6.82479 33.4898 5.23316 31.1024 4.721C28.715 4.20884 26.7767 5.08345 25.2166 6.84055C22.5534 9.83472 21.797 13.538 21.0957 17.2571C20.9854 17.8244 21.0879 18.833 20.3787 18.833C19.7878 18.833 19.8587 18.3366 19.6853 17.2098C19.1496 13.7665 18.2828 10.4336 16.1554 7.53394C14.9026 5.82411 13.2953 4.62644 11.3176 4.57917V4.57129Z" fill="#F05633"/>
                            </svg>
                        </span>
                    </div>
                    <div class="models-card-info">от <span class="big">3 точек</span></div>
                </div>
                <div class="models-card">
                    <div class="models-card-head">
                        <span class="models-card-title">Доходность</span>
                        <span class="models-card-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="41" height="40" viewBox="0 0 41 40" fill="none">
                                <path d="M11.3176 4.57129C6.54273 4.57129 3.71406 9.18861 5.7863 13.081C6.99183 15.3424 9.07985 16.6031 11.3885 17.5329C13.4292 18.3602 15.5487 18.9433 17.7707 19.156C18.3301 19.2112 19.1653 19.1482 19.1968 19.8337C19.2362 20.6925 18.4562 20.6058 17.7155 20.6768C17.2979 20.7162 17.1876 20.7162 16.7149 20.7949C13.2874 21.3386 10.1908 22.2526 7.52764 24.5534C5.5657 26.2475 4.56503 28.3276 5.32932 30.9593C5.99117 33.2365 7.49611 34.6075 9.87565 35.1039C12.6176 35.6712 14.5165 34.379 16.0609 32.4249C17.2979 30.8648 18.0543 29.0525 18.6374 27.1772C19.1968 25.365 19.5514 23.5133 19.7878 21.6459C19.8272 21.3386 19.8902 20.984 20.292 20.9368C20.82 20.8659 20.9381 21.2677 20.9854 21.6459C21.0248 21.9926 21.0327 22.2763 21.0879 22.5836C21.7655 26.3499 22.577 30.1478 25.3505 33.1419C26.9264 34.8439 28.8962 35.6791 31.2994 35.0487C33.671 34.4263 34.9948 32.811 35.5936 30.5969C36.2318 28.2646 34.8845 25.5226 32.3395 23.8521C29.4241 21.9375 26.1385 21.0156 22.6873 20.5822C21.9625 20.4876 21.3085 20.5743 21.403 19.7706C21.4661 19.1954 22.1988 19.2506 22.711 19.1875C22.971 19.156 23.231 19.1718 23.491 19.1245C27.1628 18.4626 30.7557 17.5802 33.5529 14.9878C35.2942 13.3726 36.2161 11.3948 35.5463 9.03102C34.916 6.82479 33.4898 5.23316 31.1024 4.721C28.715 4.20884 26.7767 5.08345 25.2166 6.84055C22.5534 9.83472 21.797 13.538 21.0957 17.2571C20.9854 17.8244 21.0879 18.833 20.3787 18.833C19.7878 18.833 19.8587 18.3366 19.6853 17.2098C19.1496 13.7665 18.2828 10.4336 16.1554 7.53394C14.9026 5.82411 13.2953 4.62644 11.3176 4.57917V4.57129Z" fill="#F05633"/>
                            </svg>
                        </span>
                    </div>
                    <div class="models-card-info"><span class="big">35% годовых</span></div>
                </div>
                <div class="models-card">
                    <div class="models-card-head">
                        <span class="models-card-title">Инвестиции</span>
                        <span class="models-card-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="41" height="40" viewBox="0 0 41 40" fill="none">
                                <path d="M11.3176 4.57129C6.54273 4.57129 3.71406 9.18861 5.7863 13.081C6.99183 15.3424 9.07985 16.6031 11.3885 17.5329C13.4292 18.3602 15.5487 18.9433 17.7707 19.156C18.3301 19.2112 19.1653 19.1482 19.1968 19.8337C19.2362 20.6925 18.4562 20.6058 17.7155 20.6768C17.2979 20.7162 17.1876 20.7162 16.7149 20.7949C13.2874 21.3386 10.1908 22.2526 7.52764 24.5534C5.5657 26.2475 4.56503 28.3276 5.32932 30.9593C5.99117 33.2365 7.49611 34.6075 9.87565 35.1039C12.6176 35.6712 14.5165 34.379 16.0609 32.4249C17.2979 30.8648 18.0543 29.0525 18.6374 27.1772C19.1968 25.365 19.5514 23.5133 19.7878 21.6459C19.8272 21.3386 19.8902 20.984 20.292 20.9368C20.82 20.8659 20.9381 21.2677 20.9854 21.6459C21.0248 21.9926 21.0327 22.2763 21.0879 22.5836C21.7655 26.3499 22.577 30.1478 25.3505 33.1419C26.9264 34.8439 28.8962 35.6791 31.2994 35.0487C33.671 34.4263 34.9948 32.811 35.5936 30.5969C36.2318 28.2646 34.8845 25.5226 32.3395 23.8521C29.4241 21.9375 26.1385 21.0156 22.6873 20.5822C21.9625 20.4876 21.3085 20.5743 21.403 19.7706C21.4661 19.1954 22.1988 19.2506 22.711 19.1875C22.971 19.156 23.231 19.1718 23.491 19.1245C27.1628 18.4626 30.7557 17.5802 33.5529 14.9878C35.2942 13.3726 36.2161 11.3948 35.5463 9.03102C34.916 6.82479 33.4898 5.23316 31.1024 4.721C28.715 4.20884 26.7767 5.08345 25.2166 6.84055C22.5534 9.83472 21.797 13.538 21.0957 17.2571C20.9854 17.8244 21.0879 18.833 20.3787 18.833C19.7878 18.833 19.8587 18.3366 19.6853 17.2098C19.1496 13.7665 18.2828 10.4336 16.1554 7.53394C14.9026 5.82411 13.2953 4.62644 11.3176 4.57917V4.57129Z" fill="#F05633"/>
                            </svg>
                        </span>
                    </div>
                    <div class="models-card-info">от <span class="big">30 млн ₽</span></div>
                </div>
                <Button color="primary" rounded="rounded-medium" label="оставить заявку"/>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.franchise-models {
    @apply flex flex-col gap-4;
    @media screen and (max-width: 1024px) {
        @apply gap-6;
    }
    @media screen and (max-width: 414px) {
        @apply gap-4;
    }
    &-item {
        @apply bg-neutral-500 p-6 rounded-2xl flex gap-[30px];
        @media screen and (max-width: 1024px) {
            @apply flex-col;
        }
        @media screen and (max-width: 414px) {
            @apply p-3 rounded-xl;
        }
    }
    &-banner {
        @apply flex flex-col gap-9;
    }
    &-images {
        @apply mt-auto max-w-full h-[380px];
        @media screen and (max-width: 1024px) {
            @apply h-auto;
        }
        img {
            @apply w-full h-full object-contain;
        }
    }
    &-head {
        @apply flex flex-col gap-[11px];
    }
    &-title {
        @apply text-1xl font-stratos text-secondary-500;
        @media screen and (max-width: 320px) {
            @apply text-xxl;
        }
    }
    &-description {
        @apply text-xl font-stratos text-secondary-500;
        @media screen and (max-width: 320px) {
            @apply text-sm;
        }
    }
    &-card {
        @apply max-w-[490px] w-full flex flex-col gap-2;
        @media screen and (max-width: 1024px) {
            @apply max-w-full;
        }
    }
    .models-card {
        @apply bg-secondary-500 text-neutral-50 flex flex-col gap-9 rounded-2xl p-4;
        @media screen and (max-width: 1024px) {
            @apply w-full;
        }
        @media screen and (max-width: 414px) {
            @apply rounded-xl p-3 gap-6 rounded-lg;
        }
        &-head {
            @apply flex items-start justify-between gap-2;
        }
        &-icon {
            @apply w-[40px] h-[40px] flex items-center justify-center;
            @media screen and (max-width: 375px) {
                @apply w-[24px] h-[24px];
            }
            svg {
                @apply w-[40px] h-[40px];
                @media screen and (max-width: 375px) {
                    @apply w-[24px] h-[24px];
                }
            }
        }
        &-title {
            @apply text-xl font-stratos;
            @media screen and (max-width: 320px) {
                @apply text-sm;
            }
        }
        &-info {
            @apply text-xl font-stratos;
            @media screen and (max-width: 320px) {
                @apply text-base;
            }
            .big {
                @apply text-1xl font-stratos;
                @media screen and (max-width: 414px) {
                    @apply text-xxl font-stratos;
                }
                @media screen and (max-width: 320px) {
                    @apply text-sm;
                }
            }
        }
    }
    .button {
        @media screen and (max-width: 414px) {
            @apply rounded-lg;
        }
        @media screen and (max-width: 320px) {
            @apply min-h-12 text-base;
        }
    }
}
</style>