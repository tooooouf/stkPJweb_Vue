<template>
  <section class="chapter" id="story">
    <Bloom/>
    <div class="chapterWrap">
      <div class="chapterTitle">
        <img src="@/assets/gamepage/物語/物語.png" alt="">
      </div>
      <div class="storyCard">
        <div class="storyText">
        <p>
          ある町に突如、<br>
          見たこともない怪物が現れました。<br>
          その怪物は人々を襲い、<br>
          襲われた人を病気にしていきました。
        </p>
      </div>
        <div class="storyImg">
          <img src="@/assets/gamepage/物語/IMG_1412.jpg" alt="">
        </div>
      </div>
      <div class="storyCard">
        <div class="storyImg">
          <img src="@/assets/gamepage/物語/IMG_1415.jpg" alt="">
        </div>
        <div class="storyText">
        <p>
          伝達鳥から<br>
          「町に怪物がでた」<br>
          という情報を聴いた主人公は<br>
          急いで町へ向かいました。
        </p>
        </div>
      </div>
      <div class="storyCard">
        <div class="storyImg">
          <img src="@/assets/gamepage/物語/IMG_1416.jpg" alt="">
        </div>
        <div class="storyText">
        <p>
          そこで待っていたのは、<br>
          大量に湧き出る多種多様な怪物たち。<br>
          果たして主人公は怪物たちを<br>
          すべて倒すことができるのか⁉
        </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Bloom from '@/components/game/bloom.vue'

export default {
  components:{
    Bloom,
  }
}
</script>

<style scoped>
#story {
  width: 100%;
  background: url(~@/assets/gamepage/物語/物語背景_2.png) top center / cover no-repeat;
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

.storyText{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  padding: 10px;
  text-align: center;
}

.storyImg{
  width: 50%;
  padding: 10px;
}

@media screen and (max-width: 768px) {
  #story{
    background: url(~@/assets/gamepage/物語/物語背景_2.png) top left / cover no-repeat;
  }

  .storyCard{
    flex-direction: column-reverse;
    align-items: center;
  }
  
  .storyCard:nth-child(3){
    flex-direction: column;
  }

  .storyImg, .storyText{
    width: 100%;
  }
}
</style>