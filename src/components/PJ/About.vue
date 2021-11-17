<template>
    <section class="box" id="about">
                <div class="contents">
                    <span class="aboutBG">
                        <div class="aboutbgImg">
                            <img src="@/assets/imgs/about/famicon.png" alt="">
                        </div>
                        <div class="aboutbgImg">
                            <img src="@/assets/imgs/about/fitness.png" alt="">
                        </div>
                    </span>
                    <div class="aboutSentence">
                        <h1 class="sectiontitle">about</h1>
                        <h2>最近運動出来てますか？</h2>
                        <p class="sentence">自粛によって外出ができず、大学もオンライン授業。通学もできなくなり、日常生活レベルの運動すらあやしい。自粛しながら楽しく運動ができないか考えて、「ゲーム×運動」を思いつきました。今までにも運動を題材にしたゲームはあったけど、どれも「運動」を主軸にしたものが多いですよね。そのため、プレイヤーにとっては運動をしているという感覚が強く、長続きがしなかったり、日常生活レベルの運動をしていない人にはハードルが高かったりしてしまいます。また、ゲームとしての面白さが蔑ろになっているという側面もありました。</p>
                        <h3>そこで、本プロジェクトでは</h3>
                        <h1>「ゲームをしていて気づいたら運動ができていた」</h1>
                        <h3>というコンセプトのゲームを制作します。</h3>
                    </div>
                    
                </div>
            </section>
</template>

<style>
#about {
    background-color: #ff4e4e;
    color: #ffffff;
}

.aboutBG{
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;
}

.aboutbgImg{
    position: relative;
    width: 30%;
}

.aboutbgImg img{
    z-index: 5 !important;
    width: 100%;
    opacity: .5;
}

.aboutSentence{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 100;
    text-align: center;
}

#about h2, h3 {
    text-align: center;
}

@media screen and (max-width: 768px) {
    .aboutBG{
        flex-direction: column;
        justify-content: space-evenly;
    }
    .aboutbgImg{
        width: 70%;
    }
}

</style>