<template>
  <div class="gameWrapper">
    <Title/>
    <Story/>
  </div>
</template>

<script>
import Title from '@/components/game/title.vue'
import Story from '@/components/game/story.vue'

export default {
  components: {
    Title,
    Story
  }
}
</script>

<style>
.chapter{
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}
</style>