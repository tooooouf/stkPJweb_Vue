<template>
    <section class="box" id="member">
                <div class="contents">
                    <h1 class="sectiontitle">member</h1>
                    <div class="memberlist">
                        <div class="memberwrap">
                            <div class="membericon">
                                <img src="@/assets/imgs/gaien.jpg" alt="">
                            </div>
                            <p class="membername">ほかぞの</p>
                        </div>
                        <div class="memberwrap">
                            <div class="membericon">
                                <img src="@/assets/imgs/kine.jpg" alt="">
                            </div>
                            <p class="membername">きね</p>
                        </div>
                        <div class="memberwrap">
                            <div class="membericon">
                                <img src="@/assets/imgs/gaien.jpg" alt="">
                            </div>
                            <p class="membername">こにし</p>
                        </div>
                        <div class="memberwrap">
                            <div class="membericon">
                                <img src="@/assets/imgs/rem.jpg" alt="">
                            </div>
                            <p class="membername">やまもと</p>
                        </div>
                        <div class="memberwrap">
                            <div class="membericon">
                                <img src="@/assets/imgs/rehu.jpg" alt="">
                            </div>
                            <p class="membername">ほりえ</p>
                        </div>
                        <div class="memberwrap">
                            <div class="membericon">
                                <img src="@/assets/imgs/fujikko.jpg" alt="">
                            </div>
                            <p class="membername">ふじの</p>
                        </div>
                        <div class="memberwrap">
                            <div class="membericon">
                                <img src="@/assets/imgs/yasoda.jpg" alt="">
                            </div>
                            <p class="membername">やそだ</p>
                        </div>
                        <div class="memberwrap">
                            <div class="membericon">
                                <img src="@/assets/imgs/yosi.jpg" alt="">
                            </div>
                            <p class="membername">よしだ</p>
                        </div>
                        <div class="memberwrap">
                            <div class="membericon">
                                <img src="@/assets/imgs/hujimoto.jpg" alt="">
                            </div>
                            <p class="membername">ふじもと</p>
                        </div>
                        <div class="memberwrap">
                            <div class="membericon">
                                <img src="@/assets/imgs/gaien.jpg" alt="">
                            </div>
                            <p class="membername">さたけ先生</p>
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

.memberlist{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.memberwrap{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 25%;
    padding: 10px;
}

.membericon{
    width: 80%;
}

.membericon img{
    width: 100%;
    border-radius: 1000px;
    box-shadow: #4B4B4B 2px 2px 3px;
}

.memberwrap :hover{
    transform: scale(1.03);
    transition-duration: 0.5s;
}

.membername{
    margin: 0;
}
</style>