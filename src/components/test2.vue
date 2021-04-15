<template>
  <div class="hello">
    <button @click="initEchart">点击</button>
    <h1>我是obj1</h1>
    <ul>
      <li>{{ obj1.name }}</li>
      <li>{{ obj1.age }}</li>
      <li>{{ obj1.gender }}</li>
    </ul>
    <div v-if="obj2">
      <h1>我是obj2</h1>
      <ul>
        <li>{{ obj2.name }}</li>
        <li>{{ obj2.age }}</li>
        <li>{{ obj2.gender }}</li>
      </ul>
    </div>
    <div id="echarts"></div>
  </div>
</template>

<script>
// import {cloneDeep} from 'lodash'
// import {cloneDeep} from 'lodash'
import * as echarts from 'echarts';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      obj1: {
        name: '孙悟空',
        age: '500',
        gender: '男'
      },
      obj2: null
    }
  },
  methods: {
    clone() {
      console.log(this)
      this.obj2 = this.obj1
      console.log(this.obj1 == this.obj2);
    },
    initEchart() {
      let myChart = echarts.init(document.getElementById('echarts'))
      myChart.setOption({
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          },
          {
            name: 'nn',
            type: 'pie',
            data: [2,4,10,28,55]
          }]
      })
    }
  },
  mounted() {
    console.log(this.$route);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#echarts {
  margin: auto;
  width: 500px;
  height: 300px;
}

h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
