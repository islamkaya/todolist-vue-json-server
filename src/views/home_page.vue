<template>
<navbar></navbar>

 
<div class="container cont_center position-absolute">
    <div class="dactilo_text text-white centerization mx-auto">Merhaba, todolist.'e hoşgeldin.</div>
</div>
</template>
<script>
import Navbar from '@/components/nav_bar.vue'
  export default {
    components: {
      Navbar
    },

  
}
</script>
<style >
 .cont_center {
  margin-left: 6%;
}
* {
  font-family: "Century Gothic", sans-serif;
}

@import url("https://fonts.googleapis.com/css?family=Exo:400,700");
@keyframes typing {
  from {
    width: 0;
  }
}
@keyframes blink-caret {
  50% {
    border-color: transparent;
  }
}

.dactilo_text {
  color: green;
  font: bold 111% Consolas, Monaco, monospace;
  border-right: 0.1em solid;
  width: 250em;
  width: 31ch; /* Ne kadar yazı yazacaksanız karakter sayacında sayıp buraya karakter sayısı kadar yazın. */
  margin: 2em 1em;
  white-space: nowrap;
  overflow: hidden;
  animation: typing 6s steps(200, end),
    /* # Adımlar = # Karakter Sayısı */ blink-caret 1s step-end infinite
      alternate;
    
}
.centerization {
    margin-top:40vh;
    
}

* {
  margin: 0px;
  padding: 0px;
}

body {
  font-family: "Exo", sans-serif;
}

.context {
  width: 100%;
  position: absolute;
  top: 50vh;
}

.context h1 {
  text-align: center;
  color: #fff;
  font-size: 50px;
}

.area {
  background: #4e54c8;
  background: -webkit-linear-gradient(to left, #8f94fb, #4e54c8);
  width: 100%;
  height: 100vh;
}

.circles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.circles li {
  position: absolute;
  display: block;
  list-style: none;
  width: 20px;
  height: 20px;
  background: rgba(255, 255, 255, 0.2);
  animation: animate 25s linear infinite;
  bottom: -150px;
}

.circles li:nth-child(1) {
  left: 25%;
  width: 80px;
  height: 80px;
  animation-delay: 0s;
}

.circles li:nth-child(2) {
  left: 10%;
  width: 20px;
  height: 20px;
  animation-delay: 2s;
  animation-duration: 12s;
}

.circles li:nth-child(3) {
  left: 70%;
  width: 20px;
  height: 20px;
  animation-delay: 4s;
}

.circles li:nth-child(4) {
  left: 40%;
  width: 60px;
  height: 60px;
  animation-delay: 0s;
  animation-duration: 18s;
}

.circles li:nth-child(5) {
  left: 65%;
  width: 20px;
  height: 20px;
  animation-delay: 0s;
}

.circles li:nth-child(6) {
  left: 75%;
  width: 110px;
  height: 110px;
  animation-delay: 3s;
}

.circles li:nth-child(7) {
  left: 35%;
  width: 150px;
  height: 150px;
  animation-delay: 7s;
}

.circles li:nth-child(8) {
  left: 50%;
  width: 25px;
  height: 25px;
  animation-delay: 15s;
  animation-duration: 45s;
}

.circles li:nth-child(9) {
  left: 20%;
  width: 15px;
  height: 15px;
  animation-delay: 2s;
  animation-duration: 35s;
}

.circles li:nth-child(10) {
  left: 85%;
  width: 150px;
  height: 150px;
  animation-delay: 0s;
  animation-duration: 11s;
}

@keyframes animate {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
    border-radius: 0;
  }

  100% {
    transform: translateY(-1000px) rotate(720deg);
    opacity: 0;
    border-radius: 50%;
  }
}
</style>
