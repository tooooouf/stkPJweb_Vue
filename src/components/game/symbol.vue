<template>
  <section class="chapter" id="symbol">
    <div class="chapterWrap">
      <div class="chapterTitle">
        <img src="@/assets/gamepage/シンボル/シンボル.png" alt="">
      </div>
      <span class="cardBg">
        <div class="symbolbgImg">
          <img src="@/assets/gamepage/シンボル/シンボル悪霊退散.png" alt="">
        </div>
        <div class="symbolbgImg">
          <img src="@/assets/gamepage/シンボル/シンボル悪霊退散.png" alt="">
        </div>
      </span>
      <div class="symbolExp">
        <div class="symbolPic">
          <img src="@/assets/gamepage/シンボル/星カード.png" alt="">
        </div>
        <div class="symbolText">
          <p>解説が入る</p>
        </div>
      </div>
      <CardDeck/>
    </div>
    <Ult/>
  </section>
</template>

<script>
import CardDeck from '@/components/game/cardDeck.vue'
import Ult from '@/components/game/ult.vue'

export default {
  components: {
    CardDeck,
    Ult
  }
}
</script>

<style scoped>
#symbol{
  position: relative;
  background: url(~@/assets/gamepage/シンボル/シンボル四角背景.png) top center / cover no-repeat;
  color: #ffffff;
  z-index: 5;
}

#symbol::before{
  position: absolute;
  top: -48px;
  width: 100%;
  height: 0;
  padding-bottom: 50px;
  height: auto;
  background: url(~@/assets/gamepage/シンボル/シンボルギザギザ部分.png) center top repeat-x;
  background-size: auto 100%;
  content: "";
}

.cardBg{
  position: absolute;
  top: 200px;
  display: flex;
  justify-content: space-between;
  max-height: 700px;
  z-index: 10;
}

.symbolbgImg{
  display: flex;
  justify-content: center;
  width: 40%;
}

.symbolbgImg img{
  margin: 0;
  width: unset;
  height: 100%;
}

.symbolExp{
  display: flex;
  flex-direction: row;
  align-items: center;
  z-index: 100;
}

.symbolPic, .symbolText{
  width: calc(100%/2);
}

.symbolText{
  display: flex;
  justify-content: center;
  align-items: center;
}



@media screen and (max-width: 768px){
  .cardBg{
    top: 100px;
    display: block;
    top: 150px;
  }

  .symbolbgImg{
    display: block;
    width: 100%;
  }

  .symbolbgImg img{
    max-height: 900px;
  }
  
  .symbolbgImg:nth-child(2){
    display: none;
  }
  
  .symbolExp{
    flex-direction: column;
  }
  
  .symbolPic{
    width: 90%;
  }

  .symbolText{
    width: 100%;
  }
}
</style>