<template>
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
import Title from '@/components/game/title.vue'
import Story from '@/components/game/story.vue'
import Exorcism from '@/components/game/exorcism.vue'
import Character from '@/components/game/character.vue'
import Symbol from '@/components/game/symbol.vue'
import FooterGame from '@/components/game/footer_game.vue'

export default {
  components: {
    Title,
    Story,
    Exorcism,
    Character,
    Symbol,
    FooterGame
  }
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

.chapterWrap{
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  max-width: 900px;
  margin-bottom: 50px;
  vertical-align:top;
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