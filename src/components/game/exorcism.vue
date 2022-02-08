<template> 
  <section class="chapter" id="exorcism">
    <div class="chapterWrap">
      <div class="chapterTitle">
        <img src="@/assets/gamepage/悪霊退散/悪霊退散タイトル.png" alt="">
      </div>
      <div class="exorcismCard">
        <div class="exorcismImg">
          <iframe class="exorcismVideo" src="https://drive.google.com/file/d/1XDAnBdY8EqvmYVV2Z2SaAFMBdVv2xtpF/preview" allow="autoplay"></iframe>
        </div>
        <div class="exorcismText">
          <p>
            タイミングよく筆を振ることでシンボルを描くことができる！<br>
            たくさん描いて敵を攻撃しよう！
          </p>
          <p>
            波が進むごとに曲のBPMや敵の出現頻度が変化するぞ！
          </p>
          <p>
            敵を倒したり、波を突破したりすると経験値が獲得できる。<br>
            経験値をためて新しいシンボルカードを獲得しよう！
          </p>
        </div>
      </div>
      <div class="exorcismCard">
        <div class="exorcismText">
          <p>
            敵が飛ばしてくる泥球は<br>
            防ぐことができる！
          </p>
          <p>
            リズムに合わせて<br>
            タイミングよくしゃがむことで<br>
            バリアが展開される！
          </p>
          <p>
            被弾を少なくすることが<br>
            攻略のコツだ！
          </p>
        </div>
        <div class="exorcismImg">
          <img src="@/assets/gamepage/悪霊退散/しゃがみ.png" alt="">
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#exorcism{
  position: relative;
  background: url(~@/assets/gamepage/悪霊退散/悪霊退散四角背景.png) top center / cover no-repeat;
  color: #ffffff;
  z-index: 3;
}

#exorcism::before{
  position: absolute;
  top: -45px;
  width: 100%;
  height: 0;
  padding-bottom: 50px;
  height: auto;
  background: url(~@/assets/gamepage/悪霊退散/悪霊退散ギザギザ部分.png) center top repeat-x;
  background-size: auto 100%;
  content: "";
}

.exorcismCard{
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 100px;
}

.exorcismImg{
  position: relative;
  width: 60%;
  padding: 10px;
}

.exorcismImg:first-child{
  padding-top: 32.5%;
  box-sizing: border-box;
  z-index: 3;
}

.exorcismVideo{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
  z-index: 0;
  box-sizing: border-box;
}

.exorcismImg::before{
  position: absolute;
  content: "";
  width: 15%;
  height: 100%;
  z-index: 4;
}

.exorcismImg:nth-child(1)::before{
  top: -50px;
  left: -5px;
  background: url(~@/assets/gamepage/悪霊退散/exorcismLabel.png) top center / contain no-repeat;
}

.exorcismImg:nth-child(2)::before{
  top: -20px;
  right: 30%;
  background: url(~@/assets/gamepage/悪霊退散/guardLabel.png) top center / contain no-repeat;
}

.exorcismText{
  box-sizing: border-box;
  width: 40%;
  max-width: 300px;
  margin-left: 20px;
  text-align: center;
  line-height: 2;
}

@media screen and (max-width: 768px){
  .exorcismCard{
    flex-direction: column;
    margin-bottom: 30px;
  }

  .exorcismCard:nth-child(3){
    flex-direction: column-reverse;
  }
  
  .exorcismImg, .exorcismText{
    width: 100%;
  }

  .exorcismImg:first-child{
    padding-top: 56%;
  }

  .exorcismText{
    margin: 0;
  }

  .exorcismImg:nth-child(1)::before{
    left: 0;
  }

  .exorcismImg:nth-child(2)::before{
    right: 30%;
  }

  .exorcismOverlay {
    right: 50px;
  }
}

</style>