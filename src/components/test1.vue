<template>
  <div>
    <h1>{{ aaa }}</h1>
    <img src="../assets/images/xiaohuangren1.jpg" alt="小黄人" style="width: 300px; height: 450px"
    @click="toSWK">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "test1",
  data () {
    console.log('data执行')
    return {
      aaa: 'test1'
    }
  },
  methods: {
    toSWK () {
      this.$router.push({
        path: '/test1/999/swk1'
      })
    }
  },
  beforeCreate() {
    console.log('beforeCreate执行');
  },
  created() {
    console.log('created执行');
  },
  mounted() {
    console.log(this.$route);
  }
}
</script>

<style scoped>

</style>