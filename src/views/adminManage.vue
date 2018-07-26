<template>
  <div>
    <!-- 固定抬头 -->
    <el-row>
      <el-col :span='24'>
        <template>
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="全部福利" name="first">全部福利</el-tab-pane>
          <el-tab-pane label="我要推广本社福利" name="second">我要推广本社福利</el-tab-pane>
        </el-tabs>
      </template>
      </el-col>
    </el-row>
    <!-- 通用栏 -->
    <el-row>
      <el-col :span='24'>
      </el-col>
    </el-row>
    <!-- 列表 -->
    <el-row>
      <el-col :span='24'>
        <el-tabs type="border-card">
          <el-tab-pane label="用户管理">用户管理</el-tab-pane>
          <el-tab-pane label="配置管理">配置管理</el-tab-pane>
          <el-tab-pane label="角色管理">角色管理</el-tab-pane>
          <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeName: 'second',
      form: {
        date1: '',
        date2: ''
      },
      data1: '',
      data2: ''
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>
<style lang='stylus' scoped>

</style>
