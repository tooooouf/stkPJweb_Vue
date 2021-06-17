<template>
    <header>
        <div class="headercontent">
            <div class="headericon">
                <a href="#top"></a>
                <img src="@/assets/imgs/佐竹プロジェクトロゴver1.png" alt="">
            </div>
            <div class="desktopnav">
                <a href="#top">top</a>
                <a href="#about">about</a>
                <a href="#game">game</a>
                <a href="#member">member</a>
                <a href="#activity">activity</a>
            </div>
        </div>
    </header>
</template>

<style>
header {
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
    height: 100%;
    padding: 10px;
}

.headericon a {
    position: absolute;
    width: 100%;
    height: 100%;
}

.headericon img {
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