<template> 
  <section class="chapter" id="exorcism">
    <div class="chapterWrap">
      <div class="chapterTitle">
        <img src="@/assets/gamepage/悪霊退散/悪霊退散タイトル.png" alt="">
      </div>
      <div class="exorcismCard">
        <div class="exorcismImg">
          <img src="@/assets/gamepage/悪霊退散/動画予定場所1.png" alt="">
          <div class="exorcismOverlay">
            <img src="" alt="">
          </div>
        </div>
        <div class="exorcismText">
          <p>解説が入る</p>
        </div>
      </div>
      <div class="exorcismCard">
        <div class="exorcismText">
          <p>解説が入る</p>
        </div>
        <div class="exorcismImg">
          <img src="@/assets/gamepage/悪霊退散/動画予定場所1.png" alt="">
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#exorcism{
  position: relative;
  background: url(../../assets/gamepage/悪霊退散/悪霊退散四角背景.png) top center / cover no-repeat;
  color: #ffffff;
}

#exorcism::before{
  position: absolute;
  top: -48px;
  width: 100%;
  height: 0;
  padding-bottom: 50px;
  height: auto;
  background: url(../../assets/gamepage/悪霊退散/悪霊退散ギザギザ部分.png) center top repeat-x;
  background-size: auto 100%;
  content: "";
}

.exorcismCard{
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 100px;
}

.exorcismImg{
  position: relative;
  width: 60%;
  padding: 10px;
}

.exorcismOverlay{
  position: absolute;
}

.exorcismText{
  width: 40%;
  padding: 10px;
}

@media screen and (max-width: 768px){
  .exorcismCard{
    flex-direction: column;
    align-items: center;
  }

  .exorcismCard:nth-child(3){
    flex-direction: column-reverse;
  }
  
  .exorcismImg, .exorcismText{
    width: 100%;
  }

  .exorcismOverlay {
    right: 50px;
  }
}

</style>