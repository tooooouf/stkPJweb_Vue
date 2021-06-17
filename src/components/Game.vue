
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
            <p class="sentence">リズムに合わせてシンボルを描き、迫りくる悪霊を退治するゲーム。リズムに合わせてシンボルを描き、迫りくる悪霊を退治するゲーム。リズムに合わせてシンボルを描き、迫りくる悪霊を退治するゲーム。リズムに合わせてシンボルを描き、迫りくる悪霊を退治するゲーム。リズムに合わせてシンボルを描き、迫りくる悪霊を退治するゲーム。リズムに合わせてシンボルを描き、迫りくる悪霊を退治するゲーム。リズムに合わせてシンボルを描き、迫りくる悪霊を退治するゲーム。</p>
            <div class="readmore">
                <a href="" target="_blank" rel="noopener noreferrer"></a>
                <p>Coming soon…</p>
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
    width: 150px;
    background-color: #ffffff;
    border-radius: 50px;
    padding: 10px;
    color: #4B4B4B;
    line-height: 1;
}

.readmore a{
    position: absolute;
    width: 100%;
    height: 100%;
}

@media screen and (max-width:768px) {
    .gameimgwrap{
        height: auto;
    }
}

</style>