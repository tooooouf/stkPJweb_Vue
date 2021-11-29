<template>
    <section class="box" id="about">
                <div class="contents">
                    <div class="aboutSentence">
                        <span class="aboutBG">
                            <div class="aboutbgImg">
                                <img src="@/assets/imgs/about/famicon.png" alt="">
                            </div>
                            <div class="aboutbgImg">
                                <img src="@/assets/imgs/about/fitness.png" alt="">
                            </div>
                        </span>
                        <h1 class="sectiontitle">about</h1>
                        <h2>最近運動出来てますか？</h2>
                        <p class="sentence">
                            自粛によって外出ができず、大学もオンライン授業。<br>
                            通学もできなくなり、日常生活レベルの運動すらあやしい。<br>
                            自粛しながら楽しく運動ができないか考えて、「ゲーム×運動」を思いつきました。<br>
                            今までにも運動を題材にしたゲームはあったけど、どれも「運動」を主軸にしたものが多いですよね。<br>
                            そのため、プレイヤーにとっては運動をしているという感覚が強く、長続きがしなかったり、日常生活レベルの運動を<br>
                            していない人にはハードルが高かったりしてしまいます。<br>
                            また、ゲームとしての面白さが蔑ろになっているという側面もありました。
                        </p>
                        <h3>そこで、本プロジェクトでは</h3>
                        <h1>「ゲームをしていて気づいたら運動ができていた」</h1>
                        <h3>というコンセプトのゲームを制作します。</h3>
                    </div>
                    <div class="aboutQA">
                        <div class="QAbox">
                            <h2>日常生活レベルの運動って？</h2>
                            <p>
                                厚生労働省が推進している1週間に23メッツ(8時間)が基準<span style="font-size: 0.8em">(18-64歳の身体活動)</span><br>
                                強度が3メッツ以上の身体活動を23メッツ・時/週行うか、<br>
                                歩行又はそれと同等以上の強度の身体活動を毎日60分以上行う。<br>
                                <a href="https://www.e-healthnet.mhlw.go.jp/information/exercise/s-01-001.html" target="blank" rel="noreferrer noopener" class="QAlink">参考：健康づくりのための身体活動基準2013 | e-ヘルスネット（厚生労働省）</a>
                            </p>
                            <p>
                                Q.では、週23メッツの活動が出来るゲームを制作するの？<br>
                                <span class="underline">A.いいえ。週12メッツにします！</span><br>
                                <span style="font-size: 0.8em">
                                    すべての運動をゲームで補ってしまうと引きこもりを助長させてしまう可能性があるからです。<br>
                                    そのため、週の半分は外に出てほしいという願いも込めて週の身体活動に必要な週23メッツの<br>
                                    半分である週12メッツを設定しました。
                                </span>
                            </p>
                        </div>
                        <div class="QAbox">
                            <h2>そもそもメッツって？</h2>
                            <p>
                                <span class="underline" style="font-size: 1.2em">メッツとは運動や身体活動の強度の単位のこと。</span><br>
                                安静時（静かに座っている状態）を1とした時と比較して<br>
                                何倍のエネルギーを消費するかで活動の強度を示します。<br>
                                <a href="https://www.e-healthnet.mhlw.go.jp/information/dictionary/exercise/ys-004.html" target="blank" rel="noreferrer noopener" class="QAlink">参考：メッツ / METs | e-ヘルスネット（厚生労働省）</a><br>
                            </p>
                            <p>
                                1メッツ = 3.5mL / kg / 分の酸素摂取量と定義されています。<br>
                                <a href="http://www.chushin-miniren.gr.jp/checkup/climber/04/" target="blank" rel="noreferrer noopener" class="QAlink">参考：METsとは？｜松本協立病院</a>
                            </p>
                            <p>
                                歩く・軽い筋トレをする・掃除機をかける・<br>
                                洗車する・子どもと遊ぶ（中強度）などは<br>
                                3～3.5メッツ程度とされています。<br>
                                <a href="https://www.nibiohn.go.jp/files/2011mets.pdf" target="blank" rel="noreferrer noopener" class="QAlink">参考：国立・栄養研究所 | 改訂版『身体活動のメッツ(METs)表』(PDF)</a>                                
                            </p>
                        </div>
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
    z-index: -1;
}

.aboutbgImg{
    position: relative;
    width: 45%;
}

.aboutbgImg img{
    z-index: 5 !important;
    width: 100%;
    opacity: .5;
}

.aboutSentence{
    position: relative;
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

.aboutQA{
    display: flex;
    flex-direction: row;
    width: 100%;
}

.QAbox{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    box-sizing: border-box;
    width: calc(100%/2);
    border: 5px solid #ffffff;
    border-radius: 5px;
    margin: 10px;
    padding: 20px;
    text-align: center;
    line-height: 2;
}

.QAlink{
    margin-bottom: 10px;
    font-size: 0.5em;
    color: #ffffff;
}

@media screen and (max-width: 1000px) {
    .aboutQA{
        flex-direction: column;
        align-items: center;
    }
    
    .QAbox{
        width: 80%;
        margin: 0 0 30px 0;
    }
}

@media screen and (max-width: 768px) {
    .aboutBG{
        flex-direction: column;
        justify-content: space-evenly;
    }
    .aboutbgImg{
        width: 50%;
    }
    
    .QAbox{
        width: 100%;
        text-align: left;
    }
}

</style>