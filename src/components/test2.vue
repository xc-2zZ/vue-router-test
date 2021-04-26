<template>
  <div class="hello">
    <button @click="initChart">点击创建图表</button>
    <button @click="increment">点击+10</button>
    <button @click="incrementAsync">点击1S后+3</button>
    <button @click="decrement">点击-5</button>
    <h1>{{count}}</h1>
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
  computed: {
    count () {
      return this.$store.state.count
    }
  },
  methods: {
    decrement() {
      this.$store.dispatch({
        type: 'decrement',
        num: 5
      })
    },
    increment() {
      this.$store.dispatch({
        type: 'increment',
        num: 10
      })
    },
    incrementAsync() {
      this.$store.dispatch({
        type: 'incrementAsync',
        num: 3
      })
    },
    initChart() {
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
            data: [2, 4, 10, 28, 55]
          }]
      })

    }
  },
  mounted() {
    // console.log(this.$store);
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
