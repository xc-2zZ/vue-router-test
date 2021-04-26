<template>
  <div>
    <div id="app">
      <el-header style="padding-top: 10px;text-align: center; font-size: 12px">
        <el-button type="primary" icon="el-icon-search">天</el-button>
      </el-header>

      <el-container style="border: 1px solid #eee;height: 100%">

        <el-aside style="text-align: left; background-color: rgb(238, 241, 246)">

              <el-menu
                  :default-active="onRoutes"
                  background-color="#292e41"
                  text-color="#fff"
                  class="el-menu-vertical-demo"
                  router>
                <el-submenu index="1">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>导航一</span>
                  </template>

                  <el-menu-item index="/test1/12">test1</el-menu-item>
                  <el-menu-item index="/test2">test2</el-menu-item>
                  <el-menu-item index="/test3">test3</el-menu-item>

                  <el-submenu index="1-4">
                    <template slot="title">text4</template>
                    <el-menu-item index="1-4-1">选项1</el-menu-item>
                  </el-submenu>
                </el-submenu>
                <el-submenu index="2">
                  <template slot="title">
                    <i class="el-icon-menu"></i>
                    <span>导航二</span>
                  </template>

                  <el-menu-item index="/test1/121">test1</el-menu-item>
                  <el-menu-item index="/test2?q=11">test2</el-menu-item>
                  <el-menu-item index="/test31">test3</el-menu-item>
                </el-submenu>
                <el-menu-item index="3" disabled>
                  <i class="el-icon-document"></i>
                  <span slot="title">导航三</span>
                </el-menu-item>
                <el-menu-item index="4">
                  <i class="el-icon-setting"></i>
                  <span slot="title">导航四</span>
                </el-menu-item>
              </el-menu>

        </el-aside>

        <el-container>

          <el-main>
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>

    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/test2.vue'
import {mapGetters} from 'vuex'
import router from "@/router";
// import {throttle, debounce} from './utils/index'

export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  data() {
    const item = {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    };
    return {
      inputVal: 'hahaha',
      tableData: Array(20).fill(item),
      router
    }
  },
  computed: {
    onRoutes () {
      return this.$route.path
    },
    count() {
      return this.$store.state.count
    }
    ,
    ...
        mapGetters(['doneTodos'])
  }
  ,
  methods: {
    changeAge() {
      this.$store.dispatch({
        type: 'changeAge',
        addAge: 500
      })
    },

    handeleScroll(e) {
      console.log(111);
      console.log(e)
    },
    inputChange(e) {
      console.log(2222);
      console.log(e);
    }

  },
  mounted() {

    // window.addEventListener('scroll', throttle(this.handeleScroll));
    // document.getElementById('input1').addEventListener('input', debounce(this.inputChange))
  },
  updated() {
    console.log(this.$route);

  }
}


</script>

<style>


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
  height: 100vh;
}

</style>
