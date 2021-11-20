<template>
  <div class="gameWrapper">
    <Title/>
    <Story/>
    <Exorcism/>
    <Character/>
  </div>
</template>

<script>
import Title from '@/components/game/title.vue'
import Story from '@/components/game/story.vue'
import Exorcism from '@/components/game/exorcism.vue'
import Character from '@/components/game/character.vue'

export default {
  components: {
    Title,
    Story,
    Exorcism,
    Character
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

}

.chapter{
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
}

.chapterWrap{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 900px;
  vertical-align:top;
}

.chapterTitle{
  max-width: 300px;
  margin-top: 30px;
}

@media screen and (max-width: 768px){
  .chapterWrap{
    padding: 0 3%;
  }
}
</style>