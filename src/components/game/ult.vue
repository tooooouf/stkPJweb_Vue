<template>
  <div class="chapter" id="ult">
    <div class="ultBg">
      <img src="@/assets/gamepage/シンボル/必殺技背景.png" alt="">
    </div>
    <div class="chapterWrap">
      <div class="ultWrap">
        <div class="ultMoji">
          <img src="@/assets/gamepage/シンボル/必殺技.png" alt="" class="v-ult">
          <img src="@/assets/gamepage/シンボル/必殺技横.png" alt="" class="h-ult">
        </div>

        <div class="ultCard">
          <img src="@/assets/gamepage/シンボル/宇宙カード.png" alt="">
        </div>

        <div class="ultText">
          <p>連続でリズムを刻むことで、必殺技が溜まる<br>使用すると周囲は
          <ruby><rb>宇宙</rb><rp>(</rp><rt>そら</rt><rp>)</rp></ruby>
          に飲まれ、辺りの悪霊は一瞬にして灰になる</p>
        </div>
      </div>
      
    </div>
    
  </div>
</template>

<style scoped>
#ult{
  display: flex;
  min-height: initial;
  overflow: hidden;
}

.ultBg{
  position: absolute;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1280px;
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

.h-ult{
  display: none;
}

.ultCard{
  position: relative;
  height: 90%;
}

.ultText{
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.ultText p{
  max-width: 200px;
}

.ultCard::after{
  position: absolute;
  bottom: -50px;
  display: inline-block;
  background: url(../../assets/gamepage/シンボル/universe.png) center center no-repeat;
  background-size: contain;
  content: "";
  width: 100%;
  height: 7em;
}

@media screen and (max-width: 900px){
  .ultWrap{
    flex-direction: column;
  }

  .ultBg{
    width: 500vw;
  }

  .ultMoji, .ultText{
    width: 100%;
  }

  .ultMoji{
    max-width: 250px;
    padding: 0;
  }

  .v-ult{
    display: none;
  }

  .h-ult{
    display: block;
  }

  .ultCard{
    width: 90%;
  }
  
  .ultCard::after{
    bottom: -20px;
    height: 5em;
  }

}
</style>