<template>
  <div class="conteiner">
    <router-view/>
  </div>
</template>

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
    overflow: hidden;
}
</style>