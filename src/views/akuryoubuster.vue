<template>
  <Head>
    <title>悪霊ばすたー</title>
    <link rel="shortcut icon" href="<%= BASE_URL %>icons/game.ico" type="image/x-icon">
    <meta property="og:url" content="https://www.ne.senshu-u.ac.jp/~proj2021-16/akuryoubuster">
    <meta property="og:title" content="悪霊ばすたー">
    <meta property="og:description" content="悪霊ばすたーの公式サイトです">
    <meta property="og:sitename" content="悪霊ばすたー">
    <meta property="og:image" content="https://www.ne.senshu-u.ac.jp/~proj2021-16/img/タイトル画面_文字無し.4d75e806.jpg">
  </Head>
  <div class="gameWrapper">
    <Title/>
    <Story/>
    <Exorcism/>
    <Character/>
    <Symbol/>
    <FooterGame/>
  </div>
</template>

<script>
import { Head } from '@egoist/vue-head'
import Title from '@/components/game/title.vue'
import Story from '@/components/game/story.vue'
import Exorcism from '@/components/game/exorcism.vue'
import Character from '@/components/game/character.vue'
import Symbol from '@/components/game/symbol.vue'
import FooterGame from '@/components/game/footer_game.vue'

export default {
  components: {
    Head,
    Title,
    Story,
    Exorcism,
    Character,
    Symbol,
    FooterGame
  },
}
</script>

<style>
img{
  width: 100%;
  display: block;
}

.gameWrapper{
  display: flex;
  flex-direction: column;
  font-family: Source Han Sans, sans-serif;
  line-height: 2;
  overflow: hidden;
}

.chapter{
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
}

.chapter::after{
  content: "";
  position: absolute;
  top: -50px;
  left: 0;
  display: inline-block;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-image: url(~@/assets/imgs/background/和紙.jpg);
  opacity: 0.1;
}

#story::after{
  top: 0;
  height: calc(100% - 50px);
}

#symbol::after{
  height: calc(100% + 50px);
}

.chapterWrap{
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  max-width: 900px;
  margin-bottom: 50px;
  vertical-align:top;
  z-index: 5;
}

.chapterTitle{
  max-width: 300px;
  margin: 30px 0;
}

@media screen and (max-width: 768px){
  .chapterWrap{
    padding: 0 3%;
  }
}
</style>