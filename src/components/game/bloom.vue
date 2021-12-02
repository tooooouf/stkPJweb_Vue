<template>
  <div class="bloomCanvas">
    <div class="petal" v-for="(petal,petalKey) in petals" :key="petalKey">
      <img :src="petal.petalImg" alt="">
    </div>
  </div>
</template>

<script>

export default {
  data(){
    return{
      petals: [
        {
          petalImg: require('@/assets/gamepage/桜/hanabira.png'),
        },
        {
          petalImg: require('@/assets/gamepage/桜/hanabira2.png'),
        },
        {
          petalImg: require('@/assets/gamepage/桜/hanabira3.png'),
        },
        {
          petalImg: require('@/assets/gamepage/桜/hanabira2.png'),
        },
        {
          petalImg: require('@/assets/gamepage/桜/hanabira.png'),
        },
        {
          petalImg: require('@/assets/gamepage/桜/hanabira3.png'),
        },
        {
          petalImg: require('@/assets/gamepage/桜/hanabira3.png'),
        },
        {
          petalImg: require('@/assets/gamepage/桜/hanabira2.png'),
        },
        {
          petalImg: require('@/assets/gamepage/桜/hanabira.png'),
        },
        {
          petalImg: require('@/assets/gamepage/桜/hanabira2.png'),
        },
        {
          petalImg: require('@/assets/gamepage/桜/hanabira3.png'),
        },
        {
          petalImg: require('@/assets/gamepage/桜/hanabira.png'),
        },
      ]
    }
  }
}
</script>

<style scoped>
.bloomCanvas{
  position: absolute;
  width: 100%;
  height: 100%;

}

.petal{
  position: absolute;
  top: 15vh;
  width: 100px;
  height: 100px;
  animation: cherry linear 10s infinite;
  -webkit-animation: cherry linear 10s infinite;
  opacity: 0;
  overflow: hidden;
  z-index: 1;
}

.petal:nth-child(1){
  left: 7%;
  animation-delay: 8.1s;
}

.petal:nth-child(2){
  left: 10%;
  animation-delay: 3s;
}

.petal:nth-child(3){
  left: 20%;
  animation-delay: 9.3s;
}

.petal:nth-child(4){
  left: 27%;
  animation-delay: 7.4s;
}

.petal:nth-child(5){
  left: 34%;
  animation-delay: 2.5s;
}

.petal:nth-child(6){
  left: 40%;
  animation-delay: 4.7s;
}
.petal:nth-child(7){
  left: 52%;
  animation-delay: 6.2s;
}

.petal:nth-child(8){
  left: 59%;
  animation-delay: 8.5S;
}

.petal:nth-child(9){
  left: 66%;
  animation-delay: 3.8s;
}

.petal:nth-child(10){
  left: 78%;
  animation-delay: 1.3s;
}

.petal:nth-child(11){
  left: 85%;
  animation-delay: 2.6s;
}

.petal:nth-child(12){
  left: 92%;
  animation-delay: 7.9s;
  
}

@keyframes cherry{
  0%{
    opacity: 0;
  }
  10%{
    opacity: .8;
  }
  20%{
    transform: translate(3px, 18rem) rotate(20deg);
  }
  30%{
    transform: translate(0 30rem) rotate(50deg);
  }
  50%{
    transform: translate(-20px, 50rem) rotate(150deg);
  }
  70%{
    transform: translate(-60px, 70rem) rotate(-50deg);
  }
  90%{
    transform: translate(-60px, 90rem) rotate(-180deg);
    opacity: .8;
  }
  100%{
    transform: translate(-70px, 100rem);
    opacity: 0;
  }
}

@-webkit-keyframes cherry{
  0%{
    opacity: 0;
  }
  10%{
    opacity: .8;
  }
  20%{
    transform: translate(3px, 18rem) rotate(20deg);
  }
  30%{
    transform: translate(0 30rem) rotate(50deg);
  }
  50%{
    transform: translate(-20px, 50rem) rotate(150deg);
  }
  70%{
    transform: translate(-60px, 70rem) rotate(-50deg);
  }
  90%{
    transform: translate(-60px, 90rem) rotate(-180deg);
    opacity: .8;
  }
  100%{
    transform: translate(-70px, 100rem);
    opacity: 0;
  }
}
</style>