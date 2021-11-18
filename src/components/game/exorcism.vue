<template> 
  <section class="chapter" id="exorcism">
    <div class="wrap exorcismWrap">
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
        <div class="exorcismSentence">
          <p>解説が入る</p>
        </div>
      </div>
      <div class="exorcismCard">
        <div class="exorcismSentence">
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
  background: url(../../assets/gamepage/悪霊退散/悪霊退散背景.png) top center / cover no-repeat;
  color: #ffffff;
}

.exorcismWrap{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.exorcismCard{
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 30px;
}

.exorcismImg{
  position: relative;
  width: 60%;
  padding: 10px;
}

.exorcismOverlay{
  position: absolute;
}

.exorcismSentence{
  width: 40%;
  padding: 10px;
}

@media screen and (max-width: 768px){
  .exorcismCard{
    flex-direction: column;
    align-items: center;
    padding: 3%;
  }

  .exorcismCard:nth-child(3){
    flex-direction: column-reverse;
  }
  
  .exorcismImg, .exorcismSentence{
    width: 100%;
  }

  .exorcismOverlay {
    right: 50px;
  }
}

</style>