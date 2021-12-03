<template>
    <!--<Head>
        <title>佐竹プロジェクト2021</title>
        <meta property="og:url" content="https://www.ne.senshu-u.ac.jp/~proj2021-16">
        <meta property="og:title" content="佐竹プロジェクト2021">
        <meta property="og:description" content="専修大学 ネットワーク情報学部 ネットワーク情報学科 2021年度 佐竹プロジェクトの公式サイトです">
        <meta property="og:sitename" content="佐竹プロジェクト2021">
        <meta property="og:image" content="https://www.ne.senshu-u.ac.jp/~proj2021-16/img/佐竹プロジェクトロゴver1.042a5182.png">
    </Head>-->
    <div class="boxcolumn">
      <Header/>
      <Top/>
      <About/>
      <Game/>   
      <Member/>
      <Activity/>
      <Comingsoon/>
      <Footer/>
    </div>
</template>

<script>
//import { Head } from '@egoist/vue-head'
import Header from '@/components/PJ/Header.vue'
import Top from '@/components/PJ/Top.vue'
import About from '@/components/PJ/About.vue'
import Game from '@/components/PJ/Game.vue'
import Member from '@/components/PJ/Member.vue'
import Activity from '@/components/PJ/Activity.vue'
import Comingsoon from '@/components/PJ/Comingsoon.vue'
import Footer from '@/components/PJ/Footer.vue'
import jQuery from 'jquery'

export default {
  name: 'App',
  components: {
    //Head,
    Header,
    Top,
    About,
    Game,
    Member,
    Activity,
    Comingsoon,
    Footer
  },
}

'use strict';

var $ = require('jquery');

function scrollanimation(){
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
  
      jQuery('.contents').not('.active').each(function(){
          var pos = $(this).offset().top;
          var height = $(this).height();
            if (pos <= scroll + windowHeight && pos + height >= scroll) {
                $(this).addClass('active');
             
            }else{
                $(this).removeClass('active') ;
            }
      });
  }
  $(window).scroll(function (){
      scrollanimation();
  });
  $('body').on('touchmove', function() {
      scrollanimation();
  });

</script>

<style>

/*@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap');*/
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk&display=swap');

.boxcolumn {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    font-family: 'GenJyuuGothic', sans-serif;
}

section {
    width: 100%;
}

.box {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 100vh;
    padding-bottom: 50px;
    z-index: 100;
}

.box::before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-image: url(../assets/imgs/background/和紙.jpg);
    opacity: 0.15;
}

.contents{
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 1280px;
    padding: 0 5% 0 5%;
    opacity: 0;
    overflow: hidden;
    z-index: 997;
}

.contents.active{
    animation: fadein 1s ease-in-out forwards;
    animation-delay: 100ms;
}

.sectiontitle{
    font-size: 40px;
    margin: 50px 0 50px 0;
    font-family: 'Space Grotesk', sans-serif;
    text-shadow: #4B4B4B 3px 3px;
}

.sentence{
    max-width: 700px;
    margin-bottom: 50px;
    line-height: 3;
}

.underline{
  background: linear-gradient(transparent 70%, #ffff0080 70%);
}

.dividingLine{
  border-top: #ffffff solid 5px;
  border-radius: 3px;
  margin: 50px 0 50px 0;
  width: 100%;
  height: 0;
  max-width: 900px;
}

@keyframes fadein{
  0%{
    transform: translateY(50px);
    opacity: 0;
  }
  100%{
    transform: translateY(0px);
    opacity: 100;
  }
}
</style>
