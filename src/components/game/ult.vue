<template>
  <div class="chapter" id="ult">
    <div class="ultBg">
      <img src="@/assets/gamepage/シンボル/必殺技背景.png" alt="">
    </div>
    <div class="chapterWrap">
      <div class="ultWrap">
        <div class="ultMoji">
          <img src="@/assets/gamepage/シンボル/必殺技.png" alt="">
        </div>

        <div class="ultCard">
          <img src="@/assets/gamepage/シンボル/宇宙カード.png" alt="">
        </div>

        <div class="ultText">
          <p>解説が入る</p>
        </div>
      </div>
      
    </div>
    
  </div>
</template>

<style scoped>
#ult{
  display: flex;
  max-height: unset;
}

.ultBg{
  position: absolute;
  width: 100%;
  z-index: 0;
}

.ultWrap{
  display: flex;
  flex-direction: row;
  align-items: center;
  z-index: 100;
}

.ultMoji, .ultCard, .ultText{
  width: calc(100%/3);
}

.ultMoji{
  box-sizing: border-box;
  padding: 5%;
}

.ultCard{
  position: relative;
  height: 90%;
}

.ultText{
  text-align: center;
}

.ultCard::after{
  position: absolute;
  bottom: -5em;
  display: inline-block;
  background: url(../../assets/gamepage/シンボル/universe.png) center center no-repeat;
  background-size: contain;
  content: "";
  width: 100%;
  height: 7em;
}

.ultIcon{
  width: 50%;
}


@media screen and (max-width: 900px){
  .ultWrap{
    flex-direction: column;
  }
}
</style>