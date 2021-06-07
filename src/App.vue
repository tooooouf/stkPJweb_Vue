<template>
  <Header/>
  <div class="container">
    <div class="boxcolumn">
      <Top/>
      <About/>
      <Game/>   
      <Member/>
      <Activity/>
    <Footer/>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
import Top from './components/Top'
import About from './components/About'
import Game from './components/Game'
import Member from './components/Member'
import Activity from './components/Activity'
import Footer from './components/Footer'
import jQuery from 'jquery'

export default {
  name: 'App',
  components: {
    Header,
    Top,
    About,
    Game,
    Member,
    Activity,
    Footer
  }
}

'use strict';

var $ = require('jquery');

function scrollanimation(){
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
  
      jQuery('.contents').not('.active').each(function(){
          var pos = $(this).offset().top;
  
          if (scroll > pos - windowHeight){
              $(this).addClass("active");
          }else{
              $(this).removeClass("active");
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
html {
    display: block;
    position: absolute;
    width: 100%;
    min-height: 100%;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
}

body {
    position: absolute;
    width: 100%;
    min-height: 100%;
    padding: 0;
    margin: 0;
    color: #4B4B4B;
    font-family: sans-serif;
}

#app{
  position: absolute;
  width: 100%;
  min-height: 100%;
  padding: 0;
  margin: 0;
}

.container {
    width: 100%;
}

.boxcolumn {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    scroll-snap-type: y mandatory;
}

section {
    width: 100%;
}

.box {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 100vh;
    scroll-snap-align: start;
}

.contents{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 900px;
    padding: 0 5% 0 5%;
    opacity: 0;
}

.contents.active{
    animation: fadein 1s ease-in-out forwards;
    animation-delay: 100ms;
}

.sectiontitle{
    font-size: 40px;
    margin-bottom: 50px;
    text-shadow: #4B4B4B 3px 3px;
}

.sentence{
    max-width: 600px;
    line-height: 2;
}

@keyframes fadein{
  0%{
    transform: translateY(50px);
    opacity: 0%;
  }
  100%{
    transform: translateY(0px);
    opacity: 100%;
  }
}
</style>
