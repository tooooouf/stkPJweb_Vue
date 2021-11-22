<template>
  <div class="cardDeck">
    <carousel :settings="settings" :breakpoints="breakpoints" :wrapAround= "true" :autoplay="5000">
      <slide v-for="(card,key) in cards" :key="key">
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
      snapAlign: 'start'
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
          url: require('@/assets/gamepage/シンボル/炎カード.png')
        },
        {
          url: require('@/assets/gamepage/シンボル/風カード１.png')
        },
        {
          url: require('@/assets/gamepage/シンボル/雷カード.png')
        },
        {
          url: require('@/assets/gamepage/シンボル/風カード２.png')
        },
        {
          url: require('@/assets/gamepage/シンボル/炎カード.png')
        },
        {
          url: require('@/assets/gamepage/シンボル/炎カード.png')
        },
        {
          url: require('@/assets/gamepage/シンボル/炎カード.png')
        },
      ]
    }
  }
})

</script>


<style scoped>
.cardDeck{
  width: 90%;
}

</style>

<style>
.carousel__prev, .carousel__next{
  background-color: unset;
  font-size: calc(var(--vc-nav-width));
}

</style>