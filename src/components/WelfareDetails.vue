<template>
  <el-row type='flex' justify='end'>
    <el-col :span='8'>
      <phone></phone>
    </el-col>
    <el-col :span='16'>
      <el-tabs type="border-card" class='welfare_details'>
        <el-tab-pane label="基础设置" class='tabs'>基础设置</el-tab-pane>
        <el-tab-pane label="高级设置" class='tabs'>高级设置</el-tab-pane>
        <el-tab-pane label="奖励设置" class='tabs'>奖励设置</el-tab-pane>
        <el-tab-pane label="福利详情" class='tabs'>
          <el-row>
            <el-col>
              <el-tabs v-model="activeName" @tab-click="handleClick" class='style'>
                <el-tab-pane label="默认样式" name="first">
                  <default-style></default-style>
                </el-tab-pane>
                <el-tab-pane label="自定义样式" name="second">自定义样式</el-tab-pane>
                <el-tab-pane label="秀米样式" name="third">秀米样式</el-tab-pane>
              </el-tabs>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="分享设置" class='tabs'>分享设置</el-tab-pane>
      </el-tabs>
    </el-col>
  </el-row>
</template>
<script>
import defaultstyle from '../components/DefaultStyle'
import phone from '../components/Phone'
export default {
  data () {
    return {
      activeName: 'second'
    }
  },
  components: {
    'default-style': defaultstyle,
    phone
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>
<style lang='stylus' scoped>
.style{
  height: 590px;
}
</style>
