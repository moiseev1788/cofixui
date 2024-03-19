<template>
 <section class="form mb-page" id="form">
    <div class="container">
        <div class="wrapper-page mb-4">
            <h2>Свяжись с нами</h2>
        </div>
        <div class="form-row">
            <div class="form-col">
                <div class="form-banner">
                    <img src="../../assets/img/banner-form.png" alt="">
                </div>
            </div>
            <div class="form-col">
                <component is="script" data-b24-form="inline/22/icm5ig" data-skip-moving="true" src="https://os.cofix.global/upload/crm/form/loader_22_icm5ig.js" async></component>
            </div>
        </div>
    </div>
 </section>
</template>

<style lang="scss" scoped>
    .form {
        &-row {
            @apply flex;
        }
        &-col {
            &:nth-child(1) {
                @apply max-w-[430px] w-full h-auto;
                @media screen and (max-width: 1024px) {
                    @apply hidden;
                }
                .form-banner {
                    @apply h-full w-full rounded-2xl overflow-hidden;
                }
                img {
                    @apply w-full h-full object-cover;
                }
            }
            &:nth-child(2) {
                @apply p-4 border-[1px] border-neutral-600 bg-neutral-50 rounded-2xl w-full;
                @media screen and (max-width: 414px) {
                    @apply rounded-xl
                }
            }
        }
    }

</style>