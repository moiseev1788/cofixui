
<template>
    <div class="map-world" :class="currentClass">
        <div class="map-country active">
            <div class="map-img"><img src="../../assets/img/map/map-russia.svg" alt=""></div>
            <MapBadge flag="RU.svg" country="Россия" />
        </div>
        <div class="map-country">
            <div class="map-img"><img src="../../assets/img/map/map-belarus.svg" alt=""></div>
            <MapBadge flag="BY.svg" country="Беларусь" />
        </div>
        <div class="map-country">
            <div class="map-img"><img src="../../assets/img/map/map-poalnd.svg" alt=""></div>
            <MapBadge flag="PL.svg" country="Польша" />
        </div>
        <div class="map-country">
            <div class="map-img"><img src="../../assets/img/map/map-spain.svg" alt=""></div>
            <MapBadge flag="SP.svg" country="Испания" />
        </div>
        <div class="map-country">
            <div class="map-img"><img src="../../assets/img/map/map-israil.svg" alt=""></div>
            <MapBadge flag="IL.svg" country="Израиль" />
        </div>
        <div class="map-country">
            <div class="map-img"><img src="../../assets/img/map/map-armenia.svg" alt=""></div>
            <MapBadge flag="AM.svg" country="Армения" />
        </div>
        <div class="stakan"><img src="../../assets/img/stakan.png" alt=""></div>
    </div>
</template>
  
<script>
import { onMounted, onUnmounted, ref } from 'vue';
import MapBadge from './MapBadge.vue';

export default {
    components: {
    MapBadge
  },
  setup() {
    const countries = ['ru', 'by', 'pl', 'es', 'il', 'am',];
    const currentClass = ref('');
    let currentIndex = 0;

    function updateClass() {
      currentClass.value = countries[currentIndex];
      currentIndex = (currentIndex + 1) % countries.length;
    }

    let interval;

    onMounted(() => {
      updateClass(); // Начальное обновление для того, чтобы первый класс был применен сразу
      interval = setInterval(updateClass, 5000);
    });

    onUnmounted(() => {
      clearInterval(interval);
    });

    return { currentClass };
  },
mounted() {
        this.activateMapBoxes();
    },
    methods: {
        activateMapBoxes() {
            const mapBoxes = this.$el.querySelectorAll('.map-country');
            let currentIndex = 0;
            // Сразу добавляем класс .active первому элементу
            mapBoxes[currentIndex].classList.add('active');
            
            setInterval(() => {
                // Удаляем класс .active у текущего элемента
                mapBoxes[currentIndex].classList.remove('active');
                
                // Переходим к следующему элементу, используя остаток от деления, 
                // для цикличного возвращения к началу
                currentIndex = (currentIndex + 1) % mapBoxes.length;
                
                // Добавляем класс .active следующему элементу
                mapBoxes[currentIndex].classList.add('active');
            }, 5000); // Повторяем каждые 5 секунд
        },
    }
}

</script>

