<template>
  <section class="chapter" id="story">
    <div class="wrap storyWrap">
      <div class="chapterTitle">
        <img src="@/assets/gamepage/物語/物語.png" alt="">
      </div>
      <div class="storyCard">
        <div class="storySentence">
        <p>あらすじが入る</p>
      </div>
        <div class="storyImg">
          <img src="@/assets/gamepage/物語/画像予定場所１.png" alt="">
        </div>
      </div>
      <div class="storyCard">
        <div class="storyImg">
          <img src="@/assets/gamepage/物語/画像予定場所１.png" alt="">
        </div>
        <div class="storySentence">
        <p>あらすじが入る</p>
        </div>
      </div>
      <div class="storyCard">
        <div class="storyImg">
          <img src="@/assets/gamepage/物語/画像予定場所１.png" alt="">
        </div>
        <div class="storySentence">
        <p>あらすじが入る</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#story {
  width: 100%;
  background: url(../../assets/gamepage/物語/物語背景.png) top center / cover no-repeat;
}

.storyWrap{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.storyCard{
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
  width: 100%;
}

.storyCard:nth-child(4){
  flex-direction: column;
  align-items: center;
}

.storySentence{
  width: 50%;
  padding: 10px;
}

.storyImg{
  width: 50%;
  padding: 10px;
}

@media screen and (max-width: 768px) {
  .storyCard{
    flex-direction: column-reverse;
    align-items: center;
    padding: 0 3%;
  }
  
  .storyCard:nth-child(3){
    flex-direction: column;
  }

  .storyImg, .storySentence{
    width: 100%;
  }
}
</style>