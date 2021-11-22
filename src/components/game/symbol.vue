<template>
  <section class="chapter" id="symbol">
    <div class="chapterWrap">
      <div cardBg></div>
      <div class="chapterTitle">
        <img src="@/assets/gamepage/シンボル/シンボル.png" alt="">
      </div>
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
  background: url(../../assets/gamepage/シンボル/シンボル四角背景.png);
  color: #ffffff;
}

#symbol::before{
  position: absolute;
  top: -48px;
  width: 100%;
  height: 0;
  padding-bottom: 50px;
  height: auto;
  background: url(../../assets/gamepage/シンボル/シンボルギザギザ部分.png) center top repeat-x;
  background-size: auto 100%;
  content: "";
}

.symbolExp{
  display: flex;
  flex-direction: row;
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
  .symbolExp{
    flex-direction: column;
  }
  
  .symbolPic, .symbolText{
    width: 100%;
  }
}
</style>