<style lang="scss" scoped>
.map-world {
    @apply relative w-full h-[700px];
    @media screen and (max-width: 1024px) {
        @apply h-[500px];
    }
    @media screen and (max-width: 768px) {
        @apply h-[450px];
    }
    @media screen and (max-width: 568px) {
        @apply h-[300px];
    }
    @media screen and (max-width: 414px) {
        @apply h-[200px];
    }
    @media screen and (max-width: 375px) {
        @apply h-[180px];
    }
    @media screen and (max-width: 320px) {
        @apply h-[150px];
    }
    &.am {
        .stakan {
            @apply right-[484px] top-[254px];
            @media screen and (max-width: 1220px) {
                @apply right-[467px] top-[250px];
            }
            @media screen and (max-width: 1200px) {
                @apply right-[460px] top-[255px];
            }
            @media screen and (max-width: 1160px) {
                @apply right-[447px] top-[256px];
            }
            @media screen and (max-width: 1100px) {
                @apply right-[420px] top-[256px];
            }
            @media screen and (max-width: 1024px) {
                @apply right-[390px] top-[165px];
            }
            @media screen and (max-width: 991px) {
                @apply right-[375px] top-[158px];
            }
            @media screen and (max-width: 860px) {
                @apply right-[320px] top-[165px];
            }
            @media screen and (max-width: 768px) {
                @apply right-[285px] top-[144px];
            }
            @media screen and (max-width: 650px) {
                @apply right-[235px] top-[150px];
            }
            @media screen and (max-width: 568px) {
                @apply right-[210px] top-[100px];
            }
            @media screen and (max-width: 414px) {
                @apply right-[150px] top-[65px];
            }
            @media screen and (max-width: 375px) {
                @apply right-[135px] top-[60px];
            }
            @media screen and (max-width: 320px) {
                @apply right-[115px] top-[45px];
            }
        }
    }
    &.by {
        .stakan {
            @apply right-[540px] top-[186px];
            @media screen and (max-width: 1220px) {
                @apply right-[525px] top-[191px];
            }
            @media screen and (max-width: 1200px) {
                @apply right-[517px] top-[196px];
            }
            @media screen and (max-width: 1160px) {
                @apply right-[497px] top-[196px];
            }
            @media screen and (max-width: 1100px) {
                @apply right-[470px] top-[200px];
            }
            @media screen and (max-width: 1024px) {
                @apply right-[436px] top-[111px];
            }
            @media screen and (max-width: 991px) {
                @apply right-[420px] top-[115px];
            }
            @media screen and (max-width: 860px) {
                @apply right-[360px] top-[125px];
            }
            @media screen and (max-width: 768px) {
                @apply right-[320px] top-[110px];
            }
            @media screen and (max-width: 650px) {
                @apply right-[270px] top-[120px];
            }
            @media screen and (max-width: 568px) {
                @apply right-[235px] top-[75px];
            }
            @media screen and (max-width: 414px) {
                @apply right-[168px] top-[45px];
            }
            @media screen and (max-width: 375px) {
                @apply right-[152px] top-[37px];
            }
            @media screen and (max-width: 320px) {
                @apply right-[126px] top-[30px];
            }
        }
    }
    &.ru {
        .stakan {
            @apply right-[490px] top-[176px];
            @media screen and (max-width: 1200px) {
                @apply right-[465px] top-[191px];
            }
            @media screen and (max-width: 1100px) {
                @apply right-[417px] top-[186px];
            }
            @media screen and (max-width: 1024px) {
                @apply right-[390px] top-[100px];
            }
            @media screen and (max-width: 860px) {
                @apply right-[320px] top-[110px];
            }
            @media screen and (max-width: 768px) {
                @apply right-[280px] top-[100px];
            }
            @media screen and (max-width: 650px) {
                @apply right-[220px] top-[100px];
            }
            @media screen and (max-width: 568px) {
                @apply right-[210px] top-[65px];
            }
            @media screen and (max-width: 414px) {
                @apply right-[145px] top-[40px];
            }
            @media screen and (max-width: 375px) {
                @apply right-[130px] top-[30px];
            }
            @media screen and (max-width: 320px) {
                @apply right-[110px] top-[25px];
            }
        }
    }
    &.es {
        .stakan {
            @apply right-[650px] top-[244px];
            @media screen and (max-width: 1220px) {
                @apply right-[625px] top-[246px];
            }
            @media screen and (max-width: 1200px) {
                @apply right-[615px] top-[250px];
            }
            @media screen and (max-width: 1160px) {
                @apply right-[593px] top-[256px];
            }
            @media screen and (max-width: 1100px) {
                @apply right-[565px] top-[256px];
            }
            @media screen and (max-width: 1024px) {
                @apply right-[525px] top-[155px];
            }
            @media screen and (max-width: 991px) {
                @apply right-[504px] top-[158px];
            }
            @media screen and (max-width: 860px) {
                @apply right-[435px] top-[165px];
            }
            @media screen and (max-width: 768px) {
                @apply right-[385px] top-[144px];
            }
            @media screen and (max-width: 650px) {
                @apply right-[320px] top-[150px];
            }
            @media screen and (max-width: 568px) {
                @apply right-[280px] top-[99px];
            }
            @media screen and (max-width: 414px) {
                @apply right-[200px] top-[65px];
            }
            @media screen and (max-width: 375px) {
                @apply right-[180px] top-[55px];
            }
            @media screen and (max-width: 320px) {
                @apply right-[150px] top-[45px];
            }
        }
    }
    &.pl {
        .stakan {
            @apply right-[570px] top-[194px];
            @media screen and (max-width: 1220px) {
                @apply right-[552px] top-[196px];
            }
            @media screen and (max-width: 1200px) {
                @apply right-[542px] top-[200px];
            }
            @media screen and (max-width: 1160px) {
                @apply right-[523px] top-[206px];
            }
            @media screen and (max-width: 1100px) {
                @apply right-[495px] top-[206px];
            }
            @media screen and (max-width: 1024px) {
                @apply right-[460px] top-[115px];
            }
            @media screen and (max-width: 991px) {
                @apply right-[444px] top-[118px];
            }
            @media screen and (max-width: 860px) {
                @apply right-[380px] top-[130px];
            }
            @media screen and (max-width: 768px) {
                @apply right-[335px] top-[110px];
            }
            @media screen and (max-width: 650px) {
                @apply right-[280px] top-[120px];
            }
            @media screen and (max-width: 568px) {
                @apply right-[250px] top-[75px];
            }
            @media screen and (max-width: 414px) {
                @apply right-[178px] top-[50px];
            }
            @media screen and (max-width: 375px) {
                @apply right-[160px] top-[40px];
            }
            @media screen and (max-width: 320px) {
                @apply right-[134px] top-[30px];
            }
        }
    }
    &.il {
        .stakan {
            @apply right-[520px] top-[284px];
            @media screen and (max-width: 1220px) {
                @apply right-[502px] top-[280px];
            }
            @media screen and (max-width: 1200px) {
                @apply right-[490px] top-[285px];
            }
            @media screen and (max-width: 1160px) {
                @apply right-[477px] top-[286px];
            }
            @media screen and (max-width: 1100px) {
                @apply right-[450px] top-[450px];
            }
            @media screen and (max-width: 1024px) {
                @apply right-[415px] top-[185px];
            }
            @media screen and (max-width: 991px) {
                @apply right-[400px] top-[188px];
            }
            @media screen and (max-width: 860px) {
                @apply right-[345px] top-[195px];
            }
            @media screen and (max-width: 768px) {
                @apply right-[305px] top-[164px];
            }
            @media screen and (max-width: 650px) {
                @apply right-[255px] top-[170px];
            }
            @media screen and (max-width: 568px) {
                @apply right-[225px] top-[110px];
            }
            @media screen and (max-width: 414px) {
                @apply right-[160px] top-[75px];
            }
            @media screen and (max-width: 375px) {
                @apply right-[145px] top-[65px];
            }
            @media screen and (max-width: 320px) {
                @apply right-[120px] top-[55px];
            }
        }
    }
    .stakan {
        @apply transition-[0.5s] duration-[ease] absolute;
    }
}
.map-country {
  @apply opacity-0 absolute transition-opacity duration-[0.5s] ease-[ease] w-full h-full top-0;
    .map-img {
        @apply w-full h-full;
        img {
            @apply w-full h-full object-contain;
        }
    }
    &.active {
        @apply opacity-100
    }
}

.stakan {
  @apply w-[33px] h-[53px];
    @media screen and (max-width: 568px) {
        @apply w-[16px] h-[33px];
    }
    @media screen and (max-width: 414px) {
        @apply w-[10px] h-[25px];
    }
    img {
        @apply w-full h-full object-contain;
    }
}
</style>