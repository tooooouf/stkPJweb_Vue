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
      ]
    }
  }
}
</script>

<style scoped>
.bloomCanvas{
  position: absolute;
  top: 10%;
  width: 100%;
  height: 100%;

}

.petal{
  position: absolute;
  width: 100px;
  height: 100px;
  animation: cherry linear infinite;
  -webkit-animation: cherry linear infinite;
  opacity: 0;
  overflow: hidden;
  z-index: 1;
}

.petal:nth-child(1){
  left: 5%;
  animation-delay: 8.1s;
  animation-duration: 17s;
}

.petal:nth-child(2){
  left: 9%;
  animation-delay: 3s;
  animation-duration: 11s;
}

.petal:nth-child(3){
  left: 14%;
  animation-delay: 9.3s;
  animation-duration: 18s;
}

.petal:nth-child(4){
  left: 22%;
  animation-delay: 7.4s;
  animation-duration: 14s;
}

.petal:nth-child(5){
  left: 25%;
  animation-delay: 2.5s;
  animation-duration: 12s;
}

.petal:nth-child(6){
  left: 29%;
  animation-delay: 4.7s;
  animation-duration: 16s;
}

.petal:nth-child(7){
  left: 32%;
  animation-delay: 6.2s;
  animation-duration: 19s;
}

.petal:nth-child(8){
  left: 38%;
  animation-delay: 8.5S;
  animation-duration: 13s;
}

.petal:nth-child(9){
  left: 43%;
  animation-delay: 3.8s;
  animation-duration: 18s;
}

.petal:nth-child(10){
  left: 50%;
  animation-delay: 1.3s;
  animation-duration: 15s;
}

.petal:nth-child(11){
  left: 54%;
  animation-delay: 2.6s;
  animation-duration: 20s;
}

.petal:nth-child(12){
  left: 63%;
  animation-delay: 7.9s;
  animation-duration: 14s;
}

.petal:nth-child(13){
  left: 69%;
  animation-delay: 5.2s;
  animation-duration: 16s;
}

.petal:nth-child(14){
  left: 77%;
  animation-delay: 1.1s;
  animation-duration: 13s;
}

.petal:nth-child(15){
  left: 84%;
  animation-delay: 6.5s;
  animation-duration: 15s;
}

.petal:nth-child(16){
  left: 89%;
  animation-delay: 2.3s;
  animation-duration: 14s;
}

.petal:nth-child(17){
  left: 91%;
  animation-delay: 3.2s;
  animation-duration: 17s;
}

.petal:nth-child(18){
  left: 95%;
  animation-delay: 9.9s;
  animation-duration: 12s;
}

@keyframes cherry{
  0%{
    opacity: 0;
  }
  10%{
    transform: translate(30px, 10rem) rotate(-60deg);
    opacity: .6;
  }
  20%{
    transform: translate(15px, 20rem) rotate(20deg);
  }
  30%{
    transform: translate(0px, 30rem) rotate(50deg);
  }
  50%{
    transform: translate(-50px, 50rem) rotate(150deg);
  }
  70%{
    transform: translate(-100px, 70rem) rotate(-50deg);
  }
  90%{
    transform: translate(-150px, 90rem) rotate(-180deg);
    opacity: .6;
  }
  100%{
    transform: translate(-200px, 100rem);
    opacity: 0;
  }
}

@-webkit-keyframes cherry{
  0%{
    opacity: 0;
  }
  10%{
    transform: translate(0, 10rem) rotate(-60deg);
    opacity: .6;
  }
  20%{
    transform: translate(10px, 20rem) rotate(20deg);
  }
  30%{
    transform: translate(0, 30rem) rotate(50deg);
  }
  50%{
    transform: translate(-20px, 50rem) rotate(150deg);
  }
  70%{
    transform: translate(-60px, 70rem) rotate(-50deg);
  }
  90%{
    transform: translate(-90px, 90rem) rotate(-180deg);
    opacity: .6;
  }
  100%{
    transform: translate(-120px, 100rem);
    opacity: 0;
  }
}
</style>