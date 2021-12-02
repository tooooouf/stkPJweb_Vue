<template>
  <div class="cardDeck">
    <carousel :settings="settings" :breakpoints="breakpoints">
      <slide v-for="(card,cardKey) in cards" :key="cardKey">
        <img :src="card.url" alt="">
      </slide>
      <template #addons>
        <navigation />
      </template>
    </carousel>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';

export default defineComponent({
  components:{
    Carousel,
    Slide,
    Navigation
  },
  data: () => ({
    settings:{
      itemsToShow: 4,
      itemsToScroll: 1,
      wrapAround: 'true',
      snapAlign: 'start',
      autoplay: 1000,
      pauseAutoplayOnHover: 'true',
    },
    breakpoints:{
      0:{
        itemsToShow: 1,
      },
      700:{
        itemsToShow: 2,
      },
      900:{
        itemsToShow: 4,
      }
    },
  }),
  setup(){
    return{
      cards: [
        {
          url: require('@/assets/gamepage/シンボル/cards/Card1.png')
        },
        {
          url: require('@/assets/gamepage/シンボル/cards/Card2.png')
        },
        {
          url: require('@/assets/gamepage/シンボル/cards/Card2_1.png')
        },
        {
          url: require('@/assets/gamepage/シンボル/cards/Card3_0.png')
        },
        {
          url: require('@/assets/gamepage/シンボル/cards/Card3_1.png')
        },
        {
          url: require('@/assets/gamepage/シンボル/cards/Card3_2.png')
        },
        {
          url: require('@/assets/gamepage/シンボル/cards/Card3_3.png')
        },
        {
          url: require('@/assets/gamepage/シンボル/cards/Card4_0.png')
        },
        {
          url: require('@/assets/gamepage/シンボル/cards/Card4_1.png')
        },
        {
          url: require('@/assets/gamepage/シンボル/cards/Card4_2.png')
        },
        {
          url: require('@/assets/gamepage/シンボル/cards/Card4_3.png')
        },
        {
          url: require('@/assets/gamepage/シンボル/cards/Card4_4.png')
        },
        {
          url: require('@/assets/gamepage/シンボル/cards/Card4_5.png')
        },
        {
          url: require('@/assets/gamepage/シンボル/cards/Card4_6.png')
        },
        {
          url: require('@/assets/gamepage/シンボル/cards/Card5_0.png')
        },
        {
          url: require('@/assets/gamepage/シンボル/cards/Card5_1.png')
        },
        {
          url: require('@/assets/gamepage/シンボル/cards/Card5_2.png')
        },
        {
          url: require('@/assets/gamepage/シンボル/cards/Card5_3.png')
        },
        {
          url: require('@/assets/gamepage/シンボル/cards/Card5_4.png')
        },
        {
          url: require('@/assets/gamepage/シンボル/cards/Card5_5.png')
        },
        {
          url: require('@/assets/gamepage/シンボル/cards/Card5_6.png')
        },
        {
          url: require('@/assets/gamepage/シンボル/cards/Card6_0.png')
        },
        {
          url: require('@/assets/gamepage/シンボル/cards/Card6_1.png')
        },
        {
          url: require('@/assets/gamepage/シンボル/cards/Card6_2.png')
        },
        {
          url: require('@/assets/gamepage/シンボル/cards/Card6_3.png')
        },
        {
          url: require('@/assets/gamepage/シンボル/cards/Card6_4.png')
        },
        {
          url: require('@/assets/gamepage/シンボル/cards/Card7_1.png')
        },
        {
          url: require('@/assets/gamepage/シンボル/cards/Card7_2.png')
        },
        {
          url: require('@/assets/gamepage/シンボル/cards/Card7_3.png')
        },
        {
          url: require('@/assets/gamepage/シンボル/cards/Card8_1.png')
        },
        {
          url: require('@/assets/gamepage/シンボル/cards/Card8_2.png')
        },
        {
          url: require('@/assets/gamepage/シンボル/cards/Card9_0.png')
        },
        {
          url: require('@/assets/gamepage/シンボル/cards/Card14_0.png')
        },
      ]
    }
  }
})

</script>


<style scoped>
.cardDeck{
  width: 100%;
  z-index: 10;
}

</style>

<style>
.carousel__icon{
  height: 100%;
}

.carousel__prev, .carousel__next{
  width: 50px;
  height: 50px;
  background-color: unset;
  font-size: 50em;
}

</style>