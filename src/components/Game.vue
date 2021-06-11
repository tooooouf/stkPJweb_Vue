
<template>
   <section class="box" id="game">
        <div class="contents">
            <h1 class="sectiontitle">game</h1>
            <div class="gameimgwrap">
                <div class="gameimg titleimg">
                    <img src="@/assets/imgs/IMG_1172-min.jpg" alt="">
                </div>
                <div class="gameimg portrait">
                    <img src="@/assets/imgs/立ち絵4月28日.png" alt="" id="">
                </div>
                
            </div>
            <h2>悪霊ばすたー</h2>
            <p class="sentence">リズムに合わせてシンボルを描き、迫りくる悪霊を退治するゲーム。リズムに合わせてシンボルを描き、迫りくる悪霊を退治するゲーム。リズムに合わせてシンボルを描き、迫りくる悪霊を退治するゲーム。リズムに合わせてシンボルを描き、迫りくる悪霊を退治するゲーム。リズムに合わせてシンボルを描き、迫りくる悪霊を退治するゲーム。リズムに合わせてシンボルを描き、迫りくる悪霊を退治するゲーム。リズムに合わせてシンボルを描き、迫りくる悪霊を退治するゲーム。</p>
            <div class="readmore">
                <a href="" target="_blank" rel="noopener noreferrer"></a>
                <p>ゲーム公式サイトへ</p>
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
                    scrub: 2,
                }
            })
        }
    }
    
})
</script>

<style>
#game{
    background-color: #4EA1FF;
    color: #ffffff;
}

.gameimgwrap{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 600px;
    height: 25em;
}

.gameimg{
    position: relative;
    display: flex;
    align-items: center;
    max-width: 100%;
    height: 100%;
}

.gameimg img{
    position: relative;
    width: 100%;
}

.titleimg{
    left: -700px;
    width: 100%;
}

.portrait{
    right: -500px;
    width: 60%;
    height: auto;
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
</style>