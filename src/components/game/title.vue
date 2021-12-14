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
    <div class="topImgandLogo">
      <div class="titlePortrait">
        <!--<img src="@/assets/gamepage/タイトル/title_portrait.png" alt="">-->
      </div>
      <div class="titleLogo">
        <img src="@/assets/gamepage/タイトル/ロゴver4.1.png" alt="">
      </div>
    </div>
  </section>
</template>

<style scoped>
.header_game{
  position: absolute;
  width: 100%;
  height: 50px;
  z-index: 999;
}

.headerNav{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  max-width: 60%;
  margin-left: 10%;
}

.top{
  width: 100%;
  height: 100vh;
  background: url(~@/assets/gamepage/タイトル/haikei_hosi.jpg) top center / cover no-repeat;
  overflow: hidden;
}

.topImgandLogo{
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.titlePortrait{
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: url(~@/assets/gamepage/タイトル/title_portrait.png) top center / cover no-repeat;
  background-position-y: 5vh;
}

.titleLogo{
  position: absolute;
  bottom: unset;
  right: 10%;
  width: 40%;
  height: auto;
  /*background: url(~@/assets/gamepage/タイトル/ロゴver4.1.png) top center / cover no-repeat;*/
}

@media screen and (max-width: 768px) {
  .headerNav{
    right: 0;
    flex-direction: column;
    align-items: flex-end;
    max-width: unset;
    margin-left: unset;
    margin-right: 1%;
  }

  .titlePortrait{
    left: -20vw;
    width: 300%;
    background-position-y: -15vh;
  }

  .titleLogo{
    top: unset;
    bottom: 15vh;
    right: unset;
    width: 70vw;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (max-height: 700px) {
    .top{
      min-height: 700px;
    }
  }
}
</style>