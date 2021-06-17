<template>
    <section class="box" id="activity">
        <div class="contents">
            <h1 class="sectiontitle">activity</h1>
            <div class="activitywrap">
                <div class="activityhead">
                    <h2>Tumblr</h2>
                </div>
                <div class="activitycontent">
                    <iframe src="https://satakeproject-2021.tumblr.com/" frameborder="0"></iframe>
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
    top: 10%;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(../assets/imgs/background/activitybg.png);
    background-size: cover;
    background-repeat: no-repeat;
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
    border-right: solid 3px #4EA1FF;
    padding: 10% 5% 10% 0;
    color: #4EA1FF;
}

.activitycontent{
    position: relative;
    box-sizing: border-box;
    width: 55%;
    height: 100%;
    border: solid 5px #4EA1FF;
    padding: 1%;
    z-index: 15;
}

iframe{
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

@media screen and (max-width:768px) {
    .activitywrap{
        flex-direction: column;
        height: max-content;
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
        height: 60vh;
    }
}

</style>