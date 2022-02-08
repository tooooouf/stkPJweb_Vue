<template>
  <div class="gameSupplement">
    <h2>制作秘話</h2>
    <div class="modalCard" @click="openController=true">
      <div class="modalCard_img">
        <img src="@/assets/imgs/game/DSCF0612.jpg" alt="">
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
            <div class="XButton" @click="openController=false" />
            <h2 class="sectiontitle">アタッチメント制作</h2>
            <div class="modalText">
              <p>
                悪霊ばすたーはコントローラー(JoyCon)を<br>
                振り回して遊ぶゲームです。
              </p>
              <p>
                腕を大きく振ることで最大限の運動を行うことができますが、<br>
                実際はそうもいきませんでした。
              </p>
              <p class="why">
                <span class="underline">
                  JoyConが小さいため、手首を振るだけのコンパクトな振り、<br>
                  軽さによる運動負荷の減少が問題になりました。
                </span>
              </p>
              <p>その点を解決するために、JoyCon ＋ アタッチメントを考えました。</p>
              <p class="howdid">
                様々な案を出し合い、<br>
                <span class="underline">最終的に「大きな筆」の形状で製作を開始しました。</span>
              </p>
              <div class="dividingLine"></div>
              <h3>完成品</h3>
              <img src="@/assets/imgs/game/DSCF0612.jpg" alt="">
              <p>
                30cm程度の筒状であることにより、両手で持つことが必要になります。そうすることで振る際には腕だけでなく、肩や大胸筋も動かすことが可能に。
              </p>
              <p>
                また、JoyCon単体に比べ重さが増すため、腕への負荷を増加させました。
              </p>
              <div class="dividingLine"></div>
              <div class="readmore" @click="openController=false">
                <p>もどる</p>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </teleport>
    <teleport to=".conteiner">
      <transition name="modalWindow_inout">
        <div class="modalWindow" v-if="open7elements">
            <div class="modalContent">
              <div class="XButton" @click="open7elements=false" />
              <h2 class="sectiontitle">面白さの7大要素</h2>
              <div class="modalText">
                <p>
                  ゲームとして、面白くあるためにはどんな要素が必要なんだろう。<br>
                  チームで考えていると、 1年次に受講した講義のことを思い出しました。<br>
                  それはゲームクリエイターの岸本好弘さんの講演で<br>
                  ゲーミフィケーションを学ぶものでした。<br>
                  ゲーミフィケーションとは、ゲームで使われている仕組みをゲーム以外で<br>
                  応用することを指しますが､ 本質には
                  <span class="underline">
                    ゲームが夢中になる仕組みを濃く
                    抽出したものであるとも考えられます。<br>
                  </span>
                </p>
                <p>紹介された7要素に焦点を当て、<br>
                  <span class="underline">「運動を忘れて楽しくゲームに没入させる」ために何が必要か</span>を<br>
                  考えました。
                </p>
                <div class="dividingLine"></div>
                <img src="@/assets/imgs/game/7大要素文字.png" alt="">
                <div class="dividingLine"></div>
                <div class="readmore" @click="open7elements=false">
                  <p>もどる</p>
                  <span></span>
                </div>
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
  max-width: 800px;
  box-shadow: #4b4b4b 4px 4px;
  text-align: center;
  cursor: pointer;
}

.modalCard:hover{
  transform: scale(1.05);
  transition-duration: .5s;
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
  box-sizing: border-box;
  border-radius: 30px;
  padding: 20px;
  width: 80vw;
  max-width: 800px;
  height: 80vh;
  background-color: #67AEFE;
  color: #ffffff;
  font-family: 'GenJyuuGothic', sans-serif;
  text-align: center;
  line-height: 3;
  overflow: hidden;
}

.modalContent h2{
  margin: 0;
}

.modalText{
  position: relative;
  box-sizing: border-box;
  padding: 0 20px;
  overflow-y: scroll;
}

.XButton{
  position: absolute;
  top: 5%;
  right: 5%;
  width: 30px;
  height: 30px;
  background: url(~@/assets/imgs/game/xButton.png) center center / contain no-repeat;
  cursor: pointer;
}

.why, .howdid{
  position: relative;
}

.why::before ,.howdid::before{
  position: absolute;
  left: 0;
  top: 0;
  width: 100px;
  height: 100px;
  content: "";
  z-index: 15;
}

.why::before{
  background: url(~@/assets/imgs/game/why.png) top center / contain no-repeat;
}

.howdid::before{
  background: url(~@/assets/imgs/game/howdid.png) top center / contain no-repeat;
}

.readmore{
  margin-left: auto;
  margin-right: auto;
  min-width: 200px;
}

@media screen and (max-width: 900px) {
  .why::before ,.howdid::before{
    width: 15%;
    left: 0%;
  }

  .why::before{
    top: -30px;
  }
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
    padding: 50px 1%;
  }

  .XButton{
    top: 3%;
  }

  .modalContent h2{
    font-size: 2em;
  }

  .modalContent{
    width: 99vw;
    height: 90vh;
  }
  
  .why::before ,.howdid::before{
    width: 70px;
    top: -25px;
  }

  .howdid::before{
    top: 20px
  }
}


</style>