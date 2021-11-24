<template>
  <section class="chapter" id="character">
    <div class="chapterWrap">
      <div class="chapterTitle">
        <img src="@/assets/gamepage/キャラクター/キャラクター.png" alt="">
      </div>
      <div class="characterList">
        <span class="characterBg">
          <div class="goodness">
            <img src="@/assets/gamepage/キャラクター/善背景.png" alt="">
          </div>
          <div class="badness">
            <img src="@/assets/gamepage/キャラクター/悪背景.png" alt="">
          </div>
          <div class="badness">
            <img src="@/assets/gamepage/キャラクター/悪背景.png" alt="">
          </div>
        </span>
        <div class="characterWrap">
          <div class="characterImg">
            <img src="@/assets/gamepage/キャラクター/主人公.png" alt="">
          </div>
          <div class="characterText">
            <p>主人公の陰陽師<br>各地を転々としており、以来があれば悪霊退治に赴く。<br>優れた力を持っており、彼女ほどの陰陽師はそういない。</p>
          </div>
        </div>
        <div class="characterWrap">
          <div class="characterImg">
            <img src="@/assets/gamepage/キャラクター/ガン.png" alt="">
          </div>
          <div class="characterText">
            <p>癌が悪霊として具現化した姿とても攻撃的であり、体内からは泥球を飛ばしてくる。</p>
          </div>
        </div>
        <div class="characterWrap">
           <div class="characterImg">
            <img src="@/assets/gamepage/キャラクター/金平糖.png" alt="">
          </div>
          <div class="characterText">
            <p>人々を甘味へ誘惑する悪霊<br>一見、害がなさそうだが憑りつかれると、貴重な砂糖を欲するようになり、どんな手を使ってでも砂糖を摂取しようとしてしまう。</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#character{
  position: relative;
  background: url(../../assets/gamepage/キャラクター/キャラクター四角背景.png) top center / cover no-repeat;
}

#character::before{
  position: absolute;
  top: -48px;
  width: 100%;
  height: 0;
  padding-bottom: 50px;
  height: auto;
  background: url(~@/assets/gamepage/キャラクター/キャラクターギザギザ部分.png) center top repeat-x;
  background-size: auto 100%;
  content: "";
}

.characterList{
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 90%;
  
}

.characterList::after{
  position: absolute;
  top: 0;
  right: -5vw;
  width: 5vw;
  max-width: 70px;
  height: 100%;
  content: "";
  background: url(~@/assets/gamepage/キャラクター/anotherGhost.png) center center / cover no-repeat;
  background-size: 100% auto;
}

.characterBg{
  position: absolute;
  display: flex;
  flex-direction: row;
  width: auto;
  max-width: 900px;
  z-index: 0;
}

.badness:nth-child(3){
  display: none;
}

.characterWrap{
  display: flex;
  flex-direction: column;
  width: calc(100%/3);
  z-index: 100;
}

.characterImg{
  display: flex;
  align-items: center;
  min-height: 500px;
}

.characterText{
  display: flex;
  align-items: flex-start;
  box-sizing: border-box;
  min-height: 150px;
  margin: 10px;
  text-align: center;
  letter-spacing: 2px;
}

.characterText p{
  margin: 0;
}

@media screen and (max-width: 900px) {
  .characterList{
    flex-direction: column;
  }

  .characterList::after{
    display: none;
  }

  .characterBg{
    flex-direction: column;
    justify-content: space-evenly;
    box-sizing: border-box;
    height: 100%;
    padding-top: 20vh;
  }

  .badness:nth-child(3){
    display: block;
  }

  .characterWrap{
    width: 70%;
    margin-bottom: 30px;
  }

  .characterImg{
    min-height: unset;
  }

  .characterText{
    margin: 0;
    min-height: unset;
  }
}


@media screen and (max-width: 768px){
  
}
</style>