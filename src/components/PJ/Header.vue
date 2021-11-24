<template>
    <header class="PJheader">
        <div class="headercontent">
            <div class="headericon">
                <a href="#" v-scroll-to="'#top'"></a>
                <img src="@/assets/imgs/佐竹プロジェクトロゴver1.png" alt="">
            </div>
            <div class="desktopnav">
                <a v-scroll-to="'#top'">top</a>
                <a v-scroll-to="'#about'">about</a>
                <a v-scroll-to="'#game'">game</a>
                <a v-scroll-to="'#member'">member</a>
                <a v-scroll-to="'#activity'">activity</a>
            </div>
        </div>
    </header>
</template>

<style>
.PJheader {
    position: fixed;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 70px;
    top: 0;
    left: 0;
    border-top: solid 5px #738838;
    z-index: 999;
}

.headercontent {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1280px;
    height: 100%;
    padding: 0 5px 0 5px;
}

.headericon {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    box-sizing: border-box;
    max-width: 100px;
    height: 100%;
    padding: 10px;
}

.headericon a {
    position: absolute;
    width: 100%;
    height: 100%;
}

.headericon img {
    width: unset;
    height: 100%;
}

.desktopnav{
    display: flex;
    flex-direction: row;
}

.desktopnav a {
    margin-right: 10px;
    color: #4B4B4B;
    font-size: 20px;
    text-decoration: none;
    cursor: pointer;
}

.desktopnav a::after{
    left: 0;
    bottom: 0;
    display: block;
    content: "";
    width: 0%;
    height: 2px;
    background: #4B4B4B;
    transition-duration: 0.3s;
}

.desktopnav a:hover::after{
    width: 100%;
}

@media screen and (max-width:768px) {
    .desktopnav{
        position: absolute;
        top: 0;
        right: 0;
        flex-direction: column;
        align-items: flex-end;
        line-height: 1.1;
    }
}

</style>