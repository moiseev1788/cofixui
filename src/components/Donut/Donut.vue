<script setup>
    const props = defineProps({
        percent: {
            type: String,
            default: '6'
        }
    })
</script>


<template>
    <div class="progress-circle" :data-progress="[`${percent}`]">
        <div class="circle">
            <div class="full progress-circle__slice">
                <div class="progress-circle__fill"></div>
            </div>
            <div class="progress-circle__slice">
                <div class="progress-circle__fill"></div>
                <div class="progress-circle__fill progress-circle__bar"></div>
            </div>
        </div>
        <div class="progress-circle__overlay">{{ percent }}%</div>
    </div>
</template>

<style lang="scss" scoped>
    $circle-size: 64px;
    $circle-background: var(--neutral-white-700);
    $circle-fill: var(--primary-red-500);
    $inset-size: 54px;
    $inset-color: var(--neutral-white-500);
    $transition-length: 1s;

    .progress-circle__fill {
        background-color: var(--primary-red-500);
    }

    .progress-circle {
        width: $circle-size;
        height: $circle-size;
        background-color: $circle-background;
        border-radius: 50%;
        @media screen and (max-width: 568px) {
            $circle-size: 56px;
            width: $circle-size;
            height: $circle-size;
        }

        .progress-circle__slice,
        .progress-circle__fill {
            width: $circle-size;
            height: $circle-size;
            position: absolute;
            -webkit-backface-visibility: hidden;
            transition: transform $transition-length;
            border-radius: 50%;

            @media screen and (max-width: 568px) {
            $circle-size: 56px;
            width: $circle-size;
            height: $circle-size;
            }
        }

        .progress-circle__slice {
            clip: rect(0px, $circle-size, $circle-size, $circle-size/2);
        }
        .progress-circle__fill {
            clip: rect(0px, $circle-size/2, $circle-size, 0px);
        }

        .progress-circle__overlay {
            width: $inset-size;
            height: $inset-size;
            position: absolute;
            margin-left: ($circle-size - $inset-size)/2;
            margin-top: ($circle-size - $inset-size)/2;
            background-color: $inset-color;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 15px;
            font-weight: normal;
            text-align: center;
                @media screen and (max-width: 320px) {
                    font-size: 13px;
                }
                @media screen and (max-width: 568px) {
                    $inset-size: 48px;
                    width: $inset-size;
                    height: $inset-size;
                    margin-left: 4px;
                    margin-top: 4px;
                }
            }

        $i: 0;
        $increment: 180deg / 100;

        @while $i <=100 {
          &[data-progress='#{$i}'] {

            .progress-circle__slice.full,
            .progress-circle__fill {
              transform: rotate($increment * $i);
            }
        
            .progress-circle__fill.progress-circle__bar {
              transform: rotate($increment * $i * 2);
            }
        
            $i: $i + 1;
          }
        }
    }
</style>