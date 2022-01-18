<template>
    <section class="box" id="activity">
        <div class="contents">
            <h1 class="sectiontitle">activity</h1>
            <div class="activitywrap">
                <div class="activityhead">
                    <h2>Tumblr</h2>
                </div>
                <div class="activitycontent">
                    <iframe class="tumblr" src="https://satakeproject-2021.tumblr.com/" frameborder="0"></iframe>
                </div>
            </div>
            <div class="presenWrap">
                <div class="presenHead">
                    <h2>Presentations</h2>
                </div>
                <div class="presenContents">
                    <h3>中間発表</h3>
                    <div class="slideBox">
                        <iframe class="slide" src="https://docs.google.com/presentation/d/e/2PACX-1vQiNJOBfL_ztIzyATln6YQoRX890XgfnPBp_CEP75fF0X6FmzSD1bJSBP8fckUSkgzsHytquYmQxhFj/embed?start=false&loop=true&delayms=10000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
                    </div>
                    <h3>最終発表</h3>
                    <div class="slideBox">
                        <iframe class="slide" src="https://docs.google.com/presentation/d/e/2PACX-1vQks8suF2tEdSh4J0rC7estkn_vJv4vuGJq5Nqj9gQQ_p-JV2atsVY2Wl0E8S1JKRr101FQN48BaTeN/embed?start=false&loop=false&delayms=10000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
#activity{
    background-color: #FFFFFF;
}

#activity .sectiontitle{
    color: #fff94e;
}

#activity::after{
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(../../assets/imgs/background/activitybg.png) top left / cover no-repeat;
    z-index: 0;
}

.activitywrap{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    max-width: 800px;
    height: 80vh;
    padding: 0 5% 0 5%;
    text-align: center;
    vertical-align: middle;
}

.activityhead{
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 80%;
    box-sizing: border-box;
    border-right: solid 2px #4EA1FF;
    padding: 10% 5% 10% 0;
    color: #4EA1FF;
}

.activitycontent{
    position: relative;
    box-sizing: border-box;
    width: 70%;
    height: 100%;
    border: solid 5px #4EA1FF;
    padding: 1%;
    z-index: 15;
}

.tumblr{
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 990;
}

.activitycontent::before, .activitycontent::after{
    content:'';
    position: absolute;
    display: block;
    background-color: #FFFFFF;
    z-index: 20;
}

.activitycontent::before{
    top: -5px;
    bottom: -5px;
    left: 30px;
    right: 30px;
}

.activitycontent::after{
    top: 30px;
    bottom: 30px;
    left: -5px;
    right: -5px;
}

.presenWrap{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}

.presenHead{
    width: 80%;
    box-sizing: border-box;
    border-bottom: solid 3px #4EA1FF;
    margin: 100px 0 50px 0;
    color: #4EA1FF;
    text-align: center;
}

.presenContents{
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}

.slideBox{
    position: relative;
    width: 100%;
    height: 100%;
    max-width: 960px;
    max-height: 569px;
    border: solid 5px #4EA1FF;
    padding: 1%;
    z-index: 15;
}

.slide{
    position: relative;
    width: 100%;
    z-index: 990;
}

.slideBox::before, .slideBox::after{
    content:'';
    position: absolute;
    display: block;
    background-color: #FFFFFF;
    z-index: 20;
}

.slideBox::before{
    top: -5px;
    bottom: -5px;
    left: 30px;
    right: 30px;
}

.slideBox::after{
    top: 30px;
    bottom: 30px;
    left: -5px;
    right: -5px;
}

@media screen and (max-width:768px) {
    .activitywrap{
        flex-direction: column;
        height: max-content;
        padding: 0;
    }

    .activityhead{
        justify-content: center;
        width: 100%;
        border-right: none;
        border-bottom: solid 2px #4EA1FF;
        padding: 5% 0 5% 0;
        margin: 0 10% 10% 10%
    }

    .activitycontent{
        width: 100%;
        height: 70vh;
    }

    .slide{
        height: 35vh;
    }

    .presenHead{
        width: 100%;
    }
}

</style>