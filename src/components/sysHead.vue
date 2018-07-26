<template>
<el-row>
  <div id='nav_header_fir'>
    <el-col :span='16.74'>
      <section>
        <div class="nav_header_info">
          <p>
            当前福币： 123500，当福币少于1000时，将暂停服务，请及时充值
            <recharge></recharge>
          </p>
          <p>官方咨询电话：8219-1111221</p>
        </div>
      </section>
    </el-col>
    <el-col :span='7.26'>
      <section class='nav_info'>
        <div>
          <img src="../assets/icons/top/message.png" alt="">
          私信</div>
        <div>
          <img src="../assets/icons/top/info.png" alt="">
          系统通知</div>
        <div>
          <img src="../assets/icons/top/account.png" alt="">
          账号设置</div>
        <div>
          <img src="../assets/icons/top/exit.png" alt="">
          退出</div>
      </section>
    </el-col>
  </div>
</el-row>
</template>
<script>
import recharge from '../views/Recharge'
export default {
  components: {
    recharge
  }
}
</script>
<style lang='stylus' scoped>
#nav_header_fir{
  text-align: start;
  section:nth-child(1){
    float: left;
    // width: 533px;
    height: 80px;
    .nav_header_info{
      height: 80px;
      // width: 553px;

      p:nth-child(1){
        font-size: 16px;
        height: 40px;
        line-height: 60px;
        color: #535353;
      }

      p:nth-child(2){
        font-size: 12px;
        color: #808080;
        height: 40px;
        line-height: 35px;
      }
    }
  }

  .nav_info{
    float: left;
    margin-left: 280px;
    height: 16px;
    font-size: 14px;
    line-height 80px;
    div{
      float left;
      margin-right: 30px;
      color: #535353;
      cursor pointer;
      &:hover{
        color: #650000;
      }
      img{
        vertical-align middle;
      }
    }
  }
}
</style>
