
<template>
   <section class="box" id="game">
        <div class="contents">
            <h1 class="sectiontitle">game</h1>
            <div class="gameimgwrap">
                <div class="gameimg titleimg">
                    <img src="@/assets/imgs/game/title.jpg" alt="">
                </div>
                <div class="gameimg portrait">
                    <img src="@/assets/imgs/game/portrait.png" alt="">
                </div>
                <div class="gameimg muddoll">
                    <img src="@/assets/imgs/game/muddoll.png" alt="">
                </div>
            </div>
            <h2 id="gametitle">悪霊ばすたー</h2>
            <p class="sentence">ノリノリの音楽に合わせて、シンボルを描き、迫りくる悪霊を退治するリズムアクションゲーム。筆型のコントローラーを大きく振り回したり、敵の攻撃をしゃがんで避けたりとダイナミックな動きでゲームを楽しもう。エンドレス制を導入しているため、プレイヤーの体力orスキルの限界が来るまで終わらない！また、何度も繰り返し遊びたくなるように、様々なランダム要素を導入。ゲームにもっと詳しく知りたい方は専用webサイトへ！</p>
            <div class="readmore">
                <router-link to="/akuryoubuster"/>
                <p>ゲーム専用サイトへGO！</p>
                <span></span>
            </div>
        </div>
    </section> 
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

export default ({
    mounted(){
        this.titleimg();
        this.portrait();
        this.muddoll();
    },

    methods:{
        titleimg(){
            gsap.to('.titleimg',{
                x:700,
                scrollTrigger:{
                    trigger:'#game',
                    start: 'top 50%',
                    end: 'top 0%',
                    scrub: 1,
                    //markers: true
                }                
            })
        },
        portrait(){
            gsap.to('.portrait',{
                x:-500,
                scrollTrigger:{
                    trigger: '#game',
                    start: 'top 50%',
                    end: 'top 0%',
                    scrub: 3,
                }
            })
        },
        muddoll(){
            gsap.to('.muddoll',{
                x:-500,
                scrollTrigger:{
                    trigger: '#game',
                    start: 'top 50%',
                    end: 'top 0%',
                    scrub: 2,
                }
            })
        }
    }
    
})
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Reggae+One&display=swap');

#game{
    background-color: #4EA1FF;
    color: #ffffff;
}

.gameimgwrap{
    position: relative;
    display: flex;
    justify-content: center;
    max-width: 700px;
    height: 25em;
}

.gameimg{
    position: relative;
    display: flex;
    max-width: 100%;
    min-height: 100%;
}

.gameimg img{
    position: relative;
    width: 100%;
}

.titleimg{
    align-items: center;
    left: -700px;
    width: 100%;
}

.portrait{
    align-items: center;
    right: -500px;
    width: 60%;
    height: auto;
}

.muddoll{
    align-items: flex-end;
    right: -500px;
    bottom: 0;
    width: 30%;
    height: auto;
}

#gametitle{
    font-size: 35px;
    font-family: 'Reggae One', cursive;
    text-shadow: #4DB4C4 3px 3px;
}

.readmore{
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: max-content;
    background-color: #ffffff;
    border-radius: 50px;
    padding: 10px 20px 10px 20px;
    color: #4B4B4B;
    line-height: 1;
}

.readmore a{
    position: absolute;
    width: 100%;
    height: 100%;
}

.readmore p{
    color: #4EA1FF;
}

.readmore span{
    position: relative;
    width: 20px;
    height: 20px;
    border-radius: 50px;
    margin-left: 10px;
    background-color: #4EA1FF;
}
.readmore span::before{
    content: "";
    position: absolute;
    top: 6px;
    left: 4px;
    width: 6px;
    height: 6px;
    border-top: 2px solid #fff;
    border-right: 2px solid #fff;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
}

@media screen and (max-width:768px) {
    .gameimgwrap{
        height: auto;
    }
}

</style>