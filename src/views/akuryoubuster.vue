<template>
  <div class="gameWrapper">
    <Title/>
    <Story/>
    <Exorcism/>
  </div>
</template>

<script>
import Title from '@/components/game/title.vue'
import Story from '@/components/game/story.vue'
import Exorcism from '@/components/game/exorcism.vue'

export default {
  components: {
    Title,
    Story,
    Exorcism
  }
}
</script>

<style>
img{
  width: 100%;
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

.wrap{
  max-width: 900px;
}

.chapterTitle{
  max-width: 300px;
  margin-top: 30px;
}
</style>