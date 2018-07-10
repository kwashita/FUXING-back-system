<template>
<el-container>
  <el-aside width="230px" style="background-color: #263753">
    <navmenu></navmenu>
  </el-aside>
  <el-container>
    <el-header style='
      height: 80px;
      background-color: #ffffff;
      border-bottom: 1px solid #E7EBEC'
    >
      <navheaderfir></navheaderfir>
    </el-header>
    <el-header style='
      height: 40px;
      background-color: #F3F6FA;
      text-align: start;
      border-bottom: 1px solid #E7EBEC'
    >
      <currentlocation></currentlocation>
    </el-header>
    <el-main style='background-color: #F3F6FA;'>
      <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
</template>
<script>
import navmenu from '../components/NavMenu'
import navheaderfir from './NavHeaderFir'
import currentlocation from './CurrentLocation'
export default {
  components: {
    navmenu,
    navheaderfir,
    currentlocation
  }
}
</script>
<style lang='stylus' scoped>

.el-header:nth-child(1){
  position fixed;
  top: 0;
  left: 230px;
  width: 100%;
  z-index: 1;
}
.el-header:nth-child(2){
  position fixed;
  top: 80px;
  left: 230px;
  width: 100%;
  z-index: 1;
}
.el-main{
  margin-left: 230px;
  margin-top: 120px;

}
.el-aside{
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  overflow-y: scroll;
}
</style>
