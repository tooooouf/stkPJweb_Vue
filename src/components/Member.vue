<template>
    <section class="box" id="member">
                <div class="contents">
                    <h1 class="sectiontitle">member</h1>
                    <div class="memberlist">
                        <div class="memberwrap">
                            <div class="membericon">
                                <img src="@/assets/imgs/member/gaien.jpg" alt="">
                            </div>
                            <div class="namewrap">
                                <div class="representative">
                                    <img src="@/assets/imgs/王冠金.png" alt="">
                                </div>
                                <p class="program">CD</p>
                                <p class="membername">ほかぞの</p>
                            </div>
                            <p class="memberrole">motioner</p>
                        </div>
                        <div class="memberwrap">
                            <div class="membericon">
                                <img src="@/assets/imgs/member/kine.jpg" alt="">
                            </div>
                            <div class="namewrap">
                                <div class="representative">
                                    <img src="@/assets/imgs/王冠銀.png" alt="">
                                </div>
                                <p class="program">NS</p>
                                <p class="membername">きね</p>
                            </div>
                            <p class="memberrole">planner, effecter</p>
                        </div>
                        <div class="memberwrap">
                            <div class="membericon">
                                <img src="@/assets/imgs/member/rem.jpg" alt="">
                            </div>
                            <div class="namewrap">
                                <div class="representative">
                                    <img src="@/assets/imgs/王冠銀.png" alt="">
                                </div>
                                <p class="program">PC</p>
                                <p class="membername">やまもと</p>
                            </div>
                            <p class="memberrole">GAMEprogrammer<br>system engineer</p>
                        </div>
                        <div class="memberwrap">
                            <div class="membericon">
                                <img src="@/assets/imgs/member/konishi.jpg" alt="">
                            </div>
                            <div class="namewrap">
                                <p class="program">CD</p>
                                <p class="membername">こにし</p>
                            </div>
                            <p class="memberrole">planner, designer motioner</p>
                        </div>
                        <div class="memberwrap">
                            <div class="membericon">
                                <img src="@/assets/imgs/member/rehu.jpg" alt="">
                            </div>
                            <div class="namewrap">
                                <p class="program">PC</p>
                                <p class="membername">ほりえ</p>
                            </div>
                            <p class="memberrole">RCprogrammer</p>
                        </div>
                        <div class="memberwrap">
                            <div class="membericon">
                                <img src="@/assets/imgs/member/fujikko.jpg" alt="">
                            </div>
                            <div class="namewrap">
                                <p class="program">PC</p>
                                <p class="membername">ふじの</p>
                            </div>
                            <p class="memberrole">WEBprogrammer</p>
                        </div>
                        <div class="memberwrap">
                            <div class="membericon">
                                <img src="@/assets/imgs/member/yasoda.jpg" alt="">
                            </div>
                            <div class="namewrap">
                                <p class="program">PC</p>
                                <p class="membername">やそだ</p>
                            </div>
                            <p class="memberrole">composer</p>
                        </div>
                        <div class="memberwrap">
                            <div class="membericon">
                                <img src="@/assets/imgs/member/yosi.jpg" alt="">
                            </div>
                            <p class="membername">よしだ</p>
                            <p class="memberrole">illustrator, designer</p>
                        </div>
                        <div class="memberwrap">
                            <div class="membericon">
                                <img src="@/assets/imgs/member/hujimoto.jpg" alt="">
                            </div>
                            <p class="membername">ふじもと</p>
                            <p class="memberrole">illustrator</p>
                        </div>
                        <div class="memberwrap">
                            <div class="membericon">
                                <img src="@/assets/imgs/member/satake.jpg" alt="">
                            </div>
                            <p class="membername">さたけ先生</p>
                            <p class="memberrole">teacher</p>
                        </div>
                    </div>
                </div>
            </section>
</template>

<style>
#member{
    background-color: #ffffff;
}

#member .sectiontitle{
    color: #4EA1FF;
}

#member::after{
    content: "";
    position: absolute;
    top: 10%;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(../assets/imgs/background/memberbg.svg);
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 0;
}

.memberlist{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    width: 80%;
}

.memberwrap{
    position: relative;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: calc( ( 100% - 60px ) / 3 );
    margin-bottom: 10px;
}

.memberwrap p{
    margin: 3px;
}

.membericon{
    width: 100%;
    padding: 0 25% 0 25%;
    box-sizing: border-box;
}

.membericon img{
    width: 100%;
    border-radius: 1000px;
    box-shadow: #4B4B4B 2px 2px 3px;
}

.membericon :hover{
    transform: scale(1.1);
    transition-duration: 0.5s;
}

.namewrap{
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.representative{
    position: relative;
    width: 10%;
}

.representative img{
    position: relative;
    width: 100%;
}

.program{
    font-size: 10px;
}

.memberrole{
    max-width: 65%;
}

@media screen and (max-width:768px) {
    .memberlist{
        width: 80%;
        flex-direction: column;
    }
    .memberwrap{
        width: 100%;
    }
}

</style>