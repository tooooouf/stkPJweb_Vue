<template>
  <footer class="footer_game">
    <nav class="footerNav">
      <a v-scroll-to="'#story'">
        <img src="@/assets/gamepage/フッター/story_foot.png" alt="">
      </a>
      <a v-scroll-to="'#exorcism'">
        <img src="@/assets/gamepage/フッター/exorcism_foot.png" alt="">
      </a>
      <a v-scroll-to="'#character'">
        <img src="@/assets/gamepage/フッター/character_foot.png" alt="">
      </a>
      <a v-scroll-to="'#symbol'">
        <img src="@/assets/gamepage/フッター/symbol_foot.png" alt="">
      </a>
    </nav>
    <div class="pjLink">
      <router-link to="/"/>
      <img src="@/assets/gamepage/フッター/PJボタン.png" alt="">
    </div>
    <small>&copy; 2021 佐竹プロジェクト All rights reserved</small>
  </footer>
</template>

<style scoped>
.footer_game{
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 25vh;
  background: url(~@/assets/gamepage/フッター/フッター背景.png) top center no-repeat;
  color: #FFFFFF;
  text-align: center;
}

.footerNav{
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.pjLink{
  position: relative;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
}

.pjLink a{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>