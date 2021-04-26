<template>
  <div>
    <el-table
        :data="tableData"
        border
        style="width: 100%"
        stripe>
      <el-table-column
          type="index"
          label="序号"
          width="50">
      </el-table-column>
      <el-table-column
          prop="name"
          label="姓名"
          width="180">
      </el-table-column>
      <el-table-column
          prop="age"
          label="年龄"
          sortable
          width="180">
      </el-table-column>
      <el-table-column
          prop="age1"
          label="年龄1"
          sortable
          width="180">
      </el-table-column>
      <el-table-column
          prop="weapon"
          label="武器"
          width="180">
      </el-table-column>
      <el-table-column label='操作'>
        <template>
          <el-button type='text' size='mini' icon="el-icon-edit">编辑</el-button>
          <el-button type='text' size='mini' icon="el-icon-delete">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "test3",
  data() {
    return {
      tableData: [
        {name: '孙悟空', age: 1111,age1: 32, weapon: '金箍棒'},
        {name: '猪八戒', age: 2222,age1: 322, weapon: '九齿钉耙'},
        {name: '沙和尚', age: 3333,age1: 132, weapon: '降妖宝杖'},
        {name: '沙和尚', age: 3333,age1: 232, weapon: '降妖宝杖'},
        {name: '沙和尚', age: 3333,age1: 432, weapon: '降妖宝杖'},
        {name: '沙和尚', age: 3333,age1: 352, weapon: '降妖宝杖'},
        {name: '沙和尚', age: 3333,age1: 332, weapon: '降妖宝杖'},
        {name: '沙和尚', age: 3333,age1: 321, weapon: '降妖宝杖'},
        {name: '沙和尚', age: 3333,age1: 232, weapon: '降妖宝杖'},
        {name: '沙和尚', age: 3333,age1: 56, weapon: '降妖宝杖'},
        {name: '沙和尚', age: 3333,age1: 372, weapon: '降妖宝杖'},
      ]
    }
  },
  mounted() {
    // window.onbeforeunload = function() {
    //   return "Are you really want to exit?";
    // }
  }
}
</script>

<style scoped>

</style>