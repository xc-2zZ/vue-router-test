<template>
  <div style="">
    <h1>我是孙悟空</h1>
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style="width: 100%;height: 500px">

        <rect xmlns="http://www.w3.org/2000/svg" width="300" height="100"
              style="fill:rgb(0,0,255);stroke-width:1; stroke:rgb(0,0,0)"/>


        <path xmlns="http://www.w3.org/2000/svg"
              d="M153 334 C153 334 151 334 151 334 C151 339 153 344 156 344 C164 344 171 339 171 334 C171 322 164 314 156 314 C142 314 131 322 131 334 C131 350 142 364 156 364 C175 364 191 350 191 334 C191 311 175 294 156 294 C131 294 111 311 111 334 C111 361 131 384 156 384 C186 384 211 361 211 334 C211 300 186 274 156 274"
              style="fill:white;stroke:red;stroke-width:2"/>


        <circle xmlns="http://www.w3.org/2000/svg" cx="100" cy="150" r="40" stroke="black" stroke-width="2" fill="red"/>

    </svg>
    <div class="container">
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "swk1"
}
</script>

<style scoped>
.container{
  width: 100%;
  height: 1000px;
  background: greenyellow;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
}
.container>div{
  width: 200px;
  height: 200px;
  background: lightpink;
}
</style>