<template>
  <div class="gameSupplement">
    <div class="modalCard" @click="openController=true">
      <div class="modalCard_img">
        <img src="@/assets/imgs/game/IMG_1045.jpg" alt="">
      </div>
      <div class="modalCard_text">
        <h2>アタッチメント制作</h2>
        <p>
          なぜアタッチメントを<br>
          制作したのか。
        </p>
      </div>       
    </div>
    <div class="modalCard" @click="open7elements=true">
      <div class="modalCard_img">
        <img src="@/assets/imgs/game/スライス1.jpg" alt="">
      </div>
      <div class="modalCard_text">
        <h2>面白さの７大要素</h2>
        <p>
          ７大要素とはなにか。<br>
          それらをどう悪霊ばすたー<br>
          に取り込んだのか。
        </p>
      </div>
    </div>
    <teleport to=".conteiner">
      <transition name="modalWindow_inout">
        <div class="modalWindow" v-if="openController">
            <div class="modalContent">
              <div class="XButton" @click="openController=false">
                <img src="" alt="">
              </div>
              <div class="modalText">
                <h2 class="sectiontitle">アタッチメント制作</h2>
                <p>悪霊ばすたーはコントローラー(JoyCon)</p>
              </div>
            </div>
        </div>
      </transition>
    </teleport>
    <teleport to=".conteiner">
      <transition name="modalWindow_inout">
        <div class="modalWindow" v-if="open7elements">
            <div class="modalContent">
              <div class="XButton" @click="open7elements=false">
                <img src="" alt="">
              </div>
              <div class="modalText">
                <h2 class="sectiontitle">面白さの7大要素</h2>
                <p>悪霊ばすたーはコントローラー(JoyCon)</p>
              </div>
            </div>        
        </div>
      </transition>
    </teleport>
  </div>
  
</template>

<script>

export default{
  data(){
    return{
      name: "",
      openController: false,
      open7elements: false,
    }
  }
}
</script>

<style scoped>
.gameSupplement{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.modalCard{
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  border: #ffffff solid 3px;
  border-radius: 30px;
  margin-bottom: 30px;
  padding: 20px;
  width: 60%;
  box-shadow: #4b4b4b 4px 4px;
  text-align: center;
  cursor: pointer;
}

.modalCard_img{
  border-radius: 100px;
  max-width: 200px;
  box-shadow: #4b4b4b 7px 7px;
  overflow: hidden;
}

.modalCard:nth-child(2){
  flex-direction: row-reverse;
}

.modalWindow_inout-leave-active,
.modalWindow_inout-enter-active{
  transform: translate(0px, 0px);
  transition-duration: .5s;
}

.modalWindow_inout-enter-from,
.modalWindow_inout-leave-to{
  opacity: 0;
  transform: translateY(100vh) translateY(0px);
}

.modalWindow_inout-enter-to,
.modalWindow_inout-leave-from{
  opacity: 1;
}

.modalWindow{
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: 100%;
  background-color: rgb(0, 0, 0, .5);
  z-index: 999;
}

.modalContent{
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 30px;
  width: 80vw;
  height: 80vh;
  background-color: #67AEFE;
  color: #ffffff;
  font-family: 'GenJyuuGothic', sans-serif;
  text-align: center;
}

.XButton{
  position: absolute;
  top: 0;
  right: 0;
  width: 50px;
  height: 50px;
  cursor: pointer;
}

@media screen and (max-width: 768px) {
  .modalCard{
    flex-direction: column;
    box-sizing: border-box;
    width: 100%;
  }

  .modalCard:nth-child(2){
    flex-direction: column;
  }

  .modalContent{
    width: 99vw;
    height: 90vh;
  }
}

</style>