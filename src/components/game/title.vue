<template>
  <header class="header_game">
    <nav class="headerNav">
      <a v-scroll-to="'#story'">
        <img src="@/assets/gamepage/タイトル/story_head.png" alt="">
      </a>
      <a v-scroll-to="'#exorcism'">
        <img src="@/assets/gamepage/タイトル/exorcism_head.png" alt="">
      </a>
      <a v-scroll-to="'#character'">
        <img src="@/assets/gamepage/タイトル/character_head.png" alt="">
      </a>
      <a v-scroll-to="'#symbol'">
        <img src="@/assets/gamepage/タイトル/symbol_head.png" alt="">
      </a>
    </nav>
  </header>
  <section class="top" id="title">
    <div id="topImg">
      <img src="@/assets/gamepage/タイトル/タイトル画面_文字無し.jpg" alt="">
    </div>
  </section>
</template>

<style scoped>
.header_game{
  position: absolute;
  width: 100%;
  height: 40px;
}

.headerNav{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 60%;
  margin-left: 10%;
}

.top{
  width: 100%;
}

#topImg{
  width: 100%;
}

img{
  width: 100%;
}
</style>